// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyCncxF6n7PPWgIu25i2WVl4OSS_aW0bavM",
        authDomain: "databasewddm121.firebaseapp.com",
        projectId: "databasewddm121",
        storageBucket: "databasewddm121.appspot.com",
        messagingSenderId: "514261671183",
        appId: "1:514261671183:web:30ef6842bb2af7bd1bf27a",
        measurementId: "G-YE91MEP13L"
});

//Authentication
//Init authentication from Firebase console
const auth = firebaseApp.auth()

const signUp = () => {
    //Allow us to sign up
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        //If successfully created user 
        document.write("You are Signed Up")
        console.log(result)
    })
    .catch((error) => {
        //If unsuccessfully created user 
        console.log(error.code)
        console.log(error.message)
    })
}

const signIn = () => {
    //Allow us to sign in
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        //Signed IN
        document.write("You are Signed In")
        console.log(result)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    })
}
