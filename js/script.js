console.log("Учим JS");
console.log("JS");

let userName = "Vasya";
let user;
user = userName;
console.log(user)


let esue = 3;
let length = 18.8;
length = esue;
console.log(length);

const userProfile = {
    name: "first",
    age: "50",
    message: "You need money"
}
console.log(userProfile);
userProfile.age = 45;
console.log(userProfile);

function inner(x, a){
    /*
    Поиск числа по заданнм параметрам.
    x:int
    a:float
    */
    let summ = 0
    for (let i = 0; i < x; i++){
        let k = a*(i+4) - x
        summ += k
    return summ;
    }
}

console.log(inner(10,0.8));
