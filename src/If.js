import React from 'react';

const isElement = val => val && typeof val !== 'function' && val.hasOwnProperty('$$typeof')

// TODO: warn if Then is an Element that props are being ignored
// TODO: warn if Then is null, undefined,or whatever. Proably with propTypes
export default function If({cond, then: Then, else: Else, ...props}) {

  if (cond) {
    if (isElement(Then)) {
      return Then;
    }

    return React.createElement(Then, props, props.children);
  }

  return Else || null;
}
