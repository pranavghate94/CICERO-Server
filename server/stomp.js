var Stomp = require('stomp-client');
var client = new Stomp('127.0.0.1',61613,'','');
var destination = '/topic/manager'

client.connect(function(session_id){
    //var k = 1;
    client.subscribe(destination, (body)=>{
        console.log(body);
    });
});
