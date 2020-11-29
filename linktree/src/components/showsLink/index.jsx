import React, { useState } from 'react';
import ClassicLink from '../classicLink';
import ShowItem from '../showItem';

export default function ShowsLink(props) {
  const {
    showList,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <ClassicLink
        onClick={() => { setIsExpanded(!isExpanded); }}
      >
        Shows
      </ClassicLink>
      {
        isExpanded && (
          <div>
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
