import {
  Button,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Popover = ({ children }: IProps) => {
  return (
    <PopoverRoot positioning={{ placement: "bottom-start" }} open={true}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Manage Your Channels
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          pb={4}
        >
          <Button variant="outline">Show</Button>
        </PopoverFooter>
      </PopoverContent>
    </PopoverRoot>
  );
};
