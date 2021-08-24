import { SET_RECENT_POSTS } from "./types";

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
                console.log("error in index.js axios", error);
            });
    };
}
