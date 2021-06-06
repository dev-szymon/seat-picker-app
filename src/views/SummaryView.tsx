import React from 'react';
import { Text, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';
import { selectSelected } from '../app/seatPickerSlice';

export default function SummaryView() {
  const seatsSelected = useAppSelector(selectSelected);

  return (
    <Flex direction="column" align="flex-start" p="2rem">
      <Heading as="h2" size="md">
        Twoja rezerwacja przebiegła pomyślnie!
      </Heading>
      <Flex>
        <Flex direction="column" align="flex-start" p="2rem 0">
          <Text fontSize="xl">Wybrałeś miejsca:</Text>
          <UnorderedList>
            {seatsSelected &&
              seatsSelected.map(({ id, cords: { x, y } }) => (
                <ListItem key={id}>
                  <Text fontSize="xl">{`rząd ${x}, miejsce ${y} (${id})`}</Text>
                </ListItem>
              ))}
          </UnorderedList>
        </Flex>
      </Flex>
      <Heading as="h3" size="md">
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </Heading>
    </Flex>
  );
}
