import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserCard = () => {
    const [users, setUsers] = useState([])

const getUser = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response.data)
        setUsers(response.data)
    }).catch(err => {
        console.error("error:",err)
    })
}

useEffect(()=> {
    
},[])

const handleView = () => {
    getUser()
}


  return (
    <>
    <div className="container">
        <div className="left-column">
            <h1>Halo</h1>
            <h3>Untuk tahu user klik tombol di bawah ini</h3>
            <button onClick={handleView}>View User</button>
        </div>
         <div className="right-column">
                {
                    users.map((user, id) => {
                        return (
                            <div key={id} className="card">
                                <h1>{user.username}</h1>
                                <h2>{user.email}</h2>
                            </div>
                        )
                    })
                }
        </div>
    </div>
    </>
  )
}

export default UserCard