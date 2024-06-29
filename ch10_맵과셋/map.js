const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();
userRoles.set(u1, "User").set(u2, "User").set(u3, "Admin");
// userRoles.set(u2, "User");
// userRoles.set(u3, "Admin");

console.log(userRoles.get(u2));
console.log(userRoles.has(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

//keys(): 맵의 키, values(): 맵의 값

