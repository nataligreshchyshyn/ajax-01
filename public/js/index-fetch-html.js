document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);
    
function fetchHtml() {
    fetch('html-data.html')
      .then( response => response.text() )
      .then( htmlData => 
         document.querySelector('.container-html').innerHTML = htmlData
        );
}