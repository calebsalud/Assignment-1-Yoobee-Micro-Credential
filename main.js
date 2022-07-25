
window.addEventListener('load', () => { //waits for the page to load
	const form = document.querySelector("#new-task-form"); 
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks"); //3 elements

    form.addEventListener('submit', (e) => { 
        e.preventDefault(); //prevents page from refreshing

        const task = input.value;

        if(!task){ //if nothing is input
            alert("Please fill!") //alert will pop up
        } else {
            console.log("Success") //otherwise console will say success
        }

        const task_el = document.createElement('div'); //creates an element
        task_el.classList.add("task"); //creates task

        const task_content_el = document.createElement('div');
		task_content_el.classList.add('content'); //creates content
        task_content_el.innerText = task;

		task_el.appendChild(task_content_el); //moving elements

        list_el.appendChild(task_el) //moving elements
    })
});