import React from "react";
import Image from 'gatsby-image';
import { useProfilePhoto } from "../../hooks/useProfilePhoto";
import { useWindowSize } from "../../hooks/useWindowSize";

import './style.scss';

const IndexGreeting = () => {

    const { width, height } = useWindowSize();
    const profileFluid = useProfilePhoto();

    return (
        <div id="index-greeting">
            <div id="profile-content">

                <div id="profile-image-wrapper">
                    <Image fluid={{...profileFluid}}/>
                </div>

                <section>
                    <h3>Quick Intro</h3>
                    <p>
                        Born and raised in Cincinnati OH, Joe is a web developer and creative
                        driven by the desire to find solutions. He graduated with a Bachelors degree
                        in Software Engineering and has over 4 years of experience with web projects.
                    </p>

                    <p>
                        In his free time, he like to shoot photography, cook, sew, or anything else
                        that involves self expression or problem solving.
                    </p>

                    {/* <p>Node.js, React, Python, Ruby on Rails, Docker, GraphQL, SQL, Web Deployments, Three.js, Gatsby, Heroku</p> */}
                </section>

                <section>
                    <h3>More About Me</h3>
                    <p>
                       "I'm driven to find solutions for problems - it's vague, I know.
                        The problem might be a bug at work, a vision for some improvement in my living space,
                        a DIY build, or simply to make this or that look nicer.
                    </p>
                    
                    <p>
                        I'm also compelled toward self expression; I use photography, writing, music, cooking,
                        sewing - any medium that allows me to manifest myself into something and then share it
                        with others.
                    </p>
                    
                    <p>
                        Usually the problem solving and the self expression work together and produce something
                        like a film developer recipe, website design, or modding a cheap electric guitar.
                    </p>
                    
                    <p>
                        I like Indian food, kombucha, and jazz. I'm currently learning Spanish. I prefer an Android
                        phone but an Apple computer. I'm an ambivert. I think pineapple belongs on pizza.
                        I've never been pulled over. I think brutalist architecture is beautiful.
                        You should always buy fresh Parmesan cheese."
                    </p>
                </section>

            </div>

        </div>
    )
};

export default IndexGreeting
