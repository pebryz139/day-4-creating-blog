let dataProject = []
console.log(dataProject);

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('input-startDate').value
    let endDate = document.getElementById('input-endDate').value
    let description = document.getElementById('input-description').value
    let technologis1 = document.getElementById('input-technologis1').checked
    let technologis2 = document.getElementById('input-technologis2').checked
    let technologis3 = document.getElementById('input-technologis3').checked
    let technologis4 = document.getElementById('input-technologis4').checked
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    let project = {
        title,
        startDate,
        endDate,
        description,
        technologis1,
        technologis2,
        technologis3,
        technologis4,
        image
    }

    dataProject.push(project)
    console.log(dataProject)

    renderProject()
}

function renderProject() {
    document.getElementById('listProject').innerHTML =
}