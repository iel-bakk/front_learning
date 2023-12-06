'use client';
import React, { useEffect, useState } from 'react';

type channelNames = {
 channelNames:string[],
};

type channelMessages = {
 sender : string,
 content : string[],
 channelName : string
}

function ChannelChat() {
 const [channelNames, setData] = useState<channelNames>();
 const [messages, setMessages] = useState<channelMessages[]>([]);

 async function handleClick(name: string) {
     console.log(`http://localhost:4000/Chat/channel`);
     let response = await fetch(`http://localhost:4000/Chat/channel`, {
         method: 'POST', 
         mode: 'cors',
         credentials : 'include',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({"_channel" : name})
     })
     const data = await response.json();
     setMessages(data);
     console.log("message : ====> ", data);
 }

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
     }, [])


 if (!channelNames?.channelNames)
     return (
     <div className='flex justify-center'>
         <h1 className='text-orange-500 truncate'>CHAT IS LOADING ... THANKS FOR WAITING ...</h1>
     </div>)

 return (
     <div className="h-[80%] w-full flex flex-row items-center justify-around">
         <div className=' w-[30%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
             <h3 className='p-4'>conversations</h3>
             <div className='w-full h-full text-white flex flex-col items-center'>
               {channelNames && channelNames?.channelNames.map((channel, index) => {
               return (
                <div className='bg-grey-100' key={index} style={{cursor: 'pointer'}} onClick={() => handleClick(channel)}>{channel}</div>
                //   <div className='bg-grey-100' key={index}><span onClick={() => handleClick(channel)} style={{pointerEvents: 'auto'}}>{channel}</span></div>
               );})}
             </div>
         </div>
         <div className=' w-[60%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
             <h3 className='p-4'>CHANNEL MESSAGES</h3>
             {messages && messages.map((message, index) => (
                <div key={index} className="flex flex-row justify-around">
                <p>{message.sender}</p>
                <p>{message.content}</p>
                </div>
             ))}
         </div>
     </div>
 );
}

export default ChannelChat;