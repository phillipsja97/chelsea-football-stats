import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import TeamStats from '../Pages/TeamStats/TeamStats';
import IndividualStats from '../Pages/IndividualStats/IndividualStats';
import TotalOffense from '../Pages/TotalOffense/TotalOffense'
import Charting from '../Pages/Charting/Charting';


function App() {


  return (
    <div className="App">
      <Navbar/>
            <Routes>
              <Route path="/" element={<TeamStats/>} />
              <Route path="/totalOffense" element={<TotalOffense/>} />
              <Route path="/individual" element={<IndividualStats/>} />
              <Route path="/charting" element={<Charting/>} />
            </Routes>
    </div>
  );
}

export default App;
