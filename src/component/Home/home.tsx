import React from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
import './home.css';


 
class Home extends React.Component {
   
    render() { 
        return ( 
        <>
         <div className="Home">
        <div className="lander">
        <h1>Editor's choice</h1>
        <p>choose your editor</p>
        <form>
          

             <Button variant="btn btn-secondary" onClick={() => history.push('/doc')}>Document editor</Button>
            <Button variant="btn btn-secondary" onClick={() =>history.push('/pdf')}>Pdf viewer</Button>
            <Button variant="btn btn-secondary" onClick={() => history.push('/sheet')}>Spread-sheet editor</Button>
          </form>
          </div>
          </div>
        </>
         );
    }
}
 
export default Home;

