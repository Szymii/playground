import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { mdiDownload } from "@mdi/js";
import { IconButton } from "@szymii/ui";

interface IProps {
  email: string;
  receivedAt: string;
}

export const NativeSolution = ({ email, receivedAt }: IProps) => {
  return (
    <CardRoot className="printable">
      <CardHeader pb={0}>
        <HStack w="100%" justifyContent="space-between">
          <Text>Native Solution</Text>
          <IconButton
            iconPath={mdiDownload}
            ariaLabel="download"
            onClick={() => {
              window.print();
            }}
          />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="start">
          <Text>
            From:{" "}
            <Text as="span" color="gray.400">
              {email}
            </Text>
          </Text>
          <Text>
            At:{" "}
            <Text as="span" color="gray.400">
              {receivedAt}
            </Text>
          </Text>
        </VStack>
        <Text mt={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quae
          reprehenderit? Atque, maxime harum. Fugiat ducimus inventore
          voluptatem, nemo quos velit neque eos, voluptate molestias eligendi
          aut harum, sed id? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam, quae reprehenderit? Atque, maxime harum. Fugiat ducimus
          inventore voluptatem, nemo quos velit neque eos, voluptate molestias
          eligendi aut harum, sed id?
        </Text>
      </CardBody>
      <CardFooter>This was nice 🖐</CardFooter>
    </CardRoot>
  );
};
