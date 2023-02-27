import { Navigation, Pagination } from 'swiper'; // モジュールをインポート
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
import img1 from './img/img1.jpg'

import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination'; // スタイルをインポート

const Slider = () => {
    return (
        <Swiper 
            //propsとして渡す
            
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
        >
            <p className='slider-message1'>皆様に愛されて20年<br />24時間365日<br/>いつもあなたと両思い<br/></p>
            <p className='slider-message2'>創立2000年8月</p>
            <SwiperSlide className='swiper-slide'><img src={img1} alt="" width="100%" height="550px"/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=2" alt=""/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=3" alt=""/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=4" alt=""/></SwiperSlide>
        </Swiper>
    );
};

export default Slider;