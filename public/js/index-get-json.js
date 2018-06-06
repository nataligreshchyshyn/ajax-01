document.querySelector('.get-json')
    .addEventListener('click', getJson);
    
function getJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name')
                .innerText = clientData.name;
            document.querySelector('.account-balance')
                .innerText = clientData.balance;
        }
    }
//    xhr.open('get', 'client-data.json?r=' + Math.random(), true);
    xhr.open('get', 'client-data.json', true);
    xhr.send();
}