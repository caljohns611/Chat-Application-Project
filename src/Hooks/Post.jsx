import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import PostForm from '../Components/PostForm';

const GET_POSTS = gql`
    query {
        posts(userId: 'USER_ID) {
            id
            title
            body
            createdAt
        }
    }
`;

const DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }
`;

const Posts = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    const [deletePost] = useMutation(DELETE_POST);
    const [editingPosts, setEditingPost] = useState(null);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleDelete = (id) => {
        deletePost({ variables: { id } });
    };

    return (
        <div>
            <h2>Posts</h2>
            {data.posts.map((post) => (
                <div key={post.id} className='post'>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setEditingPost(post)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
            <PostForm post={editingPosts} />
        </div>
    );
};

export default Posts;