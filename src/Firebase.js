import firebase from 'firebase/app';
import 'firebase/database';

const Firebase = (() => {

    let userId = "";

    const firebaseConfig = {
        apiKey: "AIzaSyAhJdt3KcdZwSORPhe43Y4iMKFE7kzhh68",
        authDomain: "fraction-golf.firebaseapp.com",
        databaseURL: "https://fraction-golf-default-rtdb.firebaseio.com",
        projectId: "fraction-golf",
        storageBucket: "fraction-golf.appspot.com",
        messagingSenderId: "628280210723",
        appId: "1:628280210723:web:5295f9883b7c2ff02fc896"
    };

    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    function setUserId(id){
        userId = id;
    }

    function getUserId(){
        return userId;
    }

    function userExistsCallback(userId, exists) {
        return exists;
    }

    // Tests to see if /users/<userId> has any data. 
    function checkIfUserExists(userId) {

        return new Promise(function(resolve, reject) {

            database.ref().child("users").child(userId).get().then((snapshot) => {
                resolve(snapshot.exists());
            });

        });

        
    }

    function writeUserData(levelPassed, levelStars){
        database.ref("users/" + userId).set({
            levelPassed,
            levelStars
        })
    }

    function getUserData(){

        if(userId === "") return null;

        return new Promise(function(resolve, reject) {

            const ref = database.ref();
            ref.child("users").child(userId).get().then((snapshot) => {
                if(snapshot.exists()){
                    resolve(snapshot.val());
                }else{
                    resolve(null);
                }
            }).catch((error) => {
                console.error(error);
            });

        });

    }

    return { writeUserData, getUserData, setUserId, getUserId, checkIfUserExists };

})();

export default Firebase;