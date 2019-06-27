/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function openStream(){
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => playVideo(stream, 'myStream'))
    .catch(err => console.log(err)); 
};

module.exports = openStream;