document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);
    
function fetchJson() {
    fetch('client-data.json')
      .then( response => response.json() )
      .then( clientData => {
         document.querySelector('.client-name').innerText = clientData.name;
         document.querySelector('.account-balance').innerText = clientData.balance;
        })
}
