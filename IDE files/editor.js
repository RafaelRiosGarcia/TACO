ace.require("ace/ext/language_tools");
var editor = ace.edit("IDE");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.renderer.setScrollMargin(0, 100, 0, 0);
editor.setOptions({
    fontSize: 13,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion:   true,
    //printMargin: 140 to be used when we get the minimap view
    printMargin: false
    
});
