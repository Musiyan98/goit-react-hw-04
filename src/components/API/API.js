import axios from 'axios';

const API_KEY = '-lRnY3TJ6t5xOmXfjKlsjyYxfn1PtmN_fCnPPSgoiKg';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (query, page) => {
  console.log('api  :', query);
  const responce = await axios.get(`search/photos/?client_id=${API_KEY}`, {
    params: {
      query,
      page,
      per_page: 15,
    },
  });
  console.log('response:', responce);
  console.log('response.data :', responce.data);
  return responce.data;
};

export default fetchImages;
