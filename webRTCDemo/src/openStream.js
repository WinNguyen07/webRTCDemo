/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

function openStream(){
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => {
        playVideo(stream, 'myStream');        
        const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream: stream });
        p.on('signal', token => {   
            $('#txtMySignal').val(JSON.stringify(token));
        });
        
        $('#btnConnect').click(() => {
            const frSignal = JSON.parse($('#txtFrSignal').val());
            p.signal(frSignal);
        });
        
        p.on('stream', frStream => playVideo(frStream, 'frStream'));
    })
    .catch(err => console.log(err)); 
};

module.exports = openStream;