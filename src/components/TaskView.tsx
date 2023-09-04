import { DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Flex,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { TaskCycleData } from "../App";

interface TaskViewProps {
  task: TaskCycleData;
}

export function TaskView({ task }: TaskViewProps): JSX.Element {
  return (
    <>
      <Flex direction="row" p={10}>
        <Avatar src="https://media.istockphoto.com/id/1307939278/photo/window-cleaner-using-a-squeegee-to-wash-a-window.jpg?s=612x612&w=0&k=20&c=6eGtUCfEGwWND3CqAJl1blVzZaOiLw_21G1UXtttULM=" />
        <Box
          ml="3"
          borderColor="gray.300"
          maxW="sm"
          border="3px"
          borderWidth="1px"
          borderRadius="lg"
        >
          <Text fontWeight="bold">{task.cycle_name}</Text>
          <Badge ml="1" colorScheme="green">
            {task.days_overdue} days overdue
          </Badge>
          <Spacer />
          <Button colorScheme="red">
            <Icon as={DeleteIcon} />
          </Button>
        </Box>
        <Spacer />
        <CircularProgress
          value={task.completion_percentage}
          size="50px"
          color={assignColor(task.completion_percentage)}
        />
      </Flex>
    </>
  );
}

function assignColor(completionPercentage: number) {
  if (completionPercentage > 100) {
    return "red.500";
  } else if (completionPercentage > 75) {
    return "orange.500";
  } else return "green.500";
}
