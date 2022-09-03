RightWristX = ""
RightWristY = ""
LeftWristX = ""
LeftWristY = ""
difference = ""

function setup() {
    video = createCapture(VIDEO)
    canvas = createCanvas(600,600)
    canvas.position(900,75)
    posenet = ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}

function modelloaded() {
    console.log("PoseNet model is initialized")
}

function gotposes(result) {
    if (result.length>0) {
      console.log(result)
      RightWristX = result[0].pose.rightWrist.x
      RightWristY = result[0].pose.rightWrist.y
      LeftWristX = result[0].pose.leftWrist.x
      console.log("Left Wrist X = "+LeftWristX)
      console.log("Left Wrist Y = "+LeftWristY)
      LeftWristY = result[0].pose.leftWrist.y
      console.log("Right Wrist X = "+RightWristX)
      console.log("Right Wrist Y = "+RightWristY)
      difference = floor(LeftWristX-RightWristX)
    }
  }

  function draw() {
    background("burlywood")
    document.getElementById("name").innerHTML = "The size of the font is - "+difference+"px"
    fill("blue")
    textSize(difference)
    text('Aarush',50,400)
   
    }