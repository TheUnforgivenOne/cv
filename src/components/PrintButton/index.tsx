'use client';
import { FC } from 'react';

const PrintButton: FC = () => <button onClick={() => window.print()}>Print</button>;

export default PrintButton;
