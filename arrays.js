const footballClub = ['Manchester Utd', 'Manchester City', 'Chelsea', 'Liverpool', 'Aston Villa'];
// let club = footballClub.join(' and ');
// let index2 = footballClub.indexOf('Chelsea')
// let club2 = footballClub.find(footballClub => footballClub.length < 8)
let index = footballClub.map(footballClub => footballClub.length)
// // console.log(club2);
// footballClub.splice(2, 3, 'Liverpool', 'Leciester');
// console.log(footballClub);
// let topFour = footballClub.splice(0, 3, "Liverpool", "Leciester");
let psbFour = footballClub.slice(1, 4)
console.log(index);