import React from 'react';

// import Logout from './Logout/Logout';
import Messages from './Messages/Messages';
// import Settingss from './Settingss/Settingss';
import UserProfile from './UserProfile/UserProfile';

//classes
import classes from "./Profile.css";

const Profile = (props) =>{

    // console.log(props.userData)
    const changeShowOptionHandler = (type) => {
        props.ChangeShowOption(type)
    }

    return (
        <div className={classes.Profile}>
            {/* <Logout/>
            <Settingss/> */}

            <div className={classes.Name}>Chatting_app</div>
            
            <hr></hr>
            <UserProfile userData={props.userData}/>
            <hr></hr>
            <Messages logoutHandler={props.logoutHandler} changeShowOption={changeShowOptionHandler}/>
            
        </div>
    )
}

export default Profile;