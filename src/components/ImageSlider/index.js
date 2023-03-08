import { queryByLabelText } from '@testing-library/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({ banner, data }) {
   const [isDrag, setIsDrag] = useState(false)
   const [prevPageX, setPrevPageX] = useState(0)
   const [prevScrollLeft, setPrevScrollLeft] = useState(0)
   const [curIndex, setCurIndex] = useState(1);
   // const [curScroll, setCurScroll] = useState(0)
   const [isEnter, setIsEnter] = useState(false);
   const imageSliderRef = useRef();

   const dataRef = useRef(data.slice(0, data.length - 5).split('*and*'));
   const indexRef = useRef(1)
   const scrollRef = useRef(0)
   
   const imageWidth = 1100;
   const maxScrollRef = useRef(imageWidth * (dataRef.current.length - 1));


   useEffect(() => {
      console.log("set Index useEffect")
      if (curIndex === 1) return;
      setCurIndex(1);
   }, [dataRef.current]);

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

      console.log("curScroll = ", scrollRef.current)
      // setCurIndex()
      imageSliderRef.current.scrollLeft = scrollRef.current

   }, [scrollRef.current])



   const handleStartDrag = (e) => {

      if (isEnter) return;
      setIsDrag(true);
      setPrevPageX( e.pageX);
      setPrevScrollLeft(imageSliderRef.current.scrollLeft)
      imageSliderRef.current.style.scrollBehavior = 'auto'

   }

   const fixScroll = () => {
      if (scrollRef.current <= 0) return 0;

      let i = 0
      while (i < 10) {
         if (scrollRef.current >= (i * imageWidth) && scrollRef.current <= ((i + 1) * imageWidth)) {
            const distance = scrollRef.current - prevScrollLeft
            
            // scroll to the left
            if (distance > 0) {
               if (Math.abs(distance) > imageWidth / 4) return imageWidth * (i + 1) // ke tiep
               else return imageWidth * i
            }
            // scroll to the right
            if (distance < 0) {
               if (Math.abs(distance) > imageWidth / 4) return imageWidth * i // truoc do
               else return imageWidth * (i + 1)
            } 
         } 

         i++;
      }
   }


   const handleDrag = (e)  => {
      if (!isDrag || isEnter) return;
      e.preventDefault()

      const distance = e.pageX - prevPageX
      // setDistance(distance)

      const newScroll = prevScrollLeft - distance
      const  isInValid =  newScroll < 0 || newScroll > imageWidth * (dataRef.current.length - 1)

      // console.log("invalid = ", isInValid)
      if (!isInValid) {
         imageSliderRef.current.scrollLeft = newScroll
         scrollRef.current = newScroll
      }
   }

   const handleStopDrag = (e) => {

      // console.log('handle stop drag')


      setIsDrag(false);
      imageSliderRef.current.style.scrollBehavior = 'smooth'
      if (isEnter) return;
      if (scrollRef.current == 0 || scrollRef.current ==  maxScrollRef.current) return;
      if (scrollRef.current == prevScrollLeft) return;

      console.log("handle stop drag");

      // auto slide
      const fixedNumber = fixScroll();

      indexRef.current = fixedNumber / 1100 + 1

      scrollRef.current = fixedNumber
      setCurIndex(indexRef.current);
   }


   const nextImage = () => {
      // e.stopPropagation();

      console.log("next image curIndex = ", curIndex)
      console.log("next image curScroll = ", scrollRef.current)
      console.log("next image indexRef = ", indexRef.current)

      if (indexRef.current == dataRef.current.length) {
         indexRef.current = 1
         setCurIndex(indexRef.current)
      } else {
         indexRef.current += 1
         setCurIndex(indexRef.current)
      }
      // console.log(curScroll + " = " + maxScrollRef.current);
      // console.log(curScroll == maxScrollRef.current);
      const fixedNumber = fixScroll()
      console.log("fixed Number = ", fixedNumber);
      fixedNumber == maxScrollRef.current ? 
         scrollRef.current = 1 :
         scrollRef.current = fixedNumber + imageWidth
   }

   const previousImage = () => {
      // e.stopPropagation();
      console.log("previous image");

      if (indexRef.current == 1) {
         indexRef.current = dataRef.current.length
         setCurIndex(indexRef.current)
      } else {
         indexRef.current -= 1
         setCurIndex(indexRef.current)
      }

      const fixedNumber = fixScroll()
      console.log("fixed Number = ", fixedNumber);
      fixedNumber == 0 ? 
      scrollRef.current = maxScrollRef.current :
         scrollRef.current = (fixedNumber - imageWidth)

   }

   const classes = cx('image-slider', {
      banner,
   });

   return (
      <div className={cx("image-slider-frame")}
      onMouseDown= {(e) => handleStartDrag(e)}
      onMouseUp ={(e) => handleStopDrag(e)}
      onMouseMove = {(e) => handleDrag(e)}
      // onClick={(e) => console.log('clcik')}
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
            <span>{curIndex}</span> / <span>{dataRef.current.length}</span>
         </div>
         {Array.isArray(dataRef.current) ? (
            dataRef.current.map((item, index) => {
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
