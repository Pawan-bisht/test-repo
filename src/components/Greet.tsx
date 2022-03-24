import React, { Component } from "react";

interface Props {
    name:string;
    last:string;
    age:number;
}

interface State {
    isFocused:boolean;
    value:string;
}
export default class Greet extends Component<Props, State> {
    //Class componet takes 2 types of generic value for props and state
    constructor(props:Props){
        super(props);
        this.state = {
            isFocused:true,
            value:'Pawan'
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement> )=>{

    }

    render():JSX.Element{
        return (<div>
            Hello there,  {this.props.name} {this.props.last} is {this.props.age} 
    </div>)}
}