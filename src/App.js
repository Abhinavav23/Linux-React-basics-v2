import { createContext } from 'react';
import './App.css';
import { ContextClass } from './components/ContextInClassComp/ContextClass';
import Error from './components/ErrorBoundry/Error';
import Player from './components/ErrorBoundry/Player';
import { FirstClassComp } from './components/FirstClassComp';
import ReactKeys from './components/Keys/ReactKeys';
import { Mounting } from './components/Lifecycle/Phase 1/Mounting';

export const UserInfoContext = createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {/* <FirstClassComp/> */}
        {/* <Mounting name='Abhina'/> */}
        {/* <UserInfoContext.Provider value={{name: 'Virat', role: 'Player'}}>
          <ContextClass/>
        </UserInfoContext.Provider> */}


        {/* <Player name='Virat'/>
        <Player name='Surya'/>
        <Player name='Risabh'/>
        <Player name='Rohit'/>

        <Error>
          <Player name='Rohit'/>
        </Error>
        
        <Error>
          <Player name='Abhinav'/>
        </Error> */}

        <ReactKeys/>

      </header>
    </div>
  );
}

export default App;
