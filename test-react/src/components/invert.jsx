import { useState } from "react"

export const Invert = () => {
    const [input, setInput] = useState("")

    const invertString = () => {
        let str = input.split(" ").reverse().join(" ")
        setInput(str)
    }

    return (
        <div>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className='p-2 rounded-l-md mt-3 outline-none'
                    value={input}
                    placeholder="Ingresa un texto"
                />
                <button
                    onClick={invertString}
                    className="bg-[#1E1F25] p-2 rounded-r-md text-white font-bold"
                >
                    GO
                </button>
            </div>

            <p className="bg-white mt-5 text-center py-2 border-none rounded-md">
                {input.length > 0 ? input : "No string to invert"}
            </p>
        </div>
    )
}