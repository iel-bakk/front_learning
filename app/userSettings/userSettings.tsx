'use client';
import Card from "./Card";
import React, { useEffect, useState } from 'react';

type userSettingsData = {
    user :      string;
    invitations : string[];
    friends     : string[];
    bandUsers   : string[];
};
 
function UserSettings() {
    const [data, setData] = useState<userSettingsData>({
        user: "",
        friends: [],
        bandUsers: [],
        invitations : []
    });
    
    const fetchInfo = () => { 
        return fetch("http://localhost:5000/Chat/userSettings", {
            method : "GET",
            credentials : 'include'
        }) 
                .then((res) => res.json()) 
                .then((d) => 
                {
                    setData(d.data)
                    console.log(d);
                }).catch((error) => {
                    console.error('Error:', error);
                })
        }
        
        useEffect(() => {
            fetchInfo();
            console.log(data?.friends);
        }, [data])
        
    return (
            <div className="h-full w-full flex flex-row items-center justify-around">
                <Card data={data?.friends} title="Friends" user={data?.user}/>
                <Card data={data?.bandUsers} title="BandUsers" user={data?.user}/>
                <Card data={data?.invitations} title="Invitations" user={data?.user}/>
            </div>
    );
}

export default UserSettings;