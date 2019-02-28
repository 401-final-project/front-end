import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
  return( 
    <>  
    <App />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);