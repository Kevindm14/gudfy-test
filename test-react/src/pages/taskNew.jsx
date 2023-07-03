import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export const TaskNew = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        const response = await fetch(`http://localhost:8000/add_task/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        if (!response.ok) {
            toast.error(responseData.message, {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
            return;
        }

        toast.success("Nueva tarea añadida", {
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff",
            },
        });

        navigate("/tasks");
    });

    return (
        <div>
            <h1 className='text-white font-extrabold text-3xl uppercase text-center mb-10'>Task New</h1>

            <form onSubmit={onSubmit} className="bg-white px-10 py-5 rounded-md flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        className='border-2 border-gray-300 p-2 rounded-md mt-3 outline-none'
                        id="title"
                        placeholder="Title"
                    />

                    {errors.title && <span className='text-red-400 text-sm mt-2'>Este campo es requerido</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        id="description"
                        className='border-2 border-gray-300 p-2 rounded-md mt-3 outline-none w-[400px] h-[150px]'
                    />

                    {errors.description && <span className='text-red-400 text-sm mt-2'>Este campo es requerido</span>}
                </div>

                <div className="flex gap-3">
                    <button className="bg-[#64DD17] text-white font-bold w-1/2 py-2">Guardar</button>
                    <button type="button" className="bg-[#1E1F25] text-white font-bold w-1/2 py-2">Cancelar</button>
                </div>
            </form>
        </div>
    )
}