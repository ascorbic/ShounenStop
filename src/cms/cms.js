import CMS from 'netlify-cms-app';
import axios from 'axios';

console.log("where does this even go?");

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
