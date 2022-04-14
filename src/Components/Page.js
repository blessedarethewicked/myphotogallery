import React from 'react'
import "./Page.css"
import Gallery from "react-grid-gallery";
import Navbar from './Navbar';

function Page() {
    let gallery = [
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5289.JPG",
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5292.JPG",
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5297.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5307.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5316.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5318.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5320.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5336.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5346.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5349.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5350.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5374.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5385.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5388.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5390.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5394.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5395.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5403.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5427.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5436.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5441.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5448.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5451.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5453.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5459.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5466.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5473.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5475.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5477.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5478.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5482.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5489.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5490.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5499.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5501.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5503.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5510.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5511.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5522.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5536.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5550.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5553.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5557.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5559.JPG"
        }, 
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5560.JPG"
        }] 
    let IMAGES = []
    function createIMAGES(){
        for(let i = 0; i < gallery.length; i++){
            let obj = {
                src: gallery[i].src,
                thumbnail: gallery[i].src,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            }
            console.log(obj)
            IMAGES.push(obj)
        }
    }
    createIMAGES()
  return (
    <div  className = "Main">
        <Navbar/>
        <Gallery
            images={IMAGES}
            // enableLightbox={true}
            // maxRows={3}
            // backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
        />
    </div>
  )
}

export default Page