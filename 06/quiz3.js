var $btnRed = document.querySelector('.add-red');
var $btnAdd = document.querySelector('.add-btn');
var $btnDelete = document.querySelector('.delete-btn');
var $btnReset = document.querySelector('.reset-btn');
var $btnToggle = document.querySelector('.toggle-btn');
var $btnText = document.querySelector('.text-btn');
var $btnImage = document.querySelector('.image-btn');

function addred () {
    var $box = document.querySelectorAll('.box');
    for (var i = 0; i < $box.length; i++){
        $box[i].classList.add('red');
    }
}

function addbox () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('box');
}

function deletebox () {
    var $box = document.querySelector('.box');
    document.body.removeChild($box);
}

function Reset () {
    var $box = document.querySelectorAll('.box');
    for (var i = 0; i < $box.length; i++){
        document.body.removeChild($box[i]);
    }
}

function toggle () {
    console.log("toggle");
    var $box = document.querySelectorAll('.box');
    if ($box[0].style.visibility == "visible") {
        for (var i = 0; i < $box.length; i++){
            $box[i].style.visibility = "hidden";
        }
    }
    else {
        for (var i = 0; i < $box.length; i++){
            $box[i].style.visibility = "visible";
        }
    }
}

function addText(){
    var $box = document.querySelectorAll('.box');
    var $txt = document.querySelector('.txt');
    for (var i = 0; i < $box.length; i++){
        $box[i].innerHTML = $txt.value;
    }
}

function addImmage () {
    var $box = document.querySelector('.box');
    var src = 'https://i.imgur.com/69NjYBH.png';
    var str = '<img src=' + src + "alt=''>";
    $box.innerHTML = str;
}

$btnRed.addEventListener('click', addred);
$btnAdd.addEventListener('click', addbox);
$btnDelete.addEventListener('click', deletebox);
$btnReset.addEventListener('click', Reset);
$btnToggle.addEventListener('click', toggle);
$btnText.addEventListener('click', addText);
$btnImage.addEventListener('click', addImmage);