This is a simple example project that allows you to reserve seats in the cinema or theatre.

The app uses typescript, react, redux and chakra ui.

## What’s In This Document

- [Technologies used](#-technologies-used)
- [Walk through](#-walk-through)
- [Run locally](#-run-locally)

## Technologies used

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ChakraUI](https://chakra-ui.com/)
- [Redux Tool Kit](https://redux-toolkit.js.org/)

## Walk through

1. **Insert number of seats to reserve.**

   By default the option to select only adjacent seats is checked.

   ![first step](https://res.cloudinary.com/dq104qc4m/image/upload/v1623259066/seat-picker/first-step_ntezpi.jpg)

2. **Confirm or change your seats**

   After you provide amount of seats you want to reserve, you will proceed to the second step which shows you the seats chosen for you. It allows you to change them.

   ![second step](https://res.cloudinary.com/dq104qc4m/image/upload/v1623259329/seat-picker/step2_fa3n4j.jpg)

3. **Third view sums up your reservation**

   ![summary view](https://res.cloudinary.com/dq104qc4m/image/upload/v1623259525/seat-picker/summary_lfr1on.jpg)

## Run locally

    Run this project locally to explore it's functionality. You can take a look how the UI looks in How it looks section.

1. **Clone the repository**

   ```
   git clone https://github.com/dev-szymon/seat-picker-app.git
   ```

2. **Install dependencies**

   ```
   yarn
   ```

3. **Start api server**
   The project uses json-server to simulate backend. It will start a local server on port `3001`

   ```
   yarn api
   ```

4. **Run the react app**
   In another terminal window you can start react app.

   ```
   yarn start
   ```
