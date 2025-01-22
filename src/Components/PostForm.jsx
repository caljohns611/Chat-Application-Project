import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
            id
            title
            body
        }
    }
`;

const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
        updatePost(id: $id, title: $title, body: $body) {
            id
            title
            body
        }
    }
`;

const PostForm = ({ post }) => {
    const [title, setTitle] = useState(post ? post.title : '');
    const [body, setBody] = useState(post ? post.body : '');
    const [createPost] = useMutation(CREATE_POST);
    const [updatePost] = useMutation(UPDATE_POST);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post) {
            updatePost({ variables: { id: post.id, title, body } });
        } else {
            createPost({ variables: { title, body } });
        }
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='Content'
                required
            />
            <button type='submit'>{post ? 'Update Post' : 'Create Post'}</button>
        </form>
    );
};

export default PostForm;