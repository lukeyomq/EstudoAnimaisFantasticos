export default function initTollTip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");


    tooltips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver);
    })
    
    function onMouseOver(event) {
        const tooltipBox = criarToolTipBox(this);
        
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener("mousemove", onMouseMove);
    
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        
        this.addEventListener("mouseleave", onMouseLeave);
        
    }
    
    const onMouseMove = {
        handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 15 + "px"
        this.tooltipBox.style.left = event.pageX + 15 + "px"
        }
    }
    
     const onMouseLeave =  {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener("mouseleave", onMouseLeave);
            this.tooltipBox.removeEventListener("mousemove", onMouseMove);
        }
     }
    
    
    
    function criarToolTipBox(element) {
        const tooltipBox = document.createElement("div");
        const text = element.getAttribute("aria-label");
        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}

