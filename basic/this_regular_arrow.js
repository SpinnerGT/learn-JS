"use strict"

const Jane = {
    firstName: 'Jane',
    year: 1991,

    calcAge: function () {
        console.log("regular函数里的this:", this)

        // self 以前解决
        const self = this;

        function infunc() {

            console.log("infunc里面的self:", self)
        }

        // 现代解决
        const inArrowfunc = () => {
            console.log("inArrowfunc里面的this:", this)
        }

        infunc();
        inArrowfunc()
    },
    greet: () => {
        console.log("arrow函数里的this：(window对象)", this)
        const ininArrowfun = () => {
            console.log("ininArrowfun里的this", this)
        }


        function ininRegularfun() {


            console.log("ininRegularfun里的this", this)
        }

        ininRegularfun(); // undefined
        ininArrowfun(); // window
    }
}

Jane.calcAge();
Jane.greet();