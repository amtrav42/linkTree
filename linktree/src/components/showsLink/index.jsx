import React, { useState } from 'react';
import ClassicLink from '../classicLink';

export default function ShowsLink() {
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
            This is a show
          </div>
        )
      }
    </div>
  );
}
