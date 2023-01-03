import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>There are {users.length} Users</h2>
            <ol>
                {
                    users.map(user =>
                        <li>Name: {user.name} || Email:  {user.email}||
                            <Link to={`/users/update/${user._id}`}>
                                <button>Update</button>
                            </Link>
                            <button>X</button>
                        </li>)
                }
            </ol>
        </div>
    );
};

export default Users;