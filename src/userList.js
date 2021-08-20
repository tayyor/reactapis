import React, {useState, useEffect} from 'react'
import axios from 'axios'



function UserList() {
    const [users, setUsers] = useState([])

    useEffect (() => {
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div className='main' >
            <ul className = 'users'>
                {users.map(user => <li key={user.Id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList