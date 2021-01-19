import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USERS_FAILURE,
    POST_USERS_SUCCESS
} from './userTypes'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}



export const postUsersSuccess = user  => {
    return {
        type: POST_USERS_SUCCESS,
        payload: user 
    }
}

export const postUsersFailure = error => {
    return {
        type: POST_USERS_FAILURE,
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {

        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(axios(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })

    }


}


export const postUser  = (id,name,username) => {

    
    return (dispatch) => {

        dispatch(fetchUsersRequest())

        axios
            .post('https://jsonplaceholder.typicode.com/users' ,  {id:id, name:name , username: username})
            .then(response => {
                // response.data is the users
                 
                const user = []
               

                dispatch(postUsersSuccess(    [...user ,response.data] ))

                


            })
            .catch(error => {
                // error.message is the error message
                console.log("error",error)
            })

    }


}