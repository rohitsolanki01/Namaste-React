import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={ 
            count : 0,
            count2 : 1
        }
    }    render(){
        const { count} = this.state;
        return(
            <>
            <h1>This is the Class Component</h1>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            <p>{this.props.current}</p>
            <button>{count}</button>
            <button>{this.state.count2}</button>
            </>
        );
    }
}

export default UserClass;