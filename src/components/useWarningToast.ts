import { createStandaloneToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectSelected } from '../app/seatPickerSlice';

export default function useWarningToast() {
  const selectedSeats = useAppSelector(selectSelected);
  const toast = createStandaloneToast();

  useEffect(() => {
    if (!selectedSeats) {
      toast({
        title: 'Brak wystarczającej ilości miejsc obok siebie.',
        description: 'Wybierz miejsca z pozostałych dostępnych.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    }

    if (selectedSeats && selectedSeats.length === 0) {
      toast({
        title: 'Nie podano ilości miejsc.',
        description: 'Wybierz miejsca z pozostałych dostępnych.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    }
  });
}
