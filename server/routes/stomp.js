const Stomp = require("stomp-client");
const destination = '/topic/madden';
const client = new Stomp('127.0.0.1',61613,'','');

client.connect((sessionId) => {
    client.subscribe(destination, (body)=>{
        console.log(body);
    });
});
