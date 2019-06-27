/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const openStream = require('./openStream');
const $ = require('jquery');

//openStream;

const Peer = require('simple-peer');

const p = new Peer({ initiator: location.hash === '#1', tricke: false });

p.on('signal', token => {   
    $('#txtMySignal').val(JSON.stringify(token));
});

$('#btnConnect').click(() => {
    const frSignal = JSON.parse($('#txtFrSignal').val());
    p.signal(frSignal);
});

console.log('Xin chao');

