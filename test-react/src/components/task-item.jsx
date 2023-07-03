import PropTypes from 'prop-types'
import { toast } from 'react-hot-toast';

export const TaskItem = ({ task }) => {
    const handleComplete = async (event) => {
        event.preventDefault()

        await fetch(`http://localhost:8000/complete_task/${task.id}/`, {
            method: "POST",
        });

        toast.success("Tarea actualizada", {
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff",
            },
        });

        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (
        <div className="bg-white rounded mr-3 mb-3 flex justify-between items-center py-5 px-3">
            <div>
                <h3 className='font-bold'>{task.title}</h3>
                <p>{task.description}</p>
            </div>

            {
                task.completed ?
                <p>Completed ✅</p>
                :
                <button
                    className="bg-[#64DD17] font-bold text-white px-3 py-2"
                    onClick={handleComplete}
                >
                    Complete
                </button>
            }
        </div>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}