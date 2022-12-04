/* eslint-disable */
import {useState, useEffect} from "react";
import axios from "axios";
import constants from "../data/constants";


const useFetchImages = (url) => {

    const [totalPages, setTotalPages] = useState(0)
    const [images, setImages] = useState([])
    const [allImagesArray, setAllImagesArray] = useState([])
    const calculateTotalPages = (arrayOfImages) => Math.ceil(arrayOfImages.length / constants.numberOfImagesOnPage);
    let savedArray = []
    const fetchData = async () => {
        const controller = new AbortController()
        try {
            const response = await axios.get(url, {signal: controller.signal});
            savedArray = [...response.data].filter((el) => !localStorage.getItem(el.image))
            setImages(savedArray)
            if (allImagesArray.length === 0) setAllImagesArray(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setTotalPages(calculateTotalPages([...savedArray]))
            controller.abort()
        }
    }

    useEffect(() => {
        fetchData().then(() => {
        })
    }, [url])
    return {images, setImages, totalPages, setTotalPages, allImagesArray}
}
export default useFetchImages;