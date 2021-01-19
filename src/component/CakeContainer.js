import React from 'react'
import {buyCake} from './redux'
import {connect} from 'react-redux'


function CakeContainer(props) {
    console.log(props)
 

    return (

        <div>

            <h2>Number of Cakes :  {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
 
        </div>
    )
}

const mapStateToProps = (state) =>{
     return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) =>{
    // it maps the dispatch of action creater to a props in the component
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect (mapStateToProps , mapDispatchToProps)(CakeContainer)
