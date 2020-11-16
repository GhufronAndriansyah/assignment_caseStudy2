import React, {Component} from 'react';  
import './App.css';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import BMI from './Studi_kasusModul3/BMI';
import Cicilan from './Studi_kasusModul3/Cicilan';
import Jualbeli from './Studi_kasusModul3/Jualbeli';
import KonversiBilangan from './Studi_kasusModul3/KonversiBilangan';
// import Pegawai from './Modul_3/Pegawai';
// import Alert from './Components/Alert';
// import Media from './Components/Media'; 
// import element Alert yang telah dibuat  
  
class App extends Component {  
  render(){  
    return ( 
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/BMI" className="nav-link">BMI</Link>
              <Link to="/Cicilan" className="nav-link">Cicilan Bank</Link>
              <Link to="/Jualbeli" className="nav-link">Jualbeli</Link>
              <Link to="/Konversi" className="nav-link">Konversi Bilangan</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/BMI">
            <BMI />
          </Route>
          <Route path="/Cicilan">
            <Cicilan />
          </Route>
          <Route path="/Jualbeli">
            <Jualbeli />
          </Route>
          <Route path="/Konversi">
            <KonversiBilangan />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }  
}  
  
export default App;  
