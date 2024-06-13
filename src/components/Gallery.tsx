'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface GalleryProps {
    items: { image: string, title: string, description: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const setupQueue = items.map((item, index) => {
        return `${index}`
    })
    const [classQueue, setClassQueue] = useState(setupQueue);

    const handleClick = () => {
        setIsTransitioning(true);
        const tempArray = classQueue;
        const currentItem = tempArray[0]
        setTimeout(() => {
            setIsTransitioning(false);
            tempArray.shift()
            tempArray.push(currentItem)
            setClassQueue(tempArray)
        }); // Match the transition duration
    };

    return (
        <div className='galleryContainer'>
            <div className="thumbnails">
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`thumbnail index${classQueue[index]}`}
                        >
                            <Image src={item.image} alt="test image" height={1149} width={1920} /> 
                            
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