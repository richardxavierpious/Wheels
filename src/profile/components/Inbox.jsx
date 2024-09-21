import React, { useEffect, useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';

function Inbox() {

    const {user} = useUser();
    const [userId, setUserID] = useState();

    useEffect(()=>{
        if(user){
            const id=(user.primaryEmailAddress?.emailAddress).split('@')[0];
            setUserID(userId);
        }
    }, [user])

  return (
    <div style={{ width:'90vw', height:'70vh' }} className='mt-5 border border-slate-200'>
        <SendBirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID} 
        userId={userId}
        nickname={user?.fullName}
        profileUrl={user?.imageUrl}
        allowProfileEdit={true}>

        </SendBirdProvider>

    </div>
  )
}

export default Inbox