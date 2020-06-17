import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = async(postId, setComments) => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
}

export default ({ postId }) => {
    const [comments, setCommets] = useState([]);

    useEffect(() => {
        fetchData(postId, setCommets);
    }, [postId]);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    );
}