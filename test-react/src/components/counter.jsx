import { useState } from "react";
import { Decrement, Increment } from "./ui/icons";

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = (number) => setCount(count + number)
    const decrement = (number) => setCount(count - number)

    return (
        <div className="flex justify-center gap-4 mt-10 items-center">
            <button
                type="button"
                title="Decrement"
                className="bg-white hover:bg-[#1E1F25] hover:text-white transition-all duration-300 ease-in-out rounded px-5 py-2 font-bold"
                onClick={ () => decrement(1) }
            >
                <Decrement />
            </button>
            <h2 className="text-white w-10 text-center rounded font-extrabold">{count}</h2>
            <button
                type="button"
                title="Increment"
                className="bg-white hover:bg-[#1E1F25] hover:text-white transition-all duration-300 ease-in-out rounded px-5 py-2 font-bold"
                onClick={ () => increment(1) }
            >
                <Increment />
            </button>
        </div>
    )
}