import React from 'react';
import ReactDOM from 'react-dom'

class Random extends React.Component{
    const songs ={Lady in red, Beauty and the Beast, Hero}
    render(){
        return <h1>{songs}</h1>
    }
}
ReactDOM.render(
    <Random/>,
    document.getElementById('app')
);