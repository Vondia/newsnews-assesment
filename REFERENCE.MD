appendix 1. all the ways i tried to get the unixTimeStamp:
function compare_unixTimeStamp(article_a, article_b) {
return article_b.compare_unixTimeStamp - article_a.compare_unixTimeStamp;
}

const articlesSorted = [...articleCard].sort(compare_unixTimeStamp);

let result = articlesSorted.map((a) => a.unixTimeStamp);
let result2 = articlesSorted.map(({ unixTimeStamp }) => unixTimeStamp);

console.log(`"result:" ${result}`);
console.log(`"result2:" ${result2}`);

<
