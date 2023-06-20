const form = document.getElementById('addTask')
const newTask = document.getElementById('ToDo')
const ulList = document.getElementById('list')
const closebtn = document.querySelector('.x');

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
function showAlert(text) {
   const alert = document.querySelector(".alert-box");
    const message = alert.querySelector(".alert-title");
    const okBtn = alert.querySelector(".alert-button");
    const reminder = document.querySelector('.alert-box2');

    message.textContent = text;

    alert.style.display = "block";


    okBtn.addEventListener("click", function () {
        alert.style.display = "none";
        reminder.style.display = 'block'
    })

    closebtn.addEventListener('click', (e) => {
        e.preventDefault();
        reminder.style.display = 'none';
    } )

}