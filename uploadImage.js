/**
 * Created by Rashmika on 21-08-2015.
 */
document.addEventListener('DOMContentLoaded', function(){
    var inputFile = document.querySelector('input[type=file');
    var canvas_content = document.getElementById('canvas_content');
    inputFile.addEventListener('change', function () {
        console.log(this.files);
        var myCanvas = document.createElement('canvas');
        canvas_content.appendChild(myCanvas);
    });
});