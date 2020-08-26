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
                    <button class="btn btn-outline-info" onclick="alert('You Wish! You are completely unqualified for this job! What are you even thinking? Stick to your entry level job if you think you are ready for this! How about you go back to school and do something with your life! Maybe try contributing to society? If you really wanted to make a change and do something new you would go to BoiseCodeWorks and start coding! Are you still reading this? Why are you still reading this? Stop procrasinating and get to it slacker! You are STILL reading this? On second thought, you are never going to make it if you waste this much time just reading this dumb prompt. Also, you should know... Have a great day!')">Apply Now</button>
                </div>
            </div>
                    </div>
    </div>`
    }
}


