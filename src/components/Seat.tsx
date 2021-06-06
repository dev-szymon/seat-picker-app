import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectSelected, toggleSeat } from '../app/seatPickerSlice';

interface ISeatProps {
  seat: ISeat;
}

export default function Seat({ seat }: ISeatProps) {
  const dispatch = useAppDispatch();
  const { reserved } = seat;
  const selected = useAppSelector(selectSelected);
  const isSelected = selected && selected.some((s) => seat.id === s.id);
  return (
    <button
      className={`seat-button ${
        reserved ? 'reserved' : isSelected ? 'selected' : 'default'
      }`}
      disabled={reserved}
      onClick={() => dispatch(toggleSeat(seat))}
    ></button>
  );
}

export interface ICords {
  x: number;
  y: number;
}

export interface ISeat {
  id: string;
  reserved: boolean;
  cords: ICords;
}
