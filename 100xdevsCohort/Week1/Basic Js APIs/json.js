const user = {
    name: 'manav',
    age: 19
};

const finalString = JSON.stringify(user);


console.log(finalString)

const user1 = '{"name":"manav","age":19}'

const final = JSON.parse(user1);
console.log(final['age']);