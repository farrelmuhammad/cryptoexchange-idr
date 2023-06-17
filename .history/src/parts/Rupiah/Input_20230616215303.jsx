import React from 'react'

const Input = () => {
    return (
        <>
            <div className="min-w-screen min-h-screen flex items-center justify-center items-stretch py-8">
                <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg shadow-md">
                    <div className="w-full mb-10">
                        <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input