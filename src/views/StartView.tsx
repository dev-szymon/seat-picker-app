import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchRoomData, selectSeatAmount } from '../app/seatPickerSlice';
import AdjacentSeatsCheckbox from '../components/AdjacentSeatsCheckbox';
import SeatNumberInput from '../components/SeatNumberInput';
import PrimaryButton from '../components/PrimaryButton';

export default function StartView() {
  const dispatch = useAppDispatch();
  const seats = useAppSelector(selectSeatAmount);

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex direction="column" w="100%" maxW="280px">
        <Flex align="center" justify="space-between">
          <label>Liczba miejsc: </label>
          <SeatNumberInput />
        </Flex>
        <AdjacentSeatsCheckbox m="2rem 0" />
        <PrimaryButton
          buttonText={'Wybierz miejsca'}
          onClick={() => dispatch(fetchRoomData(seats))}
        />
      </Flex>
    </Flex>
  );
}
