import React, { useState, useEffect } from 'react';



// const slideImages = [
//     
//     'https://bt.accountsfiling.com/wp-content/uploads/2020/07/GST-Compliances_Website.jpg',
//     'https://bt.accountsfiling.com/wp-content/uploads/2020/07/New-Size.jpg'
// ];

const Slideshow = () => {

    const [scrollState, setScrollState] = useState(false);

    useEffect(() => {

    });
    return (
        <div className="slideshow">
            <img alt="Slider" src="https://bt.accountsfiling.com/wp-content/uploads/2020/07/GST-Compliances_Website.jpg" />

            <img alt="Slider-2" src="https://bt.accountsfiling.com/wp-content/uploads/2020/07/New-Size.jpg" />

        </div>
    );
};

export default Slideshow;