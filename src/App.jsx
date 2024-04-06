

import React, { useState } from 'react'
import './App.css'
import AppBar from "./Widgets/AppBar.jsx";
import Views from "./Views";
import Routes from "./Routes";


export default function App() {
   const 
      [ count, setCount ] = useState( 0 )
      ,
      [ view, setView ] = useState( 
         <Views.Home 
            onExit={ 
               data => { setView( data ) } 
            }
            title="Homepage" 
         /> 
      )
      ,
      [ observer, setObserver ] = useState( "home" )
      ,
      [ route, setRoute ] = useState( "/" )
   ;


   return( <>
      <AppBar />
      <input id="inputViewName" type="text" placeholder="View name" />

      <menu>
         <button
            onClick={ () => {
               setView( data => <Views.Home title="Home Page" /> );
            } }
         >
            Home View
         </button>
         <button
            onClick={ () => {
               setView( data => <Views.About /> );
            } }
         >
            About View
         </button>
      </menu>

      <hr />
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

