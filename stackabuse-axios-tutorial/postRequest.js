// invoke axios
// snippet : req-ax
const axios = require("axios");

// create Post object to be added
const newPost = {
  userId: 1,
  title: "A new post",
  body: "This is the body of the new post",
};

// snippet : nfn
const sendPostRequest = async () => {
  // snippet : try
  try {
    const resp = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

// initiate the call
sendPostRequest();

// terminal output
// C:\Users\donat\Documents\stackabuse-axios-tutorial>node postRequest
// {
//   userId: 1,
//   title: 'A new post',
//   body: 'This is the body of the new post',
//   id: 101
// }
