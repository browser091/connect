const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";

let initialState = {
    users: [
        {
            id: '1', name: 'Dmitri', location: {
                city: 'Minsk',
                country: 'Belarus'
            },
            status: 'i am good', img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png', follow: true
        },
        {
            id: 2, name: 'Pavel', location: {
                city: 'Brest',
                country: 'Belarus'
            },
            status: 'i am good', img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png', follow: false
        },
        {
            id: 3, name: 'Dmitri', location: {
                city: 'Vitebsk',
                country: 'Belarus'
            },
            status: 'i am good', img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png', follow: false
        }]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW:
            debugger
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            };

        case FOLLOW:
            debugger
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            };
            ;

        default:
            return state;
    }
};
export const followAC = (userId) => {
    return {type: UNFOLLOW,  userId};
};
export const unfollowAC = (userId) => {
    return {type: FOLLOW, userId};
};
export default userReducer;
