import * as React from 'react';

export function replaceElement(
  element: React.ReactNode,
  props: any,
  invalidateReplacement: React.ReactNode,
) {
  if (!React.isValidElement(element)) {
    return invalidateReplacement;
  }

  return React.cloneElement(element, props);
}

export function cloneElement(element: React.ReactNode, props: any) {
  return replaceElement(element, element, props);
}
