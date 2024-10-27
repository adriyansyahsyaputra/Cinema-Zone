import React, { useState, useEffect } from "react";
import FormAdd from "./FormAdd";
import { getDataComment, showFormattedDate } from "../../Api/comment";

export default function BodyComment() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const data = getDataComment();
        setComments(data);
    }, []);

    function handleAddData(data) {
        setComments([...comments, data]);
    }

    return (
        <>
            <div className="container mt-20">
                <h1 className="text-white font-inter text-xl font-semibold">Add Comment</h1>
                <FormAdd onAddItem={handleAddData} />
                {/* Comment Section */}
                <div className="w-full h-80 font-roboto overflow-y-auto mt-12 md:grid md:grid-cols-2">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div
                                className="max-w-md md:w-full max-h-min mx-auto mb-4 bg-gray-800 p-4 rounded-lg shadow-md flex items-start space-x-4"
                                key={comment.id}
                            >
                                {/* Profile Picture */}
                                <img
                                    src={`/img/users/${comment.imageUrl ? comment.imageUrl : comment.image}`}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    {/* Username */}
                                    <h3 className="text-white text-base font-semibold">{comment.username}</h3>
                                    <p className="text-gray-400 text-xs">{showFormattedDate(comment.createdAt)}</p>
                                    {/* User Comment */}
                                    <p className="text-gray-300 mt-1 text-sm">“{comment.body}”</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center col-span-full">No Comment Here</p>
                    )}
                </div>
            </div>
        </>
    );
}
