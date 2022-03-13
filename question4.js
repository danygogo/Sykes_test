//QUESTION 4

const twilio = require("twilio")


//THE PHONE NUMBERS LIST
const listOfNumbers = {
  "numbers": [
    "+50688914258",
    //"+14151234567",
    //"+19103217654",
    //"+12314567890",
    //"+17076543210"
  ]
}
//Please notice that the given numbers are commented because
// this is a test and only the registered phone number can be used




//WORKING WITH TWILIO SMS
const accountSid = "AC4300b68916d77cd05cb17fef5ac0c2e3";
const authToken = "3c5a14b047be2a99707c430a644d5fad";

const client = new twilio(accountSid, authToken)

const createSMS = (ThePhone) =>{
  try{
    client.messages.create({
      body: "Hi, I am Twilio",
      to: ThePhone,
      from: "+12548480137"
    }).then((message)=> console.log(message.sid))
  }
  catch(ex){
    console.log("something is wrong, please check this info: " + ex)
  }
}
//createSMS is a Function that receives a phone number, after that it sends 
//the SMS, this function will be called using a foreach





//CREATING A FUNCTION TO SEND MESSAGES
const sendSMS = (arr) =>{
  arr.forEach(phoneNumber => {
    createSMS(phoneNumber)
  });
}




//CALLING THE FUNCTION sendSMS
sendSMS(listOfNumbers.numbers)