const imageMarkup = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <div class="photo-card">
          <a href="${largeImageURL}" class="gallery-link">
           <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          
          <div class="info">
           <p class="info-item">
               <b>Likes</b>${likes}
           </p>
           <p class="info-item">
               <b>Views</b>${views}
           </p>
              <p class="info-item">
              <b>Comments</b>${comments}
           </p>
           <p class="info-item">
              <b>Downloads</b>${downloads}
           </p>
          </div>
          </a>
      </div>`;
  };
  
  export default imageMarkup;