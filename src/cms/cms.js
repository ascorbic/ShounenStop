import CMS from 'netlify-cms-app';
import axios from 'axios';
import * as NativeColorWidget from 'netlify-cms-widget-native-color'
import * as ColorWidget from "netlify-cms-widget-color";

CMS.registerWidget('native-color', NativeColorWidget.Control)
CMS.registerWidget("color", ColorWidget.Control);

CMS.registerEventListener({
  name: 'postPublish',
  handler: ({ author, entry }) => {
    console.log(`entry.newRecord:`, entry.newRecord); // true
    console.log(`entry.collection:`, entry.collection); // 'articles'
    console.log(`entry.data:`, entry.data); // { ... }
    console.log("OMG WHERE IS THIS");

    axios.get('https://us-central1-shounenstop.cloudfunctions.net/ValidatePayment')
        .then(function (response) {
            console.log(response);
        });

    if (entry.newRecord && entry.collection === 'articles') {
      // trigger webhook here
    }
  },
})
