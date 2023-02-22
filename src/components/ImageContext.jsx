import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ImageItem from "./ImageItem";



export const ImageContext = createContext();

export const ImageProvider = ({ children }) =>{
    const apiKey = '3e32d9386eb75f17fc4e7b114810a3ed'
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchItem ,setSearchItem] = useState('mountains')

    useEffect(() => {
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

    // const searchImages = async (text) => {
    //     setLoading(true);
    //     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=24&format=json&nojsoncallback=1`;
    //     const response = await axios.get(url);
    //     setImages(response.data.photos.photo);
    //     setLoading(false);
    //     setSearchItem(text);
    //   };

    const updateSearchItem = (value) =>{
        setSearchItem(value)
    }

    const contextValue = {
        images,
        loading,
        searchItem,
        updateSearchItem
        
    };
    return(
        <ImageContext.Provider value={contextValue} >
            {children}
        </ImageContext.Provider>
    )




}
