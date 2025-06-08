'use client'

import { useState } from "react"
// import { addUser } from "@/app/Redux/slice"
import { useDispatch } from "react-redux"
export const Sample = () => {
    const [first, setfirst] = useState("")
    const dispach = useDispatch()
    const userDispatch = () => {
        // dispach(addUser(first))
    }
    return (

        <div style={{ width: '400px', height: '400px', border: '1px solid red' }}>

            <input onChange={(e) => setfirst(e.target.value)} style={{ border: '2px double green' }} type="text" name="" id="" />

            <button onClick={userDispatch}>submit</button>
        </div>
    )
}
