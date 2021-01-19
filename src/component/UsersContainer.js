import React,{useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers ,postUser} from './redux'

function UsersContainer({userData ,fetchUsers , postUser}) {

 
    useEffect(() => {
       
         fetchUsers()

 
       
      }, [ ])


 


       return           userData.loading ? ( <h2>Loading</h2> )  : userData.error ? (  <h2>{userData.error}</h2>  ) 
      : (<div>
          <h2>Users List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p key={user.name}>{user.name}</p>)}
          </div>
        </div> 
        ) 
       
         
 
    }
const mapStateToProps = (state ) => {

    console.log(state)
     return {
      userData:   state.user       
     }
  }
  
  const mapDispatchToProps = ( dispatch  ) => {
     
    return {
      fetchUsers: () => dispatch(fetchUsers()) ,
      postUser : (id,name,username) => dispatch(postUser(id,name,username))
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersContainer)



  
