import { Route } from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Landing}/>
    </div>
  );
}

export default App;
