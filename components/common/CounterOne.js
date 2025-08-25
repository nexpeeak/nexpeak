'use client';

import React from 'react';
import CountUp from 'react-countup';

const defaultCounters = [
    {
        icon: 'icon-icon-13',
        count: 1500,
        suffix: '+',
        text: 'Clients Served',
    },
    {
        icon: 'icon-icon-14',
        count: 99,
        suffix: '%',
        text: 'Compliance Success',
    },
    {
        icon: 'icon-icon-15',
        count: 40,
        suffix: '+',
        text: 'Industries Covered',
    },
    {
        icon: 'icon-icon-29',
        count: 200,
        suffix: '+',
        text: 'Subscriptions/Year',
    },
];

export default function CounterOne({ counters = defaultCounters }) {
    return (
        <>
            {/* Start Counter One */}
            <section className="counter-one" style={{paddingBottom:"0"}}>
                <div className="container">
                    <ul className="row">
                        {counters.map((counter, index) => (
                            <li
                                key={index}
                                className={`col-xl-3 col-lg-6 col-md-6 wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'}`}
                                data-wow-delay={`${index * 100}ms`}
                                data-wow-duration="1500ms"
                            >
                                {/* Start Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="icon-box">
                                        <span className={counter.icon}></span>
                                    </div>
                                    <div className="text-box">
                                        <h2 className="count">
                                            <CountUp end={counter.count} /> <span className="suffix">{counter.suffix}</span>
                                        </h2>
                                        <p>{counter.text}</p>
                                    </div>
                                </div>
                                {/* End Counter One Single */}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* End Counter One */}
        </>
    );
}
