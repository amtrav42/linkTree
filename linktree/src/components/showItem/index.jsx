import React from 'react';
import showItemStyles from './showItem.module.css';

export default function ShowItem(props) {
  const {
    href,
    date,
    isAvailable,
    location,
  } = props;
  return (
    <a
      className={showItemStyles.container}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {date}
      {location}
      {isAvailable ? '>' : 'Sold Out'}
    </a>
  );
}
