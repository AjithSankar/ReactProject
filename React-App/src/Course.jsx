import PropTypes from 'prop-types';


function Course(props) {

    // Render the course card only if the name prop is provided
    return (
        props.name && (
            <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <span>{props.rating}</span>
            </div>
        )
    );

}

Course.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    show: PropTypes.bool
};

export default Course;