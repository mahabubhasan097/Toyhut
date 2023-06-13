import React from 'react';
import { FcDownLeft, FcDownRight } from 'react-icons/fc';
import PhotoAlbum from "react-photo-album";
const PhotoGallery = () => {
    const photos = [
        { src: "https://i.ibb.co/1RPmZjt/model-car-g5c4d13231-640.jpg", width: 300, height: 200 },
        { src: "https://i.ibb.co/mR5vQF2/model-car-gf0e00ed92-640.jpg", width: 340, height: 280 },
        { src: "https://images.pexels.com/photos/3358482/pexels-photo-3358482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", width: 440, height: 780 },
        { src: "https://i.ibb.co/hHrg7c2/model-car-gcf6c153f8-640.jpg", width: 540, height: 380 },
        { src: "https://i.ibb.co/GRdL81J/truck-gf897d1ce9-640.jpg", width: 540, height: 280 },
        { src: "https://images.pexels.com/photos/1196838/pexels-photo-1196838.jpeg?auto=compress&cs=tinysrgb&w=1600", width: 440, height: 680 },
        { src: "https://i.ibb.co/pJc9LJ9/mclaren-g3a0c277f9-640.jpg", width: 440, height: 210 },
        { src: "https://i.ibb.co/rGcDxxJ/fire-fighters-g37708d691-640.jpg", width: 640, height: 480 },
    ];
    return (
        <div className='p-lg-5'>
            <div className='py-3 py-lg-5 text-center'>
                <h1 className='fw-bold color-one font-20'>Surf Our Toy Gallery</h1>
                <p className='font-13'><FcDownRight className='mb-1'></FcDownRight> Explore Our Exclusive Toy Car Collection <FcDownLeft className='mb-1'></FcDownLeft></p>
            </div>
            <div className='ps-2 pe-4 p-lg-0'>
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
        </div>

    );
};

export default PhotoGallery;