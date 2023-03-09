var leapYear= function check_leap_year(leap_year){
    if(leap_year<=0 || leap_year== null || leap_year== undefined || isNaN(leap_year) || typeof leap_year== "string"){
        return (`Please Enter Valid Year`);
    } 
    else if(leap_year % 100 == 0 && leap_year % 4 == 0 ){
        return `${leap_year} is an leap year`
    }
    else{
        return`${leap_year} is not a leap Year`
    }
}
console.log(leapYear(2020));
console.log(leapYear(1600));
console.log(leapYear(2015));
console.log(leapYear(2022));
console.log(leapYear(2028));
console.log(leapYear(null));
console.log(leapYear("twenty twenty"));