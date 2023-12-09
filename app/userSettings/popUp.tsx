import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


type propsTocAdd = {
    endpoint : string | undefined;
    user : string;
};

export function PopupGfg(props: propsTocAdd) {
    function handleClick(endpoint: string | undefined, username: string) {
        if (!endpoint)
          return
        // Create an object with the username
        const bodyData = {
          username: username
        };
        // Send data to the backend via POST
        console.log(`http://localhost:5000/Chat/${props.endpoint}`);
        
        fetch(`http://localhost:5000/Chat/${props.endpoint}`, {  // Enter your IP address here
          method: 'POST', 
          mode: 'cors',
          credentials : 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData) // body data type must match "Content-Type" header
        })
      }
    return (
            <Popup className="h-full w-full flex flex-col" trigger={<button>+</button>} modal nested>
                    <input className=" bg-orange-500 text-xl border text-center border-orange-500" type="text"/>
                    <div className= " bg-black text-white w-[50%] text-center">
                        <input type="button" value="submit" onClick={() => handleClick(props.endpoint, props.user)} />
                    </div>
            </Popup>
    )
};