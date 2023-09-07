// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRV4_kN3kXJIzLHBTndASAved3gHeeOcM",
        authDomain: "reid-family-referendum.firebaseapp.com",
        projectId: "reid-family-referendum",
        storageBucket: "reid-family-referendum.appspot.com",
        messagingSenderId: "921972915370",
        appId: "1:921972915370:web:1712e7674f7c99e13ea4d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.initializeApp(Config);

//   refernce messages collection 
 var messageRef = firebase.database().ref('/votes');
  
//   event listeener from the from 
const contactForm = document.getElementById("contact-form");
const userName = document.getElementById("userName");
const town = document.getElementById("town");
const vote = document.getElementById("vote");



contactForm.addEventListener("submit", handelsubmit);

// handlle submit 
function handelsubmit(Event){    
    Event.preventDefault();
    
    document.getElementById("loading").classList.add("showloading")

let userNameValue = userName.value;
let townValue = town.value;
let voteValue = vote.value;


    console.log(` username : ${userNameValue} ..
    username : ${townValue} ..
    username : ${voteValue} ..`);
    // save message to database 
    saveMessage(userNameValue, townValue , voteValue);

//  showing success 

setTimeout(function(){ 
    document.getElementById("loading").classList.remove("showloading");
    document.getElementById("successful").classList.add("showsuccessful");
    setTimeout(function(){ 
        document.getElementById("successful").classList.remove("showsuccessful");  
        alert("Thank You! Your Vote has been recorded!")
     }, 1000);
 }, 1000);

 clearForm()
}

function clearForm(){
    userName.value ='';
    town.value ='';
    vote.value='';
   
}

// save the message 
function saveMessage( userNameValue , townValue , voteValue){
//    var newMessageRef = messageRef.push();
    // newMessageRef.set({
    //     name : userNameValue,
    //     email :  emailValue,
    //     message : messageValue
    // }
    // );
    var newMessageRef = {
            name : userNameValue,
            email :  townValue,
            message : voteValue
        }
        messageRef.push(newMessageRef);
       

}