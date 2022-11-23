import {
  Button,
  Collapse,
  Container,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  useBoolean,
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

  const [show, setShow] = useBoolean();

  const isLatestVersion = (version: string) => {
    const latest = "2.3.0".match("\\d{1,}\\.\\d{1,}");
    const match = version.match("\\d{1,}\\.\\d{1,}");

    if (match && latest) {
      return match[0] === latest[0];
    }

    return false;
  };

  const handleToggle = () => setShow.toggle();

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
                <Divider my="5px" />
                <GoalsList changes={changes} />
              </>
            ) : (
              <Collapse in={show}>
                <Heading as="h2" fontSize="1.8rem">
                  {version}
                </Heading>
                <Divider my="5px" />
                <GoalsList changes={changes} />
              </Collapse>
            )}
          </Fragment>
        );
      })}
      {logs.length > 1 && (
        <Button onClick={handleToggle} width="100%">
          {!show ? "Show" : "Hide"} later versions
        </Button>
      )}
    </Container>
  );
};

const GoalsList = ({ changes }: { changes: goal[] }) => {
  return (
    <List spacing={3} mb="2rem">
      {changes.map(({ goal, subGoal }) => {
        return (
          <ListItem key={goal} fontWeight="600">
            <ListIcon>
              <Icon size="1" path={mdiCheckBold} color="green" />
            </ListIcon>
            {goal}
            {subGoal.length > 0 && <SubGoalsList subGoal={subGoal} />}
          </ListItem>
        );
      })}
    </List>
  );
};

const SubGoalsList = ({ subGoal }: { subGoal: string[] }) => {
  return (
    <List spacing={3} paddingLeft="1.8rem" fontWeight="400">
      {subGoal.map((subGoal) => {
        return (
          <ListItem key={subGoal}>
            <ListIcon>
              <Icon size="1" path={mdiCheck} color="green" />
            </ListIcon>
            {subGoal}
          </ListItem>
        );
      })}
    </List>
  );
};
