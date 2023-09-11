console.log("Aniket D Giri");

//http module for web-server
const http = require("http");

//requiring the URl module
const url = require("url");

const fs = require("fs");

// const overviewData = fs.readFileSync(`${__dirname}/views/times.html`, "utf-8");
// const cardsData = fs.readFileSync(`${__dirname}/views/cards.html`, "utf-8");

const replaceTemplate = (item, overviewData) => {
  let output = overviewData.replace(/{%HEADINGNAME%}/g, item.title);
  output = output.replace(/{%SAMPLE_HEADING%}/g, item.title.slice(0, 10));
  console.log(output);
  return output;
};

const webServer = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);
  if (pathName === "/getTimeStories" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
      // "content-type": "text/html",
    });

    const data = fs.readFileSync(`${__dirname}/data/timesData.json`, "utf-8");
    detailsData = JSON.parse(data);

    //replacing the HTML file content with the API response
    // const updatedOverviewHTML = detailsData
    //   .map((item) => replaceTemplate(item, cardsData))
    //   .join("");

    // const finalHTML = overviewData.replace(
    //   /{%HEADINGCARD%}/,
    //   updatedOverviewHTML
    // );

    res.end(data);
  } else {
    res.end("Page not found");
  }
});

const PORT = 5000;
webServer.listen(PORT, "127.0.0.1", () => {
  console.log("server started..");
});
