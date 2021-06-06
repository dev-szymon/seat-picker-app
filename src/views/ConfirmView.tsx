import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { selectSelected, setStep } from '../app/seatPickerSlice';
import RoomVisualisation from '../components/RoomVisualisation';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import PrimaryButton from '../components/PrimaryButton';
import useWarningToast from '../components/useWarningToast';

interface ILegendItem {
  className: 'default' | 'reserved' | 'selected';
  text: string;
}

export default function ConfirmView() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectSelected);
  const isSelected = selected && selected.length > 0;
  const legend: ILegendItem[] = [
    { className: 'default', text: 'Miejsca dostępne' },
    { className: 'reserved', text: 'Miejsca zarezerwowane' },
    { className: 'selected', text: 'Twój wybór' },
  ];

  useWarningToast();

  return (
    <Flex
      p="0.5rem"
      direction="column"
      align="center"
      w="100%"
      h="100%"
      justify="center"
    >
      <Flex direction="column" w="100%" maxW="130vh" h="100%">
        <RoomVisualisation />

        <Box className="confirm-page_footer">
          <Flex className="confirm-legend_container">
            {legend.map(({ className, text }) => (
              <Flex align="center" key={`${text}-legend-item`}>
                <Box className="legend-box">
                  <Box className={`seat-button ${className}`}></Box>
                </Box>
                <Text p="0 0.5rem" fontSize="sm">
                  {text}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Flex className="confirm-button_container">
            <PrimaryButton
              disabled={!isSelected}
              h="100%"
              maxH="6rem"
              minH="3rem"
              minW="180px"
              buttonText={'Rezerwuj'}
              onClick={() => {
                dispatch(setStep('summary'));
              }}
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
