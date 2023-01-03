import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const url = `http://localhost:5000/users/${id}`
    fetch(url).then(res => res.json()).then(data => setUser(data))
    return (
        <div>
            <h2>Update or Delete Users</h2>
            {id}
            {user?.name}

        </div>
    );
};

export default UpdateUser;