const { search, translate } = require("@navetacandra/ddg");

// (async () => {
//     const regularSearch = await search({ query: "aceternity" }, "regular", true);
//     console.log(regularSearch);
//   })();

//   function search = async (query) => {
//     const regularSearch = await search({ query: "aceternity" }, "regular", true);
//     console.log(regularSearch);

// }

const searchResults = async (query, num) => {
    const regularSearch = await search({ query: query }, "regular", true);
    console.log(regularSearch.results.slice(0, num || 10));
    return regularSearch.results.slice(0, num || 10);
}

// const imageResults = async (query, num) => {
//     const imageSearch = await search({ query: query }, "image", true);
//     console.log(imageSearch);
//     if (imageSearch.hasNext) {
//         const nextImageSearch = await search(
//           { query: query, next: imageSearch.next },
//           "image",
//         );
//         console.log(nextImageSearch);
//       }
// }

const videoResults = async (query, num) => {
    const videoSearch = await search({ query: query }, "video", true);
    console.log(videoSearch.results.slice(0, num || 10));
    return videoSearch.results.slice(0, num || 10);
}

const newsResults = async (query, num) => {
    const newsSearch = await search({ query: query }, "news", true);
    console.log(newsSearch.results.slice(0, num || 10));
    return newsSearch.results.slice(0, num || 10);
}

const mapResults = async (query, num) => {
    const mapSearch = await search({ query: query }, "map", true);
    console.log(mapSearch.results.slice(0, num || 10));
    return mapSearch.results.slice(0, num || 10);
}

// searchResults("valorant", 5)
// imageResults("valorant", 5)
// videoResults("valorant", 5)
// newsResults("valorant", 5)



const imageResults = async (query, num) => {
    const response = await fetch("https://duckduckgo.com/i.js?o=json&q=valorant&l=wt-wt&vqd=4-139399446093623107132540197414003147033&p=1", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": "\"Android\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "Referer": "https://duckduckgo.com/",
          "Referrer-Policy": "origin"
        },
        "body": null,
        "method": "GET"
      });
      const data = await response.json();
      console.log(data);
}

imageResults("valorant", 5)
