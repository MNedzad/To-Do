btnHandler = new ButtonHandler()

const createListElement = (value,id) =>
{
    let list =   document.querySelector('#list')

    let listElement = document.createElement('div')
    let text = document.createElement('p')
    let buttonDel = document.createElement('button')
    let buttonCheck = document.createElement('button')

    listElement.className = "Element"
    listElement.id = id
    text.innerText = value
    listElement.appendChild(text)

    buttonDel.innerText = "X"
    buttonDel.id = ""
    buttonDel.className = "Del"
    btnHandler.addButtonByElement(buttonDel, DeleteElement)
    listElement.appendChild(buttonDel)

    buttonCheck.innerText = "J"
    buttonCheck.id = ""
    buttonCheck.className = "Check"
    listElement.appendChild(buttonCheck)

    list.appendChild(listElement)
}
const DeleteElement = (e) =>
{
    removefromdb(e)
    e.parentElement.remove()
}

//To-do
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    const element = localStorage[key];
    createListElement(element, key);
}
/**
 * remove fom localStorage
 */
const removefromdb = (e) => {
    buttonid = e.parentElement.id;
    console.log(buttonid);
   
    localStorage.removeItem(buttonid);
    e.parentElement.remove()
}

/**
 * Add text in localStorage
 */
function addtotodo(e) {
    let value = document.querySelector("#Text").value;
    id = localStorage.length
    
    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage["lst-td-" + (i + 1)];
        console.log(element);
        if(element === undefined){
            localStorage.setItem("lst-td-"+(i + 1), value)
            createListElement(value, (i + 1))
            return;
        }
    }
    localStorage.setItem("lst-td-"+ id, value)
    createListElement(value, id)
}
/**
 * get buttons
 */
let btns = document.querySelectorAll('button')

btnHandler.addButton("#add", addtotodo)







