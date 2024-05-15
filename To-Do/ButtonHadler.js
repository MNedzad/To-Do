listscheme = 
{
    buttonElement: document.querySelector("btn"),
    onClick: function onclick() {},
    parameter: {}
}


class ButtonHandler 
{
    constructor ()
    {
        this.ButtonLIst = [];

    }   
    addButton = (id, buttonCallBack) =>
    {
        
        let element = document.querySelector(id)
        console.log(element, id);
        if(element === null)
        {
            console.warn("Something wrong");
            return 
        }
        this.ButtonLIst.push({
            'buttonElement': element,
            "onClick": buttonCallBack 
        })

        this.Init();
    }
    addButtonByElement = (element, buttonCallBack) =>
    {
        if(element === null)
        {
            console.warn("Something wrong");
            return 
        }
        this.ButtonLIst.push({
            'buttonElement': element,
            "onClick": buttonCallBack 
        })

        this.Init();
    }
    removeButton = (id) =>
    {

    }
    Init = () =>
    {   
        if(this.ButtonLIst.length === 0) console.warn("List is Empty");
        this.ButtonLIst.forEach(Item =>
        {
            console.log(Item);
            Item.buttonElement.addEventListener('click', (e) => Item.onClick(e.target))
        })
        this.ButtonLIst.pop();
    }
}