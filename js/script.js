console.log("Bai tap async");

// fetch => raw data (Response) -> object
const temp = fetch("http://localhost:8000/users");

temp
.then((res) => res.json())  // res sang object cua js
.then((d) => console.log(d));
