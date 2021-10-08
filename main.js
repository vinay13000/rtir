 function setup(){
     canvas=createCanvas(900,350);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);


 }

 function draw(){
  image(video,0,0,900,350)
  classifier.clasify(video,gotResult)
 }

 function modelLoaded(){
     console.log("modelLoaded");

 }

 function gotResult(error,results){
     if(error){
         console.error(error);

     }
     else{
         console.log(results);
         document.getElementById("resut_object_name").innerHTML=results[0].label;
         document.getElementById("resut_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
     }
 }

 