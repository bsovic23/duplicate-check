import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Footer from '../components/Footer';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

function About() {
    return(
        <section>
            <section>
                <h1>About the Co-Enrollment Application</h1>
            </section>
            <section>
                NAVBAR
            </section>
            <section class="container">
                <div class="m-5 row">
                    <div class="col">
                        <h2>About Brit</h2>
                        <p>Decription Brit</p>
                    </div>
                    <div class="col">
                        <h2>Application Tests For</h2>
                        <p>The application tests for 9 different series of potential duplicate</p>
                        <ol>
                            <li>First Name, Last Name, Digits, Date of Birth</li>
                            <li>First Name, Last Name, Date of Birth</li>
                            <li>First Name, Last Name, Digits</li>
                            <li>First Name, Last Name</li>
                            <li>First Name, Digits, Date of Birth</li>
                            <li>Last Name, Digits, Date of Birth</li>
                            <li>First Name, Date of Birth</li>
                            <li>Last Name, Date of Birth</li>
                            <li>Digits, Date of Birth</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section>
                <h3>Benefits of RABRIT</h3>
                <div>
                <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'3'}
                        spaceBetween={50}
                        keyboard={{
                            enabled: true,
                        }}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
                        className="mySwiper"
                    >
                    <SwiperSlide>
                        <div>
                            <h1>Increased Accuracy</h1>
                            <p>Nine individual tests of duplicate screening</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1>Polished UI/UX</h1>
                            <p>User friendly</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1>Availability</h1>
                            <p>Any user can access and use</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1>Speed</h1>
                            <p>RA-BRIT runs quicker than any REDCap or SAS Duplicate Screening</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1>Cost</h1>
                            <p>No REDCap or SAS purchase and/or user fees</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>     
        </section>
    )
};

export default About;