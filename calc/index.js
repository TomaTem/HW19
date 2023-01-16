class Calc {
    static sum() {
        let a=document.querySelectorAll('input.sum')[0].value;
        let b=document.querySelectorAll('input.sum')[1].value;
        document.querySelector('#sum-res').innerHTML = +a + +b;
    }

    static sub() {
        let a=document.querySelectorAll('input.sub')[0].value;
        let b=document.querySelectorAll('input.sub')[1].value;
        document.querySelector('#sub-res').innerHTML = a - b;
    }

    static mul() {
        let a=document.querySelectorAll('input.mul')[0].value;
        let b=document.querySelectorAll('input.mul')[1].value;
        document.querySelector('#mul-res').innerHTML = a * b;
    }
    static del() {
        let a=document.querySelectorAll('input.del')[0].value;
        let b=document.querySelectorAll('input.del')[1].value;
        if (b==0) {
            alert ("На ноль делить нельзя!");
            document.querySelectorAll('input.del')[1].value = null;
        } else {
            document.querySelector('#del-res').innerHTML = a / b;
        }
    }
}