document.querySelector('.get-html')
        .addEventListener('click', getHtml);
        
function getHtml() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.container-html')
              .innerHTML = xhr.responseText;
        }
    }
 xhr.open('get', 'html-data.html', true);
 xhr.send();
}

