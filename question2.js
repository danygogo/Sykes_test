//QUESTION 2

const accountSid = "AC4300b68916d77cd05cb17fef5ac0c2e3";
const authToken = "3c5a14b047be2a99707c430a644d5fad";
const client = require('twilio')(accountSid, authToken);


//Create the conversation

client.conversations.conversations
                    .create({friendlyName: 'My First Conversation'})
                    .then(conversation => console.log(conversation.sid));



//Get the service
client.conversations.conversations('CH329317503287459a847e5ae7dd0d3fbb')
      .fetch()
      .then(conversation => console.log(conversation.chatServiceSid));


//add a participant, you get the participant sid
client.conversations.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .participants
  .create({
     'messagingBinding.address': '<Your Personal Mobile Number>',
     'messagingBinding.proxyAddress': '<Your purchased Twilio Phone Number>'
   })
  .then(participant => console.log(participant.sid));


//Get the token using the CLI

//Go to the front end








//Important codes
//SID 'CH329317503287459a847e5ae7dd0d3fbb'
//SERVICE "IS30b1687890564c4887b623a4c24ce11f"

