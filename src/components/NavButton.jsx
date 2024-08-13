import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

function NavButton() {
  return (
    <>
      <Menu colorScheme="black">
        <MenuButton>
          <p className="">Wallet&nbsp;Co.</p>
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem className="focus:bg-lightTwo">Chapter 1: About</MenuItem>
            <MenuItem className="focus:bg-lightTwo">
              Chapter 2: Products
            </MenuItem>
            <MenuItem className="focus:bg-lightTwo">
              Chapter 3: Contact
            </MenuItem>
            <MenuItem className="focus:bg-lightTwo">
              Epilogue: Privacy Policy
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
}

export default NavButton;

// Wallet&nbsp;Co.
