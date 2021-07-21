// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaV8xEKmh3d9xsRZvSncsH9cXtlfulS7w",
    authDomain: "little-light-93052.firebaseapp.com",
    projectId: "little-light-93052",
    storageBucket: "little-light-93052.appspot.com",
    messagingSenderId: "994949448396",
    appId: "1:994949448396:web:5ac6dbf2ad5a44eff3f869"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("Contact-Form")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let Name = document.getElementById('name').value
  let Phone = document.getElementById('phone').value
  let Email = document.getElementById('email').value
  let Message = document.getElementById('message').value

  //Save Form Data To Firebase
  db.doc().set({
    name: Name,
    phone: Phone,
    email: Email,
    message: Message
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})