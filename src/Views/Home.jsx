

import React, { useState } from "react";


export default function Home( props ) {
   const 
      [ nome, setNome ] = useState( "Céo" )
   ;

   return( <>
      <h1>Home</h1>
      <grid center p>
         <button>
            <a href="">About</a>
         </button>    
         <input type="text" placeholder="nome" id="inputNome" />
         <button onClick={ () => { setNome( inputNome.value ) } } >
            <p>send</p>
         </button>
         <h2>{ nome }</h2>
      </grid>
   </> );
}