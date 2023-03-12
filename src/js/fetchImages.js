
export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(
    `https://pixabay.com/api/?key=29588079-fbc492831fdad231bf7222b96&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {

      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
     
    })
    .catch(error => {
      console.error(error);
    });
};

// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export async function fetchImages(searchImg, pageNr, perPage) {
//   const searchParams = new URLSearchParams({
//     key: '31354744-e6340b12404bc1f4908fb1f36',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     q: searchImg,
//     per_page: perPage,
//     page: page,
//   });

//   const response = await axios.get(`?${inputValue}`);

//   if (searchImg === '') {
//     Notify.warning(
//       "UPS. I can't find the void. Please try typing something other, than spaces"
//     );
//     return;
//   }
//   return response;
// }