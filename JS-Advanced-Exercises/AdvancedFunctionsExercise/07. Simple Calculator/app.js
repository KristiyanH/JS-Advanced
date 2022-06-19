function calculator() {
    let obj = {};

    return {
        init: function (selector1, selector2, resultSelector) {
            obj = {
                num1: document.querySelector(selector1),
                num2: document.querySelector(selector2),
                result: document.querySelector(resultSelector)
            }

            return obj;
        },

        add: function () {
            obj.result.value = Number(obj.num1.value) + Number(obj.num2.value)
        },

        subtract: function () {
            obj.result.value = Number(obj.num1.value) - Number(obj.num2.value)
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





