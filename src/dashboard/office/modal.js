import React from 'react';
import Portal from '@reach/portal';

import css from '../style.module.css';
import { useToggle } from '../provider/context';

const style = {
  size: {
    large: 'md:w-8/12 lg:w-5/12',
    medium: 'md:w-6/12 lg:w-4/12',
    default: `mx-4 md:m-auto pt-24 focus:outline-none overflow-hidden animate-fadeIn`,
  },
  body: `flex-shrink flex-grow p-4`,
  header: `flex p-4 border-b border-gray-400`,
  container: `fixed top-0 overflow-hidden left-0 w-full h-full m-0 z-30`,
  content: `relative flex flex-col max-h-96 rounded-lg bg-blue-gray shadow-2xl pointer-events-auto overflow-auto`,
};

function Modal({ children, toggle, size = 'medium' }) {
  const { selected, ref } = useToggle();
  return (
    <Portal>
      {selected === toggle && (
        <>
          <div className={style.container}>
            <div
              ref={ref}
              aria-modal={true}
              className={`${style.size.default} ${style.size[size]}`}
            >
              <div className={`${style.content} ${css.scrollbar}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

function ModalHeader({ children }) {
  return <div className={style.header}>{children}</div>;
}

function ModalBody({ children }) {
  return <div className={style.body}>{children}</div>;
}

export { Modal, ModalHeader, ModalBody };
