'use client';
import React, { useContext, useEffect, useState } from 'react';
import { WebsocketContext } from '../Contexts/socket';

type channelNames = {
 channelNames:string[],
 username : string
};

type channelMessages = {
 sender : string,
 content : string,
 channelName : string
}

function ChannelChat() {
  const socket = useContext(WebsocketContext);
 const [channelNames, setData] = useState<channelNames>();
 const [channelMessages, setChannelMessages] = useState<channelMessages>();
 const [messages, setMessages] = useState<channelMessages[]>([]);
 const [ChoosenChannel, SetChoosenChannel] = useState<string>("Channel Name");
 const [inputValue, setInputValue] = useState('');
  socket.on("channelMessage", res=>{
    setChannelMessages(res.data)
    console.log(res);
  })
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
     SetChoosenChannel(name);
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
     <div className='flex justify-center position-center'>
         <h1 className='text-orange-500 truncate'>CHAT IS LOADING ... THANKS FOR WAITING ...</h1>
     </div>)

 return (
    <div className="relative h-[80%] w-full flex flex-row md:flex-col items-center justify-around p-5">
    <div className=' w-[30%] h-full flex flex-col items-center rounded-lg border border-[#E58E27]'>
   <h3 className='p-4'>conversations</h3>
   <div className='w-full h-full text-white flex flex-col items-center overflow-y-auto scrollbar-hide'>
       {channelNames && channelNames?.channelNames.map((channel, index) => {
           return (
             <div className='w-full text-center bg-[#E58E27] p-2 rounded-lg m-2 border border-[#E58E27]' key={index} style={{cursor: 'pointer'}} onClick={() => handleClick(channel)}>{channel}</div>
           );
       })}
        </div>
    </div>

    <div className='overflow-hidden w-[60%]  h-full flex flex-col items-center rounded-lg border border-[#E58E27] relative'>
        <div className='w-full text-center border border-[#E58E27]'><h3 className='p-4'>{ChoosenChannel}</h3></div>
        <div className='w-full h-full flex flex-col overflow-y-auto scrollbar-hide'>
            {messages && messages.map((message, index) => (
                <div key={index} className="flex flex-row w-[50%] rounded-lg justify-around bg-[#323232] p-2 m-4">
                  <p>{message.sender} :</p>
                  <p>{message.content}</p>
                </div>
            ))}
        </div>
        <div className='absolute bottom-0 w-full flex-end rounded-lg border  border-black flex'>
        <input 
         className="w-full text-white rounded-lg border border-black bg-[#323232] p-4"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
       />
       <button 
 className="w-1/10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
 onClick={() => {
   const newMessage = {
     sender: channelNames.username, // replace 'Your Name' with the actual sender's name
     content: inputValue,
     channelName: ChoosenChannel,
   };
   setMessages((prevMessages) => [...prevMessages, newMessage]);
   socket.emit('channelMessage', newMessage);
 }}
>
 Send
</button>

       {/* <button 
         className="w-1/10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
         onClick={() => socket.emit('channelMessage', { content: inputValue, channelName : ChoosenChannel })}
       >
         Send
       </button> */}
        </div>
    </div>
   </div>
   
  );
}

export default ChannelChat;