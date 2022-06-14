import React from "react";
import './App.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from "@toast-ui/react-image-editor";

function App() {
    const myTheme = {
        // Theme object to extends default dark theme.
    };

    return (
    <div className="App">
        <ImageEditor
            includeUI={{
                loadImage: {
                    path: 'img/sampleImage.jpg',
                    name: 'SampleImage',
                },
                theme: myTheme,
                menu: ['rotate','draw', 'crop', 'filter'],
                initMenu: 'filter',
                uiSize: {
                    width: '100%',
                    height: '100vh',
                },
                menuBarPosition: 'bottom',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70,
            }}
            usageStatistics={true}
        />
    </div>
  );
}

export default App;
