define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_f95ba8f01b3211ea99c4c91914b2efde(){var data=babelHelpers.taggedTemplateLiteral(["\n    <p>You like memes.</p>\n    <img src=\"","\" style=\"border: none; width: 100%; alt=\"Unforgivable\">"]);_templateObject_f95ba8f01b3211ea99c4c91914b2efde=function _templateObject_f95ba8f01b3211ea99c4c91914b2efde(){return data};return data}/**
                                               * @license
                                               * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                               * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                               * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt`
                                               * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                               * Code distributed by Google as part of the polymer project is also
                                               * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                               */ // Import statements in Polymer 3.0 can now use package names.
var _require=require("@google-cloud/storage"),Storage=_require.Storage,_require2=require("concurrent"),Concurrent=_require2.Concurrent,LazyElement=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LazyElement,_PolymerElement);function LazyElement(){babelHelpers.classCallCheck(this,LazyElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LazyElement).apply(this,arguments))}babelHelpers.createClass(LazyElement,null,[{key:"template",get:function get(){// Creates a client
var storage=new Storage,bucketName="memeservices-storage",prefix="AllMemes/memes/",delimiter="/",_storage$bucket$getFi=storage.bucket(bucketName).getFiles(),_storage$bucket$getFi2=babelHelpers.slicedToArray(_storage$bucket$getFi,1),files=_storage$bucket$getFi2[0],fileCount=files.length,randomFile=Math.floor(Math.random()*fileCount),memeOut=files[randomFile],_storage$bucket$file$=storage.bucket(bucketName).file(memeOut).getMetadata(),_storage$bucket$file$2=babelHelpers.slicedToArray(_storage$bucket$file$,1),metadata=_storage$bucket$file$2[0],outputstring=html(_templateObject_f95ba8f01b3211ea99c4c91914b2efde(),metadata.mediaLink),urlString="<h1>Currently Hosting"+fileCount.toString()+"memes </h1> <br> <p>You like memes.</p> img src="+url+"style=\"border: none; width: 100%; alt=\"Unforgivable\">";return urlString}}]);return LazyElement}(_myApp.PolymerElement)});