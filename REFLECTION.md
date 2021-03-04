appendix 1. all the ways i tried to get the unixTimeStamp:
function compare_unixTimeStamp(article_a, article_b) {
return article_b.compare_unixTimeStamp - article_a.compare_unixTimeStamp;
}

const articlesSorted = [...articleCard].sort(compare_unixTimeStamp);

let result = articlesSorted.map((a) => a.unixTimeStamp);
let result2 = articlesSorted.map(({ unixTimeStamp }) => unixTimeStamp);

console.log(`"result:" ${result}`);
console.log(`"result2:" ${result2}`);

const articleArray = Object.values(articlesSorted);

let rezult = articleArray.map((a) => a.compare_unixTimeStamp);

console.log(rezult);

// {articlesSorted.filter((article) => {
// return (
// timeStamp={article.unixTimeStamp}
// )})}

// const sorted = articlesSorted.sort(compare_unixTimeStamp);

// // console.log(`"here goes nothing: " ${sorted} `);

// // const filteredArticles = articleCard.find((articleCard) => {
// // return articleCard.unixTimeStamp === Math.max;
// // });

// // console.log(`"this is a test: " ${filteredArticles}`);
// console.log(sorted;
