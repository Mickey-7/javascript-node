// create a function that will be called by async function
// snippet : func
function resolveAfter2Seconds() {
  return new Promise((data) => {
    // snippet : sett
    setTimeout(() => {
      data("function called by async");
    }, 3000);
  });
}

// create async function
// snippet : func
async function asyncCall() {
  console.log("calling from async");
  // invoke the function above
  const result = await resolveAfter2Seconds();
  console.log(result);
}

// make tha call to async function
asyncCall();

// C:\Users\donat\Documents\javascript>node Async
// calling from async
// after 3 seconds
// function called by async
