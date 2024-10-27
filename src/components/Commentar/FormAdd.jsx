import React, { useState } from "react";
import { showFormattedDate } from "../../Api/comment";

export default function FormAdd({ onAddItem }) {
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!username) return;

        const newComment = {
            id: +new Date(),
            username: username,
            body: body,
            imageUrl: "default.jpg", // Set default profile picture
            createdAt: new Date().toISOString() // Set the current date-time
        };
        onAddItem(newComment);

        setUsername("");
        setBody("");
    }

    return (
        <>
            <div className="mt-4 w-full h-80">
                <div className="w-full h-full p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-200 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-200 mb-1">
                                Comment
                            </label>
                            <textarea
                                id="comment"
                                placeholder="Write your comment"
                                className="w-full h-32 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded resize-none focus:outline-none focus:border-blue-500"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Add Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
