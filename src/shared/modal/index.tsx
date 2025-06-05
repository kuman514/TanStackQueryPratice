import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children?: ReactNode;
}

export default function Modal({ children }: Props) {
  return createPortal(
    <div className="fixed left-0 top-0 w-screen h-dvh bg-[rgba(0,0,0,0.5)] flex justify-center align-center">
      <div className="p-8 border border-solid border-green-500 bg-white text-black">
        {children}
      </div>
    </div>,
    document.body
  );
}
