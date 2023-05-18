// DrawingBoard.js
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function DrawingBoard({ setCanvas }) {
    const canvasRef = useRef();

    useEffect(() => {
        const newCanvas = new fabric.Canvas('canvas', {
            width: 400,
            height: 300,
            backgroundColor: 'lightgrey',
            selection: true, // Enable group selection
        });
        
        setCanvas(newCanvas);
    }, [setCanvas]);

    return (
        <div className="drawing-board">
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default DrawingBoard;
