import React, { useEffect, useState } from 'react';
import '../content_profil.css'

const ProfileStatusHook =(props)=>{



let [editMode,setEditMade]=useState(false);
let [status,setStatus]=useState(props.status);

useEffect(()=>{
    setStatus(props.status)
},[props.status]); 

const onStatusChange=(e)=>{
setStatus(e.currentTarget.value)
}

const activateMode=()=>{
setEditMade(true)
}
const deactivateEditMode=()=>{
    setEditMade(false);
    props.updateStatus(status);
}

// let stateWithSetState=useState();
// let editMode =stateWithSetState[0];
// let setEditMode=stateWithSetState[1];
   
        return (
            <>
                {!editMode &&
                    
                        <span onDoubleClick={activateMode} >{props.status || '------'}</span>
                   
                }
                {editMode &&
                   
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}  />
                   
                }
            </>
        );
    }

export default ProfileStatusHook;