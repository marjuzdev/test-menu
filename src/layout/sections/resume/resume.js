const run = () => {
    new CollapsibleTimeline('.timeline-work-experience #timeline');
}

class CollapsibleTimeline {
    constructor(el) {
        this.el = document.querySelector(el);
        this.items = this.el.querySelectorAll('[data-item]');
        this.expandedClass = "timeline-item-body--expanded";
        this.init();
    }

    strToBoolean ( str ) {
        return str === "true";
    }

    init() {
        for (let indexElement = 1 ; indexElement <= this.items.length; indexElement++ ) {
                this.setAnimation({indexElement})
        };
        this.el?.addEventListener("click", this.itemAction.bind(this));
    }

    itemAction(e) {
        const { target } = e;
  
        const indexElement = Number(target?.getAttribute("data-item"));
        const elementDom = this.items[indexElement - 1];
        const ariaExpandedElement =  elementDom?.getAttribute("aria-expanded");
        if(!ariaExpandedElement) return
        const isAriaExpanded = this.strToBoolean(ariaExpandedElement);
        const control = this.el?.querySelector(`#item${indexElement}-control`);
        const contentHeight = control.firstElementChild?.offsetHeight;
        this.animateItemAction({control, contentHeight, isAriaExpanded});
        elementDom.setAttribute('aria-expanded', !isAriaExpanded);
    }

    setAnimation( { indexElement } ){
        const elementDom = this.items[indexElement - 1];
        const ariaExpandedElement =  elementDom?.getAttribute("aria-expanded");
        const isAriaExpanded = this.strToBoolean(ariaExpandedElement);
        const control = this.el?.querySelector(`#item${indexElement}-control`);
        if(isAriaExpanded) control.classList.add(this.expandedClass);
    }
 
    animateItemAction( data ) {

        const {  control, contentHeight, isAriaExpanded } = data;
       
        const animOptions = {
            duration: 300,
            easing: "cubic-bezier(0.65,0,0.35,1)"
        };

        control.classList.toggle(this.expandedClass);

        if (!isAriaExpanded) {

            control.classList.too 
            this.animation = control.animate([
                { height: "0px" },
                { height: `${contentHeight}px` }
            ], animOptions);

        } else {
            animOptions.duration *= 2;
            this.animation = control.animate([
                { height: `${contentHeight}px` },
                { height: `${contentHeight}px` },
                { height: "0px" }
            ], animOptions);
        }
    }
}

export default {
    run
}




