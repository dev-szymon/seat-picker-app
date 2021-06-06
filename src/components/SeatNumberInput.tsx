import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectSeatAmount, setSeatAmount } from '../app/seatPickerSlice';

export default function SeatNumberInput({ ...props }: NumberInputProps) {
  const seatAmount = useAppSelector(selectSeatAmount);
  const dispatch = useAppDispatch();

  return (
    <NumberInput
      maxW="100px"
      value={seatAmount}
      onChange={(valueString) => dispatch(setSeatAmount(Number(valueString)))}
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
