import { generateId } from "../utils.js";
export default class Job {
    // Object Destructuring
    constructor({ title, img, description }) {
        this.id = generateId()
        this.title = title
        this.img = img
        this.description = description || "no description"
    }

    get Template() {
        return `           
    <div class="col-4">
    <div class="card">
        <img class="card-img-top" src="${this.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">${this.description}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-danger"
                        onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                    <button class="btn btn-outline-info" onclick="alert('You Wish! You are completely unqualified for this job! How about you go back to school and do something with your life! Flippin loser.')">Apply Now</button>
                </div>
            </div>
                    </div>
    </div>`
    }
}


