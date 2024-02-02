import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import RightEdgeSection from './Components/RightEdgeSection/RightEdgeSection';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navigation />
            <MiddleSection />
            <RightEdgeSection />
            
        
        </div>
    </BrowserRouter>
  );
}

export default App;
