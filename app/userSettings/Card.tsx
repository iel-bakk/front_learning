import React from "react";

type CardData = {
    title : string;
    data : string[];
};

function Card(props : CardData) {
    return (
        <div className="w-[20%] h-[30%] flex flex-col m-5 p-5 bg-[#30313E] items-center rounded-md">
            <div>
                <h3>{props.title}</h3>
            </div>
            <div className=" h-full w-full flex flex-col justify-between">
             {props.data.map((user)=> {
                return (
                    <div className="w-full flex flex-row justify-between">
                        <p>{user}</p>
                        <button className="text-red-600">X</button>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}


export default Card;