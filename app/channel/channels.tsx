'use client';
import React, { useEffect, useState } from 'react';
import Conversation from './conversation';


type channelNames = {
   channelNames:string[],
};

 
function ChannelChat() {
    const [channelNames, setData] = useState<channelNames>();

     
    const fetchInfo = async () => { 
        return await fetch("http://localhost:4000/Chat/channel", {
            method : "GET",
            credentials : 'include'
        }) 
                .then((res) => res.json()) 
                .then((d) => 
                {
                    setData(d)
                    console.log("------> {" , d, "}");
                }).catch((error) => {
                    console.error('Error:', error);
                })
        }
        
        useEffect(() => {
            fetchInfo();
        }, [channelNames])

        // console.log("hhhhhhhh =====> :" , channelNames.channelNames);
        
    
    return (
            <div className="h-[80%] w-full flex flex-row items-center justify-around">
                <div className=' w-[30%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
                    <h3 className='p-4'>conversations</h3>
                    <Conversation channelNames={channelNames?.channelNames} />
                </div>
                <div className=' w-[60%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
                    <h3 className='p-4'>chat</h3>
                </div>
            </div>
    );
}

export default ChannelChat;