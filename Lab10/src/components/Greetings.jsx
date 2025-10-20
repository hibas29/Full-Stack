function Greetings(props){
    const name = props.name;
    if(name){
        return<h1>Hello ,{name}</h1>;
    }else{
        return <h1>hello World</h1>
    }
}
export default Greetings;