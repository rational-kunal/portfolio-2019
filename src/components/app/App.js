import React, { useRef } from 'react';
import { useSpring, useChain, animated, config } from 'react-spring'

import Profile from '../profile/Profile';
import Skill from '../skill/Skill'
import Project from '../project/Project';
// import logo from './logo.svg';
import './App.scss';

import githubLinkIcon from '../img/github_link.svg';
import LinkIcon from '../img/link_link.svg';

const _profile = {
  bio: `Hello World!
  I am an aspiring software developer, who believes in the power of open source and has experience with the various web framework. I was groomed by the community and that's why I very much like giving back to the community. I am actively contributing to various Github repos.
  I want to obtain a position with a technology firm where I can help to change something in the world.`
}

function App() {

  let animationRefs = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const _profileLinkInit = {
    config: config.wobbly,
    to: { opacity: 1, top: '0px' },
    from: { opacity: 0, top: '30px' },
  }

  const _skillGroupInit = {
    config: config.wobbly,
    to: { opacity: 1, left: '0px' },
    from: { opacity: 0, left: '30px' },
  }

  let counter = 0;
  const animations = {
    profileWrapperInit: useSpring({
      config: config.gentle,
      to: { opacity: 1, marginTop: '0px' },
      from: { opacity: 0, marginTop: '-10px' },
      ref: (animationRefs[(counter++)] = useRef()),
    }),

    profileLinkInit: [
      useSpring({ ..._profileLinkInit, ref: (animationRefs[(counter++)] = useRef()) }),
      useSpring({ ..._profileLinkInit, ref: (animationRefs[(counter++)] = useRef()) }),
      useSpring({ ..._profileLinkInit, ref: (animationRefs[(counter++)] = useRef()) }),
    ],

    skillWrapperInit: useSpring({
      config: config.gentle,
      to: { opacity: 1, marginTop: '80px' },
      from: { opacity: 0, marginTop: '70px' },
      ref: (animationRefs[(counter++)] = useRef()),
    }),

    skillGroupInit: [
      useSpring({ ..._skillGroupInit, ref: (animationRefs[(counter++)] = useRef()) }),
      useSpring({ ..._skillGroupInit, ref: (animationRefs[(counter++)] = useRef()) }),
      useSpring({ ..._skillGroupInit, ref: (animationRefs[(counter++)] = useRef()) }),
    ],

    imageInit: useSpring({
      config: config.gentle,
      to: { opacity: 1, top: '-130px' },
      from: { opacity: 0, top: '-110px' },
      ref: (animationRefs[(counter++)] = useRef()),
    }),

  };

  useChain(animationRefs, [0, 0.1, 0.2, 0.3, 0.3, 0.2, 0.3, 0.4, 0.3]);

  return (
    <div>
      <Profile
        bio={_profile['bio']}
        wrapperAnimation={animations['profileWrapperInit']}
        linkAnimations={animations['profileLinkInit']}
        imageAnimation={animations['imageInit']}
      />
      <Skill
        wrapperAnimation={animations['skillWrapperInit']}
        groupAnimations={animations['skillGroupInit']}
      />
      <div style={{ marginTop: '10vh' }}>

        <Project
          title="epcounter"
          desc={`
          I am binge watcher so I wanted an app to store which number of an episode I am watching of a particular season, so I created this webapp.
          Stack used is Django, jQuery, Postgres, etc, For developing this application I have heavily used ajax calls.
          I am currently implementing react for frontend in this project. 
          `}
          links={
            [
              {href:"https://limitless-eyrie-75133.herokuapp.com/", icon:LinkIcon},
              {href:"https://github.com/rationa-kunal/epcounter", icon:githubLinkIcon}
            ]
          }
        />

        <Project
          title="Multi Threaded Copy"
          desc="This project was done as a part of a mini-project for the Unix system programming subject. the main objective of this project was to get familiar with the multi-threading paradigm. But with this project, I got hold of various Unix concepts like Unix file system, various API calls.
          The core source code of this project was written in C, and there is a CLI wrapper of python around it.
          For the future, I want to implement BufferPool for this project."
          links={
            [
              {href:"https://github.com/rationa-kunal/multithreaded-copy", icon:githubLinkIcon}
            ]
          }
        />

        <Project
          title="Rational Shell"
          desc={`This project was also done as a part of a mini-project for the Unix system programming subject. The abstract of the project is to implement a shell with raw Unix system call APIs. With this project, I got to know how actually modularity in software works. I did learn how to code in modules and how to attach modules.
          The complete project is written in c. I have tried to implement various features of shell in this implementation (remote shell, pipe, wildcards, etc) for future I want refractor complete code.
          `}
          links={
            [
              {href:"https://github.com/rationa-kunal/RATIONAL-shell", icon:githubLinkIcon}
            ]
          }
        />

        <Project
          title="Adding more projects | checkout github link"
          desc="You can check my github profile for more web oriented projects. [I hate writting docs]"
          links={
            [

            ]
          }
        />
      
      </div>
    </div>
  );
}

export default App;
