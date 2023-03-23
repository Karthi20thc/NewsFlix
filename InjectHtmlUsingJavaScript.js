export function newsContentTemplate(data) {
  return `
         <div class="newsContent" style="margin-bottom: 15px">
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
