import * as React from "react"
import Noimage from '../images/no_image.png'

const imgUrl = (value) => {
    if (value) {
        //console.log("log:",value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src)
        return value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src;
    }
    return Noimage;
}

const imgPublicUrl = (value) => {
    if (value) {
        //console.log("log:",value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src)
        return value?.file?.PublicUrl;
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
    const script = document.createElement('script')
    script.src = src
    script.async = true
    return document.body.appendChild(script);
}
export { numberFormat, rupeeFormat, imgUrl, imgPublicUrl, importScript }