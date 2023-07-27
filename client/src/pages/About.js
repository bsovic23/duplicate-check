import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Footer from '../components/Footer';
import PageNavbar from '../components/PageNavbar';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

function About() {
    const navChoices = [
        {id: 1, text: "Home", link: "/"},
        {id: 2, text: "About", link: "/about"},
        {id: 3, text: "Duplicate Check", link: "/duplicate"},
        {id: 4, text: "Comment", link: "/"},
        {id: 5, text: "What's New", link: "/whats-new"}
    ];

    return(
        <section>
            <section>
                <h1>About the Co-Enrollment Application</h1>
            </section>
            <section>
                <PageNavbar navElements={navChoices} />
            </section>
            <section class="container">
                <div class="m-5 row">
                    <div class="col">
                        <h2>About Brit</h2>
                        <p>
                        Currently, I serve as the Senior Data Analytics Director for the prestigious National Kidney Foundation, where I harness the power of data to drive insights, inform decision-making, and positively impact public health initiatives. My love for data analysis and software engineering has been the driving force behind my career, as I am passionate about using data-driven approaches to tackle real-world challenges and make a meaningful difference in people's lives.
                        
                        I hold a Bachelor of Science degree in Public Health and a Master of Public Health with a specialization in Epidemiology. Additionally, I have obtained a Full Stack Web Design certificate, enabling me to blend my expertise in data analysis and software engineering with modern web technologies.

                        Beyond my professional pursuits, I am an avid sports enthusiast. You can find me cheering passionately for the Cleveland Cavaliers, Dallas Cowboys, Alabama Crimson Tide Football team, and the Syracuse basketball team.
                        </p>
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
                            <p>User friendly to learn and use</p>
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