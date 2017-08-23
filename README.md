# Ionic Chat

This is an example of how to make a simple chat app using [Ionic Framework](http://ionicframework.com/docs/). You may view slides on how to complete this project at [http://code.tacc.utexas.edu/courseware/activities/chat](http://code.tacc.utexas.edu/en/courseware/activities/chat/).

### Project scope 

This project walks through how to configure each of the page views to make a chat app using Firebase as a back end. The back end and providers are already written. Students only need to modify a few of the HTML pages to access the chat data.

### Skill requirements

This project is designed for high school aged students with some experience in HTML. Some requisite skills that the instructor needs to have include:

- An understanding of HTML/DOM tags
- A little familiarity with a command terminal
- Understanding of how to download and uncompress a zip file and then navigate to the directory in a terminal

### Software requirements

You will need the following:

- [node.js](https://nodejs.org)
- [Ionic Framework](https://ionicframework.com/)
- A text editor
- A modern web browser, like Chrome.

### Firebase

You or your students will also need to setup a [Firebase](http://firebase.google.com) project for your data source. Once you have your Firebase project info, you need to replace the contents of `firebaseConfig` in [./src/app/app.module.ts](https://github.com/jchuahtacc/ionic-chat/blob/master/src/app/app.module.ts) with your project specific `apiKey`, etc.

```
export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    storageBucket: "",
    messagingSenderId: "YOUR_MESSAGE_SENDER_ID"
};
```

If you are familiar with Git, you can fork this project and replace these values with your own keys and have your students use your version. (And then disable your Database once you are done with the project!) Alternatively, you can have each student create their own Firebase and fill in their API info. This may be a little more difficult and time consuming, however.

### Downloading and running the base project

Assuming you have a terminal with Git and NodeJS already installed, you can run this project with:

```
$ npm install -g ionic cordova
$ git clone https://github.com/jchuahtacc/ionic-chat
$ cd ionic-chat
$ ionic
$ ionic lab
```

(Say 'yes' to everything when prompted)

### Project Solution Branch

You may see each of the steps that students will perform to complete the project (as well as get a sense for the necessary skills) by viewing the [Solution](https://github.com/jchuahtacc/ionic-chat/tree/Solution) branch and looking at the [Commit History](https://github.com/jchuahtacc/ionic-chat/commits/Solution). The first commit is [Changed intro text for login page](https://github.com/jchuahtacc/ionic-chat/commit/ce66aa034bf908c2823557ec1cf246171d5b9701).
