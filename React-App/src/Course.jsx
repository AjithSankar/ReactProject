import PropTypes, { func } from 'prop-types';
import { useEffect, useState } from 'react';


function Course(props) {

    const [purchased, setPurchased] = useState(false);
    const [price, setPrice] = useState(props.price);
    const [discountApplied, setDiscountApplied] = useState(false);

    function applyDiscount(discount) {
        if (discountApplied) {
            console.log("Discount already applied!");
            return;
        }
        const discountedPrice = price * (1 - discount);
        setPrice(discountedPrice);
        setDiscountApplied(true);
    }

    useEffect(() => {
        //console.log("useEffect called from Course component");
    });

    function buyCourse() {
        console.log(`Course ${props.name} bought!`);
        setPurchased(true);
    }

    function buyCourse(discount, e) {
        console.log(`Course ${props.name} bought with discount: ${discount}`);
        console.log(e);
        setPurchased(true);
    }

    // Render the course card only if the name prop is provided
    return (
        props.name && (
            <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>${price.toFixed(2)}</p>
                <button onClick={(event) => buyCourse(0.2, event)}>Buy Now</button>
                <button onClick={() => applyDiscount(0.2)}>Apply 20% Discount</button>
                <button onClick={() => { props.delete(props.id) }}>Delete</button>
                <p>{purchased ? "Already Purchased!" : "Get it Now"}</p>
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