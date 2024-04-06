

/* == [ card lyh template ] 
== == == == == == == == == */
class CardLyh extends HTMLElement {
   constructor() {
      super();

      let tag = document.createElement( "template" );

      tag.innerHTML = cardTemplate;

      this.attachShadow( { mode: "open" } );
      this.shadowRoot.append( tag.content.cloneNode( true ) );
      this.shadowRoot.querySelector( "img" ).alt = this.getAttribute( "alt" );
   } 
   connectedCallback() {
      this.render();
   }
   render() {
      console.log( "card-lyh" );
   }
}
window.customElements.define( 
   "card-lyh", 
   CardLyh 
);