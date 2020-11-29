import React, { useState } from 'react';
import ClassicLink from '../classicLink';
import ShowItem from '../showItem';
import showLinkStyles from './showsLink.module.css';

// todo add in the scrollable functionality and max height
// add in animation on hover of the chevron
// make a booked out show not have a clickable looking hover State
// add in songkick logo (non clickable?)
// add in venue name

export default function ShowsLink(props) {
  const {
    showList,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={showLinkStyles.wrapper}
    >
      <ClassicLink
        onClick={() => { setIsExpanded(!isExpanded); }}
      >
        Shows
      </ClassicLink>
      {
        isExpanded && (
          <div
            className={showLinkStyles.wrapper}
          >
            {
              showList.map((show) => (
                <ShowItem
                  href={show.href}
                  date={show.date}
                  location={show.location}
                  isAvailable={show.isAvailable}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}
