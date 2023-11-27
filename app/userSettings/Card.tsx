import React from "react";

function Card() {
    return (
        <div className="w-[20%] h-[30%] flex flex-col m-5 p-5 bg-[#30313E] items-center rounded-md">
            <div>
                <h3>title</h3>
            </div>
            <div className=" h-full w-full flex flex-col justify-between">
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
                    <div className="w-full h-full flex flex-row justify-between">
                        <p>username</p>
                        <button className="text-red-600">X</button>
                    </div>
            </div>
        </div>
    );
}


export default Card;