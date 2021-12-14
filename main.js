function preload(){
clown_nose = loadImage("https://i.postimg.cc/TPFKp9T2/Clown-nose-large-1.png")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

nosex = 0;
nosey = 0;

function draw(){
    image(video, 0, 0, 300, 300)

    //stroke(255, 0, 0)
    //fill(255, 0, 0)
    //circle(nosex, nosey, 20)
    image(clown_nose, nosex - 25, nosey- 18, 50, 50);
    
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose x = " + result[0].pose.nose.x)
        console.log("nose y = " + result[0].pose.nose.y)

        nosex = result[0].pose.nose.x
        nosey = result[0].pose.nose.y
    }
}

function take_snapshot(){
    save("MyPic.png");
}