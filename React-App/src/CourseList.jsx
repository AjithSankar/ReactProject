import { useEffect, useState } from 'react';
import heroImg from './assets/hero.png'
import Course from './Course';

function CourseList() {

    function handleDelete(id) {
        console.log(`Course with id ${id} deleted!`);
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
    }

    const [courses, setCourses] = useState([
        
        { id: 1, image: heroImg, name: "React Course", price: 99.99, rating: "4.5", show: true},
        { id: 2, image: heroImg, name: "Vue Course", price: 89.99, rating: "4.0", show: true},
        { id: 3, image: heroImg, name: "Angular Course", price: 109.99, rating: "4.8", show: true },
        { id: 4, image: heroImg, name: "Spring Boot Course", price: 79.99, rating: "5.0", show: true }
    ]);

    const [dummy, setDummy] = useState(true);

    useEffect(() => {
        console.log("useEffect called from CourseList component");
        console.log(dummy);
    },[dummy]);

    // Sort the courses by price in ascending order
    courses.sort((x,y) => x.price - y.price);

    // Filter the courses to include only those with a price less than $100
    //const vfmCourses = courses.filter(course => course.price < 100);

    // Map the courses array to create a list of Course components
    const courseComponentList = courses.map((course, index) =>
        <Course key={index} id={course.id} name={course.name} image={course.image} price={course.price} rating={course.rating} show={course.show} delete={handleDelete} />
    )

    // Render the list of Course components
    return (
        <>
            {courseComponentList}
            <button onClick={() => setDummy(false)}>Dummy</button>
        </>
        
    );

}

export default CourseList;