import React from 'react';
import { useSpring, useChain, animated, config, useTrail } from 'react-spring'

import './Project.scss';

import linkIcon from '../img/link_link.svg';
import githubLinkIcon from '../img/github_link.svg';
import documentIcon from '../img/document_link.svg';

function Link({ href, icon }) {
    return (
        <a href={href}>
            <div className="project_link">
                <img className="project_link_ic" src={icon} />
            </div>
        </a>
    );
}

function Title({ name }) {
    return (
        <div className="project_title"> {name} </div>
    );
}

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const bg_trans = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const title_trans = (x, y) => `translate3d(${x / 18}px,${y / 18}px,0)`
const desc_trans = (x, y) => `translate3d(${x / 14}px,${y / 14}px,0)`
const link_trans = (x, y) => `translate3d(${x / 18}px,${y / 17}px,0)`
function Project({
    title, desc, links
}) {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: config.gentle }))

    return (
        <div className="project_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onMouseOut={({ clientX: x, clientY: y }) => set({ xy: [0, 0] })}>

            <animated.div className="project_bg" style={{ transform: props.xy.interpolate(bg_trans) }} />

            <animated.div style={{ transform: props.xy.interpolate(title_trans) }}>
                <Title name={ title } />
            </animated.div>

            <div className="project_wrapper">
                <animated.div style={{ transform: props.xy.interpolate(desc_trans) }}>
                    <div className="project_info_wrapper">
                        <div className="project_info">
                            { desc }
                    </div>
                    </div>
                </animated.div>
                <animated.div className="project_link_wrapper" style={{ transform: props.xy.interpolate(link_trans) }}>
                {/* <div> */}

                    { links.map((x)=> ( <Link href={x.href} icon={x.icon} /> ) ) }
                    {/* <Link href='#' icon={linkIcon} />
                    <Link href='#' icon={documentIcon} />
                    <Link href='#' icon={githubLinkIcon} /> */}

                {/* </div> */}
                </animated.div>
            </div>
        </div>
    );
}

export default Project;