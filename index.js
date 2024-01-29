//console.log("Hello World");
//https://jsonplaceholder.typicode.com/users
import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response;
  } catch (error) {
    return error;
  }
}

const users = await getUser();
console.log(users);

//const response = await axios.get('https://api.example.com/data');

