import path from "path";

//basename for nodejs
console.log(path.basename("c:\\nodejs\\app.js", ".js"));
console.log(path.basename("c:\\nodejs\\courses\\app.js"))
console.log(path.basename("c:\\nodejs\\app.html"));
//Join
//..means gp up a level
console.log(path.join("c:", "remy-dev", "flutter", "flutterprojects"))
console.log(path.join("c:", "remy-dev", "flutter", "flutterprojects", ".."))

console.log(path.parse("c:\\nodejs\\courses\\app.js"));