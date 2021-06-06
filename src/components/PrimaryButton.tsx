import React from 'react';
import { ButtonProps } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Spinner } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';
import { selectStatus } from '../app/seatPickerSlice';

interface IPrimaryButtonProps {
  buttonText: string;
}

export default function PrimaryButton({
  buttonText,
  ...rest
}: IPrimaryButtonProps & ButtonProps) {
  const status = useAppSelector(selectStatus);
  const isLoading = status === 'loading';
  return (
    <Button
      w="100%"
      disabled={isLoading}
      rightIcon={
        isLoading ? (
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="sm"
          />
        ) : (
          <ArrowForwardIcon />
        )
      }
      colorScheme="blue"
      variant="outline"
      {...rest}
    >
      {buttonText}
    </Button>
  );
}
