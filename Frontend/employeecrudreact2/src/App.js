import './App.css';
import Add from './components/Add'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './Pages/LandingPage';
import ControlPanel from './components/ControlPanel';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Update from './components/Update';
import Display from './components/Display';



function App() {
  return (
    <div className="App">
      <Router>
        <ControlPanel/>
        <Routes>

            <Route 
              path='/' element={<LandingPage/>}
            />

              <Route 
              path='/addemployee' element={<Add/>}
            />

          <Route 
              path='/update/:id' element={<Update/>}
            />
  
            <Route
              path='/view/:id' element={<Display/>}
            />

        </Routes>
        
      </Router>

    

    

    </div>
  );
}

export default App;
