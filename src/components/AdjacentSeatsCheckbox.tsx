import { selectAdjacent, setAdjacent } from '../app/seatPickerSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Checkbox, CheckboxProps } from '@chakra-ui/react';

export default function AdjacentSeatsCheckbox({ ...props }: CheckboxProps) {
  const adjacent = useAppSelector(selectAdjacent);
  const dispatch = useAppDispatch();
  return (
    <Checkbox
      isChecked={adjacent}
      onChange={(e) => {
        return dispatch(setAdjacent(e.target.checked));
      }}
      {...props}
    >
      Czy miejsca mają być obok siebie?
    </Checkbox>
  );
}
