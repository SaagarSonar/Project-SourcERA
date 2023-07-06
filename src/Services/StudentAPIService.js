import axios from 'axios';

const BASE_URL = "http://localhost:9500/students";

export async function saveStudent(student){
    //to send the post request
    //student --> is the request body
    //post function will return a promise as a response
    return axios.post(BASE_URL,student);
}

export async function getAllStudents(){
    //will return the promise 
    //inside the promise we have the response
    //returning the complete promise object from the service layer
    return axios.get(BASE_URL);
}

//internally it will send the ajax request 




// // has to be call on submit event
// // receiving the form data into the argument passing the same to stringfy method
// export async function saveStudent(student){
//    try{
//     //one base url and an object has been passed
//     //that object has method as 'POST'
//     //we need to asign the body inside the body key
//     //in order to send the post request
//     //headers for meta data ,what data are we sending
//     //we are sending the json data into the request
//     const response =  await fetch(BASE_URL,{
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(student)
//     })
//     //we need to get data in the response we have sent from the server
//     const data = await response.json();
//     return data;
//     } catch(error){
//         console.log(error);
//     }
// }

// export async function getAllStudent(){
//   try {
//     //will return a promise
//     const response = await fetch(BASE_URL);

//     //from response we need to fetch the json data
//     //it will again return a promise
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
