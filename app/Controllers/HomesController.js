import homesService from "../Services/HomesService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawHomes() {
    console.log(6)
    let homes = STORE.State.homes
    let template = ''
    // NOTE when you have a collection of items, they will need to be added to the template in a loop
    homes.forEach(h => template += h.Template)
    document.getElementById('homes').innerHTML = template
}


//Public
export default class HomesController {
    constructor() {
        console.log(5)
        _drawHomes();
    }

    createHome() {
        event.preventDefault();
        let form = event.target
        let rawHome = {
            // @ts-ignore
            model: form.model.value,
            // @ts-ignore
            year: form.year.value,
            // @ts-ignore
            price: parseInt(form.price.value),
            // @ts-ignore
            description: form.description.value,
            // @ts-ignore
            img: form.img.value
        }

        homesService.createHome(rawHome)
        _drawHomes();
    }

    removeHome(id) {
        homesService.removeHome(id);
        _drawHomes();
    }

    bid(id) {
        homesService.bid(id);
        _drawHomes();
    }
}