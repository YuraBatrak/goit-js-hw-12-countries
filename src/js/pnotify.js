import { notice, error, defaults } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
// import '@pnotify/core/dist/Angeler.css';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.icons = 'material';

function myNotice() {
    notice({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 2000,
        
        
    });
}

function myError() {
    error({
        text: "There's no country with this name",
        delay: 2000,
    
    });
}
export { myNotice, myError };
