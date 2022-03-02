import {profileAPI} from "../components/api/api";

const ADD_POST_STATE = "ADD_POST_STATE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_PROFILE_STATUS = "GET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";
const DELETE_POST_STATE = 'DELETE_POST_STATE'
let initialState = {
    posts: [
        {
            id: 1,
            post: "ssc ssdew rtyty rf d cd",
            like: 8,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
        },
        {
            id: 2,
            post: "ssc ssdew ",
            like: 0,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
        },
        {
            id: 3,
            post: "ssc ssdew dcd d dc dc ddcrtyty rf d cd",
            like: 28,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
        },
    ],

    profile: null,
    profileStatus: "",
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_STATE:
            // let tempPost = {
            //    id: Date.now(),
            //    post: action.newPost,
            //    like: 28,
            //    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
            // };
            // debugger;

            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: Date.now(),
                        post: action.newPost,
                        like: 28,
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
                    },
                ],

                // newPostText: "",
            };
        // let stateCopy = { ...state };
        // stateCopy.posts = [...state.posts];
        // stateCopy.posts.push(tempPost);
        // stateCopy.newPostText = "";
        // return stateCopy;

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case GET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            };
        }
        case UPDATE_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            };
        }
        case DELETE_POST_STATE: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }
};
export const addPostStateActionCreator = (valuePost) => {
    return {type: ADD_POST_STATE, newPost: valuePost};
};
export const deletePostStateActionCreator = (postId) => {
    return {type: DELETE_POST_STATE, postId}
}
// export const updatePostActionCreator = (valueText) => {
//    return { type: UPDATE_POST, newText: valueText };
// };
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile};
};
export const getProfileStatus = (status) => {
    return {type: GET_PROFILE_STATUS, status: status};
};

export const updateProfileStatus = (status) => {
    // debugger;
    return {type: UPDATE_PROFILE_STATUS, status: status};
};

export const setPrfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileID(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId).then((data) => {
            dispatch(getProfileStatus(data));
            // console.log(data);
        });
    };
};

export const updateProfileStatusThunkCreator = (status) => {
    // debugger;
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then((data) => {
            if (data.resultCode === 0) dispatch(updateProfileStatus(status));
            // console.log(data);
        });
    };
};

export default profilePageReducer;
