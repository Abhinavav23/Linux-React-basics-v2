import { createContext } from 'react';
import './App.css';
import { ContextClass } from './components/ContextInClassComp/ContextClass';
import Error from './components/ErrorBoundry/Error';
import Player from './components/ErrorBoundry/Player';
import { FirstClassComp } from './components/FirstClassComp';
import ReactKeys from './components/Keys/ReactKeys';
import { Mounting } from './components/Lifecycle/Phase 1/Mounting';
import { FormUsingRef } from './components/Refs/FormUsingRef';
import { Stopwatch } from './components/Refs/Stopwatch';

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

        props.children ---> all 4 player
        <Error>
          <Player name='Rohit'/>
          <Player name='Rohit'/>
          <Player name='Rohit'/>
          <Player name='Rohit'/>
        </Error>
        
         props.children ---> 1 player
        <Error>
          <Player name='Abhinav'/>
        </Error>
        
        <Error>
          <Player name='Abhinav'/>
        </Error>
        */}

        {/* <ReactKeys/> */}
        {/* <FormUsingRef/> */}
        <Stopwatch/>

      </header>
    </div>
  );
}

export default App;

// function print(a,b,c,d){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }

// function print1(a){
//   console.log(a);
// }

// print('pr1', 'pr2','pr3', 'pr4');

// print1('pr1');
// print1('pr2');
// print1('pr3');
// print1('pr4');