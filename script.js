/* if label input is checked, change the name of ion-icon as xyz */
document.querySelector('.btn').addEventListener('change', function(){
    document.querySelector('#audio').play();
    document.querySelector('body').classList.toggle('on');
    if(this.checked){
        document.querySelector('.icon ion-icon').setAttribute('name', 'sunny');

        let body = document.querySelector('body');
    
        body.style.background = 'radial-gradient(40vw 40vw at 50% 40%, #E2B1B1, #6d574d)';
        
        

    }
    else{
        document.querySelector('.icon ion-icon').setAttribute('name', 'moon');

        let body = document.querySelector('body');

        body.style.background = 'radial-gradient(circle, #6d574d, #6d574d)';
    }
});