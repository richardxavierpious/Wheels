import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OwnerDetails({carDetails}) {

  const {user} = useUser();
  const navigation = useNavigate();

  const OnMessageOWnerClick=async ()=>{
    const ownerUserId = carDetails?.createdBy.split('@')[0];
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0];

    //Create User  id
    try{
      await Service.CreateSendBirdUser(userId, user?.fullName, user?.imageUrl)
      .then(resp=>{
        console.log(resp);
      })
    }catch(e){}

    //Create Owner Id
    try{
      await Service.CreateSendBirdUser(ownerUserId, carDetails?.userName, carDetails?.userImageUrl)
      .then(resp=>{
        console.log(resp);
      })
    }catch(e){}

    //Create Channel
    try{
      await Service.CreateSendBirdChannel([userId, ownerUserId], carDetails?.listingTitle)
      .then(resp=>{
        console.log(resp);
        console.log('Channel created');
        navigation('/profile');
      })
    }catch(e){}

  }

  return (
    <div className='p-5 border border-slate-300 mt-5 rounded-xl shadow-md'>
        <h2 className="font-medium mb-2 text-2xl">Owner</h2>
        <img src = {carDetails?.userImageUrl} className='w-[70px] h-[70px] object-cover rounded-full'/>
        <h2 className='mt-2 font-bold text-xl'>{carDetails?.userName}</h2>
        <h2 className='mt-2 text-gray-600'>{carDetails?.createdBy}</h2>
        <Button onClick={OnMessageOWnerClick} 
          className='w-full mt-5 bg-slate-100 text-slate-700'>
          Message Owner
        </Button>
    </div>
  )
}

export default OwnerDetails