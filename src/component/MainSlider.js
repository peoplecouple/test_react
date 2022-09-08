import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

const SLIDE = [
  { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드 내용", link: "/1" },
  { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드 내용", link: "/2" },
  { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드 내용", link: "/3" },
]

const MainSlider = () => {
  const [num, setNum] = useState(); // 초기값이 있으니 figure에 on이 붙은채로 나와서 초기값없애줌, 대신 useEffect로 
  const slideRef = useRef();
  useEffect(() => {
    setNum(0)
  }, []) //mount됬을 때 1번만 실행하자
  const slideSet = {
    dots: true,
    afterChange: index => setNum(index)
  }
  return (
    <>
      <section className="MainVisual">
        {/* {console.log(slideRef.current)} */}
        <Slider {...slideSet} ref={slideRef} className='main_slider'>
          {
            SLIDE.map(
              (el, idx) =>
                <figure className={`itm0${el.slideid} ${idx === num ? 'on' : ''}`} key={idx}>
                  <div className='inner'>
                    <h2>{el.content}</h2>
                    <p>{el.des}</p>
                    <a href={el.link}>more</a>
                  </div>
                </figure>
            )
          }
        </Slider>
        {/* {console.log(slideRef.current)} */}
        <div className='num'>0{num + 1} / <span>0 {SLIDE.length}</span></div>
        <div className='slide_handler'>
          <button onClick={() => slideRef.current.slickPrev()} >prev</button>
          <button onClick={() => slideRef.current.slickNext()}>next</button>
        </div>
        <ul className="slide_dots">
          {
            SLIDE.map((el, idx) => (
              <li className={idx === num ? 'on' : ''} onClick={() => slideRef.current.slickGoTo(idx)} key={el.slideid}>{el.content}</li>
            ))
          }
          {/* num은 슬라이드가 넘어가면서 바뀌지만, el.slideid-1은 map이 순회하는 값(변하지않는다) 그래서 안되는듯? */}
        </ul>
      </section>


    </>
    /* <div className="content">
        <div>
          {SLIDE[num]?.des}
        </div>
      </div> */

    // null 병합 연산자(??), optional chaining(?.)

  )
}

export default MainSlider;