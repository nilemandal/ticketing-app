"use client";

import { start } from "repl";
import PriorityDisplay from "./PriorityDisplay";
import { useState } from "react";

const TicketForm = () => {
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    }
    const [formData, setFormData] = useState(startingTicketData);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

        } catch (error) {

        }
    }

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3> Create Your Ticket </h3>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required={true}
                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required={true}
                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                    rows={5}
                />
                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={formData.category} onChange={handleChange}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>

                <label htmlFor="priority">Priority</label>
                <div>
                    <input type="radio" id="priority-1" name="priority" value={1} defaultChecked={formData.priority == 1} />
                    <label htmlFor="priority-1">1</label>
                </div>
                <div>
                    <input type="radio" id="priority-2" name="priority" value={2} defaultChecked={formData.priority == 2} />
                    <label htmlFor="priority-2">2</label>
                </div>
                <div>
                    <input type="radio" id="priority-3" name="priority" value={3} defaultChecked={formData.priority == 3} />
                    <label htmlFor="priority-3">3</label>
                </div>
                <div>
                    <input type="radio" id="priority-4" name="priority" value={4} defaultChecked={formData.priority == 4} />
                    <label htmlFor="priority-4">4</label>
                </div>
                <div>
                    <input type="radio" id="priority-5" name="priority" value={5} defaultChecked={formData.priority == 5} />
                    <label htmlFor="priority-5">5</label>
                </div>

                <label htmlFor="progress">Progress:</label>
                <input
                    type="range"
                    id="progress"
                    name="progress"
                    min={0}
                    max={100}
                    value={formData.progress}
                    onChange={handleChange}
                />
                <label htmlFor="status">Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value="started">Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" value="Create Ticket" className="btn"/>
            </form>
        </div>
    )
}

export default TicketForm;