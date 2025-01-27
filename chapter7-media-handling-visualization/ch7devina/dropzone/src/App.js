import './App.css';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function App() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    })

  const {getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject} = useDropzone({onDrop,
          accept:{
            'image/jpg': ['.jpg'],
            'video/mov': ['.mov'],
          }})

  //declare variable that call useDropzone, should be accept image

  return (
    <div className="App">
      <div
        {...getRootProps({
          className: `dropzone
          ${isDragAccept && 'dropzoneAccept'}
          ${isDragReject && 'dropzoneReject'}`,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button>Import</button>
    </div>
  );
}

export default App;
