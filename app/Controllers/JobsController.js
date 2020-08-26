import jobsService from "../Services/JobsService.js";
import STORE from "../store.js";
// private
function _drawJobs() {
    let jobs = STORE.State.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('jobs').innerHTML = template
}


//Public
export default class JobsController {
    constructor() {
        _drawJobs();
    }

    createJob() {
        event.preventDefault();
        let form = event.target
        let rawJob = {
            title: form.title.value,
            description: form.description.value,
            img: form.img.value
        }
        jobsService.createJob(rawJob)
        _drawJobs();
    }

    removeJob(id) {
        jobsService.removeJob(id);
        _drawJobs();
    }
}