import React, {useState} from 'react';

//classes
import classes from './Messages.css';

const Messages = (props) =>{

    const [state, setstate] = useState('conversation')

    const ShowOptions = (type) =>{
        props.changeShowOption(type)
        setstate(type);
    }

    return (

        <div className={classes.Messages}>
            <h3 className={classes.heading}>Menu</h3>


            <ul>
                <li className= {state === "conversation" ? (classes.List+" "+classes.Current) : (classes.List) } onClick={()=>ShowOptions("conversation")}>                 
                    <div className={classes.Option}>
                        Conversations
                    </div>
                </li>
                <li className={state === "setting" ? (classes.List+" "+classes.Current) : (classes.List) } onClick = {()=>ShowOptions("setting")}>
                    <div className={classes.Option}>
                        Settings
                    </div>
                </li>
                <li onClick={props.logoutHandler} className={classes.List}>
                    <div className={classes.Option}>
                        Logout
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Messages;