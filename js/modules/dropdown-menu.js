import outsideClick from "./outside-click.js";

export default function initDropDownMenu() {
    const dropDownMenus = document.querySelectorAll("[data-dropdown]");

    dropDownMenus.forEach((menu) => {
        ["touchstart", "click"].forEach((userevent) => {
            menu.addEventListener(userevent, handleClick);
        })
        
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add("ativo");
        outsideClick(this,["touchstart", "click"], () => {
            this.classList.remove("ativo")
        })
    }
    
}


