import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageContext } from "./ImageContext";
import ImageItem from "./ImageItem";
import HeadImage from "./HeadImage";
import "./image.css"


const Image = () => {
    const apiKey = '3e32d9386eb75f17fc4e7b114810a3ed'
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchItem ,setSearchItem] = useState('mountains')
    
    
    useEffect(() => {
        console.log("Inside fetch")
        
        const fetchImages = async () =>{
            setLoading(true);
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchItem}&per_page=24&format=json&nojsoncallback=1`
            const res = await axios.get(url)
            setImages(res.data.photos.photo)
            setLoading(false)
            console.log(images)

        };
        fetchImages();
    },[searchItem])
    

    const updateSearchItem = (value) =>{
        setSearchItem(value)
    }

    return(
        <ImageContext.Provider value={{
            images,
            loading,
            searchItem,
            updateSearchItem,
            
        }}
        >
            <div className='container'>
                <HeadImage />
                {loading ? (<p>Loading..Please Wait...!</p>) :
                (
                    <ul className='imgContainer'>
                        {images.map((image) =>{
                            // <ImageItem key={image.id} image={image} />
                         return(   <img key={image.id}
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
        alt={image.title}
      />)
                        })}
                    </ul>
                )}
            </div>

        </ImageContext.Provider>
    )

}

export default Image;