import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

//              what           where
ReactDOM.render(<PrintHello/>, document.querySelector("#myDiv"));

//<PrintHello/> esta es la forma de ingresar funciones, llamados dentro del DOM,
//Si se desea ingresar más valores de funciones se agregan con diferencia de ","(coma)
