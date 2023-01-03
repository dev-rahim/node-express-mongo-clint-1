import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = JSON.stringify({ name, email })
        console.log();

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: newUser,
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Insert SuccessFul')
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add an User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder='User Name' />
                <input type="email" ref={emailRef} name="" id="" placeholder='User Email' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;