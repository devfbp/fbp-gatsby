import * as React from "react"
import Noimage from '../images/no_image.png'
import ReactHtmlParser from 'react-html-parser';

const imgUrl = (value) => {
    if (value) {
        //console.log("log:",value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src)
        return value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src;
    }
    return Noimage;
}

const imgPublicUrl = (value) => {
    if (value) {
        //console.log("log:",value?.file?.publicURL)
        return value?.file?.publicURL;
    }
    return Noimage;
}

const numberFormat = (numbers) => {
    let convertedNF = 0;
    if (numbers) {
        convertedNF = numbers;
    }
    return convertedNF.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const rupeeFormat = (numbers) => {
    let convertedNF = 0;
    if (numbers) {
        convertedNF = numbers;
    }
    return "₹ " + convertedNF.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const importScript = (src) => {
    console.log(src)
    const script = document.createElement('script')
    script.src = src;
    script.async = true;
    return document.body.appendChild(script);
}

const priceString = (numbers) => {
    let convertedNF = 0;
    if (numbers) {
        convertedNF = numbers;
    }
    return "₹ " + convertedNF;
}

const subStr = (str) => {
    if (str) {
        str = str.substring(0,60)+"...";
    }
    return ReactHtmlParser(str);
}

export { numberFormat, rupeeFormat, imgUrl, imgPublicUrl, importScript, priceString, subStr}