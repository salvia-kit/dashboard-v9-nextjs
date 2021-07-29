import React from 'react';
import { useRouter } from 'next/router';

import Topbar from './office/topbar';
import OFFICE from './office/office';
import css from './style.module.css';

const style = {
  container: `flex flex-col h-screen pl-0 w-full z-10 bg-white`,
  main: `h-screen overflow-auto pb-52 pt-4 px-2 md:pb-20 md:px-4 lg:px-6`,
};

function Main({ children }) {
  const { asPath } = useRouter();

  if (asPath === OFFICE) {
    return null;
  }

  return (
    <div className={style.container}>
      <Topbar />
      <main className={`${style.main} ${css.scrollbar}`}>{children}</main>
    </div>
  );
}

export default React.memo(Main);
