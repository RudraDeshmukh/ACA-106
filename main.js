Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
    camera=document.getElementById("webcam_live");
   
Webcam.attach(camera);

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("webcam_snap").innerHTML='<img id="captured_image" src="'+data_uri+'">'

    })
}
console.log('ml5 version'+ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WHPlmLCu-/model.json',model_loaded);

function model_loaded(){
    console.log("The model is loaded")
}
function identify_image(){
    img=document.getElementById("captured_image")
    classifier.classify(img,got_results)
}
function got_results(error,results){
    if(error){
        console.error(error);
    }else{
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}