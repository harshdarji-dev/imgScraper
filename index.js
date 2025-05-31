const ddg = require('ddg-scraper')

const getSearchResults = async (query, results) => {
    if(query == ""){
        return [];
    }

    let urls = [];

    ddg.search({
        q: query,
        max: results
      }, (err, urls) => {
        if (!err) {
          urls.map((url) => {
              url = url.split("&rut=");
              console.log(url[0]);
              if(!(url[0].includes("duckduckgo.com"))){
                urls.push(url[0])
              }
          })
        }
      })

      return urls;
    }

    getSearchResults("appwrite sites overview", 8);
