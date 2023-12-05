import Modal from "../components/modal"
import React from "react";

type CardData = {
    user : string;
    title : string;
    data : string[];
};

function Card(props : CardData) {

    function handleClick(endpoint: string | undefined, username: string) {
        if (!endpoint)
          return
        // Create an object with the username
        const bodyData = {
          username: username
        };
        // Send data to the backend via POST
        console.log(`http://localhost:4000/Chat/${endpoint}`);
        
        fetch(`http://localhost:4000/Chat/${endpoint}`, {  // Enter your IP address here
          method: 'POST', 
          mode: 'cors',
          credentials : 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData) // body data type must match "Content-Type" header
        })
      }
      let myMap = new Map<string, string>();
      myMap.set("BandUsers","unBanUser");
      myMap.set("Invitations","accepteInvite");
      myMap.set("Invitationsx","deleteInvite");
      myMap.set("Friends","removeFriend");
    return (
        <div className="w-[20%] h-[30%] flex flex-col m-5 p-5 bg-[#30313E] items-center rounded-md">
            <div className="w-[50%] flex flex-row justify-around">
                <h3>{props.title}</h3>
                {props.title != "Friends" && <Modal content="+" title={props.title}/>}
            </div>
            <div className=" w-[50%] h-[10%] grid items-center">
             {props?.data?.length && props?.data.map((user, index)=> {
                return (
                    <div key={index} className="flex flex-row justify-around">
                        {user && <p>{user}</p>} 
                        {props.title != "Invitations" && <button className="text-red-600" onClick={() => handleClick(myMap.get(props.title), user)}>X</button>}
                        {props.title == "Invitations" && <button className="text-red-600" onClick={() => handleClick(myMap.get(`${props.title}x`), user)}>X</button>}
                        {props.title == "Invitations" && <button className="text-red-600" onClick={() => handleClick(myMap.get(props.title), user)}>Y</button>}
                        
                    </div>
                    )
                })}
            </div>
        </div>
    );
}


export default Card;