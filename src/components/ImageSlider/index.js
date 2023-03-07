import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({ banner, data }) {
   const [curIndex, setCurIndex] = useState(0);
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
      // console.log(imageSliderRef.current.scrollWidth)
      
      // const handleScrollImage = (e) => {
      //    imageSliderRef.current.scrollLeft = e.pageX
      //    console.log(e.pageX)
      // }
      // imageSliderRef.current.addEventListener('mousemove', (e) => handleScrollImage(e))
   }, [])


   data = data.slice(0, data.length - 5).split('*and*');

   const nextImage = () => {
      console.log(imageSliderRef.current.scrollLeft)

      setCurIndex((curIndex) => 
         curIndex == data.length - 1 ? 0 : curIndex + 1
         );

      imageSliderRef.current.scrollLeft >= 3300 ? 
         imageSliderRef.current.scrollLeft = 0 :
         imageSliderRef.current.scrollLeft += 1100

   }

   const previousImage = () => {
      setCurIndex((curIndex) =>
         curIndex == 0 ? data.length - 1 : curIndex - 1
      );
      imageSliderRef.current.scrollLeft == 0 ?
         imageSliderRef.current.scrollLeft = 3300 :
         imageSliderRef.current.scrollLeft -= 1100
   }

   const classes = cx('image-slider', {
      banner,
   });

   return (
      <div className={cx("image-slider-frame")}>
      <div
         className={classes}
         ref={imageSliderRef}
         onMouseEnter={() => {
            setIsEnter(true);
         }}
         onMouseLeave={() => setIsEnter(false)}
      >
         <div
            className={cx('left-arrow', 'slider-control')}
            onClick={() => previousImage()}
         >
            <i className="fa-solid fa-chevron-left"></i>
         </div>
         <div
            className={cx('right-arrow', 'slider-control')}
            onClick={() => nextImage()}
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
