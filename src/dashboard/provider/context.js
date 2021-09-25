import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [selected, setSelected] = React.useState('');
  const ref = React.useRef(null);
  const router = useRouter();

  const isSelectedItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    [],
  );

  // Set html tag style overflow to hidden
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // close Taskbar modal when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') {
        setSelected('');
      }
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [selected]);

  // close Taskbar modal when routes changes
  React.useEffect(() => {
    if (selected) {
      router.events.on('routeChangeStart', () => setSelected(''));
    }
    return () => {
      if (selected) {
        router.events.off('routeChangeStart', () => setSelected(''));
      }
    };
  }, [selected, router]);

  return (
    <Context.Provider value={{ isSelectedItem, ref, selected }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { isSelectedItem, ref, selected }
export function useToggle() {
  return React.useContext(Context);
}
