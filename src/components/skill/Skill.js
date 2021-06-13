import React, { useState } from 'react';
import { useSpring, useChain, animated, config, useTrail } from 'react-spring'
import './Skill.scss';

import htmlIcon from '../img/html.svg';
import jsIcon from '../img/js.svg';
import reactIcon from '../img/react.svg';
import djangoIcon from '../img/django.svg';
import expressIcon from '../img/express.svg';
import pythonIcon from '../img/python.svg';
import cppIcon from '../img/cpp.svg';
import { Spring } from 'react-spring/renderprops';

function SkillIcon({ icon, hoverd }) {
    return (
        <div className="skill_icon_wrapper">
            <Spring
                to={{
                    transform: `scale(${hoverd ? 1.1 : 1})`
                }}>
                {props => (<img className="skill_icon_img" src={icon} style={props} />)}
            </Spring>
        </div>
    );
}

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const skill_trans = (x, y) => `translate3d(${x / 10}px, ${y / 30}px, 0)`
function SkillGroup({ title, icons, animation, mass }) {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: config.wobbly }))
    const [hoverd, setHoverd] = useState(false);
    return (
        <animated.div className="" style={animation} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onMouseOut={({ clientX: x, clientY: y }) => set({ xy: [0, 0] })} >
            <animated.div style={{ transform: props.xy.interpolate(skill_trans) }}>
                <div className="skill_group_wrapper" onMouseOver={() => setHoverd(true)} onMouseOut={() => setHoverd(false)}>
                    <div className="skill_group_title"> {title} </div>
                    <div className="skill_group_icon">

                        {icons.map((item) => <SkillIcon icon={item} hoverd={hoverd} />)}

                    </div>
                </div>
            </animated.div>
        </animated.div>
    )
}

const skill_title_trans = (x, y) => `translate3d(${x / 40}px, ${y / 16}px, 0)`
function Skill({ wrapperAnimation, groupAnimations }) {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: config.wobbly }))

    const _skills = [
        { title: 'frontend', icons: [htmlIcon, jsIcon, reactIcon] },
        { title: 'backend', icons: [djangoIcon, expressIcon] },
        { title: 'expert@', icons: [pythonIcon, cppIcon] },
    ];

    return (
        <animated.div className="skill_wrapper" style={wrapperAnimation}>
            <animated.div className="" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                onMouseOut={({ clientX: x, clientY: y }) => set({ xy: [0, 0] })} >
                <div className="skill_bg">

                    <animated.div style={{ transform: props.xy.interpolate(skill_title_trans) }}>
                        <div className="skill_title" style={props}>skills</div>
                    </animated.div>

                    {groupAnimations.map((a, i) => (
                        < SkillGroup title={_skills[i].title} icons={_skills[i].icons} animation={a} />
                    ))}

                </div>
            </animated.div>
        </animated.div>
    );
}

export default Skill;