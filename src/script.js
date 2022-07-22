START_DATE = new Date(2022,5,24);
curr_date = START_DATE;

function get_full_date(curr_date) {
    str = "";
    str += curr_date.getDate();
    str += " ";
    str += (month_switcher(curr_date.getMonth()));
    str += (" ");
    str += (curr_date.getFullYear());

    console.log(str);

    return str;
}

function month_switcher(m) {
    str = ""
    switch(m) {
        case 0:
            str = "JANUARY";
            break;
        case 1:
            str = "FEBRUARY";
            break;
        case 2:
            str = "MARCH";
            break;
        case 3:
            str = "APRIL";
            break;
        case 4:
            str = "MAY";
            break;
        case 5:
            str = "JUNE";
            break;
        case 6:
            str = "JULY";
            break;
        case 7:
            str = "AUGUST";
            break;
        case 8:
            str = "SEPTEMBER";
            break;
        case 9:
            str = "OCTOBER";
            break;
        case 10:
            str = "NOVEMBER";
            break;
        case 11:
            str = "DECEMBER";
            break;
    }

    return str;
}

function injectDate() {
    date = get_full_date(curr_date);

    elem = document.querySelector("#date");
    elem.innerHTML = date;

}

function doDaySim() {
    
}

function runGame() {
    curr_date.setDate(curr_date.getDate() + 1);
    doDaySim();
    injectDate();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}



window.onload = function() {
    injectDate();
}