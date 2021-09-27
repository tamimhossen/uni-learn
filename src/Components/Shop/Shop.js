import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css'

const Shop = () => {
    const first12 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first12);
    const [cart, setCart] = useState([]);
    const handleCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="row shop">
            <div className="col-md-9">
                <div className="shop-container">
                    <div className="row">
                        {
                            courses.map(course => <Course course={course} handleCourse={handleCourse}></Course>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;