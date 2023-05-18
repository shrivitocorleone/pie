// App.js
import React, { useState } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import DrawingBoard from './components/DrawingBoard';

function App() {
    const [canvas, setCanvas] = useState(null);

    return (
        <div className="app-container">
            <h1 className="app-title">PIE - Paperd.ink Editor</h1>
            <ControlPanel canvas={canvas} />
            <DrawingBoard setCanvas={setCanvas} />
        </div>
    );
}

export default App;
