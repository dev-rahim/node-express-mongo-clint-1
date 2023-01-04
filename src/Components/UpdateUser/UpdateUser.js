import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState()
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url).then(res => res.json()).then(data => setUser(data))
    }, [])

    const handleUpdateUser = e => {
        const processed = window.confirm('Are you really want to update?');
        if (processed) {
            const url = `http://localhost:5000/users/${id}`

            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Updated successfully')
                        setUser({})
                    }
                })
        }
        e.preventDefault()
    }

    const handleNameChanged = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: user?.email }
        setUser(updateUser)
    }
    const handleEmailChanged = e => {
        const updateEmail = e.target.value;
        const updateUser = { name: user?.name, email: updateEmail }
        setUser(updateUser)
    }

    return (
        <div>
            <h2>Update or Delete Users</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChanged} value={user?.name || ''} placeholder='User Name' />
                <input type="email" onChange={handleEmailChanged} value={user?.email || ''} name="" id="" placeholder='User Email' />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateUser;