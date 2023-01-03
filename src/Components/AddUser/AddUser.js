import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log(name, email);

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