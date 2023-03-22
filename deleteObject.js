const algoliasearch = require('algoliasearch');

const client = algoliasearch('LPXVPR2NKD', 'fb75a2e619f4c3ea9011b0370f2fb347');
const index = client.initIndex('codeteck');

index
    .deleteObject('myID1')
    .then(({ results }) => {
        console.log(results);
    }).catch(err => {
        console.log(err);
    });