import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.scss';

const cx = classNames.bind(styles);

function ImageSlider({banner, data }) {

  const [curIndex, setCurIndex] = useState(0);
  const [isEnter, setIsEnter]= useState(false)
  const imageRef = useRef()

  useEffect(() => {

    if (curIndex === 0) return;
    setCurIndex(0)
  },[data])

  useEffect(() => {
      // imageRef.current.addEventListener("click", () => {
      //    // console.log("click")
      //    return
      // })

      // console.log(isEnter);
      if (isEnter) return;
      const id = setInterval(() => {
         nextImage()
      }, 6000)

      return () => clearInterval(id)

  }, [isEnter])

   data = data.slice(0, data.length - 5).split("*and*")

   const nextImage = () =>
      setCurIndex((curIndex) =>
         curIndex == data.length - 1 ? 0 : curIndex + 1
      );

   const previousImage = () =>
      setCurIndex((curIndex) =>
         curIndex == 0 ? data.length - 1 : curIndex - 1
      );

      const classes = cx("image-slider",{
        banner
      })

   return (
      <div className={classes} ref={imageRef} onMouseEnter={() => {
         setIsEnter(true);
      }}
      onMouseLeave={() => setIsEnter(false)}>
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
         {Array.isArray(data) ? data.map((item, index) => {
            return (
               <div
                  key={index}
                  className={cx(
                     'slider-item',
                     index === curIndex ? 'active' : ''
                  )}
               >
                  <img src={item} alt="" />
               </div>
            );
         }) : <h2>Data is not array</h2>}
      </div>
   );
}

export default ImageSlider;
