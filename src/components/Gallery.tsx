'use client'
import React, { useState, useEffect } from 'react';

interface GalleryProps {
    items: { image: string, title: string, description: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    

    const handleClick = (index: number) => {
        if (index !== currentIndex) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
            }); // Match the transition duration
        }
    };

    

    return (
        <div className='galleryContainer' style={{ backgroundImage: `url(${items[currentIndex].image})` }}>
            <div className='overlay'>
            <div className={`${'mainContent'} ${isTransitioning ? 'transition' : ''}`}>
                    <h2>{items[currentIndex].title}</h2>
                    <p>{items[currentIndex].description}</p> 
            </div>
                <div className='thumbnails'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${'thumbnail'} ${index === currentIndex ? 'activeThumbnail' : ''}`}
                            onClick={() => handleClick(index)}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className='thumbnailCaption'>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='navigation'>
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`${'navButton'} ${index === currentIndex ? 'activeNavButton' : ''}`}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;



