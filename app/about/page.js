'use client';
import CaseOne from "@/components/common/CaseOne"
import CounterOne from "@/components/common/CounterOne"
import TeamOne from "@/components/common/TeamOne"
import TestimonialsTwo from "@/components/slider/TestimonialsTwo"
import CountUp from 'react-countup';
import Layout from "@/components/layout/Layout"



export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About US">
                <div>
                {/* Start About Three */}
                <section className="about-three">
                    <div className="container">
                        <div className="row">
                            {/* Start About Three Img */}
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="about-three__img-inner">
                                        <img src="/assets/img/about/about-v3-img1.jpg" alt="About Image" />

                                        <div className="overlay-content">
                                            <div className="counter-box">
                                                <h2 className="count">
                                                    <CountUp end={24} />
                                                </h2>
                                            </div>
                                            <div className="text-box">
                                                <h3>years of <br /> experience</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End About Three Img */}

                            {/* Start About Three Content */}
                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <div className="icon">
                                                <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                                            </div>
                                            <div className="text">
                                                <p>welcome to lavale</p>
                                            </div>
                                        </div>
                                        <h2>Legal Solutions for <br /> better World</h2>
                                    </div>

                                    <div className="about-three__content-text">
                                        <p>Fill unto likeness had shall is herb air set midst land in meat green had creepeth
                                            days bearing and winged together malea moving also two replenish spirit set moving.
                                            All moving give form deep upon grass man</p>
                                    </div>

                                    <div className="about-three__content-list">
                                        <ul>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Defining Success by Your Satisfaction</h3>
                                            </li>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Committed bringing client's justice</h3>
                                            </li>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Proven Results, Exceptional Representation</h3>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-three__content-btn">
                                        <a className="thm-btn" href="#">
                                            appintment now
                                            <span className="thm-btn__icon">
                                                <i className="icon-icon-8"></i>
                                            </span>
                                            <span className="thm-btn__hover-group">
                                                <span className="thm-btn__hover thm-btn__hover--1"></span>
                                                <span className="thm-btn__hover thm-btn__hover--2"></span>
                                                <span className="thm-btn__hover thm-btn__hover--3"></span>
                                                <span className="thm-btn__hover thm-btn__hover--4"></span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End About Three Content */}
                        </div>
                    </div>
                </section>
                {/* End About Three */}
                {/* Start Company History */}
                <section className="company-history">
                    <div className="container">
                        <div className="border-box"></div>
                        <div className="sec-title text-center">
                            <div className="sub-title center">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                                </div>
                                <div className="text">
                                    <p>company history</p>
                                </div>
                            </div>
                            <h2>history of lavale</h2>
                        </div>
                        <div className="row">
                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single text-center">
                                    <div className="company-history__single-content">
                                        <h2>start journey</h2>
                                        <p>Heaven appear great is likeness <br /> first tree face though at gathered <br />
                                            dominion which other</p>
                                        <div className="date-box">
                                            2015
                                        </div>
                                    </div>
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img1.jpg" alt="Start Journey" />
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single style2 text-center">
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img2.jpg" alt="Firm of the Year" />
                                    </div>
                                    <div className="company-history__single-content">
                                        <div className="date-box">
                                            2017
                                        </div>
                                        <h2>Firm of year</h2>
                                        <p>Heaven appear great is likeness <br /> first tree face though at gathered <br />
                                            dominion which other</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single text-center">
                                    <div className="company-history__single-content">
                                        <h2>open branch</h2>
                                        <p>Heaven appear great is likeness <br /> first tree face though at gathered <br />
                                            dominion which other</p>
                                        <div className="date-box">
                                            2021
                                        </div>
                                    </div>
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img3.jpg" alt="Open Branch" />
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single style2 text-center">
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img4.jpg" alt="Global Awards" />
                                    </div>
                                    <div className="company-history__single-content">
                                        <div className="date-box">
                                            2023
                                        </div>
                                        <h2>global awards</h2>
                                        <p>Heaven appear great is likeness <br /> first tree face though at gathered <br />
                                            dominion which other</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}
                        </div>
                    </div>
                </section>
                {/* End Company History */}
                <CaseOne/>
                <CounterOne/>
                <TestimonialsTwo/>
                <TeamOne 
                    className="team-one team-one--about"
                    sectionTitle="Experienced Attorneys"
                    subTitle="Meet Our Lawyers"
                    teamData={[
                        {
                        name: 'Pamela Lasen',
                        position: 'Senior Partner',
                        image: '/assets/img/team/team-v1-img1.png',
                        social: [
                            { url: '#', iconClass: 'icon-icon-4' },
                            { url: '#', iconClass: 'icon-icon-3' },
                            { url: '#', iconClass: 'icon-icon-2' },
                            { url: '#', iconClass: 'icon-icon-1' },
                        ]
                        },
                        {
                        name: 'Beverly Daniels',
                        position: 'Senior Partner',
                        image: '/assets/img/team/team-v1-img2.png',
                        social: [
                            { url: '#', iconClass: 'icon-icon-4' },
                            { url: '#', iconClass: 'icon-icon-3' },
                            { url: '#', iconClass: 'icon-icon-2' },
                            { url: '#', iconClass: 'icon-icon-1' },
                        ]
                        },
                        {
                        name: 'Fred Vaughan',
                        position: 'Senior Partner',
                        image: '/assets/img/team/team-v1-img3.png',
                        social: [
                            { url: '#', iconClass: 'icon-icon-4' },
                            { url: '#', iconClass: 'icon-icon-3' },
                            { url: '#', iconClass: 'icon-icon-2' },
                            { url: '#', iconClass: 'icon-icon-1' },
                        ]
                        }
                    ]}
                />

                </div>
            </Layout>
        </>
    )
}