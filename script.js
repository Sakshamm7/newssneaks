const fetchTopHeadlines = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let topHeadlinesHome = "";
  for (let i = 0; i < 3; i++) {
    item = r.articles[i];
    topHeadlinesHome =
      topHeadlinesHome +
      `
    <div class="card my-3 p-0" style="width: 18rem">
              <img src=${
                item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
              } class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
              <small class="text-primary fw-bold mt-1 mb-2">Source: ${
                item.source.name
              }</small>
                <h5 class="card-title mb-4">${item.title}</h5>

                <a href=${
                  item.url
                } class="btn btn-outline-primary">Read More</a>
              </div>
            </div>`;
  }
  topHeadlines.innerHTML = topHeadlinesHome;
};
const fetchWeather = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/everything?q=weather&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let weatherHome = "";
  for (let i = 0; i < 3; i++) {
    item = r.articles[i];
    weatherHome =
      weatherHome +
      `
    <div class="card my-3 p-0" style="width: 18rem">
              <img src=${
                item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
              } class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
              <small class="text-primary fw-bold mt-1 mb-2">Source: ${
                item.source.name
              }</small>
                <h5 class="card-title mb-4">${item.title}</h5>

                <a href=${
                  item.url
                } class="btn btn-outline-primary">Read More</a>
              </div>
            </div>`;
  }
  weather.innerHTML = weatherHome;
};
const fetchSports = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/everything?q=sports&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let sportsHome = "";
  for (let i = 0; i < 3; i++) {
    item = r.articles[i];
    sportsHome =
      sportsHome +
      `
    <div class="card my-3 p-0" style="width: 18rem">
              <img src=${
                item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
              } class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
              <small class="text-primary fw-bold mt-1 mb-2">Source: ${
                item.source.name
              }</small>
                <h5 class="card-title mb-4">${item.title}</h5>

                <a href=${
                  item.url
                } class="btn btn-outline-primary">Read More</a>
              </div>
            </div>`;
  }
  sports.innerHTML = sportsHome;
};
const fetchEntertainment = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/everything?q=entertainment&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let entertainmentHome = "";
  for (let i = 0; i < 3; i++) {
    item = r.articles[i];
    entertainmentHome =
      entertainmentHome +
      `
    <div class="card my-3 p-0" style="width: 18rem">
              <img src=${
                item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
              } class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
              <small class="text-primary fw-bold mt-1 mb-2">Source: ${
                item.source.name
              }</small>
                <h5 class="card-title mb-4">${item.title}</h5>

                <a href=${
                  item.url
                } class="btn btn-outline-primary">Read More</a>
              </div>
            </div>`;
  }
  entertainment.innerHTML = entertainmentHome;
};
const fetchEconomy = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/everything?q=economy&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let economyHome = "";
  for (let i = 0; i < 3; i++) {
    item = r.articles[i];
    economyHome =
      economyHome +
      `
    <div class="card my-3 p-0" style="width: 18rem">
              <img src=${
                item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
              } class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
              <small class="text-primary fw-bold mt-1 mb-2">Source: ${
                item.source.name
              }</small>
                <h5 class="card-title mb-4">${item.title}</h5>

                <a href=${
                  item.url
                } class="btn btn-outline-primary">Read More</a>
              </div>
            </div>`;
  }
  economy.innerHTML = economyHome;
};
fetchTopHeadlines();
fetchWeather();
fetchSports();
fetchEntertainment();
fetchEconomy();

// const fetchNews = async (query, pageNo, queryHome, querySection) => {
//   let a = await fetch(
//     `/api?q=${query}&apiKey=c612f0ed5fc542b6b52e376f4f3b9466`
//   );
//   let r = await a.json();
//   console.log(r);
//   queryHome = "";
//   for (let i = 0; i < 3; i++) {
//     item = r.articles[i];
//     queryHome =
//       queryHome +
//       `
//     <div class="card my-3 p-0" style="width: 18rem">
//               <img src=${
//                 item.urlToImage == null ? "./no-img.jpeg" : item.urlToImage
//               } class="card-img-top" alt="..." />
//               <div class="card-body d-flex flex-column justify-content-between">
//               <small class="text-primary fw-bold mt-1 mb-2">Source: ${
//                 item.source.name
//               }</small>
//                 <h5 class="card-title mb-4">${item.title}</h5>

//                 <a href=${
//                   item.url
//                 } class="btn btn-outline-primary">Read More</a>
//               </div>
//             </div>`;
//   }
//   querySection.innerHTML = queryHome;
// };
