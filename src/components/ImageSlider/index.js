import { queryByLabelText } from '@testing-library/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState, useCallback  } from 'react';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({ banner, data }) {
   const [isDrag, setIsDrag] = useState(false)
   // const [prevPageX, setPrevPageX] = useState(0)
   // const [prevScrollLeft, setPrevScrollLeft] = useState(0)
   const [curIndex, setCurIndex] = useState(1);
   // const [curScroll, setCurScroll] = useState(0)
   const [isEnter, setIsEnter] = useState(false);
   const imageSliderRef = useRef();

   const indexRef = useRef(1)
   const scrollRef = useRef(0)
   const prevScrollRef = useRef(0)
   const prevPageXRef = useRef(0)
   const isDraRef = useRef(false)


   useEffect(() => {
      console.log("set Index useEffect")
      if (curIndex === 1) return;
      scrollRef.current = 0
      indexRef.current = 1
      setCurIndex(1);
   }, [data]);


   const imageWidth = 1100;
   // vì khi re-render
   data = data.slice(0, data.length - 5).split('*and*')
   const maxScroll = imageWidth * (data.length - 1)


   useEffect(() => {
      console.log("isEnter = ", isEnter);
      if (isEnter) return;

      const id = setInterval(() => {
         console.log("useEffect auto slide");
         nextImage();
      }, 4500);

      return () => clearInterval(id);
   }, [isEnter]);


   useEffect(() => {
      console.log("useEffect scroll = ", scrollRef.current)

      imageSliderRef.current.scrollLeft = scrollRef.current

      // cap nhap lại prevScroll -> prev chậm hơn curScroll
      prevScrollRef.current = scrollRef.current

   }, [scrollRef.current])


   const handleStartDrag = (e) => {
      // if (isEnter) return;
      console.log("handle start drag");
      setIsDrag(true);
      isDraRef.current = true


      prevPageXRef.current = e.pageX
      imageSliderRef.current.style.scrollBehavior = 'auto'
   }

   const fixScroll = () => {
      if (scrollRef.current <= 0) return 0;

      let i = 0
      while (i < 10) {
         if (scrollRef.current >= (i * imageWidth) && scrollRef.current <= ((i + 1) * imageWidth)) {
            const distance = scrollRef.current - prevScrollRef.current

            // nếu điều khiển bằng nút
            if (distance == 0) return scrollRef.current;
            
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

      // khi mouseDown mới scroll, nếu mouseMove sẽ không scroll được
      if (!isDrag) return;

      setIsDrag(true);
      
      const distance = e.pageX - prevPageXRef.current // khoang cach scroll

      const newScroll = prevScrollRef.current - distance
      
      const  isInValid =  newScroll < 0 || newScroll > maxScroll // Nếu scroll ở hình đầu và hình cuối

      // console.log(newScroll, maxScrollRef.current);

      if (!isInValid) {
         imageSliderRef.current.scrollLeft = newScroll
         scrollRef.current = newScroll
      }
   }

   const handleStopDrag = (e) => {

      setIsDrag(false);
      isDraRef.current = false

      imageSliderRef.current.style.scrollBehavior = 'smooth'

      // if (isEnter) return;
      if (scrollRef.current == 0 || scrollRef.current ==  maxScroll) return;
      if (scrollRef.current == prevScrollRef.current) return;

      console.log('handle stop drag')

      // console.log(prevScrollRef.current, scrollRef.current)

      // auto slide
      const fixedNumber = fixScroll(); 
      scrollRef.current = fixedNumber

      // update index -> re-render
      indexRef.current = fixedNumber / 1100 + 1
      setCurIndex(indexRef.current);
   }


   const nextImage = () => {
      // setIsEnter(true)

      // console.log("next image curIndex = ", curIndex)
      // console.log("next image curScroll = ", scrollRef.current)
      // console.log("next image indexRef = ", indexRef.current)

      if (indexRef.current == data.length) {
         indexRef.current = 1
         setCurIndex(indexRef.current)
      } else {
         indexRef.current += 1
         setCurIndex(indexRef.current)
      }

      const fixedNumber = fixScroll()
      // console.log("fixed Number = ", fixedNumber);
      // console.log("maxScroll = ", maxScroll);

      fixedNumber == maxScroll ? 
         scrollRef.current = 0 :
         scrollRef.current = fixedNumber + imageWidth

      setIsEnter(false)
   }

   const previousImage = () => {
      // console.log("previous image");

      if (indexRef.current == 1) {
         indexRef.current = data.length
         setCurIndex(indexRef.current)
      } else {
         indexRef.current -= 1
         setCurIndex(indexRef.current)
      }

      const fixedNumber = fixScroll()
      // console.log("fixed Number = ", fixedNumber);

      fixedNumber == 0 ? 
      scrollRef.current = maxScroll :
         scrollRef.current = (fixedNumber - imageWidth)
   }


   const classes = cx('image-slider', {
      banner,
   });

   console.log("re-render");

   return (
      <div className={cx("image-slider-frame")}
      onMouseDown= {(e) => handleStartDrag(e)}
      onMouseUp ={(e) => handleStopDrag(e)}
      onMouseMove = {(e) => handleDrag(e)}
      onMouseEnter = {() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}

      // onClick={(e) => console.log('clcik')}
      >
      <div
         className={classes}
         ref={imageSliderRef}
      >
         <div
            className={cx('left-arrow', 'slider-control')}
            onClick={() => previousImage()}
            // onMouseEnter={() => {
            //    setIsEnter(true);
            // }}
            // onMouseLeave={() => setIsEnter(prev => prev ? false : true)}
         >
            <i className="fa-solid fa-chevron-left"></i>
         </div>
         <div
            className={cx('right-arrow', 'slider-control')}
            onClick={() => nextImage()}
            // onMouseEnter={() => {
            //    setIsEnter(true);
            // }}
            // onMouseLeave={() => setIsEnter(false)}

         >
            <i className="fa-solid fa-chevron-right"></i>
         </div>
         <div className={cx('slider-index')}>
            <span>{curIndex}</span> / <span>{data.length}</span>
         </div>
         {Array.isArray(data) ? (
            data.map((item, index) => {
               return (
                  <div
                     key={index}
                     className={cx(
                        'slider-item',
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
