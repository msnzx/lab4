
fetch('/hits'+location.pathname+'page')
    .then(r => r.text())
    .then(txt => {
        const div = document.getElementById('hits')
        div.innerHTML = 'Current hits for this page: '+txt;
    });