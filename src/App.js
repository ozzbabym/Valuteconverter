import { Route } from 'react-router-dom';
import './App.css';
import Converter from './components/convector/Converter';
import Valute from './components/valute/Valute';

function App() {
  return (
    <div className="App">
      yo
      <Route path='/' exact render={()=>(<Valute/>)}/>
      <Route path='/converter' exact render={()=>(<Converter/>)}/>

    </div>
  );
}

export default App;
