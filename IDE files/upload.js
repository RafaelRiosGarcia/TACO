//test to upload files to the IDE to be worked on
document.querySelector('#file-selector').addEventListener('change', (event) => {
    const input = event.target;
      const file = event.target.files;
    const reader = new FileReader();
    if ('files' in input && input.files.length > 0) {
      placeFileContent(document.getElementById('content-target'),input.files[0])
  }
  });
  
  function placeFileContent(target, file) {
      readFileContent(file).then(content => {
        editor.setValue(content);
        fileName = file.Name;
    }).catch(error => console.log(error));
  }
  
  function readFileContent(file) {
      const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result)
      reader.onerror = error => reject(error)
      reader.readAsText(file)
    })
  }