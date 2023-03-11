const form = document.getElementById('addTask')
const newTask = document.getElementById('ToDo')
const ulList = document.getElementById('list')


form.addEventListener('submit', function addTask(e) {
    e.preventDefault();

    if (newTask.value === '') {
        showAlert('Error!!');

    } else {

        const newLi = document.createElement('li');
        const task = newTask.value;
        newLi.innerText = task;

        ulList.append(newLi);

        newTask.value = '';
    };
})

/* function to show and remove button*/
function showAlert(message) {
    var customAlert = document.querySelector(".alert-box");
    var messageElement = customAlert.querySelector(".alert-title");
    var okButton = customAlert.querySelector(".alert-button");

    messageElement.textContent = message;

    customAlert.style.display = "block";


    okButton.addEventListener("click", function () {
        customAlert.style.display = "none";
    })
}