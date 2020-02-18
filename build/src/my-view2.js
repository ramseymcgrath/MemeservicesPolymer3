define(["./my-app.js"],function(_myApp){"use strict";class MyView2 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="card">
        <h1>Unforgivable Memes</h1>
        <p>Coming soon, a seperate page for Unforgivable-series memes</p>
      </div>
    `}}window.customElements.define("my-view2",MyView2)});