//중복 허용 x 데이터 집합
const roles = new Set();

roles.add("User");
roles.add("Admin");
console.log(roles);
roles.add("User");
console.log(roles);
