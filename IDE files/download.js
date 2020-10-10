
//code used to download file when the download button is clicked
const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
};

//runs at the beginning of the page load to have an empty file name unless otherwise stated
window.fileName = document.getElementById("fileName").value;
//sets up an event and sets the file name to the value in the input
document.querySelector('#fileName').addEventListener('input', () => {
    window.fileName = document.getElementById("fileName").value;
});

//gets the content of the editor and calls the 'downloadToFile' function
document.querySelector('#save').addEventListener('click', () => {
    const textArea = ace.edit("IDE").getValue();
    
    
    downloadToFile(textArea, fileName+'.js', 'text/javascript');
});

