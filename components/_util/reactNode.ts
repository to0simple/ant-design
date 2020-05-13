import * as React from 'react';

export function replaceElement(
  element: React.ReactNode,
  invalidateReplacement: React.ReactNode,
  ...restArgs: any[]
) {
  if (!React.isValidElement(element)) {
    return invalidateReplacement;
  }

  return React.cloneElement(element, ...restArgs);
}

export function cloneElement(element: React.ReactNode, ...restArgs: any[]) {
  return replaceElement(element, element, ...restArgs);
}
