var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error =>{
    console.log(error);
})

document.querySelector('button').addEventListener('click' , () => {
    var canvas = document.querySelector('canvas');
    canvas.hight = video.videoHight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext ('2d');
    
});