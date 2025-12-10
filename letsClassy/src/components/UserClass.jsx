import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={ 
            count : 0,
            count2 : 1
        }
        console.log("Children Constructor")
    }   
    componentDidMount(){
        console.log("Children Component DidMount")
    }
    render(){      
        console.log("Children Component Render")
        const { count} = this.state;
        return(
            <>
            <h1>This is the Class Component</h1>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            <p>{this.props.current}</p>
            <button onClick={() => {
                this.setState({
                    count : this.state.count +1
                })
            }}>{count}</button>
            </>
        );
    }
}

export default UserClass;