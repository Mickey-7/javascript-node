// Now let's see how we can rewrite the same code this using async/await keywords.
// In a new file getRequestAsyncAwait.js, add the following code:

// snippet : req-ax
const axios = require("axios");

// snippet : nfn
const sendGetRequestAsyncAwait = async () => {
  // snippet : try
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

sendGetRequestAsyncAwait();

// run the code by typing on terminal : node getRequestAsyncAwait
// terminal output

// C:\Users\donat\Documents\stackabuse-axios-tutorial>node getRequestAsyncAwait
// {
//   userId: 1,
//   id: 7,
//   title: 'magnam facilis autem',
//   body: 'dolore placeat quibusdam ea quo vitae\n' +
//     'magni quis enim qui quis quo nemo aut saepe\n' +
//     'quidem repellat excepturi ut quia\n' +
//     'sunt ut sequi eos ea sed quas'
// }
