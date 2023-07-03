import { TaskItem } from "./task-item"
import PropTypes from 'prop-types';

export const TaskList = ({ tasks }) => {
    return (
        <div className="flex flex-col gap-4 mt-5  overflow-scroll">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
}