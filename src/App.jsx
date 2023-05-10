import {BrowserRouter as Router} from 'react-router-dom';
import  Pages from './Pages';

function App() {
  
  return (
   <Router basename='/'>
   <Pages/>
   </Router>
  );
}

export default App;
