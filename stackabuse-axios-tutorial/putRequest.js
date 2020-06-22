// invoke axios
// snippet : req-ax
const axios = require("axios");

// create Post object to be added
const updatePost = {
  userId: 1,
  title: "A new post",
  body: "This is the body of the new post",
};

// snippet : nfn
const senPutRequest = async () => {
  // snippet : try
  try {
    const resp = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      updatePost
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

// initiate the call
senPutRequest();

// terminal output
// C:\Users\donat\Documents\stackabuse-axios-tutorial>node putRequest
// {
//   userId: 1,
//   title: 'A new post',
//   body: 'This is the body of the new post',
//   id: 1
// }
