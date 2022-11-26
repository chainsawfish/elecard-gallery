/* eslint-disable */
import {useState, useEffect} from "react";
import axios from "axios";
import constants from "../module/constants";


const useFetchImages = (url, isReset) => {

    const [totalPages, setTotalPages] = useState(0)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [allImagesArray, setAllImagesArray] = useState([])
    const calculateTotalPages = (arrayOfImages) => Math.ceil(arrayOfImages.length / constants.numberOfImagesOnPage);
    let savedArray = []
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
             savedArray = [...response.data].filter((el) => !localStorage.getItem(el.image))
            setIsLoading(true)
            setImages(savedArray)

            if (allImagesArray.length === 0) setAllImagesArray(response.data)

        } catch (error) {
            setIsLoading(true)
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchData().then(() => {
            setTotalPages(calculateTotalPages([...savedArray]) )
            setIsLoading(false)

    })},[isReset, totalPages] )
    return {images, setImages, isLoading, totalPages, setTotalPages, allImagesArray}
}
export default useFetchImages;