
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "databasewddm121.firebaseapp.com",
  databaseURL: "https:-default-rtdb.firebaseio.com/",
  projectId: "databasewddm121",
  storageBucket: "databasewddm121.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//Get reference on the database for contact
var contactFormDB = firebase.database().ref("contactForm")
 
//Add submit event for when the form has been submit
document.getElementById("contactForm").addEventListener("submit", submitForm)
 
function submitForm(e) {
 
    e.preventDefault(); //prevent our page from going to the next page
 
    //Get values from the form
    var name = getElementVal("name")
    var emailid = getElementVal("emailid")
    var msgContent = getElementVal("msgContent")
 
    //Save the messages to database
    saveMessages(name, emailid, msgContent)
 
    //Show the alert that the message was sent
    document.querySelector(".alert").style.display = "block"
 
    //Hide the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none"
    }, 3000);
 
    //reset form
    document.getElementById("contactForm").reset()
}
 
const saveMessages = (name, emailid, msgContent) => {
 
    //Push this to our database
    var newContactForm = contactFormDB.push()
 
    //Set values
    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    })
}
 
const getElementVal = (id) => {
    //This is a function that will allow us to get element values
    return document.getElementById(id).value;
}
