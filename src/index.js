import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';


function Main()
{
  return(
    <div>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));