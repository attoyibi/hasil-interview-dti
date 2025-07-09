'use client'

import { useEffect, useState } from "react"

const callData = async (setData)=> {
    const url = `https://jsonplaceholder.typicode.com/users`
    const response = await fetch(url, {
        method: 'GET',
    })

    setData = await response.json()

}

const Page = () => {
    const [dataUser, setDataUser] = useState([])
    useEffect (  ()=> {
    callData(setDataUser)

    console.log(dataUser)

    },[])


    const renderData = () => {
        return (
            <div className="">
                <p>{}</p>
            </div>
        )
    }

    return (
        <div className="flex ">
            <div>
                <h1>Halo</h1>
                <p>Untuk menampilkan user silahkan klik tombol di bawah</p>
                <button>Tampilkan User</button>
            </div>

        </div>
    )
}

export default Page