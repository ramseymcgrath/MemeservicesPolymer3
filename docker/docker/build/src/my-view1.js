define(["./my-app.js"],function(_myApp){"use strict";class MyView1 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="card">
        <h1>Home</h1>
        <p>Site rebuild in-progress. major enchancements coming soon.</p>
      </div>
    `}}window.customElements.define("my-view1",MyView1)});