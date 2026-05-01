
function Course(props) {

    if (props.show == true) {

        return (
            <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <span>{props.rating}</span>
            </div>
        );

    } else {
        return (
            <div className="card">Course Not available</div>
        );
    }
}

export default Course;