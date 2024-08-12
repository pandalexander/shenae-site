import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

function NavButton() {
  return (
    <>
      <Menu>
        <MenuButton>
          <p className="">Wallet&nbsp;Co.</p>
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Chapter 1: About</MenuItem>
            <MenuItem>Chapter 2: Products</MenuItem>
            <MenuItem>Chapter 3: Contact</MenuItem>
            <MenuItem>Epilogue: Privacy Policy</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
}

export default NavButton;

// Wallet&nbsp;Co.
