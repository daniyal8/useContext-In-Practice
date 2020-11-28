import React, { createContext } from 'react';
import CompA from './CompA'


const FirstName = createContext();
function App() {
  return (
    <div>
    <FirstName.Provider value={'Daniyal'}>
      <CompA />
    </FirstName.Provider>
   </div>);
}

export default App;
export { FirstName }
