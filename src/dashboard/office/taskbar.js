import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';
import WindowsMenu from './windowsMenu';
import LinkIcon from './icons/system/link';
import CloseIcon from './icons/system/close';
import { useToggle } from '../provider/context';
import { Modal, ModalBody, ModalHeader } from './modal';

const style = {
  section: 'overflow-hidden',
  taskbar: `fixed bottom-0 w-full z-40`,
  activeLink: `text-blue-600 font-semibold`,
  btn: `ml-auto focus:outline-none hover:bg-white px-2 py-0.5`,
  sectionContent: `cursor-pointer hover:bg-blue-gray-light px-1`,
  link: 'flex text-xs font-medium text-gray-800 mb-3 pl-1 py-2 lg:hover:bg-blue-gray-light',
  container: `bg-blue-gray text-gray-700  flex px-2 md:px-0 py-2  max-w-full overflow-x-auto`,
};

export default function Taskbar() {
  const { asPath } = useRouter();
  const { isSelectedItem } = useToggle();
  return (
    <div className={style.taskbar}>
      <div className={style.container}>
        <div className="flex mx-auto space-x-3">
          <WindowsMenu />
          {data.map((section) => (
            <div key={section.section} className={style.section}>
              <div
                className={style.sectionContent}
                onClick={isSelectedItem(section.section)}
              >
                {section.icon}
              </div>
              <Modal toggle={section.section}>
                <ModalHeader>
                  <span className="text-gray-700">{section.icon}</span>
                  <span className="pl-2">{section.section}</span>
                  <button
                    aria-label="Close"
                    className={style.btn}
                    onClick={isSelectedItem(section.section)}
                  >
                    <CloseIcon />
                  </button>
                </ModalHeader>
                <ModalBody>
                  {section.content.map((item) => (
                    <Link href={item.link} key={item.title}>
                      <a className={style.link}>
                        <span className="pr-2">
                          <LinkIcon />
                        </span>
                        <span
                          className={
                            asPath === item.link ? style.activeLink : ''
                          }
                        >
                          {item.title}
                        </span>
                      </a>
                    </Link>
                  ))}
                </ModalBody>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
