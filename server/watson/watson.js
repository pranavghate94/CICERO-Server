const SpeechToText = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');

class WatsonHelper{

  constructor(user_name, password){
    this.speechToText = new SpeechToText({
      username : user_name,
      password : password
    });
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

  //Counts number of hesitations
  countTotalHesitations(wav_file_path){

    var number_of_hesitations = 0;
    var json_result;

    var params = {
      audio : fs.createReadStream(wav_file_path),
      content_type : 'audio/wav'
    }

    //Watson Speech-To-Text Recogniser
    this.speechToText.recognize(params, (error ,response)=>{
      if(error){
        console.log(error);
      } else {
        response.results.forEach((result)=>{
          var trans = result.alternatives[0].transcript;
          console.log(trans);
          number_of_hesitations += this.countHesitations(trans);
        })
        console.log(number_of_hesitations);
      }
    });


  }
}

export default WatsonHelper;
