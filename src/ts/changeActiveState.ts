document.addEventListener("DOMContentLoaded", () => {
    const sideBarOptions :any = document.getElementsByClassName('sidebaroptions');
    let counter : number = 0;
    let currentActiveIndex : number = 0;

    function clickEvent(index){
        if(counter === 0){
            sideBarOptions[0].setAttribute("class", "nav-link text-white sideoptions");
        }
        currentActiveIndex = index;
        sideBarOptions[currentActiveIndex].setAttribute("class", "nav-link bg-warning text-black");
        counter++;
    }
    
    for(let i : number = 0; i<sideBarOptions.array.length; i++){
        sideBarOptions[i].addEventListener("click", () => {
            clickEvent(i);
        });
    }
})
