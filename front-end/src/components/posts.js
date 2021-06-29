import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

function Posts() {
    const postData = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    

    if(!!postData.newPost) {
        console.log(postData.newPost, Object.keys(postData.newPost).length)
        if(postData.newPost)
        postData.items.unshift(postData.newPost)
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const imageURL = (imageLink) => {
        const regex = /(http|https)[\w:/\.\-]+/;
        return imageLink.match(regex)[0];
    }

    return postData.loading ? (
        <h2>Loading posts</h2>
    ) : postData.loading ? (
        <h2>Error {postData.error}</h2>
    ) : (
        <div>
            <h1>this should display a post</h1>
            {postData &&
                postData.items.map((post) => (
                    console.log(post)
                    // <div key={ post.id }>
                    //     <h2 dangerouslySetInnerHTML={ {__html: post.title} } />
                    //     <p dangerouslySetInnerHTML={{__html: post.body}} />
                    //     <img src={ imageURL(post?.field_feature_image) } alt="" width='100px' /> 
                    // </div>

                ))}
        </div>
    );
}

export default Posts;
