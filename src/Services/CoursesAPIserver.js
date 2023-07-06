import axios from 'axios';

const BASE_URL = "http://localhost:9500/profile";

export async function saveCourses(Courses){
    console.log(Courses);
    return axios.post(BASE_URL,Courses);
}

// export async function getAllCoursesFromServer(STUDENT_NAME){
//     return axios.get(`${BASE_URL}/STUDENT_NAME`);
// }


export async function getAllCourses(){
    return axios.get('http://localhost:9500/courses');
}


export function deleteStudentFromServer(STUDENT_NAME){
    axios.delete(`http://localhost:9500/view-courses/${STUDENT_NAME}`)
}