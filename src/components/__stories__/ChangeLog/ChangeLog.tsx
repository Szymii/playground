import {
  Button,
  Collapse,
  Container,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { mdiCheck, mdiCheckBold } from "@mdi/js";
import Icon from "@mdi/react";
import { Fragment, useState } from "react";

import { goal, useLogsQuery } from "./useLogsQuery";

export const ChangeLog = () => {
  const logs = useLogsQuery();
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Container p="2em">
      <Heading textAlign="center" as="h1" mb="1em">
        ChangeLog
      </Heading>
      {logs.map(({ version, changes }, index) => {
        return (
          <Fragment key={version}>
            {index === 0 ? (
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
          {" "}
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
