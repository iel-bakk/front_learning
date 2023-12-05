import { ClassNames } from '@emotion/react';
import React from 'react';
import { Channels } from './channels';



function Conversation(props : Channels) {
    console.log("testing ----> ", props);
    return (
        <div className='w-full h-full text-white'>
            {props.channelNames?.map((channel, index) => {
                return (
                    <div key={index}><span>{channel}</span></div>
                );
            })}
        </div>
    );
}

export default Conversation;