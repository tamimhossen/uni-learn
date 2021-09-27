import React from 'react';
import './Course.css';

const Course = (props) => {
    const {img, name, price} = props.course;
    return (
        <div className="col-md-4">
            <div class="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">${price}</p>
                <button className="btn btn-primary" onClick={() => props.handleCourse(props.course)}>Enroll Now</button>
            </div>
            </div>
        </div>
    );
};

export default Course;