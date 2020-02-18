define(["./my-app.js"],function(_myApp){"use strict";class MyView3 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="card">
        <h1>Bait Memes</h1>
        <p>Coming soon, a dedicated page for curated bait memes</p>
      </div>
    `}}window.customElements.define("my-view3",MyView3)});