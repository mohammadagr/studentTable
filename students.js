const students = [
    {id: Math.floor(Math.random() * 100), name: "Mohammad", lastName: "Majid"},
    {id: Math.floor(Math.random() * 100), name: "Ali", lastName: "Ahmadi"},
    {id: Math.floor(Math.random() * 100), name: "Reza", lastName: "Hosseini"},
    {id: Math.floor(Math.random() * 100), name: "Mahdi", lastName: "Torabi"}]

function addStudent(student) {
    students.push(student)
    renderTable()
}


function add_student() {
    const newStudent = []
    let idpr = prompt("please enter your id")
    let namepr = prompt("please enter your name")
    let lastNamepr = prompt("please enter your lastName")
    Students.push(idpr)
    Students.push(namepr)
    Students.push(lastNamepr)
    renderTable()


}

function removeStudent(id) {
    students.filter((student) => student.id !== id)
    renderTable()
}

function updateStudent(id, newStudent) {
    students.map((student) => student.id === id ? newStudent : student)
}

function renderTable() {
    const table = document.getElementById("mainTable")
    const tbody = document.getElementById("tableTbody")
    tbody.innerHTML=null
    students.forEach((student) => {
        tbody.innerHTML += (`<tr><td>${student["id"]}</td><td>${student["name"]} </td><td>${student["lastName"]}</td><td><button id="rmvStudent" onclick="removeStudent($student["id"])>Remove</button></td></tr>`)
    })
}
