import Rebase from 're-base';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDri-akot6edcT-2Jh6XuWYuI9HfzNa0Rk',
    authDomain: 'cleanhaus-ec29c.firebaseapp.com',
    databaseURL: 'https://cleanhaus-ec29c.firebaseio.com',
  });
}

const app = firebase;
const base = Rebase.createClass(app.database());

export default base;
