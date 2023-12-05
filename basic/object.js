
const person = {
    name:'thasneem',
    age:'20',

    hello:function (){
        console.log("hello " + this.name);
    }
}

person.hello()