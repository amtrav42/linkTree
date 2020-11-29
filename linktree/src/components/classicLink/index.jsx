import React from 'react';

export default function ClassicLink(props) {
  const {
    href,
    children,
  } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
