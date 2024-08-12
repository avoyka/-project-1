const users = [
{name: "Victor", age: 26, sex: "male"},
{name: "Jessica", age: 17, sex: "female"},
{name: "Robert", age: 16, sex: "male"},
{name: "Sarah", age: 20, sex: "Female"},
{name: "Rob", age: 34, sex: "male"},
{name: "Robin", age: 40, sex: "male"},
];
let num ={
    male:0,
    female:0

}
users.forEach(function (item){
    if(item.sex === "male"){
        num.male++;
    } else{
    num.female++;
   }

   

//item.sex === "male"? num.male++ : num.female++;




})
console.log(num);