'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface GalleryProps {
    items: { image: string, title: string, description: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [name, setName] = useState('image-container');

    const handleClick = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
        }); // Match the transition duration
    };

    return (
        <div className='galleryContainer'>
            <div className="thumbnails">
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${index === 0 ? 'activeThumbnail' : 'thumbnail'}`}
                        >
                            <Image src={item.image} alt="test image" height={300} width={200} /> 
                            
                            {/* <div className='thumbnailCaption'>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div> */}
                        </div>
                )})}
            </div>
            <div className="next" onClick={() => handleClick()}>Next</div>
        </div>
    );
};

export default Gallery;



