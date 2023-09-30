const fetchTopHeadlines = async (query, pageNo) => {
  let a = await fetch(
    "https://newsapi.org/v2/top-headlines/?country=in&country=us&apiKey=c612f0ed5fc542b6b52e376f4f3b9466"
  );
  let r = await a.json();
  console.log(r);
  let topHeadlinesPage = "";

  for (let item of r.articles) {
    topHeadlinesPage =
      topHeadlinesPage +
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
  topHeadlinesMain.innerHTML = topHeadlinesPage;
};
fetchTopHeadlines();
{
  /* <p class="card-text">
                    ${item.description}
                  </p> */
}
