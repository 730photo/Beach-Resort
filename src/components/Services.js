import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info: 'Free coctails when you stay with us!!!!!!!'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Hike anytime when you stay with us!!!!!!!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Free shuttle rides when you stay with us!!!!!!!'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Get wasted when you stay with us!!!!!!!'
            }
        ]
    }
    render() {
        return (
            <section className="services">


                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
