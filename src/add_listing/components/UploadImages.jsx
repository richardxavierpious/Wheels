import { storage } from './../../../configs/firebaseconfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema';
import { db } from './../../../configs';
import { eq } from 'drizzle-orm';

function UploadImages({triggerUploadImages, setLoader, carInfo, mode}) {

    const [selectedFileList, setSelectedFileList] = useState([]);
    const [EditCarImageList, setEditCarImageList] = useState([]);

    useEffect(()=>{
        if(mode=='edit'){
            setEditCarImageList([])
            console.log('check');
            carInfo.images?.forEach((image)=>{
                console.log('check2');
                setEditCarImageList(prev=>[...prev, image?.imageUrl])

            })
        }
    }, [carInfo])

    useEffect(()=>{
        if(triggerUploadImages)
            {
                UploadImageToServer();
            }
    }, [triggerUploadImages])

    const onFileSelected = (event)=> {
        const files = event.target.files;
        
        for(let i=0; i<files.length;i++)
        {
            const file = files[i];
            setSelectedFileList((prev)=>[...prev, file] );
        }

    }

    const onImageRemove = (image, index)=>{
        const result = selectedFileList.filter((item)=>item!=image);
        setSelectedFileList(result);
    }

    const onImageRemovefromDB = async (image, index)=>{
        const result = await db.delete(CarImages).where(eq(CarImages.id, carInfo?.images[index]?.id)).returning({id:CarImages.id});

        const imageList = EditCarImageList.filter(item=>item!=image);
        setEditCarImageList(imageList);
    }

    const UploadImageToServer=async()=>{
        setLoader(true);
        selectedFileList.forEach((file)=>{
            const fileName = Date.now()+'.jpeg';
            const storageRef = ref(storage, 'wheels-marketplace/'+fileName);
            const metaData = {
                contentType: 'image/jpeg'
            }
            uploadBytes(storageRef, file, metaData).then((n=snapShot)=>{
                console.log('Uploaded File');
            }).then(resp=>{
                getDownloadURL(storageRef).then(async(downloadUrl)=>{
                    console.log(downloadUrl);

                    await db.insert(CarImages).values({
                        imageUrl: downloadUrl,
                        CarListingId: triggerUploadImages
                    }) 
                })
            })
        setLoader(false);

        })
    }


  return (
    <div>

        <h2 className='font-medium text-xl my-5'>Upload Car Images</h2>
        <h2 className='font-medium text-sm my-5'>Do not remove all images!</h2>
        <div className='grid grid-cols2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

            {mode=='edit'&&
            EditCarImageList.map((image, index)=>(
            
                <div key={index}>
                    <IoIosCloseCircle className='absolute m-2 h-7 text-lg text-red-600'
                    onClick={()=>onImageRemovefromDB(image, index)}/>
                        <img src = {image} className='w-full h-[127px] object-cover rounded-xl' />
                    </div>                
            ))}

            {selectedFileList.map((image, index)=>(
                
                <div key={index}>
                    <IoIosCloseCircle className='absolute m-2 h-7 text-lg text-red-600'
                    onClick={()=>onImageRemove(image, index)}/>

                    <img src = {URL.createObjectURL(image)} className='w-full h-[127px] object-cover rounded-xl' />
                </div>
            ))}


            <label htmlFor='upload-images'>
                <div className='border rounded-xl border-dotted border-blue-800 bg-blue-100 p-12 cursor-pointer
                hover:shadow-md'> 
                    <h2 className='text-lg text-center'>+</h2>
                </div>
            </label>
            <input type="file" multiple={true} id='upload-images' className='opacity-0'
            onChange={onFileSelected}/>
            
        </div>
    </div>
  )
}

export default UploadImages