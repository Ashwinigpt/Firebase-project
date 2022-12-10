import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [userData, setUserData] = useState({
        phoneNo: "",
        email: "",
        password: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const navigate = useNavigate();
    function handleClick(){
        navigate("/user");
    }

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
                alert("Data Stored");
            } else {
                alert("Please fill the data");
            }
        }
        else {
            alert("Please fill the data");
        }
    };

    return (
        <div>
            <form method='POST'>
                <input
                    name='phoneNo'
                    type="number"
                    placeholder='Phone No.'
                    value={userData.phoneNo}
                    onChange={postUserData} />
                <input
                    name='email'
                    type="email"
                    placeholder='Email'
                    value={userData.email}
                    onChange={postUserData} />
                <input
                    name='password'
                    type="password"
                    placeholder='Password'
                    value={userData.password}
                    onChange={postUserData} />
                <button 
                    onClick={() => {
                        submitData()
                        handleClick()
                    }}>Signup</button>
            </form>
        </div>
    )
}

export default Signup;