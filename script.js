// set initial value to zero

let count = 0;

// set value and button

const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

btns.forEach (function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")){
            count--;
        } else if (styles.contains("btn-increase")) {
            count ++;
        } else {
            count = 0;
        }

        if (count>0){
            value.style.color = "green";
        }

        if (count<0){
            value.style.color = "red";
        }

        if (count === 0) {
            value.style.color = "#222"
        }

        value.innerHTML = count;

    });
});
