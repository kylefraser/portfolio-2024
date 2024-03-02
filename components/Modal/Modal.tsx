import { useState, useRef, useEffect } from 'react';
import { Portal } from '../Portal';

const Modal = (props: {
  children?: any;
  open?: any;
  onClose?: any;
  style?: any;
}) => {
  const { open, onClose } = props;
  const [active, setActive] = useState(open);

  const backdrop = useRef<any>(null);

  const root = document?.querySelector('#root');
  const body = document?.querySelector('body');

  useEffect(() => {
    const { current } = backdrop;
    const transitionEnd = () => setActive(open);
    const keyHandler = (e: { which: number }) =>
      [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = (e: { target: null }) => {
      e.target === current && onClose();
    };

    if (current) {
      current?.addEventListener('transitionend', transitionEnd);
      current?.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      if (document.activeElement instanceof HTMLElement) {
        document?.activeElement?.blur();
      }
      setActive(open);
      root?.setAttribute('inert', 'true');
      if (body != undefined) {
        body.style.overflowY = 'hidden';
      }
    } else {
      root?.removeAttribute('inert');
      if (body != undefined) {
        body.style.overflowY = 'auto';
      }
    }

    return () => {
      if (current) {
        current?.removeEventListener('transitionend', transitionEnd);
        current?.removeEventListener('click', clickHandler);
      }

      document?.querySelector('#root')?.removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, onClose]);

  return (
    <>
      {open && (
        <Portal className="modal-portal">
          <div
            ref={backdrop}
            className={`${
              active &&
              open &&
              'fixed flex items-center justify-center z-10 bg-[rgba(51,51,51,0.3)] inset-0 backdrop-blur-sm'
            }`}
            onClick={() => setActive(!open)}
          />
          <div
            className={`${
              active &&
              open &&
              'fixed z-20 left-[50%] top-[50%] overflow-hidden min-w-[300px]'
            }`}
            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
          >
            {props.children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
