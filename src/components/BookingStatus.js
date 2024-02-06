// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Badge,
//   Box,
//   Select,
//   Flex,
//   Center,
//   Text,
//   Input,
//   Button,
//   Spinner,
//   Checkbox, // Import Spinner component
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";

// const BookingStatus = () => {
//   const [bookings, setBooking] = useState([]);
//   const [status, setStatus] = useState([]);
//   const [selectedProject, setSelectedProject] = useState("");
//   const [selectedBlock, setSelectedBlock] = useState("");
//   const [selectedPlot, setSelectedPlot] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [highlightedRow, setHighlightedRow] = useState(null);
//   const [loading, setLoading] = useState(true); // New loading state

//   const handleSelectChange = (event, setter) => {
//     setter(event.target.value);
//     setHighlightedRow(null); // Reset highlighted row when dropdown selection changes
//   };

//   const loadBooking = async () => {
//     let query = "SELECT * FROM booking;";

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setStatus(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching booking data:", error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://lkgexcel.com/backend/getplot.php"
//       );
//       setBooking(response.data);
//       setLoading(false); // Set loading to false once data is fetched
//     } catch (error) {
//       console.error("Error fetching plot data:", error);
//       setLoading(false); // Set loading to false in case of an error
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     loadBooking();
//   }, []);

//   const getUniqueValues = (key) => {
//     return [...new Set(bookings.map((item) => item[key]))];
//   };

//   const projectOptions = getUniqueValues("projectName");
//   const blockOptions = getUniqueValues("blockName");
//   const plotOptions = getUniqueValues("plotNo");
//   const filteredBookings = bookings.filter(
//     (item) =>
//       (!selectedProject || item.projectName === selectedProject) &&
//       (!selectedBlock || item.blockName === selectedBlock) &&
//       (!selectedPlot || item.plotNo === selectedPlot) &&
//       (!selectedDate || item.bookingDate === selectedDate)
//   );

//   const clearFilters = () => {
//     setSelectedProject("");
//     setSelectedBlock("");
//     setSelectedPlot("");
//     setSelectedDate("");
//     setHighlightedRow(null);
//   };
//   console.log(status);
//   return (
//     <>
//       <Box mb={4}>
//         <Center>
//           <Text fontSize="30px" fontWeight="600" p="20px">
//             Booking Status
//           </Text>
//         </Center>
//         <Flex>
//           <Select
//             placeholder="Select Project"
//             value={selectedProject}
//             onChange={(event) => handleSelectChange(event, setSelectedProject)}
//             mr={2}
//             w={"25%"}
//           >
//             {projectOptions.map((project) => (
//               <p>
//                 <Checkbox value={project}>{project}</Checkbox>
//               </p>
//             ))}
//           </Select>
//           <Select
//             placeholder="Select Block"
//             value={selectedBlock}
//             onChange={(event) => handleSelectChange(event, setSelectedBlock)}
//             mr={2}
//             w={"25%"}
//           >
//             {blockOptions.map((block) => (
//               <option key={block} value={block}>
//                 {block}
//               </option>
//             ))}
//           </Select>
//           <Select
//             placeholder="Select Plot"
//             w={"25%"}
//             value={selectedPlot}
//             onChange={(event) => handleSelectChange(event, setSelectedPlot)}
//           >
//             {plotOptions.map((plot) => (
//               <option key={plot} value={plot}>
//                 {plot}
//               </option>
//             ))}
//           </Select>

//           <Input
//             type="date"
//             placeholder="Search From Date"
//             w={"20%"}
//             ml={"2%"}
//             value={selectedDate}
//             onChange={(event) => handleSelectChange(event, setSelectedDate)}
//             isDisabled={true}
//           />

//           <Button ml={2} onClick={clearFilters} colorScheme="red">
//             Clear Filters
//           </Button>
//         </Flex>
//       </Box>

//       {loading ? ( // Render Spinner if loading
//         <Center>
//           <Spinner
//             size="xl"
//             position={"relative"}
//             top={"5rem"}
//             thickness="4px"
//             speed="0.65s"
//             emptyColor="gray.200"
//             color="blue.500"
//           />
//         </Center>
//       ) : (
//         <Table variant="simple" colorScheme="blue">
//           <Thead>
//             <Tr>
//               <Th>ProjectName</Th>
//               <Th>BlockName</Th>
//               <Th>PlotNo.</Th>
//               <Th>AreaSqft</Th>
//               <Th>AreaSqmt</Th>
//               <Th>PlotType</Th>
//               <Th>PlotStatus</Th>
//               <Th>BookingDate</Th>
//               <Th>RegistryDate</Th>
//               <Th>CustName</Th>
//               <Th>CustNo.</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {filteredBookings.map((plotItem, index) => (
//               <Tr
//                 key={plotItem.id}
//                 onClick={() => setHighlightedRow(index)}
//                 style={{
//                   background:
//                     highlightedRow === index ? "#FFFAF0" : "transparent",
//                   cursor: "pointer",
//                 }}
//               >
//                 <Td>{plotItem.projectName}</Td>
//                 <Td>{plotItem.blockName}</Td>
//                 <Td>{plotItem.plotNo}</Td>
//                 <Td>{plotItem.areaSqft}</Td>
//                 <Td>{plotItem.areaSqmt}</Td>
//                 <Td>{plotItem.plotType}</Td>
//                 <Td>
//                   <Badge
//                     colorScheme={
//                       plotItem.plotStatus === "Available"
//                         ? "yellow"
//                         : plotItem.plotStatus === "Booked"
//                         ? "red"
//                         : plotItem.plotStatus === "Registered"
//                         ? "green"
//                         : "gray"
//                     }
//                   >
//                     {plotItem.plotStatus}
//                   </Badge>
//                 </Td>

//                 {status
//                   .filter(
//                     (book) =>
//                       book.projectName === plotItem.projectName &&
//                       book.blockName === plotItem.blockName &&
//                       book.plotNo === plotItem.plotNo
//                   )
//                   .map((book) => (
//                     <React.Fragment key={book.id}>
//                       <Td>{book.bookingDate}</Td>
//                       <Td textAlign={"center"}>
//                         {book.registryDate === "0000-00-00"
//                           ? "----"
//                           : book.registryDate}
//                       </Td>
//                       <Td>{book.customerName}</Td>
//                       <Td>{book.customerContact}</Td>
//                     </React.Fragment>
//                   ))}
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default BookingStatus;
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Box,
  Flex,
  Center,
  Text,
  Input,
  Button,
  Spinner,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const BookingStatus = () => {
  const [bookings, setBooking] = useState([]);
  const [status, setStatus] = useState([]);
  const [date, setDate] = useState([]);

  const [selectedProject, setSelectedProject] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [highlightedRow, setHighlightedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSelectChange = (event, setter) => {
    setter(event.target.value);
    setHighlightedRow(null);
  };

  const handleCheckboxChange = (value, state, setter) => {
    if (state.includes(value)) {
      setter(state.filter((item) => item !== value));
    } else {
      setter([...state, value]);
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
          setStatus(response.data.phpresult);
        }
      }
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
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lkgexcel.com/backend/getplot.php"
      );
      setBooking(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching plot data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    loadBooking();
    loadDate();
  }, []);

  const getUniqueValues = (key) => {
    return [...new Set(bookings.map((item) => item[key]))];
  };

  const projectOptions = getUniqueValues("projectName");
  const blockOptions = getUniqueValues("blockName");
  const plotOptions = getUniqueValues("plotNo");
  const filteredBookings = bookings.filter(
    (item) =>
      (!selectedProject.length ||
        selectedProject.includes("Select All") ||
        selectedProject.includes(item.projectName)) &&
      (!selectedBlock.length ||
        selectedBlock.includes("Select All") ||
        selectedBlock.includes(item.blockName)) &&
      (!selectedPlot.length ||
        selectedPlot.includes("Select All") ||
        selectedPlot.includes(item.plotNo)) &&
      (!selectedDate || item.bookingDate === selectedDate)
  );

  const clearFilters = () => {
    setSelectedProject([]);
    setSelectedBlock([]);
    setSelectedPlot([]);
    setSelectedDate("");
    setHighlightedRow(null);
  };
  console.log(date);
  return (
    <>
      <Box mb={4}>
        <Center>
          <Text fontSize="30px" fontWeight="600" p="20px">
            Booking Status
          </Text>
        </Center>
        <Flex justifyContent={"space-evenly"}>
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
              {blockOptions.map((block) => (
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
              {plotOptions.map((plot) => (
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
          <Input
            type="date"
            placeholder="Search From Date"
            w={"10%"}
            ml={"2%"}
            value={selectedDate}
            onChange={(event) => handleSelectChange(event, setSelectedDate)}
            isDisabled={true}
          />
          <Button ml={2} onClick={clearFilters} colorScheme="red">
            Clear Filters
          </Button>
        </Flex>
      </Box>
      {loading ? (
        <Center>
          <Spinner
            size="xl"
            position={"relative"}
            top={"5rem"}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </Center>
      ) : (
        <Table variant="simple" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>ProjectName</Th>
              <Th>BlockName</Th>
              <Th>PlotNo.</Th>
              <Th>AreaSqft</Th>
              <Th>AreaSqmt</Th>
              <Th>PlotType</Th>
              <Th>PlotStatus</Th>
              <Th>BookingDate</Th>

              <Th>CustName</Th>
              <Th>CustNo.</Th>
              <Th>RegistryDate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredBookings.map((plotItem, index) => (
              <Tr
                key={plotItem.id}
                onClick={() => setHighlightedRow(index)}
                style={{
                  background:
                    highlightedRow === index ? "#FFFAF0" : "transparent",
                  cursor: "pointer",
                }}
              >
                <Td>{plotItem.projectName}</Td>
                <Td>{plotItem.blockName}</Td>
                <Td>{plotItem.plotNo}</Td>
                <Td>{plotItem.areaSqft}</Td>
                <Td>{plotItem.areaSqmt}</Td>
                <Td>{plotItem.plotType}</Td>
                <Td>
                  <Badge
                    colorScheme={
                      plotItem.plotStatus === "Available"
                        ? "yellow"
                        : plotItem.plotStatus === "Booked"
                        ? "red"
                        : plotItem.plotStatus === "Registered"
                        ? "green"
                        : "gray"
                    }
                  >
                    {plotItem.plotStatus}
                  </Badge>
                </Td>

                {status
                  .filter(
                    (book) =>
                      book.projectName === plotItem.projectName &&
                      book.blockName === plotItem.blockName &&
                      book.plotNo === plotItem.plotNo
                  )
                  .map((book) => (
                    <React.Fragment key={book.id}>
                      <Td>{book.bookingDate}</Td>

                      <Td>{book.customerName}</Td>
                      <Td>{book.customerContact}</Td>
                    </React.Fragment>
                  ))}
                <Td>
                  {plotItem.plotStatus === "Registered" && (
                    <span>
                      {date.map((rd, index) => (
                        <React.Fragment key={index}>
                          <span>{rd.registryDate}</span>
                          {index !== date.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </span>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default BookingStatus;
