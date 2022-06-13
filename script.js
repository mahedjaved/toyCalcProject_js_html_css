/** inspired heavily from the code base : https://github.com/Yuvrajchandra/Simple-Calculator */

function clearScreen() {
    /**
     * @desc : clears the screen sets the result value to ""
     * @args : none
     * @returns : void
     * */
    document.getElementById("result").value = "";
}

function display(value) {
    /** 
     * @desc : display value of a function
     * @args : value (html tag) it basically stores
     * @return : void
    */
    document.getElementById("result").value += value;
}

function calculate() {
    /** 
     * @desc : calcualtes the expression using the "eval" function
     * @args : none
     * @return : void
    */
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}