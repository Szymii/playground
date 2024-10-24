import {
  Box,
  Button,
  CollapsibleRoot,
  Container,
  Heading,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { mdiCheck, mdiCheckBold } from "@mdi/js";
import Icon from "@mdi/react";
import { Fragment } from "react";

import { goal, useLogsQuery } from "./useLogsQuery";

export const ChangeLog = () => {
  const logs = useLogsQuery();
  const sortedLogs = logs.sort((a, b) =>
    b.version.localeCompare(a.version, undefined, { numeric: true }),
  );

  const { onToggle, open } = useDisclosure();

  const isLatestVersion = (version: string) => {
    const latest = "2.3.0".match("\\d{1,}\\.\\d{1,}");
    const match = version.match("\\d{1,}\\.\\d{1,}");

    if (match && latest) {
      return match[0] === latest[0];
    }

    return false;
  };

  return (
    <Container p="2em">
      <Heading textAlign="center" as="h1" mb="1em">
        ChangeLog
      </Heading>
      {sortedLogs.map(({ version, changes }) => {
        return (
          <Fragment key={version}>
            {isLatestVersion(version) ? (
              <>
                <Heading as="h2" fontSize="1.8rem">
                  {version}
                </Heading>
                <GoalsList changes={changes} />
              </>
            ) : (
              <CollapsibleRoot open={open}>
                <Heading as="h2" fontSize="1.8rem">
                  {version}
                </Heading>
                <GoalsList changes={changes} />
              </CollapsibleRoot>
            )}
          </Fragment>
        );
      })}
      {logs.length > 1 && (
        <Button onClick={onToggle} width="100%">
          {!open ? "Show" : "Hide"} later versions
        </Button>
      )}
    </Container>
  );
};

const GoalsList = ({ changes }: { changes: goal[] }) => {
  return (
    <Box as="ul" gap={3} mb="2rem">
      {changes.map(({ goal, subGoal }) => {
        return (
          <ListItem key={goal} fontWeight="600">
            <Icon size="1" path={mdiCheckBold} color="green" />
            {goal}
            {subGoal.length > 0 && <SubGoalsList subGoal={subGoal} />}
          </ListItem>
        );
      })}
    </Box>
  );
};

const SubGoalsList = ({ subGoal }: { subGoal: string[] }) => {
  return (
    <Box as="ul" gap={3} paddingLeft="1.8rem" fontWeight="400">
      {subGoal.map((subGoal) => {
        return (
          <ListItem key={subGoal}>
            <Icon size="1" path={mdiCheck} color="green" />
            {subGoal}
          </ListItem>
        );
      })}
    </Box>
  );
};
