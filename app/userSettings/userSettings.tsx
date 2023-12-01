'use client';
import Card from "./Card";
import React, { useEffect, useState } from 'react';

type userSettingsData = {
    invitations : string[];
    friends     : string[];
    bandUsers   : string[];
};
 
function UserSettings() {
    const [data, setData] = useState<userSettingsData>({
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
                <Card data={data?.friends} title="Friends"/>
                <Card data={data?.bandUsers} title="BandUsers"/>
                <Card data={data?.invitations} title="Invitations"/>
            </div>
    );
}

export default UserSettings;