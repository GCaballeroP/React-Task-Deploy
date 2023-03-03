import React from 'react';
import { useState,useContext} from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')

        };
        
        
    return (
        
            <div className='max-w-md mx-auto'>
                <form onSubmit={handleSubmit} className='bg-emerald-200 p-10 mb-4'>
                    <h1 className='text-2xl font-bold text-gray-400  mb-3'>Add task</h1>
                    <input 
                    className='bg-white-100 p-3 w-full mb-2'
                    placeholder='Write your task'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    />
                    <textarea 
                    className='bg-white p-3 w-full mb-2'
                    placeholder='Write description of your task'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    />
                    <button className='bg-slate-400 px-3 py-1 text-white rounded-sm'>Save</button>

                </form>
            </div>
        
    );
}

export default TaskForm;
