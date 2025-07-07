import React, { useEffect, useState } from 'react'

const UserCard = () => {
    const [user, setUsers] = useState('')

const getUser = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
        setUsers(resp.data)
        console.log(response)
    }).catch(err => {
        console.error("error:",err)
    })
}

useEffect(()=> {
    getUser()
},[])


  return (
    <>
    <div>UserCard</div>
    <h1>Username</h1>
    <h2>Email</h2>
    </>
  )
}

export default UserCard