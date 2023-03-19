const algoliasearch = require('algoliasearch');

const client = algoliasearch('LPXVPR2NKD', 'fb75a2e619f4c3ea9011b0370f2fb347');
const index = client.initIndex('codeteck');

const objects = [
  {
    objectID: 1,
    name: 'boo',
  },
];

index
  .partialUpdateObjects(objects)
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });