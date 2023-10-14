import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./DummyData.css";

function Task4() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                setData(response.data.users);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    const renderTable = () => {
        return data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.image} alt="profile-pic" style={{ height: "50px", width: "50px", borderRadius: "50%" }} /></td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.domain}</td>
                <td>{item.ip}</td>
                <td>{item.university}</td>
            </tr>
        ));
    }

    return (
        <center>
            <div className='c'><b>Dummy data</b></div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </center>
    );
}

export default Task4;
