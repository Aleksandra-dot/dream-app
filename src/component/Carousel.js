import React from 'react';
import './Carousel.css'


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, image: './images/bird.png', text: 'I was a bird living in a beautiful garden. I was surrounded by flowers and bird song. I feel like I was supposed to be calm, but the garden was enormous and felt infinite. I didn’t know where I was or how to get out.'},
                { id: 2, image: './images/snow.png', text: 'Snow storm. I could only see one meter in front of me. The snow was hitting my face and felt like projectiles. Even though I kept walking I never came any further ahead. I have no idea where I was heading or why I was there.'},
                { id: 3, image: './images/clock.png', text: 'I was at work rushing from meeting to meeting in different parts of the city. There was a big clock in the sky saying “tick tock” very loudly. I could feel the sound in my chest. '},
                { id: 4, image: './images/dragon.png', text: 'here was the most beautiful light that I was following. I moved smoothly through the water. My body was a snake merged with a dragon. It was very calm.'}
            ],
            currentIndex: 0
        };
    }

    render() {
        const { items, currentIndex } = this.state;
        const currentItem = items[currentIndex];

        return (
            <div className="carousel">
                {items.map(item => (
                    <div key={item.id} className="carousel-item">
                        <img src={item.image} alt={item.text} />
                        <p style={{ color: item.color }}>{item.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Carousel;


