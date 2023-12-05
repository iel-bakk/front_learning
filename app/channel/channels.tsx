'use client';
import React, { useEffect, useState } from 'react';
import Conversation from './conversation';


export type Channels = {
    channelNames : string[];
};

type channelsData = {
    user :      string;
    invitations : string[];
    friends     : string[];
    bandUsers   : string[];
};
 
function ChannelChat() {
    const [data, setData] = useState<Channels>({
        channelNames : []
    });
    
    const fetchInfo = async () => { 
        return await fetch("http://localhost:4000/Chat/channel", {
            method : "GET",
            credentials : 'include'
        }) 
                .then((res) => res.json()) 
                .then((d) => 
                {
                    setData(d.data)
                    console.log("------> {" , d, "}");
                }).catch((error) => {
                    console.error('Error:', error);
                })
        }
        
        useEffect(() => {
            fetchInfo();
        }, [data])
        
        // console.log("data checking ===> ", data.channelNames);
    
    return (
            <div className="h-[80%] w-full flex flex-row items-center justify-around">
                <div className=' w-[30%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
                    <h3 className='p-4'>conversations</h3>
                   <Conversation channelNames={data?.channelNames}/>
                </div>
                <div className=' w-[60%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
                    <h3 className='p-4'>chat</h3>
                </div>
            </div>
    );
}

export default ChannelChat;