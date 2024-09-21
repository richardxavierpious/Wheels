import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import TextArea from './components/TextField'
import { Separator } from '@/components/ui/separator'
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { BiLoaderAlt } from "react-icons/bi"
import { toast, Toaster } from 'sonner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'



function AddListing() {

    const [formData, setFormData] = useState({});
    const [featuresData, setfeaturesData] = useState({});
    const [triggerUploadImages, setTriggerUploadImages] = useState(null);
    const [searchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const {user} = useUser();
    const [carInfo, setCarInfo] = useState([]);

    const mode = searchParams.get('mode');
    const recordId = searchParams.get('id');

    useEffect(()=>{
        if(mode=='edit')
        {
            GetListingDetail();
        }
    }, []);


    const GetListingDetail = async ()=>{
        const result=await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing?.id, CarImages?.CarListingId))
        .where(eq(CarListing.id, recordId))
        
        const resp = Service.FormatResult(result)
        setCarInfo(resp[0])
        setFormData(resp[0])
        setfeaturesData(resp[0]?.features)
    }




    const handleInputChange = (name, value)=>{
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
    }))

    console.log(formData);
    }


    const handleFeatureChange=(name, value)=>{
        setfeaturesData((prevData)=>({
            ...prevData,
            [name]:value
        }))

    console.log(featuresData);
    }


    const onSubmit=async (e)=>{
        setLoader(true);
        e.preventDefault();
        console.log(formData)
        toast('Please Wait..')

        if(mode=='edit'){
            const result=await db.update(CarListing).set({
                ...formData,
                features: featuresData,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                postedOn: moment().format('DD/MM/YYYY') 
            }).where(eq(CarListing.id, recordId)).returning({id: CarListing.id})
            navigate('/profile')    
            setLoader(false);
        }
        else{
        try{
            const result = await db.insert(CarListing).values({
                ...formData,
                features: featuresData,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
                userImageUrl: user?.imageUrl,
                postedOn: moment().format('DD/MM/YYYY')

            }).returning({id:CarListing.id});
        
            if(result){
                console.log("Data Saved")
                setTriggerUploadImages(result[0]?.id);
                setLoader(false);

            }
        }catch(e){
            console.log("Error", e)
        }}
    }

   

  return (
    <div>
        <Header/>

        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>

            <form className='p-10 border rounded-xl mt-10'>

                {/* Car Details */}
                <div>
                    <h2 className='font-medium text-xl mb-6 '>Car Details</h2>
                    <div className='grid md:grid-cols-2  sm:grid-cols-1 gap-5'>

                        {carDetails.carDetails.map((item, index)=>(
                            <div key={index}>
                                <label className='text-sm flex gap-2 items-center mb-2'>
                                    <IconField icon={item?.icon}/>
                                    {item?.label} {item.required&&<span className='text-red-700'>*</span>} 
                                </label>
                                {item.fieldType=='text'||item.fieldType=='number'
                                ?<InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                                :item.fieldType=="dropdown"
                                ?<DropdownField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                                :item.fieldType=="textarea"
                                ?<TextArea item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                                :null}
                            </div>   
                        ))}
                    </div>
                </div>

                <Separator className='mt-16'/>

                {/* Features */}
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {features.features.map((item, index)=>(
                            <div key={index} className='flex gap-2 items-center'>
                                <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name, value)}
                                    checked={featuresData?.[item.name]}/> 
                                    <h2 className='text-sm'>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                    
                <Separator className='mt-8'/>

                {/* Images */}
                <UploadImages triggerUploadImages={triggerUploadImages}
                carInfo={carInfo}
                mode={mode}
                setLoader={(v)=>{setLoader(v); navigate('/profile') }}
                />

                <div className='mt-10 flex justify-end'>
                    <Button type="button" 
                    disabled={loader}
                    onClick={(e)=>onSubmit(e)}>
                        {!loader?'Submit':<BiLoaderAlt className='animate-spin text-lg'/>}
                    </Button>
                </div>

            </form>

        </div>

        <Footer/>
    </div>
  )
}

export default AddListing