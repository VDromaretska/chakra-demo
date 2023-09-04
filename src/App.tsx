import { DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { TaskView } from "./components/TaskView";

export interface TaskCycleData {
  id: number;
  cycle_name: string;
  cycle_duration_days: number;
  cycle_start_date: Date;
  completion_percentage: number;
  days_overdue: number;
}

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://cycles-app.onrender.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [taskCycleData, setTaskCycleData] = useState<TaskCycleData[]>([]);

  useEffect(() => {
    fetchAndUpdateTaskCycle();
  }, []);

  async function fetchAndUpdateTaskCycle() {
    try {
      const { data } = await axios.get(baseUrl + "/cycles");
      setTaskCycleData(data);
      console.log(data);
    } catch (error) {
      console.log("Eror fetching all tasks", error);
    }
  }
  return (
    <>
      <Heading p={3}>Welcome to Cycles App!</Heading>
      <Tabs>
        <TabList>
          <Tab>Activity</Tab>
          <Tab>Money Management</Tab>
          <Tab>Housekeeping</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" p={10}>
              {taskCycleData.map((t: TaskCycleData) => (
                <TaskView task={t} key={t.id} />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
