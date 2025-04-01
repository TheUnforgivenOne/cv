'use client';
import { FC } from 'react';

const PrintButton: FC = () => (
  <button onClick={() => window.print()} className="noPrint">
    Print
  </button>
);

export default PrintButton;
