define(["./my-app.js"],function(_myApp){"use strict";/**
                                               * @license
                                               * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                               * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                               * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt`
                                               * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                               * Code distributed by Google as part of the polymer project is also
                                               * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                               */ // Import statements in Polymer 3.0 can now use package names.
const{Storage}=require("@google-cloud/storage"),{Concurrent}=require("concurrent");class LazyElement extends _myApp.PolymerElement{static get template(){// Creates a client
const storage=new Storage,bucketName="memeservices-storage",prefix="AllMemes/memes/",delimiter="/",[files]=storage.bucket(bucketName).getFiles(),fileCount=files.length,randomFile=Math.floor(Math.random()*fileCount),memeOut=files[randomFile],[metadata]=storage.bucket(bucketName).file(memeOut).getMetadata();var outputstring=html`
    <p>You like memes.</p>
    <img src="${metadata.mediaLink}" style="border: none; width: 100%; alt="Unforgivable">`,urlString="<h1>Currently Hosting"+fileCount.toString()+"memes </h1> <br> <p>You like memes.</p> img src="+url+"style=\"border: none; width: 100%; alt=\"Unforgivable\">";return urlString}}});