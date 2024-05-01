import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()


    const handleAdd = () => {
        navigate("/add")
    }

    const handleFind = () => {
        navigate("/find")
    }

    return (
        <>
            <div className='wilingApp'>
                <h2>WILLING</h2>
                <button onClick={handleAdd} className='addWilling'>הוספת התנדבות </button>

                <button onClick={handleFind} className='findWilling'>מצא התנדבות </button>
            </div>

        </>
    )
}

export default LoginPage