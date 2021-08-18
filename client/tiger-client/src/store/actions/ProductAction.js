import Axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getProducts = async () => {
  try {
    const url = baseUrl + '/products';
    const res = await Axios.get(url);
    if (res.status === 200) {
      return res.data.products;
    }
    return false;
  } catch (err) {
    alert('Something went wrong');
    return false;
  }
};
