const algoliasearch = require('algoliasearch');

const client = algoliasearch('LPXVPR2NKD', 'fb75a2e619f4c3ea9011b0370f2fb347');
const index = client.initIndex('codeteck');
// index
//     .getObjects(['"vendorId":"113"'])
//     .then(({ results }) => {6
//         console.log(results);
//     }).catch(err => {
//         console.log(err);
//     });
// // index
// .search('9680071001')
// .then(({ hits }) => {
//   console.log(hits);
// })
// .catch(err => {
//   console.log(err);
// });
// index
//     .getObject('5763382000')
//     .then((results ) => {
//         console.log(results);
//     }).catch(err => {
//         console.log(err);
//     });
// let object = index.findObject( hit => hit.price == '123')
// .then((results ) => {
//         console.log(results)}).catch(err => {
//             console.log(err);
//         });
//   index.setSettings({
//     searchableAttributes: [
//      'vendorId',
//      '113'
//    ],
// //    customRanking: [
// //      'desc(popularity)'
// //    ],
//    attributesForFaceting: [
//      'searchable(category)',
//      'vehicleType'
//    ]
//  }).then((hits) => {
//     console.log(hits);
//  });
// index.searchForFacetValues(('category'), 'vendorId', {
//     filters: 'vendorId:113',
//     // headers: {
//     //   'X-Algolia-User-ID': 'user123'
//     // }
//   }).then(({ facetHits }) => {
//     console.log(facetHits);
//   }).catch((err )=> {
//                 console.log(err)})
// index.search('113', {
//     filters: '(vehicleType:car OR vehicleType:bike) AND vendorId:113'
//   }).then((hits)=> {
//     console.log(hits);
//   });
// index.search(
//     {
//       query: '123',
//       attributesToRetrieve: ['price'],
//       hitsPerPage: 50,
//     },
//     (err, { hits } = {}) => {
//       if (err) throw err;
  
//       console.log(hits);
//     }
//   );
index.searchRules({
    query: '123'
}, (err, content) => {
    console.log(content);
}).catch((err) => {console.log(err)});

let person = {
    firstname : 'sajid',
    lname : 'khan'
}

let info = person['firstname'] || null;
let Info = person['firstname'] ? person['firstname'] : null;
if(person['firstname'] ){
    console.log(person['firstname'])
}

// console.log(info)
// console.log("INFO:::::>",Info)