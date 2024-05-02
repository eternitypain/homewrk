const users = [
    { name: "Alice", isAdmin: false },
    { name: "Bob", isAdmin: true },
    { name: "Charlie", isAdmin: false },
    { name: "David", isAdmin: true }
];

let simpleUsersCount = 0;

users.forEach(user => {
    if (!user.isAdmin) {
    simpleUsersCount++;
    }
});

console.log(simpleUsersCount);