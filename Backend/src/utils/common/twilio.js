// Import the Twilio client library
const client = require('twilio')('ACecfaab035e0eeb372fa7515852dbae0f', 'c83395fc38d8ac1289effa1a5e637163');

// Function to send a text message
function sendTextMessage(body) {
    console.log(body.message, body.to);

    // Create a Twilio message
    client.messages.create({
        body: body.message,
        to: '+91' + body.to,
        from: '+13612667516'
    })
        .then(message => console.log(message))
        .catch(error => console.log(error));
}

// Export the function
module.exports = {
    sendTextMessage
};
