import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('user deleted successfully')
                    const remainingUser = users.filter(user => user._id !== id)
                    setUsers(remainingUser);
                }
            })
    }

    return (
        <div>
            <h2>There are {users.length} Users</h2>
            <ol>
                {
                    users.map(user =>
                        <li key={user._id}>Name: {user.name} || Email:  {user.email}||
                            <Link to={`/users/update/${user._id}`}>
                                <button>Update</button>
                            </Link>
                            <button onClick={() => handleDeleteUser(user._id)}>X</button>
                        </li>)
                }
            </ol>
        </div>
    );
};

export default Users;