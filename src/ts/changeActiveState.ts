export const switchColor = () => document.addEventListener("DOMContentLoaded", () => {

    const sideBarOptions :any = document.getElementsByClassName('sideoptions');
    document.getElementById('test1')?.setAttribute("class", "nav-link text-white sideoptions");
    let counter : number = 0;
    let currentActiveIndex : number = 0;

    function clickEvent(index : number){
        if(counter === 0){
            sideBarOptions[0].setAttribute("class", "nav-link text-white sideoptions");
        }
        currentActiveIndex = index;
        sideBarOptions[currentActiveIndex].setAttribute("class", "nav-link bg-warning text-black");
        counter++;
    }
    
    sideBarOptions[0].addEventListener("click", () => {
        clickEvent(0);
    })
    sideBarOptions[1].addEventListener("click", () => {
        clickEvent(1);
    })
    sideBarOptions[2].addEventListener("click", () => {
        clickEvent(2);
    })
    sideBarOptions[3].addEventListener("click", () => {
        clickEvent(3);
    })
    sideBarOptions[4].addEventListener("click", () => {
        clickEvent(4);
    })
})
