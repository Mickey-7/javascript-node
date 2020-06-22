// snippet : req-ax
const axios = require("axios");

// snippet : nfn
const sendConfigRequest = async () => {
  // snippet : try
  try {
    const resp = await axios({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      data: {
        id: 1,
        userId: 1,
        title: "A new title",
        body: "Update this post",
      },
    });

    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

sendConfigRequest();

// terminal output

// C:\Users\donat\Documents\stackabuse-axios-tutorial>node configRequest
// { id: 1, userId: 1, title: 'A new title', body: 'Update this post' }
