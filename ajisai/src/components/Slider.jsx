import { Navigation, Pagination } from 'swiper'; // モジュールをインポート
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'

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
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=1" alt=""/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=2" alt=""/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=3" alt=""/></SwiperSlide>
            <SwiperSlide><img src="http://placehold.jp/700x400.png?text=4" alt=""/></SwiperSlide>
        </Swiper>
    );
};

export default Slider;