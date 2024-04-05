

import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from "./Widgets/AppBar.jsx";
import Views from "./Views";
import Routes from "./Routes";


export default function App() {
   const [ count, setCount ] = useState(0);
   let [ view, setView ] = useState( 
      <Views.Home onExit={ 
         data => { setView( data ) } 
      } /> 
   );

   if( view == Views.About ) {
      view = <Views.About />;
   } else if( view == Views.Home ) {
      view = ( <Views.Home onExit={ 
         data => { 
            setView( data ); 
         } 
      }/> );
   }

   return( <>
      <AppBar />
      <button onClick={ () => { 
         setView( <Views.About onExit={ data => setView( data ) } /> ) 
      } }>
         <a href="">Céo</a>
      </button>
      <main>
         { view }
      </main>
   </> );
}

