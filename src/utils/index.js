import * as React from "react"
import Noimage from '../images/no_image.png'
import ReactHtmlParser from 'react-html-parser';
import * as qs from "query-string"

const imgUrl = (value) => {
    if (value) {
        //console.log("log:",value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src)
        return value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src;
    }
    return Noimage;
}

const mediumImg = (value) => {

    if (value?.data?.attributes?.formats?.medium?.url) {
        return value?.data?.attributes?.formats?.medium?.url;
    }
    return Noimage;
}
const smallImg = (value) => {

    if (value?.data?.attributes?.formats?.small?.url) {
        return value?.data?.attributes?.formats?.small?.url;
    }
    return Noimage;
}

const thumbnailImg = (value) => {
    if (value) {
        //console.log("log:",value?.file?.childImageSharp.gatsbyImageData?.images?.fallback?.src)
        return value?.data?.attributes?.formats?.thumbnail?.url;
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
        str = str.substring(0, 60) + "...";
    }
    return ReactHtmlParser(str);
}

const SendMail = postData => {
    console.log(postData)
    return window.fetch(`${process.env.GATSBY_STRAPI_SITE_URL}/sendemail/property_enquiry`, {
        method: `POST`,
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify(postData),
    })
}

export { numberFormat, rupeeFormat, imgUrl, mediumImg, smallImg, thumbnailImg, imgPublicUrl, importScript, priceString, subStr, SendMail }