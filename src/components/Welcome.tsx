interface Props {
    name:string;
    last:string;
}

interface State{
    isGood:boolean;
    value:string;
}
export const Welcome = (props:Props, state:State):JSX.Element =>{
    state = {
        isGood:false,
        value:"IRON MAN"
    };
    
    return (<div>
        Welcome function components, {state.isGood}, {state.value}, {props.name}, {props.last}
    </div>)
}