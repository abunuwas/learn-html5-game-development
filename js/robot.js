'use strict';

var canvas = null;
var context = null;
var img = null;
var frameRate = 1000/30
var frame=0;

var assets = [
	'assets/robowalk00.png',
	'assets/robowalk01.png',
	'assets/robowalk02.png',
	'assets/robowalk03.png',
	'assets/robowalk04.png',
	'assets/robowalk05.png',
	'assets/robowalk06.png',
	'assets/robowalk07.png',
	'assets/robowalk08.png',
	'assets/robowalk09.png',
	'assets/robowalk11.png',
	'assets/robowalk12.png',
	'assets/robowalk13.png',
	'assets/robowalk14.png',
	'assets/robowalk15.png',
	'assets/robowalk16.png',
	'assets/robowalk17.png',
	'assets/robowalk18.png'
	];

var frames = [];

var onImageLoad = function(){
    console.log('image loaded');
};

var setup = function(){
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (var i in assets){
        img = new Image();
        img.onload = onImageLoad;
        img.src = assets[i];
        frames.push(img);
    };
    setInterval(animate, frameRate);
};

var animate = function(){
    //context.clearRect(0,0,canvas.width,canvas.heigth);
    //context.beginPath();
    canvas.width = canvas.width;
    context.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length;
    //context.closePath();
};

document.onload = setup();

