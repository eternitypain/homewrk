const users = [
    {
        name: "max",
        age: 23
    },


    {
        name: "ivan",
        age: 25
    },

    {
        name: "robert",
        age: 12
    }
]

const userName = []

users.forEach((user) => {
    console.log(user)
    userName.push(user.name)
}) 

console.log(userName)