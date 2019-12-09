import axios from "axios";

const beerService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers"
  // baseURL: "/beers",
  //withCredentials: true,
  // crossDomain: true
});

// export const getAllBeers = () => {
//   return new Promise((resolve, reject) => {
//     beerService
//       .get("/all")
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

export const getAllBeers = async function getAllBeers() {
  // can only write await inside an async function
  try {
    const response = await beerService.get("/all"); //running an asyncronous operation
    return response.data; //equivalent of .then()
  } catch (error) {
    console.log(error);
    throw error; // sent the error to the next operation
  }
};

export const getOneBeer = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/single/${id}`)
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
  console.log("BODY", body);
  return new Promise((resolve, reject) => {
    beerService
      .post("/new", body)
      .then(response => {
        console.log("RESPONSE:", response);
        resolve(response.data);
      })
      .catch(error => {
        reject("THE ERROR:", error);
      });
  });
};
