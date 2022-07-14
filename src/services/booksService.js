import axios from 'axios';

const URL_BACKEND = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const API_ID = 'w6XStSB1JjBpPnipOCMI';

const fetchData = async () => {
  const response = await axios.get(`${URL_BACKEND}/${API_ID}/books`);
  const dataBook = response.data;
  const dataBookArray = Object.entries(dataBook).map((book) => (
    {
      id: book[0],
      ...book[1][0],
    }
  ));
  return dataBookArray;
};

export default fetchData;
