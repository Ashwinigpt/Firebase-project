import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        phoneNo: "",
        email: "",
        password: "",
    });

    const postUserData = ({target}) => {
        const {name, value} = target;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { phoneNo, email, password } = userData;

        if (phoneNo && email && password) {
            const res = await fetch(
                "https://reactfirebaseproject-906fb-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phoneNo,
                        email,
                        password,
                    }),
                }
            );
            if (res) {
                setUserData({
                    phoneNo: "",
                    email: "",
                    password: "",
                });
                navigate("/user");
            } else {
                alert("Please fill the data");
            }
        }
        else {
            alert("Please fill the data");
        }
    };

    return (
        <div className='form'>
            <h1>Signup page</h1>
            <div>
                <input
                    name='phoneNo'
                    type="number"
                    placeholder='Phone No.'
                    value={userData.phoneNo}
                    onChange={(e) => postUserData(e)} />
                <input
                    name='email'
                    type="email"
                    placeholder='Email'
                    value={userData.email}
                    onChange={(e) => postUserData(e)} />
                <input
                    name='password'
                    type="password"
                    placeholder='Password'
                    value={userData.password}
                    onChange={(e) => postUserData(e)} />
                <button 
                    className='btn-sign'
                    
                    onClick={(e) => {
                        submitData(e)
                        
                    }}
                    >Signup</button>
            </div>
        </div>
    )
}

export default Signup;