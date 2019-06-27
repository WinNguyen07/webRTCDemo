/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const openStream = require('./openStream');

openStream();




//openStream;

//const Peer = require('simple-peer');
//
//const p = new Peer({ initiator: location.hash === '#1', trickle: false });
//
//p.on('signal', token => {   
//    $('#txtMySignal').val(JSON.stringify(token));
//});
//
//// Send + connect data
////p.on('connect', () => {
////    setInterval(() => p.send(Math.random()), 2000);
////});
////
////p.on('data', data => console.log('Nhan du lieu: ' + data));
////end
//
//
//
//$('#btnConnect').click(() => {
//    const frSignal = JSON.parse($('#txtFrSignal').val());
//    p.signal(frSignal);
//});
