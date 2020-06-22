// invoke axios
// snippet : req-ax
const axios = require("axios");

// snippet : nfn
const deleteRequest = async () => {
  // snippet : try
  try {
    const resp = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

// initiate the call
deleteRequest();

// terminal output
// C:\Users\donat\Documents\stackabuse-axios-tutorial>node deleteRequest
// {}
