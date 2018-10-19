# Memeservices (Generation 3)

[![Build Status](https://travis-ci.org/ramseymcgrath/MemeservicesPolymer3.svg?branch=master)](https://travis-ci.org/ramseymcgrath/MemeservicesPolymer3)

A newer, sleeker generation of the Memeservices API
Online at [Memeservices.com](https://memeservices.com)

Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

## API Features

### Unforgivagable (Future)

An Endpoint will be provided to return random responses from the 'Unforgivable' Youtube series, users may request a ```he_was_like``` ```she_was_like``` or ```i_was_like``` quote, and a json response will be returned with a random quote from the desired variety.

### Bait Memes (Future)

A future feature will lazy load a random bait meme image hosted in our meme database.

## Development and Deployment

### Quickstart

```
npm install -g polymer-cli
git clone https://github.com/RamseyMcGrath/MemeservicesPolymer3.git
cd Memeservices
npm install
polymer serve
```

### Docker Start

A Dockerfile is provided to build and host the application locally, exposing port 8081

### Slowstart 

To setup your own development environment use the following instructions (based off of the Polymer 3 base)

  1.  [Set up a development environment for Polymer projects](#setup):
        * [Install Polymer CLI prerequisites](#installprerequisites).
        * [Install Polymer CLI](#installcli).
  2.  [Clone, install and serve the project locally](#clone).
  3.  (Optional) [Build the project for production](#build).
  4.  (Optional) [Deploy the project](#deploy).

<a name="setup"></a>

#### Set up a development environment for Polymer projects

Before you can serve this project, you will need to install Polymer CLI
and its prerequisites.

<a name="installprerequisites"></a>

##### Install Polymer CLI Prerequisites

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

<a name="installcli"></a>

##### Install Polymer CLI

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli
```

<a name="clone"></a>

#### Clone, install and serve the Memeservices project locally

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/RamseyMcGrath/MemeservicesPolymer3.git
cd Memeservices
npm install
polymer build
polymer serve
```

To view the app, open the `applications` link in the latest version of Chrome or Safari. For example:

```
~/Memeservices > polymer serve
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/start-polymer3/
```

In the example above, you'd open http://127.0.0.1:8081.

<a name="build"></a>

#### Build the project for production

To build the `Memeservices` app: 

```
npm install
polymer build
```

The build is output to `build/es6-unbundled`. To serve the built app locally:

```
cd build/es6-unbundled
polymer serve
```

<a name="deploy"></a>

#### Deploy the Memeservices API

You can deploy a built Polymer app to any web server. One way is to deploy with Firebase (Recommended):

<a name="firebase"></a>

##### Deploy with Firebase

To deploy the app to your own Firebase project:

1.  [Install the Firebase CLI tools](https://firebase.google.com/docs/cli/).

    ```
    npm install -g firebase-tools
    firebase login
    ```

2.  From the [Firebase console](https://console.firebase.google.com/), create a Firebase project.

3.  [Initialize Firebase in your project folder](https://firebase.google.com/docs/cli/#initializing_a_project_directory). 

    ```
    firebase init
    ```

    Complete the Firebase initialization process to set up your project for hosting. 

    If you are prompted to

    * **select Firebase CLI features**, select **Hosting**.
    * **select a default Firebase project**, select the project you created from the Firebase console.
    * **specify a `public` directory**, you can enter `build/es6-unbundled` to deploy the build configuration supplied with this sample project.
    * **configure as a single-page app**, enter `Y`. 
    * **overwrite `index.html`**, enter `N`.

    From the Firebase console you may also upload your memes to storage, or use another file hosting service of your choice. Just be sure to update the image URLs used in the project, along with the read permissions for the image files.

4.  In a text editor, open `firebase.json` from your root project folder.

    `hosting.ignore` is a list of files and folders that Firebase will not deploy. Remove the `node_modules` folder from this list and save `firebase.json`.

    **firebase.json: Before**

    ```
    {
        "hosting": {
            "public": "build/es6-unbundled",    
            "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```

    **firebase.json: After**

    ```
    {
        "hosting": {
            "public": "build/es6-unbundled",
            "ignore": [
            "firebase.json",
            "**/.*"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        }
    }
    ```


4.  [Deploy your project](https://firebase.google.com/docs/cli/#deployment) with Firebase.

    ```
    firebase deploy
    ```



