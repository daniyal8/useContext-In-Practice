import react from 'react';
import { FirstName } from './App'

function CompB () {
    return(
        <div>
        <FirstName.Consumer>{(fname) => {
            return <h1>My Name is {fname}</h1>
        }}
        </FirstName.Consumer>
        </div>
    );
}
export default CompB;