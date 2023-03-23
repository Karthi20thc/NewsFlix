const CategoryContainerEL = document.querySelector(".CategoryContainer");
const clickedButtonEL = document.querySelector(".clickedButton");

// News Elements
const newsTitle = document.querySelector(".newsTitle");
const categoryEl = document.querySelector(".category");
const newsImgEl = document.querySelector(".newsImg");
const aboutNewsEl = document.querySelector(".aboutNews");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const authorEl = document.querySelector(".author");
const readMoreEl = document.querySelector(".readMore");
const fetchingEl = document.querySelector(".fetching");

const newsContentEl = document.querySelector(".newsContent");
const newsContentContainereL = document.querySelector(".newsContentContainer");

// API
let category = "all";

// This function will be called for each elemnts in the response object containing data .
function newsContentTemplate(data) {
  return `
       <div class="newsContent" style="margin-bottom: 15px ; border:2px solid #0b3b8f ; padding:'4px'">
          <div class="newsTitle">
            ${data.title}
          </div>
          <div class="imageAndContentContainer">
            <img
              src=${data.imageUrl}
              class="newsImg"
              alt=""
            />
            <div class="aboutNews">
              ${data.content}
            </div>
          </div>
          <div class="newsBottom">
            <a class="category_btn readMore" target="_blank" href=${data.readMoreUrl} >Read More</a>
            <span class="bottomContent">Author : <span class="author">${data.author}</span></span>

            <span class="bottomContent">Date : <span class="date"></span>${data.date}</span>
            <span class="bottomContent">Time : <span class="time"></span>${data.time}</span>
          </div>
        </div>
    `;
}

CategoryContainerEL.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(typeof event.target.value);

  // To show the user  which button is clicked in the webpage
  clickedButtonEL.textContent = event.target.value;

  // updating the categegory after clicking the specific button
  category = event.target.value;

  // passing the updated category value into the url for Api call
  let apiURl = `https://inshorts.deta.dev/news?category=${category}`;

  const callApi = async () => {
    fetchingEl.textContent = "Fetching......";
    fetchingEl.classList.add("red");

    try {
      const response = await axios.get(apiURl);
      console.log(response.data);

      // Extracting data from api
      const responseArrayOfObjects = response.data.data;

      // looping received array of Objects
      let newsContent = null;
      responseArrayOfObjects.forEach(function (arrayItem) {
        newsContent = newsContentTemplate(arrayItem);

        // very imoportant
        newsContentContainereL.insertAdjacentHTML("afterbegin", newsContent);
      });

      // simple loading state
      fetchingEl.textContent = "Fetched SuccessFully";
      fetchingEl.classList.remove("red");
      fetchingEl.classList.add("green");
    } catch (error) {
      console.log(error);
      // newsContentEl.textContent = error;
      window.alert(
        "SomeThing went Wrong !!!! Try refreshing The webpage and Try Again😁😁😁😁"
      );
    }
  };
  callApi();
});
