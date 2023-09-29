//to use await, we need to identify the function as async
async function getCustomer() {
    console.log("GET Customer button is pressed!");
    console.log("get ready to fetch!");
    let response = await fetch("/customer", {method: 'GET'});//note the await!
    let json = await response.json();//note the await!
    console.log("This is what response looks like before parsing:");
    console.log(response);
    console.log("After parsing:");
    console.log(json);
}

async function postCustomer() {
    let data = {name: "Shirley"};
    console.log("POST Customer button is pressed!");
    console.log("get ready to fetch!");
    let response = await fetch("/customer", {
        method: 'POST',
        //need to have headers set to the right content type!
        headers: {
            "Content-Type": "application/json",
        },
        //data we wish to send to the server
        body: JSON.stringify(data),
    });//note the await!
    console.log("all done, check the status");
}

async function getCustomer1() {
    console.log("GET Customer1 button is pressed!");
    console.log("get ready to fetch!");
    let response = await fetch("/customer/1", {method: 'GET'});//note the await!
    let json = await response.json();//note the await!
    console.log("This is what response looks like before parsing:");
    console.log(response);
    console.log("After parsing:");
    console.log(json);
}

async function putCustomer1() {
    let data = {name: "Not Richard"};
    console.log("PUT Customer button is pressed!");
    console.log("get ready to fetch!");
    let response = await fetch("/customer/1", {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });//note the await!
    console.log("all done, check the status");
}

//usually, no need for data
async function deleteCustomer1() {
    console.log("DELETE Customer button is pressed!");
    console.log("get ready to fetch!");
    let response = await fetch("/customer/1", {
        method: 'DELETE',
    });//note the await!
    console.log("all done, check the status");
}