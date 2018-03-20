const audioController = require("../controllers").Audio;
const videoController = require("../controllers").Video;
const mbuController = require("../controllers").MBUOutput;
const pmlController = require("../controllers").PML;
const sessionpmlController = require("../controllers").SessionPML;
const sessionController = require("../controllers").Session;
const userController = require("../controllers").Users;
const fs = require("fs");
const Stomp = require("stomp-client");
const cheerio = require("cheerio");
const ffmpeg = require("fluent-ffmpeg");
const cors = require("cors");

const destination = "/topic/DEFAULT_SCOPE";
const client = new Stomp("127.0.0.1", 61613, "", "");

var current_session = " ";
var pml_ctr = 0;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

module.exports = app => {
  client.connect(sessionId => {
    client.subscribe(destination, (body, headers) => {
      switch (headers.MESSAGE_PREFIX) {
        case "ADD_USER":
          userController.stompCreate(body);
          console.log("User Added!");
          break;

        case "add_session":
		  body = unescape(body).replaceAll('+',' ');
          var components = body.split(" ");
          console.log(components);

		  sessionController.stompCreate({
            user_id: components[1],
            session_id: components[2],
            duration: components[3],
            video_file_id: components[4],
            audio_file_id: components[5]
          });
		  console.log("Session Added");
          current_session = components[2];
          pml_ctr = 0;
          break;

        case "vrPerception":
		  body = unescape(body).replaceAll('+',' ');
		  //console.log(body)
          var splitter = body.split(' ');
          result = splitter.slice(0,2);
          result.push(splitter.slice(2).join(' '));
          //console.log(result[2]);
          $ = cheerio.load(result[2]);
          var au_evidence = [];
          var au_activation = [];

          $("aus")
            .find("evidence")
            .each(function(j, item) {
              au_evidence[j] = Number($(this).text());
            });

          $("aus")
            .find("activated")
            .each(function(j, item) {
              au_activation[j] = $(this).text() == "true";
            });


          pmlController.stompCreate({
            pml_file_id: current_session + "_pml_" + String(pml_ctr),
            source_name: $("source").attr("name"),
            age: $("body").attr("age"),
            gender: $("body").attr("gender"),
            smile_frequency: $("smiles").text(),
            attention_frequency: $("behaviorValue").text(),
            head_position: [
              Number($("position").attr("x")),
              Number($("position").attr("y")),
              Number($("position").attr("z"))
            ],
            head_rotation: [
              Number($("rotation").attr("rotx")),
              Number($("rotation").attr("roty")),
              Number($("rotation").attr("rotz"))
            ],
            gaze_direction: [
              $("gazeCategoryHorizontal").text(),
              $("gazeCategoryVertical").text(),
              $("gazeCategoryDirection").text()
            ],
            action_unit_evidence: au_evidence,
            action_unit_activation: au_activation,
            session_id: current_session,
			frame_timestamp: Math.round(Number($("headPose").find("timestamp").html()))
          });


          //console.log(k);
          pml_ctr = pml_ctr + 1;
          break;

      }
    });
  });


  app.use(cors());
  app.get("/report",(req,res)=>{
    res.status(200).send({
      message : "BOO!"
    })
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", (req, res) => {
    res.status(200).send({
      message: "Welcome to CICERO API"
    });
  });

  //Audio
  app.get("/api/audio", audioController.list);
  app.post("/api/audio", audioController.create);

  //Video
  app.get("/api/video", videoController.list);
  app.post("/api/video", videoController.create);
  app.get("/api/video/session/:sessionid", videoController.getSessionVideo);
  app.get("/api/video/:videoid", videoController.getVideoInfo);

  //MBU Outputs
  app.get("/api/mbu", mbuController.list);
  app.post("/api/mbu", mbuController.create);
  app.get("/api/mbu/:sessionid", mbuController.getMBUforSession);
  app.get("/api/mbu/:sessionid/data", mbuController.getMBUScoresForSession);
  //PML
  app.get("/api/pml", pmlController.list);
  app.post("/api/pml", pmlController.create);
  app.get("/api/pml/:pmlfileid", pmlController.getPMLInfo);
  app.get("/api/pml/:sessionid/audata", pmlController.getPMLAUInfo);

  //SessionPML
  app.get("/api/sessionpml", sessionpmlController.list);
  app.post("/api/sessionpml", sessionpmlController.create);
  app.get("/api/sessionpml/:sessionid", sessionpmlController.getPMLFiles);

  //Session
  app.get("/api/sessions", sessionController.list);
  app.post("/api/sessions", sessionController.create);
  app.get("/api/sessions/list/:userid", sessionController.getUserSessions);
  app.get("/api/sessions/:session_id", sessionController.getSession);

  //Users
  app.get("/api/users", userController.list);
  app.post("/api/users", userController.create);
  app.get("/api/users/:userid/check", userController.check);

  //Route for Video Streaming
  app.get("/video/:sessionid/:videofile", (req, res) => {
    //videoController.getVideoFileName(req.params.videoid)

    const path = "server/files/" + req.params.sessionid + "/" + req.params.videofile;


    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;
      const file = fs.createReadStream(path, { start, end });
      const head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Range": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4"
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": "video/avi"
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
    }
  });
};
