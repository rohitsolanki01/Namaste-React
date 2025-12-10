import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructore")

        this.state={
            products:{
                title :"ABuggy person",
                description : "This is the beggy pents for the big man",
                category : "Frogess"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        
        this.setState({
            products : json.products,
        })
        console.log(json.products);
    }
    render(){
        console.log("Parent Compoen Render")
        return(
            <>
            <UserClass name={this.state.products.title} age={this.state.products.description} current={this.state.products.category} />
            <UserClass name="Rohit in the Class Component" age="20years from class" current="student from class" />
            <User name="Rohit in the Functional Component" age="20years" current="student" />
            </>
        );
    }
}

export default About;