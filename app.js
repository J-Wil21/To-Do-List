// creates a variable that checks for local storage. If so -> parse JSON 'tasks'. If not taskArr is an empty Array
const taskArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

//create variable of button 
const addTask = document.querySelector('#addBtn');

//Button pressed addTask runs events listner and creates array item   
addTask.addEventListener('click', () => {
    const task = document.querySelector('#toDo');
    
    if (task.value === '') {
        showAlert('ERROR')
    } else {
        createItem(task);
    }
});

// function to show alert when task isn't typed in
function showAlert(text) {
    const alert = document.querySelector('.alert-box');
    const title = document.querySelector('.alert-title');
    const alertBtn = document.querySelector('.alert-button');
    const alertBox2 = document.querySelector('.alert-box2');
        
    title.innerHTML = text
    alert.style.display = 'block';

    alertBtn.addEventListener('click', () => {
        alert.style.display = 'none';
        alertBox2.style.display = 'block'
    })

    document.querySelector('.x').addEventListener('click', () => {
        alertBox2.style.display = 'none';
    })


}



//creates the writen task and runs anyother functions if btn is clicked.
function displaytask() {
    let allTasks = "";
    for (let i = 0; i < taskArr.length; i++){
        allTasks += `<div class="task-styling">
        <div class="task-input">
          <textarea class="shownTask" disabled>${taskArr[i]}</textarea>
          <div class="task-edit">
            <i class="fa-solid fa-check" id="deleteBtn" style="color: #ddc52c;"></i>
            <i class=" fa-regular fa-pen-to-square" id="eBtn" style="color: #000000;"></i>
          </div>
        </div>
        <div class="task-update">
          <button class="saveBtn">Save</button>
          <button class="cancelBtn">Cancel</button>
        </div>
      </div>`
    }
    document.querySelector('#list').innerHTML = allTasks;
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

// runs if tick icon is clicked
function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll('#deleteBtn');
    deleteBtn.forEach((remove, i) => {
        remove.addEventListener('click', () => { deletetask(i)})
    })
}

//make the textarea editable and show buttons
function activateEditListeners() {
    const editBtn = document.querySelectorAll('#eBtn');
    const update = document.querySelectorAll('.task-update');
    const textInputs = document.querySelectorAll('.task-input textarea');
    
    editBtn.forEach((edbtn, i) => {
        edbtn.addEventListener('click', () => {
            update[i].style.display = 'block';
            textInputs[i].disabled = false;
        })
    });
}


//save my changes to array and local storage 
function activateSaveListeners() {
    const saveBtn = document.querySelectorAll('.saveBtn');
    const textInputs = document.querySelectorAll('.task-input textarea');
    
    saveBtn.forEach((sBtn, i) => {
        sBtn.addEventListener('click', () => {
            updateTask(textInputs[i].value, i)
        })
    })
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll('.cancelBtn');
    const update = document.querySelectorAll('.task-update');
    const textInputs = document.querySelectorAll('.task-input textarea');

    cancelBtn.forEach((cBtn, i) => {
        cBtn.addEventListener('click', () => {
            update[i].style.display = 'none';
            textInputs[i].disabled = true;
            textInputs[i].style.border = 'none';
        })
        
    })

}


//deletes task
function deletetask(i){
    taskArr.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
    location.reload();
}

//creates a new item an pushes it to Array. Also save array to local storage. 
function createItem(task) {
    taskArr.push(task.value);
    localStorage.setItem('tasks', JSON.stringify(taskArr))
    location.reload()
}

//updates the textarea and saves it into array
function updateTask(text, i) {
    taskArr[i] = text;
    localStorage.setItem('tasks', JSON.stringify(taskArr))
    location.reload()
}

window.onload = function() {
    displaytask()
  };