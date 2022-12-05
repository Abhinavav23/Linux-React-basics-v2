import { createContext, useRef } from 'react';
import './App.css';
import ApisInClassComp from './components/APIs/ApisInClassComp';
import { FunCompAPi } from './components/APIs/FunCompAPi';
import { ContextClass } from './components/ContextInClassComp/ContextClass';
import Error from './components/ErrorBoundry/Error';
import Player from './components/ErrorBoundry/Player';
import { FirstClassComp } from './components/FirstClassComp';
import { FormV1 } from './components/FormValidation/FormV1';
import { FormV2 } from './components/FormValidation/FormV2';
import ReactKeys from './components/Keys/ReactKeys';
import { Mounting } from './components/Lifecycle/Phase 1/Mounting';
import { FormUsingRef } from './components/Refs/FormUsingRef';
import {Login} from './components/Refs/Login';
import { Stopwatch } from './components/Refs/Stopwatch';

export const UserInfoContext = createContext();

function App() {

  const nameRef = useRef();

  const focusUserName = () => {
    nameRef.current.focus();
  }
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
        {/* <Stopwatch/> */}
        {/* <button onClick={focusUserName}>add user name</button>
        <Login ref={nameRef} name='Abhinav' address='India'/> */}

        {/* <FunCompAPi/> */}

        {/* <ApisInClassComp/> */}

        {/* <FormV1/> */}
        <FormV2/>

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