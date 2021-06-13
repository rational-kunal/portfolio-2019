import React, { useRef } from 'react';

import { useSpring, useChain, animated, config, useTrail } from 'react-spring'

import './Profile.scss';

import instaIcon from '../img/intagram.svg';
import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

function Name({ name, nick }) {
    return (
        <div className="profile_name">
            {nick} <strong> {name} </strong>
        </div>
    );
}

function Link({ href, icon, animation }) {
    return (
        <div >
            <a href={href}>
                <div className="profile_link">
                    <animated.div className="profile_link_inner" style={animation}>
                        <img src={icon} className="profile_link_icon" />
                    </animated.div>
                </div>
            </a>
        </div>
    );
}

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const img_trans = (x, y) => `translate3d(${x / 10}px,${y / 9}px,0)`
const name_trans = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
const desc_trans = (x, y) => `translate3d(${x / 18}px,${y / 18}px,0)`

function Profile({ wrapperAnimation, linkAnimations, bio, imageAnimation }) {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const _icons = [
        { href: 'https://github.com/rationa-kunal', icon: githubIcon },
        { href: 'https://in.linkedin.com/in/kunal-kamble-671b3a118', icon: linkedinIcon },
        { href: 'https://www.instagram.com/rational_kunal/', icon: instaIcon },
    ];

    return (
        <animated.div style={wrapperAnimation}>
            <div className="profile_wrapper"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                onMouseOut={({ clientX: x, clientY: y }) => set({ xy: [0, 0] })}>

                <animated.div style={{ transform: props.xy.interpolate(img_trans) }}>
                    <animated.div className="image_wrapper" style={imageAnimation}>
                        <img src='https://i.imgur.com/K7q9WUh.jpg' className="dp"></img>
                    </animated.div>
                </animated.div>

                <animated.div style={{ transform: props.xy.interpolate(name_trans) }}>
                    <Name name='kunal' nick='rational' />
                </animated.div>

                <animated.div style={{ transform: props.xy.interpolate(desc_trans) }}>
                    <div className="profile_desc_wrapper">
                        <div className="profile_desc">
                            {bio}
                        </div>
                        <div className="profile_link_wrapper">

                            {linkAnimations.map((a, i) => (
                                < Link href={_icons[i].href} icon={_icons[i].icon} animation={a} />
                            ))}

                        </div>
                    </div>
                </animated.div>
            </div>

        </animated.div>
    );
}

export default Profile;
