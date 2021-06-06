import { ISeat } from '../components/Seat';

export const loadData = async () => {
  const res = await fetch('http://localhost:3001/seats');
  const json = await res.json();
  return json as ISeat[];
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateSeats = (
  availableSeats: ISeat[],
  amount: number = 0,
  adjacent: boolean
) => {
  if (amount === 0) {
    return [];
  }

  if (!adjacent) {
    let seats: ISeat[] = [];

    let randomIndex = getRandomInt(0, availableSeats.length - 1 - amount);

    // get `amount` of seats starting from random index
    seats = [...availableSeats.slice(randomIndex, randomIndex + amount)];

    return seats;
  }

  // array of possible sets of seats, by default empty array
  let possibleSets: ISeat[][] = [];

  availableSeats.reduce((acc: ISeat[] | undefined, curr: ISeat) => {
    // if accumulator is undefined, return array with current element

    if (!acc) {
      return [curr];
    } else {
      // if accumulator is of desired length, add accumulator to possible configurations of sets
      if (acc.length === amount) {
        possibleSets = [...possibleSets, acc];
        // reset acumulator
        return undefined;
      } else {
        const isSameRow = acc[acc.length - 1].cords.x === curr.cords.x;
        const isAdjacent =
          acc[acc.length - 1].cords.y - curr.cords.y === 1 ||
          acc[acc.length - 1].cords.y - curr.cords.y === -1;
        // if current seat is next to the previous, add it to accumulator,
        //   else start over with the current seat
        return isSameRow && isAdjacent ? [...acc, curr] : [curr];
      }
    }
    // start with empty accumulator
  }, undefined);

  return possibleSets && possibleSets[getRandomInt(0, possibleSets.length - 1)];
};
