import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_SINGLE_POST_SUCCESS,
    FETCH_SINGLE_POST_REQUEST,
    FETCH_SINGLE_POST_FAILURE
} from '../types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
        .get('http://localhost/crisis-portal/api/flight?_format=json')
        .then((res) => {
            const posts = res.data;
            dispatch(fetchPostsSuccess(posts));
        })
        .catch((err) => {
            console.log('Error fetch posts', err);
            dispatch(fetchPostsError(err.message));
        });
};

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    };
};

export const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    };
};

export const fetchSinglePost = (id) => (dispatch) => {
    dispatch(fetchSinglePostRequest());
    axios
        .get('http://localhost/crisis-portal/node/1?_format=json')
        .then((res) => {
            const posts = res.data;
            dispatch(fetchSinglePostSuccess(posts));
        })
        .catch((err) => {
            console.log('Error fetch posts', err);
            dispatch(fetchSinglePostError(err.message));
        });
};

export const fetchSinglePostRequest = () => {
    return {
        type: FETCH_SINGLE_POST_REQUEST
    };
};

export const fetchSinglePostSuccess = (posts) => {
    return {
        type: FETCH_SINGLE_POST_SUCCESS,
        payload: posts
    };
};

export const fetchSinglePostError = (error) => {
    return {
        type: FETCH_SINGLE_POST_FAILURE,
        payload: error
    };
};
