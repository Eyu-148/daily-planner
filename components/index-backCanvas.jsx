import React, { useEffect, useRef } from "react";
import { Ball } from "./Ball";

// @ts-check
export function BackCanvas(props) {
    const { draw, ...rest } = props
    // create a ref for canvas: as we need to modify DOM
    const canvasRef = useRef(null);
    const intervalRef = useRef(null);
    const mycanvas = canvasRef.current; // canvas
    const context = mycanvas.getContext("2d"); // context
    mycanvas.width = document.documentElement.clientWidth - 10;
    mycanvas.height = document.documentElement.clientHeight - 10;

    let balls = [];
    // create Ball function
    function Ball() {
        this.x = Math.floor(Math.random() * mycanvas.width);
        this.y = Math.floor(Math.random() * mycanvas.height);
        this.r = 10;
        this.color = 'gray';
        this.dx = Math.floor(Math.random() * 10) - 5;
        this.dy = Math.floor(Math.random() * 10) - 5;

        this.index = balls.length;

        // fix x & y to keep the ball inside canvas
        if(this.x <= this.r) {
            this.x = this.r;
        } 
        else if ( this.x >= mycanvas.width - this.r) {
            this.x = mycanvas.width - this.r;
        }
        else {
            this.x = this.x;
        }

        if(this.y <= this.r) {
            this.y = this.r;
        } 
        else if ( this.y >= mycanvas.height - this.r) {
            this.y = mycanvas.height - this.r;
        }
        else {
            this.y = this.y;
        }
        balls.push(this);
    }

    Ball.prototype.update = function() {
        this.x += this.dx;
        this.y += this.dy; // update x, y

        // bouncing
        if(this.x + this.r >= mycanvas.width || this.x - this.r <= 0) {
            this.dx *= -1;
        }
        if(this.y + this.r >= mycanvas.height || this.y - this.r <= 0) {
            this.dy *= -1;
        }
    }

    Ball.prototype.render = function() {
        context.beginPath();
        // 透明度
        context.globalAlpha = 1;
        // 画小球
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();

        // draw lines
        for(let i = 0; i < balls.length; i++) {
            // solve for distance between 2 balls
            let distance = Math.sqrt(Math.pow((balls[i].x - this.x), 2) + Math.pow((balls[i].y -this.y), 2));
            if( distance < 150) {
                context.beginPath();
                // 线的透明度，根据当前已经连线的小球的距离进行线的透明度设置
                // 距离越近透明度越大，距离越远透明度越小
                context.globalAlpha = 1 - distance / 150;
                context.moveTo(balls[i].x, balls[i].y);
                context.lineTo(this.x, this.y);
                context.closePath();
                context.strokeStyle = 'pink';
                context.stroke();
            }
        }
    }

    for (let i=0; i < 20; ++i) {
        new Ball();
    }

    // using useEffect: draw canvas after the component mounts
    useEffect(() => {
        
        
    }, []);

    return (
        <canvas ref={canvasRef} {...rest} />
    );
}