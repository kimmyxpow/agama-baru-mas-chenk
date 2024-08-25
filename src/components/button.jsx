import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button className='bg-zinc-800 py-3 px-6 rounded-full text-white' {...props}>
            {children}
        </button>
    )
}

export default Button
