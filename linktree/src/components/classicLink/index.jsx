import React from 'react';
import classicLinkStyles from './classicLink.module.css';

export default function ClassicLink(props) {
  const {
    href,
    children,
  } = props;
  return (
    <a
      className={classicLinkStyles.container}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
