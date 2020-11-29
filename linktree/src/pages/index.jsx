import React from 'react';
import Avatar from '../components/avatar';
import UserHandle from '../components/userHandle';
import ClassicLink from '../components/classicLink';
import ShowsLink from '../components/showsLink';
import MusicStyle from '../components/musicStyle';
import '../styles/reset.css';
import '../styles/global.css';

export default function Home() {
  return (
    <div>
      <Avatar />
      <UserHandle />
      <ClassicLink />
      <ShowsLink />
      <MusicStyle />
    </div>
  );
}
