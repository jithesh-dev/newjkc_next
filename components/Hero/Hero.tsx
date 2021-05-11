import Image from "next/image";
import Slider from "react-slick";

import styles from "./Hero.module.css";
export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.hero}>
      {/* <Slider {...settings}>
        <div className={styles.heroItem}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/static/images/candid-wedding-photographer-chennai-002.jpg"
          />
        </div>
        <div className={styles.heroItem}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/static/images/candid-wedding-photographer-chennai-003.jpg"
          />
        </div>
        <div className={styles.heroItem}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/static/images/candid-wedding-photographer-chennai-004.jpg"
          />
        </div>
      </Slider> */}
    </div>
  );
}
