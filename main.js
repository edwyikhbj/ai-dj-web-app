function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,530)
}