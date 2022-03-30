import React from "react";
// import Photos from "../GalleryData";

export default function Gallery() {
    // const galleryPhotos = Photos.map(photo =>{
    //     return (
    //         <a href="/" className="photo-link">
    //             <div 
    //                 key={photo.id} 
    //                 alt="gallery" 
    //                 className="photo"
    //                 style={{
    //                     gridArea:`img-${photo.id}`, 
    //                     backgroundImage:`url(${photo.image})`
    //                 }}
    //             ></div>
    //         </a>
    //     )
    // })
    return (
        <div className="gallery-container">
            <h4>Gallery</h4>
            <div className="photo-grid">
                {/* {galleryPhotos}     */}
            </div>
        </div>
    );
}
