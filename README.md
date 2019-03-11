# Guide for Engine use

Clone this repository and run npm install.

## Creating a Game
Create a new folder in the Games folder under the resources/Games directory, then create a new Game.js file in that folder. You then add the different game components in that file, e.g. Background, HUD, Pipes etc. 

### Creating Backgrounds
You create Backgrounds by creating background tags. A background component has the properties: imageSource, speed, and zIndex. You add images to the background by assigning its imageSource an imagefile e.g. Clouds.png. You need to add the desired image file into the /resources/images, so that background can locate the image. The speed property sets how much the background moves; a negative number makes the background move to the left while a positive does the opposite. The higher the absolute number, then the faster it moves. zIndex assigns the position of the image on the screen. i.e. the lower zIndex score then it appears further from the screen, and the opposite for a higher score. Remember to separate the components with a comma.


### HUD
You add HUD the components by creating a HUDManager tag, and assigns its properties with whatever font you want which you have stored in resources/font. You can create your own HUDManagers, or just copy the existing ones in the Engine from the included games. If you chose a preexisting HUDManager, then you can customize its fontFamily, font, and position by assigning its properties. The HUDManager also have a Menu class, which has a GameOverMenu and StartMenu. In GameOverMenu and StartMenu you can customize the css and pick your own images to be rendered to the screen.

### Game Components
Game components is a class which you will implement in order to create components such as pipes, sheep, main character etc. First you need to create a Game Components folder in your game directory. Then you add a new class in that folder e.g. the bird class from the Flappy Bird game. Copy the code from the bird or runner class from the other games; if you want the component to be controllable, then set controller = true, when you create the GameComponent tag in Game.js. If you want to the camera to follow the character, then you assign cameraFollows to be true in the same GameComponent tag. The difference between a controllable component and a non-controllable one is the controller property. You customize the sound the character has by setting soundName to a string that refers to an audio file in resources/sounds. Physics describes the forces that surrounds the component, when they press the key that got subscribed to the components. The first number is the x coordinate and it specifies the force the character moves along that axis. The second number is the y coordinate for the same event. Minus means the character is forced upwards while plus means he gets forced downwards. Then you add RigidBody, CollisionZone, and sprite into an array called children.
Each component that extends the GameComponent will implement its own version of HandleCollision(). This method defines for how each component behaves when they collide with another component. This is a method that constantly runs, if it has not been specified to stop. This method can handle specific scenarios by checking whether the character has collided with a scoreZone or something else. If you want to increase the score, when the main character passes something then you will handle that by perhaps by increasing a Game.instance.Score. Afterwards you can register that event by calling registerEvent(), and supplying that event with for example audio: { soundName: "Name of Sound file.wav" } ; the eventManager will then play that event/sound when the collision has occurred. You can view what kinds of event can be supplied here in the Events.ts class


## RigidBody
Weight describes the weight of the component i.e. higher the weight the less the component is susceptible to forces, drag, and velocity. Velocity defines how fast the component move. Force in RigidBody does the same as described above but without the key event.

## CollisionZone

CollisionZone defines where the component can get git. Offset sets where the collison zone for the component is placed. This can be directly on the character or like with the pipes where the collision zone score for them is offset a little to the right of them, so that a score increases each time the character bypasses them. Dimension describes the dimension size of the collision zone.cter bypasses them. Dimension describes the dimension size of the collision zone.

## Sprite
Sprite is the picture and the animation for the component. Scale is used to scale height and width on the screen. n is the number of frames that the sprite has e.g. runner has eight frames. imageSource is the sprite image, and you add the image simply by naming it after an image in that's located in the resources/images directory.

### Floor
If you want to have a floor for where the main character or other components can run, then you need to add the floor component from SheepRunner. Then you change the collider.object.name to the object name that should be able to run on the floor bed.


##
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
