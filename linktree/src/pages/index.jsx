import React from 'react';
import Avatar from '../components/avatar';
import UserHandle from '../components/userHandle';
import ClassicLink from '../components/classicLink';
import ShowsLink from '../components/showsLink';
import MusicStyle from '../components/musicStyle';
import showData from '../data/shows';
import '../styles/reset.css';
import '../styles/global.css';
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <div
      className={pageStyles.container}
    >
      <div
        className={pageStyles.wrapper}
      >
        <Avatar />
        <UserHandle />
        <ClassicLink
          href="https://avidresearch.com.au/"
        >
          Avid Research Website
        </ClassicLink>
        <ShowsLink
          showList={showData}
        />
        <MusicStyle />
      </div>
    </div>
  );
}
