import { TableFooter } from '@material-ui/core';
import React from 'react';

import linkedinIcon from '../img/linkedinIcon.svg';
import githubIcon from '../img/githubIcon.png';

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>App made by Daniel Birlan</p>
      <p>
        <a
          href="https://www.linkedin.com/in/daniel-birlan-a53985194/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="linkedin"
            style={{ width: '2%', height: '2%' }}
          />
        </a>
        <a href="https://github.com/dbirlan" target="_blank" rel="noreferrer">
          <img
            src={githubIcon}
            alt="github"
            style={{ width: '2%', height: '2%' }}
          />
        </a>
      </p>
    </div>
  );
};
