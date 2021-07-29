import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';
import { Modal, ModalBody } from './modal';
import LinkIcon from './icons/system/link';
import CloseIcon from './icons/system/close';
import { useToggle } from '../provider/context';
import WindowsIcon from './icons/system/windows';

const style = {
  activeLink: 'text-blue-700',
  section: `font-semibold mb-4 w-6/12 md:w-4/12`,
  closeBtnContainer: `pt-2 -mb-3 flex justify-end`,
  modalBodyContent: 'font-semibold pl-1 flex text-gray-700 mb-4',
  closeBtn: `text-lg px-3 py-1 focus:outline-none hover:bg-blue-gray-light`,
  link: `flex pl-1 text-xs lg:hover:bg-blue-gray-light py-2 mb-3 text-gray-700 `,
};

export default function WindowsMenu() {
  const { asPath } = useRouter();
  const { isSelectedItem } = useToggle();
  return (
    <div>
      <div onClick={isSelectedItem('windows')} className="cursor-pointer">
        <WindowsIcon />
      </div>
      <Modal toggle="windows" size="large">
        <div className={style.closeBtnContainer}>
          <button
            aria-label="Close"
            className={style.closeBtn}
            onClick={isSelectedItem('windows')}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-wrap">
          {data.map((section) => (
            <div className={style.section} key={section.section}>
              <ModalBody>
                <div className={style.modalBodyContent}>
                  <span className="pr-1">{section.icon}</span>
                  <span>{section.section}</span>
                </div>
                {section.content.map((item) => (
                  <Link href={item.link} key={item.title}>
                    <a
                      key={item.link}
                      className={`${style.link} ${
                        asPath === item.link && style.activeLink
                      }`}
                    >
                      <LinkIcon className="h-4 w-4" />
                      <span className="pl-2 font-medium">{item.title}</span>
                    </a>
                  </Link>
                ))}
              </ModalBody>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
