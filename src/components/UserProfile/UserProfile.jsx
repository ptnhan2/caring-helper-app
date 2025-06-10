import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import api from "../../services/axiosConfig";
const UserProfile = () => {
    const [user, setUser] = useState({});
    const fetchData = async () => {
        const response = await api.get("users/1");
        const data = await response.data;
        console.log(data);
        setUser(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
 
    return (
        <div>
            <h1>User Profile</h1>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Website: {user.website}</div>
            <div>Address: 
                {
                    user.address ? Object.entries(user.address).map(([key, value]) => (
                        key === "geo" ? Object.entries(value).map(([key, value]) => <div key={key}>{value}</div>) : <div key={key}>{value}</div>
                    )) : "No address"
                }   
            </div>
            {/* <div>{user.company}</div> */}
        </div>
    );
};
export default UserProfile;
