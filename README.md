## Guide for Engine use

Clone this repository and run npm install.

### Creating a Game
Create a new folder in the Games folder under the resources/Games directory, then create a new Game.js file in that folder. You then add the different game components in that file, e.g. Background, HUD, Pipes etc. 

## Creating Backgrounds
You create Backgrounds by creating backround tags. A background component has the properties: imageSource, speed, and zIndex. You add images to the background by assignings its imageSource an imagefile e.g. Clouds.png. You need to add the desired image file into the /resources/images, so that background is able to locate the image. The speed property sets how much the background moves; a negative number makes the background move to the left while a positive does the opposite. The higher the absolute number, then the faster it moves. zIndex assigns the position of the image on the screen. i.e. the lower zIndex score then it appears further from the screen, and the opposite for a hgher score. Remember to seperate each commponents with a comma.


## HUD
You add HUD the components by creating a HUDManager tag, and asigns its properties with whatever font you want which you
have stored in resources/font. You can create your own HUDManagers, or just copy the existing ones in the Engine from the included games. If you chose a preexisting HUDManager, then you can customise its fontFamily, font, and position by assigning its properties.

## Character
First you create a gamecompontents folder in the same directory as your game.

## Adding Sounds
You add sounds by inserting sounds into the resources/sounds. 

## React Comments
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run docker`

Builds the app and starts a Docker container with the build running on port 8000. Open [http://localhost:8000](http://localhost:8000) to view it in the browser. 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
