import CMS from 'netlify-cms-app'

CMS.registerEventListener({
    name: 'postPublish',
    handler: ({ author, entry }) => console.log(JSON.stringify({ author, data: entry.get('data') })),
  });
  