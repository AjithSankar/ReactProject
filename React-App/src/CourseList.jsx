import heroImg from './assets/hero.png'
import Course from './Course';

function CourseList() {

    const courses = [
        {},
        { id: 1, image: heroImg, name: "React Course", price: 99.99, rating: "4.5", show: true},
        { id: 2, image: heroImg, name: "Vue Course", price: 89.99, rating: "4.0", show: true},
        { id: 3, image: heroImg, name: "Angular Course", price: 109.99, rating: "4.8", show: true },
        { id: 4, image: heroImg, name: "Spring Boot Course", price: 79.99, rating: "5.0", show: true }
    ];

    // Sort the courses by price in ascending order
    courses.sort((x,y) => x.price - y.price);

    // Filter the courses to include only those with a price less than $100
    const vfmCourses = courses.filter(course => course.price < 100);

    // Map the courses array to create a list of Course components
    const courseComponentList = vfmCourses.map((course, index) =>
        <Course key={index} name={course.name} image={course.image} price={course.price} rating={course.rating} show={course.show} />
    )

    // Render the list of Course components
    return (
        <>
            {courseComponentList}
        </>
        
    );

}

export default CourseList;