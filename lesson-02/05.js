let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = { ...passport };

newPassport.name = "Ivan";

console.log(passport.name); // Выводит "Petr"
console.log(newPassport.name); // Выводит "Ivan"