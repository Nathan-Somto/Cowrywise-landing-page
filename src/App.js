
import './App.css';
import Header from './Components/Heading';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import Payment from './Components/Payment';
import  Moreinfo from './Components/Moreinfo';
import Signup from './Components/Signup';
import Saving from './Components/Saving';

function App({title}) {
  return (
   <>
    <Navbar />
    <Header title ="Somtochi"/>
    <Info />
    <Payment />
    <Moreinfo />
    <Signup />
    <Saving />
   </>
  );
}

export default App;
