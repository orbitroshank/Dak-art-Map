"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

type Props = { images: string[] };

export default function Slideshow({ images }: Props) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
    >
      {images.map((src) => (
        <SwiperSlide key={src}>
          <Image
            src={src}
            alt=""
            width={800}
            height={600}
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
