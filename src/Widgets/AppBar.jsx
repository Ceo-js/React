

import React from "react";
import "./AppBar.css";


export default function AppBar( props ) {
   const 
      [ data, setData ] = React.useState(
         "Sammarco"
      )
   ;

   return( <>
      <appbar>
         <home>
            <bar-options></bar-options>
            <bar-center>{ props.title || data }</bar-center>
            <bar-options></bar-options>
         </home>
      </appbar>
   </> );
}