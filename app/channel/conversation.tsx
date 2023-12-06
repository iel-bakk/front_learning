import React from 'react';

interface ConversationProps {
 channelNames: string[] | undefined;
}

function Conversation(props: ConversationProps) {
    if (!props.channelNames) {
        return <div>Loading...</div>;
    }
    console.log("test : ", props.channelNames);
    
    return (
      <div className='w-full h-full text-white flex flex-col items-center'>
          {props?.channelNames.map((channel, index) => {
          return (
              <div key={index}><span><p>{channel}</p></span></div>
          );
          })}
      </div>
  );
}

export default Conversation;
