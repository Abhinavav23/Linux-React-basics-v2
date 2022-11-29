import './App.css';
import { FirstClassComp } from './components/FirstClassComp';
import { Mounting } from './components/Lifecycle/Phase 1/Mounting';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {/* <FirstClassComp/> */}
        <Mounting name='Abhina'/>
      </header>
    </div>
  );
}

export default App;
