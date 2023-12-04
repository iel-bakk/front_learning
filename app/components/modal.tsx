import React, { useRef, useState } from "react";

type ModalType = {
    content : string;
    title : string;
};
                {/* <button className="text-red-600 text-xl" onClick={() => handleClick(`${myMap.get(props.title)}+`, props.user)}>+</button> */}

const Modal = (props: ModalType) => {
    const [showModal, setShowModal] = useState(false);
    
    const inputRef = useRef(null);
    function handleClick(endpoint: string | undefined) {
        setShowModal(false);
        if (!endpoint)
          return
        const bodyData  = {
            username : "abigeddi"
        }
        console.log(`http://localhost:5000/Chat/${endpoint}`);
        
        fetch(`http://localhost:5000/Chat/${endpoint}`, {  // Enter your IP address here
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
      myMap.set("BandUsers","BanUser");
      myMap.set("Invitations","invite");
  return (
    <>
      <button
        className="bg-[#30313E] text-white active:bg-[#30313E]
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {props.content}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#30313E] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <label>Username</label>
                    <input type="text" ref={inputRef} className="gb-gray-500 text-black"/>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2"
                      type="button"
                      onClick={() => {
                        handleClick(myMap.get(props.title));
                      }}>
                      Submit
                    </button>
                  {/* <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2"
                    type="button"
                    onClick={() => setShowModal(false) }
                  >
                    Submit
                  </button> */}
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {setShowModal(false)
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;