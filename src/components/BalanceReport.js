import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Center,
  Heading,
  Flex,
  Spinner,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { ChevronDownIcon } from "@chakra-ui/icons";
const BalanceReport = () => {
  const [transaction, setTransaction] = useState([]);
  const [plotSatus, setPlotStatus] = useState([]);
  const [booking, setBooking] = useState([]);
  const [date, setDate] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState([]);
  const [filteredBlocks, setFilteredBlocks] = useState([]);
  const [filteredPlots, setFilteredPlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatusDate, setSelectedStatusDate] = useState(null);
  const handleCheckboxChange = (value, state, setter) => {
    if (state.includes(value)) {
      setter(state.filter((item) => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  const loadTransaction = async () => {
    let query = "SELECT * FROM transaction;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setTransaction(response.data.phpresult);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  const loadDate = async () => {
    let query = "SELECT registryDate FROM registry;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setDate(response.data.phpresult);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lkgexcel.com/backend/getplot.php"
      );
      setPlotStatus(response.data);
    } catch (error) {
      console.error("Error fetching plot data:", error);
    }
  };
  const loadBooking = async () => {
    let query = "SELECT * FROM booking;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setBooking(response.data.phpresult);
        }
      }
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  useEffect(() => {
    loadTransaction();
    fetchData();
    loadBooking();
    loadDate();
  }, []);
  const getUniqueValues = (key) => {
    return [...new Set(transaction.map((item) => item[key]))];
  };

  const projectOptions = getUniqueValues("projectName");

  const filteredBookings = transaction.filter(
    (item) =>
      (!selectedProject.length ||
        selectedProject.includes("Select All") ||
        selectedProject.includes(item.projectName)) &&
      (!selectedBlock.length ||
        selectedBlock.includes("Select All") ||
        selectedBlock.includes(item.blockName)) &&
      (!selectedPlot.length ||
        selectedPlot.includes("Select All") ||
        selectedPlot.includes(item.plotno)) &&
      (!selectedDate ||
        new Date(item.date).toISOString().split("T")[0] === selectedDate) &&
      (!selectedStatusDate ||
        new Date(item.statusDate).toISOString().split("T")[0] ===
          selectedStatusDate)
  );

  const clearFilters = () => {
    setSelectedProject([]);
    setSelectedBlock([]);
    setSelectedPlot([]);
    setSelectedDate(null);
    setSelectedStatusDate(null);
  };
  useEffect(() => {
    const blocks = getUniqueValues("blockName").filter(
      (block) =>
        !selectedProject.length ||
        block === "Select All" ||
        transaction.some(
          (item) =>
            item.projectName === selectedProject[0] && item.blockName === block
        )
    );
    setFilteredBlocks([...blocks]);

    const plots = getUniqueValues("plotno").filter(
      (plot) =>
        !selectedProject.length ||
        plot === "Select All" ||
        transaction.some(
          (item) =>
            item.projectName === selectedProject[0] && item.plotno === plot
        )
    );
    setFilteredPlots([...plots]);
  }, [selectedProject, transaction]);
  console.log(plotSatus);
  console.log(booking);
  console.log(date);
  return (
    <>
      <Center>
        <Heading size={"md"}>Balance Report</Heading>
      </Center>
      <Box maxW={"100%"} overflowX={"scroll"} marginTop={"2rem"}>
        <Flex
          justifyContent={"space-evenly"}
          p={"30px"}
          pos={"sticky"}
          left={0}
        >
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Select Projects
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Checkbox
                  isChecked={selectedProject.includes("Select All")}
                  onChange={() =>
                    handleCheckboxChange(
                      "Select All",
                      selectedProject,
                      setSelectedProject
                    )
                  }
                >
                  Select All
                </Checkbox>
              </MenuItem>
              {projectOptions.map((project) => (
                <MenuItem key={project}>
                  <Checkbox
                    isChecked={selectedProject.includes(project)}
                    onChange={() =>
                      handleCheckboxChange(
                        project,
                        selectedProject,
                        setSelectedProject
                      )
                    }
                  >
                    {project}
                  </Checkbox>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Select Blocks
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Checkbox
                  isChecked={selectedBlock.includes("Select All")}
                  onChange={() =>
                    handleCheckboxChange(
                      "Select All",
                      selectedBlock,
                      setSelectedBlock
                    )
                  }
                >
                  Select All
                </Checkbox>
              </MenuItem>
              {filteredBlocks.map((block) => (
                <MenuItem key={block}>
                  <Checkbox
                    isChecked={selectedBlock.includes(block)}
                    onChange={() =>
                      handleCheckboxChange(
                        block,
                        selectedBlock,
                        setSelectedBlock
                      )
                    }
                  >
                    {block}
                  </Checkbox>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Select Plots
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Checkbox
                  isChecked={selectedPlot.includes("Select All")}
                  onChange={() =>
                    handleCheckboxChange(
                      "Select All",
                      selectedPlot,
                      setSelectedPlot
                    )
                  }
                >
                  Select All
                </Checkbox>
              </MenuItem>
              {filteredPlots.map((plot) => (
                <MenuItem key={plot}>
                  <Checkbox
                    isChecked={selectedPlot.includes(plot)}
                    onChange={() =>
                      handleCheckboxChange(plot, selectedPlot, setSelectedPlot)
                    }
                  >
                    {plot}
                  </Checkbox>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Box display={"flex"}>
            <FormLabel
              textAlign={"center"}
              fontSize={"17px"}
              minWidth={"fit-content"}
              mt={"5px"}
            >
              Select Date:
            </FormLabel>
            <Input
              type="date"
              id="date"
              value={selectedDate || ""}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </Box>
          <Box display={"flex"}>
            <FormLabel
              textAlign={"center"}
              fontSize={"17px"}
              minWidth={"fit-content"}
              mt={"5px"}
            >
              Select Status Date:
            </FormLabel>
            <Input
              type="date"
              id="statusDate"
              value={selectedStatusDate || ""}
              onChange={(e) => setSelectedStatusDate(e.target.value)}
            />
          </Box>
          <Button ml={2} onClick={clearFilters} colorScheme="red">
            Clear Filters
          </Button>
        </Flex>
        {loading ? (
          <Flex align="center" justify="center" h="70vh">
            <Spinner
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
            />
          </Flex>
        ) : (
          <Table variant="simple">
            <TableContainer>
              <Thead>
                <Tr border="1px solid black" bg={"#121212"}>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    {" "}
                    SrNo
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Project Name
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Block Name
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Plot No
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Cust Name
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Cust Contact
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Const App
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Total Bal
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Bank Bal
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Cash Bal
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Total Received
                  </Th>{" "}
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Bank Received
                  </Th>{" "}
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Cash Received
                  </Th>{" "}
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Status Date
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Plot Status
                  </Th>
                  <Th border="1px solid black" color={"white"} p={"8px"}>
                    Registry Date
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredBookings.map((data, index) => (
                  <Tr key={data.srNo}>
                    <Td border="1px solid black" p={"8px"}>
                      {index + 1}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.projectName}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.blockName}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.plotno}
                    </Td>
                    {/* {plotSatus
                      .filter(
                        (stat) =>
                          stat.projectName === data.projectName &&
                          stat.blockName === data.blockName &&
                          stat.plotNo === data.plotno
                      )
                      .map((stat) => (
                        <React.Fragment key={stat.id}>
                          <Td border="1px solid black">{stat.plotStatus}</Td>
                          
                        </React.Fragment>
                      ))} */}
                    {booking
                      .filter(
                        (stat) =>
                          stat.projectName === data.projectName &&
                          stat.blockName === data.blockName &&
                          stat.plotNo === data.plotno
                      )
                      .map((stat) => (
                        <React.Fragment key={stat.id}>
                          <Td border="1px solid black" p={"8px"}>
                            {stat.customerName}
                          </Td>
                          <Td border="1px solid black" p={"8px"}>
                            {stat.customerContact}
                          </Td>
                          <Td border="1px solid black" p={"8px"}>
                            {stat.constructionApplicable}
                          </Td>
                        </React.Fragment>
                      ))}
                    <Td border="1px solid black" p={"8px"}>
                      {data.totalBalance}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.bankBalance}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.cashBalance}
                    </Td>

                    <Td border="1px solid black" p={"8px"}>
                      {data.totalReceived}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.bankReceived}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.cashReceived}
                    </Td>
                    <Td border="1px solid black" p={"8px"}>
                      {data.statusDate}
                    </Td>
                    {/* {date.map((d) => (
                      <React.Fragment key={d.id}>
                        {plotSatus.some(
                          (plot) => plot.plotStatus === "Registered"
                        ) && <Td border="1px solid black">{d.registryDate}</Td>}
                      </React.Fragment>
                    ))} */}

                    {/* {plotSatus.filter((stat)=>(
                      stat.plotStatus==="Registered" && {date.map((stat)=>(
                        <>
                        <Td>{stat.registryDate}</Td>
                        </>
                      ))}
                    ))} */}
                    {plotSatus
                      .filter(
                        (stat) =>
                          stat.projectName === data.projectName &&
                          stat.blockName === data.blockName &&
                          stat.plotNo === data.plotno
                      )
                      .map((stat) => (
                        <React.Fragment key={stat.id}>
                          <Td border="1px solid black" p={"8px"}>
                            {stat.plotStatus}
                          </Td>
                          {stat.plotStatus === "Registered" &&
                          date.length > 0 ? (
                            date.map((rd, index) => (
                              <Td
                                key={index}
                                border="1px solid black"
                                p={"8px"}
                              >
                                {rd.registryDate}
                              </Td>
                            ))
                          ) : (
                            <Td border="1px solid black">----</Td>
                          )}
                        </React.Fragment>
                      ))}
                  </Tr>
                ))}
              </Tbody>
            </TableContainer>
          </Table>
        )}
      </Box>
    </>
  );
};

export default BalanceReport;
