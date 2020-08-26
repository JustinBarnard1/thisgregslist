import Car from "./Models/Car.js";
import Home from "./Models/Home.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  homes: [
    new Home({ model: "Two Story", year: 2018, price: 295000, img: "https://i.pinimg.com/originals/e2/71/43/e27143e65ea0b8c48ba9aaca282feb9e.jpg", description: "Great location, large yard, and other stuff that makes you want to buy this home." }),
    new Home({ model: "Mobile", year: 2012, price: 80000, img: "https://www.thegazette.com/storyimage/GA/20180428/ARTICLE/180429624/AR/0/AR-180429624.jpg&MaxH=500&MaxW=900", description: "Quiet neighborhood, the sun rises and sets, the sky is blue 7 months out of the year." }),
    new Home({ model: "Single Story", year: 2016, price: 320000, img: "https://luxport.s3.amazonaws.com/4647/FB609A6D-931B-4DCB-83B7-31F925E131B0%2B31F925E131B0_001_S.jpg", description: "Always sunny, rains same time everyday, not so quiet neighborhood, party capital of the U.S.A." }),

  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
