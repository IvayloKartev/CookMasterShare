document.addEventListener("DOMContentLoaded", () => {
    const sideBarOptions :any = document.getElementsByClassName('sidebaroptions');
    function switchState(){
        
    }
    for(let i : number = 0; i<sideBarOptions.length; i++){
        sideBarOptions[i].addEventListener("click", switchState);
    }

})