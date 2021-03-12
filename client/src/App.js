import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Playerone from './pages/Playerone';
import Playertwo from './pages/Playertwo';
import Gamepage from './pages/Gamepage';
import Highscores from './pages/Highscores';
import './App.scss'

function App() {

return (
  <>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/playerone" component={Playerone}/>
      <Route path="/playertwo" component={Playertwo}/>
      <Route path="/gamepage" component={Gamepage}/>
      <Route path='/highscores' component={Highscores}/>
    </Switch>
  </BrowserRouter>

  </>
);
};

export default App;