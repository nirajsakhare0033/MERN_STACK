import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import LazyImage from "../../loaders/LazyImage";
import { useSelector, useDispatch } from "react-redux";

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";

import CastCardActions from "../general/CastCardActions";
import { setCastCardAction } from "../../redux/layoutSlice";
import { setUserInfo } from "../../redux/userSlice";

const CastCarousel = ({ data, heading }) => {
  const [dynamicWidth, setDynamicWidth] = useState(null);
  const itemsContainerRef = useRef();
  const carouselContainerRef = useRef();
  const rightButtonRef = useRef();
  const leftButtonRef = useRef();
  const poster = useSelector((state) => state.layout.poster);
  const castCardAction = useSelector((state) => state.layout.castCardAction);
  const dispatch = useDispatch();

  useEffect(() => {
    
    setDynamicWidth(itemsContainerRef.current.offsetWidth);

    const setSizer = () => {
      setDynamicWidth(itemsContainerRef.current.offsetWidth);
    };
    window.addEventListener("resize", setSizer);

   
    return () => window.removeEventListener("resize", setSizer);
  }, [dynamicWidth, carouselContainerRef]);

  
  const handleSlider = (direction) => {
    if (direction === "left") {
      itemsContainerRef.current.scrollBy(-dynamicWidth - 15, 0);
    }
    if (direction === "right") {
      itemsContainerRef.current.scrollBy(dynamicWidth - 15, 0);
    }
  };

  const handleScroll = () => {
    
    if (
      carouselContainerRef.current.lastElementChild.getBoundingClientRect()
        .right < window.innerWidth
    ) {
      rightButtonRef.current.style.display = "none";
    }
    if (
      carouselContainerRef.current.lastElementChild.getBoundingClientRect()
        .right > window.innerWidth
    ) {
      rightButtonRef.current.style.display = "block";
    }

    
    if (
      carouselContainerRef.current.firstElementChild.getBoundingClientRect()
        .left > 0
    ) {
      leftButtonRef.current.style.display = "none";
    }
    if (
      carouselContainerRef.current.firstElementChild.getBoundingClientRect()
        .left < 0
    ) {
      leftButtonRef.current.style.display = "block";
    }
  };

  
  useEffect(() => {
    if (dynamicWidth > 768) {
      handleScroll();
    }
  }, [dynamicWidth]);

  return (
    <div className="w-full pl-4 md:pl-10 lg:pl-12">
     
      {castCardAction && <CastCardActions mediaType="person" />}

      
      <div
        className="flex items-center font-medium mt-10 mb-2 sm:mb-3 md:mb-4 gap-4"
        data-cy="cast-carousel-heading"
      >
        <h2 className="text-lg sm:text-2xl text-white">{heading}</h2>
      </div>

      
      <div className="relative h-fit w-full">
       
        <div
          className="carousel w-full lg:py-4 py-2 pr-2 space-x-4 rounded-box"
          ref={itemsContainerRef}
          onScroll={dynamicWidth > 768 ? handleScroll : () => null}
        >
          
          {dynamicWidth > 768 && (
            <div
              ref={leftButtonRef}
              className="hidden absolute top-[35%] -left-6 carousel-item z-10"
            >
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => handleSlider("left")}
              >
                <FaChevronLeft className="text-white text-4xl cursor-pointer" />
              </button>
            </div>
          )}

         
          <div
            className="flex gap-3 transition-all ease-in"
            ref={carouselContainerRef}
            data-cy="cast-carousel-items-container"
          >
           
            {data &&
              data.map((item) => (
                <div
                  key={item.id}
                  className={`last:mr-4 last:md:mr-10 last:lg:mr-12 aspect-[0.67/1] w-[26vw] xs:w-[28vw] sm:w-[22vw] md:w-[17vw] lg:w-[14.5vw] xl:w-[13.5vw] 2xl:w-[12vw] h-auto carousel-item flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in`}
                >
                  <Link
                    aria-label="card"
                    to={`/person/${item.id}`}
                    data-cy="cast-carousel-item-link"
                  >
                    <LazyImage
                      src={
                        item.profile_path
                          ? poster + item.profile_path
                          : EmptyCard
                      }
                      placeholder={LoadingCard}
                      type="card"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 px-2 py-1 sm:py-2">
                    <Link
                      aria-label="card"
                      to={`/person/${item.id}`}
                      className="hidden sm:block"
                    >
                      <h2 className="text-sm font-medium truncate">
                        {item.original_title || item.original_name}
                      </h2>
                      <h3 className="text-xs font-light truncate">
                        {item.character}
                      </h3>
                    </Link>

                   
                    <div
                      className="w-full flex justify-end items-center"
                      onClick={() => {
                        dispatch(setCastCardAction(true));
                        dispatch(setUserInfo(item));
                      }}
                    >
                      <FaEllipsisH className="text-lg" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

       
        {dynamicWidth > 768 && (
          <div
            ref={rightButtonRef}
            className="hidden md:block absolute top-[35%] right-0 carousel-item z-10"
          >
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => handleSlider("right")}
            >
              <FaChevronRight className="text-white text-4xl cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CastCarousel;
