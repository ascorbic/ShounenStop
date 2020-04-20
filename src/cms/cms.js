import CMS from 'netlify-cms-app'

CMS.registerEventListener({
  name: 'postPublish',
  handler: ({ author, entry }) => {
    console.log(`entry.newRecord:`, entry.newRecord); // true
    console.log(`entry.collection:`, entry.collection); // 'articles'
    console.log(`entry.data:`, entry.data); // { ... }
    console.log("OMG WHERE IS THIS");
    if (entry.newRecord && entry.collection === 'articles') {
      // trigger webhook here
    }
  },
})
