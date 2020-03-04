
import { AUTOFILL } from 'actions';

chrome.runtime.onMessage.addListener(function (req) {

    switch (req.type) {
        case AUTOFILL:

            chrome.notifications.create({
                iconUrl: chrome.extension.getURL('images/notification.png'),
                type: 'basic',
                title: 'Could not Autofill',
                message: 'Would need to add this feature'
            });

            break;

        default:
            break;
    }

})