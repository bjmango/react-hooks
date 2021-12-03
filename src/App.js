import './App.css';
import UseStateNumber from './components/useStateNumber_01';
import UseStateUpdateNumber from './components/useStateUpdateNumber_02';
import UseStateObject from './components/useStateObject_03';
import UseStateArray from './components/useStateArray_04';
import UseEffectCount from './components/useEffectCount_01';
import UseEffectMouse from './components/useEffectMouse_02';
import UseEffectCleanUpComponent from './components/useEffectCleanUpComponent_03';
import UseEffectIntervalCounter from './components/useEffectIntervalCounter_04';
import UseEffectDataFetch from './components/useEffectDataFetch';
import UseEffectDataFetch2 from './components/useEffectDataFetch2';

function App() {
  return (
    <div className="App">
      <UseEffectDataFetch2/>
      {/* <UseEffectDataFetch/> */}
      {/* <UseEffectIntervalCounter /> */}
      {/* <UseEffectCleanUpComponent/> */}
      {/* <UseEffectMouse/> */}
      {/* <UseEffectCount/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateUpdateNumber/> */}
      {/* <UseStateNumber/> */}
    </div>
  );
}

export default App;
