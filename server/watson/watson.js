const SpeechToText = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');

class WatsonHelper{

  constructor(user_name, password){
    this.speechToText = new SpeechToText({
      username : user_name,
      password : password,
      url: 'https://stream.watsonplatform.net/speech-to-text/api/'
    });
    this.audioFilePath = ' ';
    this.transcript = ' ';
    this.hesitations = 0;
  }


  countHesitations(sentence){
    var number_hes = 0;
    var words = sentence.split(" ");
    words.forEach((word)=>{
      if(word == '%HESITATION')
        number_hes++;
    })
    return number_hes;
  }

  setAudioFilePath(audioPath){
    this.audioFilePath = audioPath;
    return this;
  }

  recognize(){

    var done = false;

    var params = {
      audio : fs.createReadStream(this.audioFilePath),
      content_type : 'audio/wav'
    };

    this.speechToText.recognize(params, (error, response)=>{
      if(error){
        console.log(error)
      } else {
        response.results.forEach((result)=>{
          var trans = result.alternatives[0].transcript;
          this.transcript = this.transcript + ' ' + trans;
          this.hesitations = this.hesitations + this.countHesitations(trans);
          done = true;
        });
      }
    });

    require('deasync').loopWhile(function(){return !done;});
  }

  getTranscript(){
    return this.transcript;
  }

  printTranscript(){
    if(this.transcript.length != 'N/A')
      console.log(this.transcript);
    else
      console.log("No Transcript Yet");
  }

  getHesitations(){
    return this.hesitations;
  }

}

module.exports = WatsonHelper;
