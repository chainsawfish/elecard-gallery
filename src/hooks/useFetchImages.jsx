import React, {useState, useEffect} from "react";
import axios from "axios";
import constants from "../module/constants";


const useFetchImages = (url, isReset) => {

    const [totalPages, setTotalPages] = useState(1)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [allImagesArray, setAllImagesArray] = useState([])
    const calculateTotalPages = (arrayOfImages) => Math.ceil(arrayOfImages.length / constants.numberOfImagesOnPage);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setIsLoading(true)
            setImages([...response.data])
            setTotalPages(calculateTotalPages([...response.data]))
            if (allImagesArray.length === 0) setAllImagesArray(response.data)

        } catch (error) {
            setIsLoading(true)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(()=> {
        fetchData()
    },[isReset])
    return {images, setImages, isLoading, totalPages, setTotalPages, allImagesArray}
}
export default useFetchImages;