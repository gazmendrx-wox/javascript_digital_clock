document.addEventListener("DOMContentLoaded", (event) => {
    /**
     * Kemi nje problem, kemi oren me Hour, minutes, edhe seconds;
     * mirepo, nuk jan dinamike; 
     * 
     * Detyra eshte per me i aktivizu kohen te jet dinamike;
     * 
     * Per me aktivizu kohen: 
     * 
     * Hour = duhet te behet update
     * Minutes = duhet te behet update
     * Seconds = duhet te behet update
     */

    /**
     * Date() eshte objet nga JavaScript, ce na mundeson punen me
     * Data edhe Koha, a.k.a Dates and Time;
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     */

    /**
     * setInterval - https://developer.mozilla.org/en-US/docs/Web/API/setInterval
     */
    setInterval(function(){
        const currentDate = new Date(); //inicializon kohen momentale;

        const hour = currentDate.getHours(); //merr Oren nga koha momentale;
        const minute = currentDate.getMinutes(); //merr Minutat nga koha momentale;
        const second = currentDate.getSeconds(); // merr Sekondat nga koha momentale;
    
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute; //detyra eshte shfaqja e minutes me double digits; dmth 01,02,03;
        document.getElementById('second').innerHTML = second; //detyra eshte shfaqja e secondave me double digits; dmth 01,02,03;
    }, 1000)

    const currentDate = new Date().getFullYear(); //inicializon kohen momentale;
    document.getElementById("footer-year").innerHTML = currentDate
});