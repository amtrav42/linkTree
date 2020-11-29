import React from 'react';
import classicLinkStyles from './classicLink.module.css';

export default function ClassicLink(props) {
  const {
    href,
    children,
    onClick,
  } = props;
  return (
    <a
      className={classicLinkStyles.container}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
