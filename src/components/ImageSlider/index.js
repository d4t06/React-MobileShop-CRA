import { queryByLabelText } from '@testing-library/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({ banner, data }) {
   const [distance, setDistance] = useState(0)
   const [isDrag, setIsDrag] = useState(false)
   const [prevPageX, setPrevPageX] = useState(0)
   const [prevScrollLeft, setPrevScrollLeft] = useState(0)
   const [curIndex, setCurIndex] = useState(0);
   const [curScroll, setCurScroll] = useState(0)
   const [isEnter, setIsEnter] = useState(false);
   const imageSliderRef = useRef();

   useEffect(() => {
      if (curIndex === 0) return;
      setCurIndex(0);
   }, [data]);

   // useEffect(() => {
   //    // imageRef.current.addEventListener("click", () => {
   //    //    // console.log("click")
   //    //    return
   //    // })

   //    if (isEnter) return;
   //    const id = setInterval(() => {
   //       nextImage();
   //    }, 4500);

   //    return () => clearInterval(id);
   // }, [isEnter]);

   useEffect(() => {

      console.log("curScroll = ", curScroll)
      imageSliderRef.current.scrollLeft = curScroll

   }, [curScroll])


   data = data.slice(0, data.length - 5).split('*and*');

   // const handleDrag = (e, value) => {
   //    setIsDrag(value)
   // }
   const handleStartDrag = (e) => {
      if (isEnter) return;
      setIsDrag(true);
      setPrevPageX( e.pageX);
      setPrevScrollLeft(imageSliderRef.current.scrollLeft)
      imageSliderRef.current.style.scrollBehavior = 'auto'

   }

   const autoSlide = () => {
      const imageWidth = 1100;
      console.log("distance = ", distance)
      const imageWidthRemaining = imageWidth - Math.abs(distance)

      let isAutoSlide = Math.abs(distance) > imageWidth / 3;

      if (imageSliderRef.current.scrollLeft > prevScrollLeft) {
         console.log("auto slide = ", isAutoSlide);
         setCurScroll(prev => prev += isAutoSlide ? 
            imageWidthRemaining : 
            - Math.abs(distance)) 
      } else {
         console.log("auto slide = ", isAutoSlide);

         setCurScroll(prev => prev -= isAutoSlide ? 
            imageWidthRemaining : 
            - Math.abs(distance)) 
      }
      // console.log("newScroll = ", newScroll);
      console.log("distance = ", distance);
      console.log("imageWidthRemaining = ", imageWidthRemaining);
      // console.log(newScroll);
      // console.log("scrolled ", isAutoSlide);
      console.log("curScroll = ", curScroll);

      // console.log("total = ", imageWidthRemaining + newScroll);
   }

   const handleDrag = (e)  => {
      // if (isEnter)
      if (!isDrag || isEnter) return;
      e.preventDefault()

      const distance = e.pageX - prevPageX
      setDistance(distance)

      const newScroll = prevScrollLeft - distance
      // setDistance(e.pageX - prevPageX)
      imageSliderRef.current.scrollLeft = newScroll
      setCurScroll(newScroll)
   }

   const handleStopDrag = (e) => {
      if (isEnter) return;
      setIsDrag(false);
      imageSliderRef.current.style.scrollBehavior = 'smooth'
      autoSlide()
   }

   const nextImage = () => {
      setCurIndex((curIndex) => 
         curIndex == data.length - 1 ? 0 : curIndex + 1
         );

      curScroll == 3300 ? 
         setCurScroll(0) :
         setCurScroll(curScroll + 1100)
   }

   const previousImage = () => {
      setCurIndex((curIndex) =>
         curIndex == 0 ? data.length - 1 : curIndex - 1
      );

      curScroll == 0 ?
         setCurScroll(3300) :
         setCurScroll(curScroll - 1100)
   }

   const classes = cx('image-slider', {
      banner,
   });

   return (
      <div className={cx("image-slider-frame")}
      onMouseDown= {(e) => handleStartDrag(e)}
      onMouseUp ={(e) => handleStopDrag(e)}
      onMouseMove = {(e) => handleDrag(e)}
      >
      <div
         className={classes}
         ref={imageSliderRef}
      >
         <div
            className={cx('left-arrow', 'slider-control')}
            onClick={() => previousImage()}
            onMouseEnter={() => {
               setIsEnter(true);
            }}
            onMouseLeave={() => {setIsEnter(false); setIsDrag(false)}}
         >
            <i className="fa-solid fa-chevron-left"></i>
         </div>
         <div
            className={cx('right-arrow', 'slider-control')}
            onClick={() => nextImage()}
            onMouseEnter={() => {
               setIsEnter(true);
            }}
            onMouseLeave={() => {setIsEnter(false); setIsDrag(false)}}

         >
            <i className="fa-solid fa-chevron-right"></i>
         </div>
         <div className={cx('slider-index')}>
            <span>{curIndex + 1}</span> / <span>{data.length}</span>
         </div>
         {Array.isArray(data) ? (
            data.map((item, index) => {
               return (
                  <div
                     key={index}
                     className={cx(
                        'slider-item',
                        'active'
                        // index === curIndex ? 'active' : ''
                     )}
                  >
                     <img src={item} alt="" />
                  </div>
               );
            })
         ) : (
            <h2>Data is not array</h2>
         )}
      </div>
      </div>
   );
}

export default ImageSlider;
