'use client';
import Card from "./Card";
import React, { useEffect, useState } from 'react';

type userSettingsData = {
    invitations : string[];
    friends     : string[];
    bandUsers   : string[];
};
 
function UserSettings() {
    const [data, setData] = useState<userSettingsData>();
    
    const fetchInfo = () => { 
        return fetch("http://localhost:5000/Chat/userSettings", {
            method : "GET",
            credentials : 'include'
        }) 
                .then((res) => res.json()) 
                .then((d) => 
                {
                    setData(d)
                    console.log(d);
                }).catch((error) => {
                    console.error('Error:', error);
                })
        }
        
        useEffect(() => {
            fetchInfo();
        }, [])
    return (
            <div className="h-full w-full flex flex-row items-center justify-around">
                <Card/>
                <Card/>
                <Card/>
            </div>
    );
}

export default UserSettings;