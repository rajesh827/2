//object in js
//const myObj = {
   // name: 'ABC',
   // age: 20,
    //address: 'Lalitpur',
   // college: 'National College of Engineering'

//}
//console.log(myObj.age)
//console.log(myObj.name)
//console.log(myObj.college)
const nameInput = document.getElementById("nameInput")
const submitBtn = document.getElementById("submitBtn")
const todolist = document.getElementById("todolist")
 
submitBtn.onclick = function() 
{
    const inputValue = nameInput.value
    if(!inputValue.trim()) {
        alert("Enter a valid name!")
    }
    else 
    {
        const list = document.createElement("li")
        list.textContent = inputValue
        todolist.appendChild(list)
        nameInput.value = ""
    }
}