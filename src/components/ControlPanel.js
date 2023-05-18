// ControlPanel.js
import React from 'react';
import { fabric } from 'fabric';

function ControlPanel({ canvas, setCanvas }) {
    const addCircle = () => {
        var circle = new fabric.Circle({
            radius: 50,
            fill: 'red',
            left: 100,
            top: 100,
            selectable: true,  // Make the circle selectable
        });
        canvas.add(circle);
        setCanvas(canvas); // Update the state with the new canvas object
    };

    const addRectangle = () => {
        var rectangle = new fabric.Rect({
            width: 100,
            height: 80,
            fill: 'blue',
            left: 200,
            top: 150,
            selectable: true,  // Make the rectangle selectable
        });
        canvas.add(rectangle);
        setCanvas(canvas); // Update the state with the new canvas object
    };

    const addText = () => {
        var text = new fabric.Textbox('Hello Fabric.js!', {
            width: 200,
            fontSize: 20,
            left: 150,
            top: 200,
            selectable: true,  // Make the text selectable
        });
        canvas.add(text);
        setCanvas(canvas); // Update the state with the new canvas object
    };

    const deleteSelected = () => {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.remove(activeObject);
            canvas.renderAll(); // After removing, force the canvas to re-render
            setCanvas(canvas); // Update the state with the new canvas object
        }
    };

    return (
        <div className="control-panel">
            <button onClick={addCircle}>Add Circle</button>
            <button onClick={addRectangle}>Add Rectangle</button>
            <button onClick={addText}>Add Text</button>
            <button onClick={deleteSelected}>Delete Selected</button>
        </div>
    );
}

export default ControlPanel;
