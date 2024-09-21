import React, { useEffect, useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function Inbox() {

    const {user} = useUser();
    const [userId, setUserID] = useState();
    const [channelUrl, setChannelUrl] = useState();

    useEffect(()=>{
        if(user){
            const id=(user.primaryEmailAddress?.emailAddress).split('@')[0];
            setUserID(userId);
        }
    }, [user])

  return (
    <div style={{ width:'100%', height:'70vh' }} className='mt-5 border border-slate-200'>
        <SendBirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID} 
        userId={userId}
        nickname={user?.fullName}
        profileUrl={user?.imageUrl}
        allowProfileEdit={true}>

        <div className='grid grid:cols-1 grid-cols-3 h-full'>
          <div>
            
          {/* Channel List */}
          <GroupChannelList 
          onChannelSelect={(channel)=>{
            setChannelUrl(channel?.url)
          }} 
          channelListQueryParams={
            {
              includeEmpty: true
            }
          }/>

          </div>
          <div className='md:col-span-2'>

             {/* Channel List */}
             <GroupChannel channelUrl={channelUrl} />

          </div>
        </div>

        </SendBirdProvider>

    </div>
  )
}

export default Inbox