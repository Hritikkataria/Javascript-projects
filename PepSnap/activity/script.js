let videoElement = document.querySelector("video");
let recordButton = document.querySelector("#record");
let recordingState = false;
let mediaRecorder;


(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.onstart = function(){
       console.log("Inside on start");
    }
    mediaRecorder.ondataavailable =  function(e){
        console.log("Inside on data available");
        console.log(e.data);
        let videoObject = new Blob( [e.data] , {type:"video/mp4"} );
        console.log(videoObject);
      }
    mediaRecorder.onstop =  function(){
       console.log("Inside on stop");
    };
    recordButton.addEventListener("click" , function(){
      if(recordingState){
         // already recording is going on
         // stop the recording
      }
      else{
        // start the recording
      }
   });
})();

 
    
  
 
