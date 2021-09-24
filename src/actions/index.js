import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
    return function (dispatch) {
        axios
            .get("http://api.dailysmarty.com/posts")
            .then((response) => {
                console.log("axios response", response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts,
                });
            })
            .catch((error) => {
                console.log("error in index.js fetchRecentPosts", error);
            });
    };
}

export function fetchPostsWithQuery(query) {
    return function (dispatch) {
        axios
            .get(`https://api.dailysmarty.com/search?q=${query}`)
            .then((response) => {
                console.log("axios response", response.data.posts);
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: response.data.posts,
                });
            })
            .catch((error) => {
                console.log("error in index.js fetchPostsWithQuery", error);
            });
    };
}
