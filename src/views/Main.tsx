import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectStep } from '../app/seatPickerSlice';
import ConfirmView from './ConfirmView';
import StartView from './StartView';
import SummaryView from './SummaryView';

export default function Main() {
  const step = useAppSelector(selectStep);
  switch (step) {
    case 'start':
      return <StartView />;
    case 'confirm':
      return <ConfirmView />;
    case 'summary':
      return <SummaryView />;
    default:
      return <StartView />;
  }
}
