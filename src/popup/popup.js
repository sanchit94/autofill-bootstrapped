import { AUTOFILL } from 'actions';


const autofillBtn = document.getElementById('autofill');

autofillBtn.addEventListener('click', function () {

    chrome.runtime.sendMessage({ type: AUTOFILL })

})