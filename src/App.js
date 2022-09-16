import './App.css';

export default function App(){
const title = 'Welcome to my superhero blog';
const bool = true;
const numbers =[ 1,2,3,4,5];
const link ='http://www.google.com';
    return (
        <div className="App">
            <h1> {title} </h1>
            {bool && <p>I was printed</p>}
            <p>{numbers}</p>
            <a href ={link}  target='_blank' >Google.com</a>
        </div>
    );
}

