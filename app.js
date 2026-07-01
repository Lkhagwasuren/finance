// Delgetstei ajillah controller
var uiController  = (function () {
    
})();
// sanhuutei  ajillah controller

var financeController  = (function () {
    
})();

//programmiin holbogch controller
var appController  = (function (uiController, financeController) {

    var ctrlAddItem = function () {
        //1. oruulah ogogdoliiig delgetsees olj awna
        console.log('delgetsees ogogdol awah');
        //2. olj awsan ogogdliig sanhuutei ajillah controller ruu damjuulna
        //3. olj awsan ogogdliig delgetsend ni gargana
        //4. tolowiig tootsoolno
        //5. etsesiin vldegdel tootsoog delgetsend gargana
    };
    document.querySelector('.add__btn').addEventListener('click', function () {      
        ctrlAddItem();
    });
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
}(uiController, financeController));
