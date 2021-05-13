const section11 = document.getElementById('list');

let requestURL = 'recent.json';
let request = new XMLHttpRequest();
let listlength = 10;

function loadObj () {
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const data = request.response;
    showSections(data);
  }

  function showSections(jsonObj) {
    const sections = jsonObj;

    for(let i = 0; i < listlength; i++) {
      const myArticle = document.createElement('article');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');

      var src = sections[i].img;
      var src2 = sections[i].url;
      var str = '<a href=' + src2 + '>' + '<img src=' + src + '>' + '</a>' ;
      myArticle.innerHTML = str;
      myPara1.textContent = sections[i].title;
      myPara2.textContent = 'CP: ' + sections[i].cp;

      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);

      section11.appendChild(myArticle);
    }
}
}

function changetap() {
    var recent = document.getElementById('recent');
    var view = document.getElementById('view');
    var popular = document.getElementById('popular');
    recent.addEventListener('click', function(){
        requestURL = 'recent.json';
        listlength = 10;
        view.classList.remove('active');
        popular.classList.remove('active');
        recent.classList.add('active');
    })
    view.addEventListener('click', function(){
        listlength = 10;
        requestURL = 'view.json';
        recent.classList.remove('active');
        popular.classList.remove('active');
        view.classList.add('active');
    })
    popular.addEventListener('click', function(){
        listlength = 10;
        requestURL = 'popular.json';
        recent.classList.remove('active');
        view.classList.remove('active');
        popular.classList.add('active');
    })
}

loadObj ();
changetap();