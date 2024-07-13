/*
Bridge File Between App.js and index.html
By using ReactDOM VDOM convert DOM
*/
import ReactDOM from 'react-dom';
import App from './App';
const div = document.querySelector('#root'); //DOM
const root =ReactDOM.createRoot(div); //VDOM
root.render(<App/>); //VDOM to DOM