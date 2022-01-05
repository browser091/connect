import React from "react";
import style from './Users.module.css'

const Users = (props) => {
    // debugger
    return (
        <>
            {props.users.map(user => {
                return (<div key={user.id}>
                        <div>{user.name}</div>
                        <div><img className={style.avatar} src={user.img}/></div>
                        <div>{user.status}</div>
                        <div>{user.location.country}, {user.location.city}</div>
                        {user.follow ? <button onClick={() => { console.log('ee')
                            props.unfollow(user.id)
                            debugger
                        }
                        }>Follow</button> : <button onClick={()=>{props.follow(user.id)}}>Unfollow</button>}
                    </div>
                )
            })}

        </>
    )
}
export default Users