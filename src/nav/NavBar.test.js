import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import UserContext from "../user/UserContext";
import CartContext from "../cart/CartContext";
const { cart, setIsCartOpen } = require("../cart/_testCommon");

import { createTheme, ThemeProvider } from "@mui/material";

const currentUser = jest.fn();
const signout = jest.fn();

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688"
    },
    secondary: {
      main: "#4db6ac"
    },
    info: {
      main: "#424242"
    },
    neutral: {
      main: "#fafafa"
    }
  }
});

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser, signout }}>
        <CartContext.Provider value={{ cart, setIsCartOpen }}>
          <ThemeProvider theme={theme}>
            <NavBar />
          </ThemeProvider>
        </CartContext.Provider>
      </UserContext.Provider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser, signout }}>
        <CartContext.Provider value={{cart, setIsCartOpen}}>
          <ThemeProvider theme={theme}>
            <NavBar />
          </ThemeProvider>
        </CartContext.Provider>
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

