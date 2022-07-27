export default {
    actions: {
        'explore': {
            name: 'Explore',
            progressPerDay: { energy: 1 },
            baseCost: { energy: 5 },
        },
        'build': {
            name: 'Build',
            progressPerDay: { energy: 1 },
            baseCost: { energy: 10 },
        }
    }

}

// actions: {
//     'explore': {
//         name: 'Explore',
//         progressPerDay: { energy: 1 },
//         baseCost: { energy: 25 }
//     },
//     'clearLand': {
//         name: 'Clear Land',
//         progressPerDay: { energy: 1 },
//         baseCost: { energy: 25 },
//         onComplete: ( baseData, gridID ) => {

//         }
//     },
//     'buildHut': {
//         costPerDay: 1,
//         progressPerDay: { energy: 1 },
//         baseCost: { energy: 50 },
//     }
// }