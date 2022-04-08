import React from "react";
import Photos from "../GalleryData";
import Navbar from "../Navbar";

export default function Gallery() {
    const galleryPhotos = Photos.map(photo =>{
        return (
            <div className={photo.class}>
                <div className="gallery-item">
                    <div className="image">
                        <img src={photo.image} alt={photo.title}/>
                    </div>
                    <div className="gallery-text">{photo.title}</div>
                </div>
            </div>
        )
    })
    return (
        <div className="gallery-container">
            <Navbar theme="dark"/>
            <h4 className="gallery-header">Gallery</h4>
            <div className="gallery-wrap">
                {galleryPhotos}    
            </div>
        </div>
    );
}
