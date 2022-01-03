import React from 'react';
import ReactDOM from 'react-dom';



class Stuff extends React.Component{
    // const songs= ["all my life", "Crazy","love"];

    // const mood =["sad", "mad", "happy"];

    // let everything =songs[1]

    render(){
        return <h1>Hello!</h1>;
    }

};
ReactDOM.render(
    <Stuff/>,
    document.getElementById("app")
);