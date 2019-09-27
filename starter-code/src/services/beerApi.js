import axios from "axios";

const beerService = axios.create({
  baseURL: "https://ih-beer-api.herokuapp.com/beers"
});

export const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get()
      .then(response => {
        console.log(response)
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOneBeer = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getRandomBeer = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/random`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const addNewBeer = body => {
  return new Promise((resolve, reject) => {
    beerService
      .post(`/new`, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
