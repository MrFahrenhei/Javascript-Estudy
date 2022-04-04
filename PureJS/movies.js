const movies = [
    {title: 'avengers', year: 2012, rating: 8},
    {title: 'avengers 2', year: 2015, rating: 5},
    {title: 'avengers 3', year: 2018, rating: 9},
    {title: 'avengers 4', year: 2019, rating: 10},
];
// all the movies in 2018 with ranting > 4
// sort them by their rating
// descending order
// pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);