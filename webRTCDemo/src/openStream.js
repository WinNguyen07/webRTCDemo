/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function openStream(){
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => {
        const video = document.getElementById('myStream');
        video.srcObject = stream;
        video.onloadedmetadata = function() {
          video.play();
        };
    })
    .catch(err => console.log(err)); 
};

module.exports = openStream;