# node-express-firebase-voting-app

Repository for final app in prep for prep bootcamp. Inspired by https://frontendmasters.com/courses/firebase-react/

Youtube playlist series that anyone can code along with as they build this app from scratch: https://www.youtube.com/watch?v=8YNw8J9Edjk&list=PLJm7_t7JnSjn__VC3sK86o2YlUuwlPKkO

This is by no means a production-ready app and in many ways is not even very well architected. Regardless, it does a decent job of teaching the core concepts of building servers with Node.js and Express.js.

The app uses ejs to render html templates serverside, and the client uses vanilla javascript to make api calls to Firebase for authentication and voting. 

Made a few mistakes in how I set up the auth listener in the instructional videos, but this repository should reflect the right to avoid redundant code.

DISCLAIMER:

This app's main flaw is that the client asks the window to reload each time a vote is cast. This is because I did not have a chance to teach websockets, so the server can't listen for data from Firebase and update the client when necessary. This is pretty inefficient. 

But, it's still valid code and what the heck - the app works! Enjoy.
