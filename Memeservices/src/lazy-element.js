/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LazyElement extends PolymerElement {
  static get template () {
    var memearray = ["https://firebasestorage.googleapis.com/v0/b/memeservices-4c685.appspot.com/o/Unforgivable1.PNG?alt=media&token=e96688cb-a925-4bcc-ab8a-1296dfdcb17f","https://firebasestorage.googleapis.com/v0/b/memeservices-4c685.appspot.com/o/Blank%2B_4589ee8edadc094016dbc864001b63f2.png?alt=media&token=afb0154b-4542-44cb-aed7-14fb1ab378f3","https://firebasestorage.googleapis.com/v0/b/memeservices-4c685.appspot.com/o/fff.jpg?alt=media&token=af58af86-81fe-4098-85e0-4e628e63adbb","https://firebasestorage.googleapis.com/v0/b/memeservices-4c685.appspot.com/o/pasted_image_at_2017_12_07_11_29_pm.png?alt=media&token=6cad2833-1128-43ab-a647-37dcb2ee83de"];
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    var randomNumber = Math.floor(Math.random()*memearray.length);

    var memestring = memearray[randomNumber];
    var outputstring = "<p>You like memes.</p> <img src=" +  memestring  + "style=border: none; width: 100%; alt='Unforgivable'>";
    return HTMLFormElement(outputstring);
  }
}

// Register the element with the browser.
customElements.define('lazy-element', LazyElement);
