let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport1 = { ...passport };

passport1.name = "Ivan";

console.log(passport1.name);
console.log(passport.name);
