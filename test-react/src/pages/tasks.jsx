import { useEffect, useState } from "react"
import { TaskList } from "../components/task-list"
import { NavLink } from "react-router-dom"

export const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:8000/tasks')
            const data = await response.json()

            setTasks(data.tasks)
        }

        fetchTasks()
    }, [])

    return (
        <div className="flex flex-col w-[500px] h-[400px]">
            <div className="flex justify-between items-center">
                <h1 className="f font-extrabold text-white text-2xl">Tasks</h1>
                <NavLink className="bg-white px-4 py-2 rounded-md font-bold border-none hover:bg-[#1E1F25] hover:text-white transition-all duration-300 ease-in-out" to="/tasks/new">New Task</NavLink>
            </div>

            <TaskList tasks={tasks} />
        </div>
    )
}