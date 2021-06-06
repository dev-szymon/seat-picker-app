import React from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';
import { selectRoomData } from '../app/seatPickerSlice';
import Seat, { ISeat } from './Seat';

export default function RoomVisualisation() {
  const roomData = useAppSelector(selectRoomData);

  if (roomData) {
    return (
      <Grid
        p="1rem 0"
        w="100%"
        gap={2}
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(15, 1fr)"
      >
        {roomData.map((seat: ISeat) => {
          return (
            <GridItem
              p="0 0 100%"
              position="relative"
              key={seat.id}
              rowSpan={1}
              colSpan={1}
              colStart={seat.cords.y + 1}
              rowStart={seat.cords.x + 1}
            >
              <Seat seat={seat} />
            </GridItem>
          );
        })}
      </Grid>
    );
  }

  return (
    <Spinner
      thickness="2px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="sm"
    />
  );
}
