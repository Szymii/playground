import { Flex, Link } from "@chakra-ui/react";
import { ToggleLightButton } from "components/ToggleLightButton";
import { useUserDataStore } from "modules/users";
import { Link as RouterLink } from "react-router-dom";

export const Nav = () => {
  const userData = useUserDataStore((state) => state.userData);

  const isNotEmptyObject = (object: object) => {
    return Object.keys(object).length !== 0;
  };

  return (
    <Flex justifyContent="flex-end" px="2em" py="0.5em" gap="1em">
      <Link as={RouterLink} to={"/files"} fontSize="1.4rem" fontWeight="bold">
        Files
      </Link>
      <Link as={RouterLink} to={"/cats"} fontSize="1.4rem" fontWeight="bold">
        Cats
      </Link>
      <Link as={RouterLink} to={"/form"} fontSize="1.4rem" fontWeight="bold">
        Form
      </Link>
      <Link as={RouterLink} to={"/tests"} fontSize="1.4rem" fontWeight="bold">
        Tests
      </Link>
      {isNotEmptyObject(userData) && (
        <Link
          as={RouterLink}
          to={"/profile"}
          fontSize="1.4rem"
          fontWeight="bold"
        >
          Profile
        </Link>
      )}
      <ToggleLightButton />
    </Flex>
  );
};
