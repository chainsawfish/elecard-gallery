/* eslint-disable */
import {useState, useEffect} from "react";
import axios from "axios";
import constants from "../module/constants";


const useFetchImages = (url, isReset) => {

    const [totalPages, setTotalPages] = useState(0)
    const [images, setImages] = useState([])
    const [allImagesArray, setAllImagesArray] = useState([])
    const calculateTotalPages = (arrayOfImages) => Math.ceil(arrayOfImages.length / constants.numberOfImagesOnPage);
    let savedArray = []
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            savedArray = [...response.data].filter((el) => !localStorage.getItem(el.image))
            setImages(savedArray)
            if (allImagesArray.length === 0) setAllImagesArray(response.data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setTotalPages(calculateTotalPages([...savedArray]) )
        }
    }

    useEffect(()=> {
        fetchData().then(() => {} )
    },[isReset, totalPages] )
    return {images, setImages, totalPages, setTotalPages, allImagesArray}
}
export default useFetchImages;