import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {paths} from "../../constants";
import {auth} from "../../configFirebase";
import {useDispatch, useSelector} from "react-redux";
import {logInUser} from "../../redux/actions/user";
import {getResumeFromDatabase} from "../../redux/operations/resumeCollection";
import storage from "../../helpers/storage";

export const PrivateRoute = ({isPrivat, component: Component, ...rest}) => {
    const userRedux = useSelector(s => s.user),
          resumeCollectionRedux = useSelector(s => s.resumeCollection),
          dispatch = useDispatch(),
          userStorage = storage.get('user'),
          resumeCollection = storage.get('collection')

    auth.onAuthStateChanged(function(user) {
        if(user) {
            const {email, uid} = user;
            if(Object.keys(userRedux).length === 0) {
                dispatch(logInUser({email, uid}))
            }
            if(resumeCollectionRedux.length === 0) {
                dispatch(getResumeFromDatabase(uid))
            }
            if(!userStorage){
                storage.save('user', {uid, email})
            }
            if(!resumeCollection){
                storage.save('collection', resumeCollectionRedux)
            }
        } else {
            if(userStorage){
                storage.del('user')
                storage.del('collection')
            }
        }
    })
    return (<Route
        {...rest}
        render = {props => (isPrivat ? userStorage : !userStorage) ? (<Component {...props}/>) : (<Redirect
            to={{
                pathname: isPrivat ? paths.login : paths.dashboard,
                state: { from: props.location }
            }}
        />)}
    />)
};

