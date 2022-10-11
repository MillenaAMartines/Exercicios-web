const { includes } = require("lodash");

//node ele faz cache dos modulos 
module.exports = {
    valor: 3,
    inc() { 
        this.valor++
    }

}