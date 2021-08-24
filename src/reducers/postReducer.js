import { SET_RECENT_POSTS } from "../actions/types";
import recentPosts from "../components/recentPosts";

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:

        return [... state, recentPosts: action.payload];
    
        default:
            return state;
    }
}