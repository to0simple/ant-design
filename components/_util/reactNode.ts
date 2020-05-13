import * as React from 'react';

export function replaceElement(
  element: React.ReactNode,
  props: (() => object) | object,
  invalidateReplacement: React.ReactNode,
) {
  if (!React.isValidElement(element)) {
    return invalidateReplacement;
  }

  return React.cloneElement(element, typeof props === 'function' ? props() : props);
}

export function cloneElement(element: React.ReactNode, props: (() => object) | object) {
  return replaceElement(element, props, element);
}
