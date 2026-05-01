import PropTypes, { func } from 'prop-types';


function Course(props) {

    function buyCourse() {
        console.log(`Course ${props.name} bought!`);
    }

    function buyCourse(discount, e) {
        console.log(`Course ${props.name} bought with discount: ${discount}`);
        console.log(e);
    }

    // Render the course card only if the name prop is provided
    return (
        props.name && (
            <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <button onClick={(event) => buyCourse(0.2, event)}>Buy Now</button>
            </div>
        )
    );

}

Course.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    show: PropTypes.bool
};

export default Course;