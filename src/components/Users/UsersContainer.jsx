import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../state/userReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        follow:(userId)=>dispatch(followAC(userId)),
        unfollow:(userId)=>dispatch(unfollowAC(userId))
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)