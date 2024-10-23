import React, { useContext } from 'react'
import { authReducer } from '../../auth/context/authReducer';
import { AuthContext } from '../../auth/context/AuthContext';

export const UserLogin = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className='user-login'>
        <div className="avatar">
          <img src={user.avatar} width={'32px'} alt="user avatar" />
        </div>
        <div className="user-info">

        <p>{user.nombre +  " " + user.apellido}</p>
        <small>{user.rol }</small>
        </div>
    </div>
  )
}
