
//QUESTION 1
const accountSid = "AC4300b68916d77cd05cb17fef5ac0c2e3";
const authToken = "3c5a14b047be2a99707c430a644d5fad";
const client = require('twilio')(accountSid, authToken);


//to create the room
client.video.rooms.create({uniqueName: 'DailyStandup'})
                    .then(room => console.log(room.sid))
                    .catch(()=>console.log('error'));



//To get the URL

client.video.rooms('RMe3dc6ea00dc8a5331d98490c240b96d5')
            .fetch()
            .then(room => console.log(room.url));


