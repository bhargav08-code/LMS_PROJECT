// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // import {
// //   Grid,
// //   GridItem,
// //   Input,
// //   FormControl,
// //   FormLabel,
// //   Box,
// //   Flex,
// //   Center,
// //   VStack,
// //   Textarea,
// //   HStack,
// //   Divider,
// //   Text,
// //   Button,
// //   Table,
// //   Thead,
// //   Tr,
// //   Th,
// //   Tbody,
// //   Td,
// //   Select,
// //   TableContainer,
// // } from "@chakra-ui/react";

// // const PaymentTransaction = () => {
// //   const [displa, setdisplay] = useState(false);

// //   const [projectName, setProjectName] = useState("");
// //   const [blockName, setBlockname] = useState("");
// //   const [plotName, setPlotName] = useState("");
// //   const [projectsData, setprojectsData] = useState([]);
// //   const [bookingData, setbooking] = useState([]);

// //   const [blockData, setblockData] = useState([]);
// //   const [plotData, setplotData] = useState([]);

// //   const loadProjects = async () => {
// //     let query = "SELECT * FROM project;";
// //     // alert(query);

// //     const url = "https://lkgexcel.com/backend/getQuery.php";
// //     let fData = new FormData();

// //     fData.append("query", query);

// //     try {
// //       const response = await axios.post(url, fData);

// //       if (response && response.data) {
// //         if (response.data.phpresult) {
// //           setprojectsData(response.data.phpresult);
// //           console.log(response.data.phpresult);
// //         }
// //       }
// //     } catch (error) {
// //       console.log("Please Select Proper Input");
// //     }
// //   };

// //   const loadBlocks = async (pname) => {
// //     let query = "SELECT * FROM block where projectName = '" + pname + "' ;";
// //     // alert(query);

// //     const url = "https://lkgexcel.com/backend/getQuery.php";
// //     let fData = new FormData();

// //     fData.append("query", query);

// //     try {
// //       const response = await axios.post(url, fData);

// //       if (response && response.data) {
// //         if (response.data.phpresult) {
// //           setblockData(response.data.phpresult);
// //           console.log(response.data.phpresult);
// //         }
// //       }
// //     } catch (error) {
// //       console.log("Please Select Proper Input");
// //     }
// //   };

// //   const loadPlots = async (bname) => {
// //     let query =
// //       "SELECT * FROM plot where blockName = '" +
// //       bname +
// //       "' AND projectName ='" +
// //       projectName +
// //       "' AND plotStatus ='Booked' ;";
// //     // alert(query);

// //     const url = "https://lkgexcel.com/backend/getQuery.php";
// //     let fData = new FormData();

// //     fData.append("query", query);

// //     try {
// //       const response = await axios.post(url, fData);

// //       if (response && response.data) {
// //         if (response.data.phpresult) {
// //           setplotData(response.data.phpresult);
// //           console.log(response.data.phpresult);
// //         }
// //       }
// //     } catch (error) {
// //       console.log("Please Select Proper Input");
// //     }
// //   };

// //   useEffect(() => {
// //     // Call the loadContractor function when the component mounts
// //     loadProjects();
// //   }, []);
// //   const loadBooking = async (bname) => {
// //     let query =
// //       "SELECT * FROM booking where blockName = '" +
// //       bname +
// //       "' AND projectName ='" +
// //       projectName +
// //       "' ;";
// //     // "' AND plotStatus ='Booked' ;";
// //     // alert(query);

// //     const url = "https://lkgexcel.com/backend/getQuery.php";
// //     let fData = new FormData();

// //     fData.append("query", query);

// //     try {
// //       const response = await axios.post(url, fData);

// //       if (response && response.data) {
// //         if (response.data.phpresult) {
// //           setbooking(response.data.phpresult);
// //           console.log(response.data.phpresult);
// //         }
// //       }
// //     } catch (error) {
// //       console.log("Please Select Proper Input");
// //     }
// //   };

// //   useEffect(() => {
// //     loadBooking();
// //     loadBlocks();
// //     loadPlots();
// //   }, []);

// //   return (
// //     <Box display={"flex"} height={"100vh"} maxW={"100vw"}>
// //       <Box flex={"20%"} borderRight={"1px solid grey"}>
// //         <VStack alignItems={"flex-start"} gap={0}>
// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="projectName">Project Name</FormLabel>
// //               <Select
// //                 id="projectName"
// //                 placeholder="Select Project"
// //                 onChange={(e) => {
// //                   setProjectName(e.target.value);
// //                   loadBlocks(e.target.value);
// //                 }}
// //                 w={"60%"}
// //               >
// //                 {projectsData.map((project) => {
// //                   return (
// //                     <option
// //                       key={project.projectName}
// //                       value={project.projectName}
// //                     >
// //                       {project.projectName}
// //                     </option>
// //                   );
// //                 })}
// //                 {/* Add more projects as needed */}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="blockName">Block Name</FormLabel>
// //               <Select
// //                 id="blockName"
// //                 placeholder="Select Block"
// //                 onChange={(e) => {
// //                   setBlockname(e.target.value);
// //                   loadPlots(e.target.value);
// //                   loadBooking(e.target.value);
// //                 }}
// //                 w={"60%"}
// //               >
// //                 {blockData.map((block) => {
// //                   return (
// //                     <option key={block.blockName} value={block.blockName}>
// //                       {block.blockName}
// //                     </option>
// //                   );
// //                 })}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="plotNo">Plot No</FormLabel>
// //               <Select
// //                 id="plotNo"
// //                 placeholder="Select Plot No"
// //                 onChange={(e) => {
// //                   setPlotName(e.target.value);
// //                 }}
// //                 w={"60%"}
// //               >
// //                 {plotData.map((plot) => {
// //                   return (
// //                     <option key={plot.plotNo} value={plot.plotNo}>
// //                       {plot.plotNo}
// //                     </option>
// //                   );
// //                 })}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="plotType">Plot Type</FormLabel>
// //               <Input
// //                 id="plotType"
// //                 type="text"
// //                 placeholder="Enter Plot Type"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].plotType : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="custName">Cust Name</FormLabel>
// //               <Input
// //                 id="custName"
// //                 type="text"
// //                 placeholder="Enter Cust name"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].customerName : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="custAddress">Cust Address</FormLabel>
// //               <Textarea
// //                 id="custAddress"
// //                 resize={"horizontal"}
// //                 placeholder="Enter Address"
// //                 w={"60%"}
// //                 minH={"2.5rem"}
// //                 value={bookingData[0] ? bookingData[0].customerAddress : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="areaSqft">Ares Sqft</FormLabel>
// //               <Input
// //                 id="areaSqft"
// //                 type="number"
// //                 placeholder="Enter Area Sqft"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].areaSqft : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="ratePerSqft">Rate Per Sqft</FormLabel>
// //               <Input
// //                 id="ratePerSqft"
// //                 type="number"
// //                 placeholder="Enter Rate Sqft"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].rateAreaSqft : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="totalAmount">Total Amount</FormLabel>
// //               <Input
// //                 id="totalAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].totalAmount == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].totalAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="discount">Discount</FormLabel>
// //               <Select
// //                 id="discount"
// //                 placeholder="Select Discount"
// //                 w={"60%"}
// //                 onChange={(e) => {
// //                   loadBooking(e.target.value);
// //                 }}
// //                 value={bookingData[0] ? bookingData[0].discountApplicable : ""}
// //               >
// //                 {bookingData.map((i) => (
// //                   <option value={i.discountApplicable}>
// //                     {i.discountApplicable}
// //                   </option>
// //                 ))}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="discountPercent">Discount %</FormLabel>
// //               <Input
// //                 id="discountPercent"
// //                 type="number"
// //                 placeholder="Enter Discount%"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].discountPercent : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="netAmount">Net Amount</FormLabel>
// //               <Input
// //                 id="netAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].netAmount == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].netAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="registryAmount">Registry Amount</FormLabel>
// //               <Input
// //                 id="registryAmount"
// //                 type="number"
// //                 placeholder="Enter Registry"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].registeryAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="serviceAmount">Service Amount</FormLabel>
// //               <Input
// //                 id="serviceAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].serviceAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="maintenanceAmount">Maintenace Amt</FormLabel>
// //               <Input
// //                 id="maintenanceAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].maintenanceAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="miscAmount">Misc Amount</FormLabel>
// //               <Input
// //                 id="miscAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].miscAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="grandTotal">Grand Total</FormLabel>
// //               <Input
// //                 id="grandTotal"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].grandTotal == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].grandTotal : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="construction">Construction Yes/No</FormLabel>
// //               <Select
// //                 id="construction"
// //                 placeholder="Select"
// //                 w={"60%"}
// //                 value={
// //                   bookingData[0] ? bookingData[0].constructionApplicable : ""
// //                 }
// //               >
// //                 {bookingData.map((i) => (
// //                   <option value={i.constructionApplicable}>
// //                     {i.constructionApplicable}
// //                   </option>
// //                 ))}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="contractor">Contractor</FormLabel>
// //               <Select
// //                 id="contractor"
// //                 placeholder="Select"
// //                 w={"60%"}
// //                 value={
// //                   bookingData[0] ? bookingData[0].constructionContractor : ""
// //                 }
// //               >
// //                 {bookingData.map((i) => (
// //                   <option value={i.constructionContractor}>
// //                     {i.constructionContractor}
// //                   </option>
// //                 ))}
// //               </Select>
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="constructionAmount">
// //                 Construction Amount
// //               </FormLabel>
// //               <Input
// //                 id="constructionAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].constructionAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="totalAmountPayable">
// //                 Total Amount Payable
// //               </FormLabel>
// //               <Input
// //                 id="totalAmountPayable"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].totalAmountPayable == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].totalAmountPayable : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="guidelineAmount">Guideline Amount</FormLabel>
// //               <Input
// //                 id="guidelineAmount"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].guidelineAmount : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="registryPercent">Registry Percent</FormLabel>
// //               <Input
// //                 id="registryPercent"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 value={bookingData[0] ? bookingData[0].registeryPercent : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="bankAmountPayable">
// //                 Bank Amount Payable
// //               </FormLabel>
// //               <Input
// //                 id="bankAmountPayable"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].bankAmountPayable == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].bankAmountPayable : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <FormControl>
// //             <Flex
// //               align="center"
// //               justifyContent={"space-between"}
// //               padding={"0px 4px 0px 4px"}
// //             >
// //               <FormLabel htmlFor="cashAmountPayable">
// //                 Cash Amount Payable
// //               </FormLabel>
// //               <Input
// //                 id="cashAmountPayable"
// //                 type="number"
// //                 placeholder="Enter Amount"
// //                 w={"60%"}
// //                 background={
// //                   bookingData[0]
// //                     ? !bookingData[0].cashAmountPayable == ""
// //                       ? "yellow"
// //                       : ""
// //                     : ""
// //                 }
// //                 value={bookingData[0] ? bookingData[0].cashAmountPayable : ""}
// //               />
// //             </Flex>
// //           </FormControl>

// //           <Flex padding={"0px 4px 0px 4px"} alignSelf={"end"}>
// //             <Button colorScheme="blue"> Edit</Button>
// //           </Flex>
// //           {/* <Center>
// //             <hr style={{ width: "80%", marginTop: "10px" }} />
// //           </Center> */}
// //         </VStack>
// //       </Box>

// //       <Box flex={"80%"} maxW={"80%"}>
// //         <Box borderBottom={"1px solid black"} w={"100%"} p={2} pb={4}>
// //           <HStack justifyContent={"space-between"}>
// //             <Box maxW={"80%"}>
// //               <HStack marginLeft={2}>
// //                 <FormControl>
// //                   <Flex
// //                     align="center"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                   >
// //                     <FormLabel fontSize={"sm"}>Plot Status</FormLabel>
// //                     <Input
// //                       type="text"
// //                       w={"60%"}
// //                       value={plotData[0] ? plotData[0].plotStatus : ""}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="center"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                   >
// //                     <FormLabel fontSize={"sm"}>Registry Gender</FormLabel>

// //                     <Select id="registrygender" placeholder="Select">
// //                       <option value="male">Male</option>
// //                       <option value="female">Female</option>
// //                     </Select>
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="center"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                   >
// //                     <FormLabel fontSize={"sm"}>Registry Date</FormLabel>
// //                     <Input type="date" w={"60%"} />
// //                   </Flex>
// //                 </FormControl>
// //               </HStack>
// //               <Divider mt={4} />
// //               <HStack
// //                 alignContent={"flex-start"}
// //                 justifyContent={"space-between"}
// //                 mt={4}
// //                 mb={4}
// //               >
// //                 <VStack>
// //                   <Text>Total Amount Payable = 15000</Text>
// //                   <Text>Bank Amount Payable = 15000</Text>
// //                   <Text>Cash Amount Payable = 15000</Text>
// //                 </VStack>
// //                 <VStack>
// //                   <Text>Total Amount Received = </Text>
// //                   <Text>Bank Amount Received = </Text>
// //                   <Text>Cash Amount Received = </Text>
// //                 </VStack>
// //                 <VStack>
// //                   <Text>Total Amount Balance = </Text>

// //                   <Text>Bank Amount Balance = </Text>

// //                   <Text>Cash Amount Balance = </Text>
// //                 </VStack>
// //               </HStack>
// //             </Box>
// //             <VStack>
// //               <Button colorScheme="orange" size={"sm"}>
// //                 Registry
// //               </Button>
// //               <Button colorScheme="orange" size={"sm"}>
// //                 Cancel Plot
// //               </Button>
// //               <Button colorScheme="orange" size={"sm"}>
// //                 Transfer Plot
// //               </Button>
// //               <Button colorScheme="orange" size={"sm"}>
// //                 Delete Plot
// //               </Button>
// //               <Button colorScheme="orange" size={"sm"}>
// //                 History
// //               </Button>
// //             </VStack>
// //           </HStack>
// //           <Divider w={"100%"} bg={"#121212"} />
// //           <HStack
// //             alignContent={"flex-start"}
// //             justifyContent={"space-between"}
// //             mt={4}
// //           >
// //             <Text>Payment Transaction</Text>
// //             <Button
// //               colorScheme="teal"
// //               size="sm"
// //               onClick={() => {
// //                 setdisplay(!displa);
// //               }}
// //             >
// //               Add Payment
// //             </Button>
// //           </HStack>
// //           <Divider w={"100%"} bg={"#121212"} mt={4} />
// //           <Box display={displa == true ? "flex" : "none"}>
// //             <VStack alignItems={"flex-start"}>
// //               <HStack gap={"15px"} p={3}>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Date
// //                     </FormLabel>
// //                     <Input
// //                       type="date"
// //                       // w={"60%"}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Payment Type
// //                     </FormLabel>
// //                     <Select placeholder="Select  ">
// //                       <option value="cash">Cash</option>
// //                       <option value="bank">Bank</option>
// //                       {/* Add more projects as needed */}
// //                     </Select>
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Amount
// //                     </FormLabel>
// //                     <Input
// //                       type="number"
// //                       // w={"60%"}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Bank Mode
// //                     </FormLabel>
// //                     <Select placeholder="Select  ">
// //                       <option value="none">None</option>
// //                       <option value="cheque">Cheque/DD</option>
// //                       <option value="rtgs">RTGS/NEFT</option>
// //                       <option value="loan">Loan</option>
// //                       <option value="upi">UPI</option>

// //                       {/* Add more projects as needed */}
// //                     </Select>
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Chq/Ref No
// //                     </FormLabel>
// //                     <Input
// //                       type="number"
// //                       // w={"60%"}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Bank Name
// //                     </FormLabel>
// //                     <Input
// //                       type="text"
// //                       // w={"60%"}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //               </HStack>
// //               <HStack gap={"15px"} p={3} pt={0}>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Trasaction Status
// //                     </FormLabel>
// //                     <Select placeholder="Select  ">
// //                       <option value="pending">Pending</option>
// //                       <option value="clear">Clear</option>
// //                       <option value="pdc">PDC</option>
// //                       <option value="prov">Provisional</option>
// //                       <option value="bounced">Bounced</option>
// //                       <option value="return">Returned</option>

// //                       {/* Add more projects as needed */}
// //                     </Select>
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Status Date
// //                     </FormLabel>
// //                     <Input
// //                       type="Date"
// //                       // w={"60%"}
// //                     />
// //                   </Flex>
// //                 </FormControl>
// //                 <FormControl>
// //                   <Flex
// //                     align="flex-start"
// //                     // justifyContent={"space-between"}
// //                     // padding={"0px 4px 0px 4px"}
// //                     flexDirection={"column"}
// //                   >
// //                     <FormLabel fontSize={"sm"} margin={0}>
// //                       Remarks
// //                     </FormLabel>
// //                     <Input type="text" w={"250%"} />
// //                   </Flex>
// //                 </FormControl>
// //                 {/* <Button
// //                   colorScheme="telegram"
// //                   top={3}
// //                   size={"md"}
// //                   pos={"relative"}
// //                   left={"60%"}
// //                   w={"80%"}
// //                 >
// //                   Submit
// //                 </Button> */}
// //               </HStack>
// //               <Button
// //                 colorScheme="telegram"
// //                 alignSelf={"flex-end"}
// //                 size={"md"}
// //                 m={3}
// //                 mt={0}
// //               >
// //                 Submit
// //               </Button>
// //             </VStack>
// //           </Box>
// //           <Divider w={"100%"} bg={"#121212"} />
// //           <Box display={"none"}>
// //             <TableContainer>
// //               <Table>
// //                 <Thead color={"white"}>
// //                   <Tr bg={"#121212"} color={"whitesmoke"}>
// //                     <Th color={"white"}>To convert</Th>
// //                     <Th color={"white"}>into</Th>
// //                     <Th isNumeric color={"white"}>
// //                       multiply by
// //                     </Th>
// //                     <Th color={"white"}>To convert</Th>
// //                     <Th color={"white"}>into</Th>
// //                     <Th color={"white"} isNumeric>
// //                       multiply by
// //                     </Th>
// //                     <Th color={"white"}>To convert</Th>
// //                     <Th color={"white"}>into</Th>
// //                     <Th isNumeric color={"white"}>
// //                       multiply by
// //                     </Th>
// //                     <Th color={"white"}> To convert</Th>
// //                     <Th color={"white"}>into</Th>
// //                     <Th isNumeric color={"white"}>
// //                       multiply by
// //                     </Th>
// //                     <Th color={"white"}>To convert</Th>
// //                     <Th color={"white"}>into</Th>
// //                     <Th isNumeric color={"white"}>
// //                       multiply by
// //                     </Th>
// //                   </Tr>
// //                 </Thead>
// //                 <Tbody>
// //                   <Tr>
// //                     <Td>inches</Td>
// //                     <Td>millimetres (mm)</Td>
// //                     <Td isNumeric>25.4</Td>
// //                     <Td>inches</Td>
// //                     <Td>millimetres (mm)</Td>
// //                     <Td isNumeric>25.4</Td>
// //                     <Td>inches</Td>
// //                     <Td>millimetres (mm)</Td>
// //                     <Td isNumeric>25.4</Td>
// //                     <Td>inches</Td>
// //                     <Td>millimetres (mm)</Td>
// //                     <Td isNumeric>25.4</Td>
// //                     <Td>inches</Td>
// //                     <Td>millimetres (mm)</Td>
// //                     <Td isNumeric>25.4</Td>
// //                   </Tr>
// //                 </Tbody>
// //               </Table>
// //             </TableContainer>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default PaymentTransaction;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import {
//   Grid,
//   GridItem,
//   Input,
//   FormControl,
//   FormLabel,
//   Box,
//   Flex,
//   Center,
//   useToast,
//   VStack,
//   Textarea,
//   HStack,
//   Divider,
//   Text,
//   Button,
//   Table,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
//   Select,
//   TableContainer,
// } from "@chakra-ui/react";

// const PaymentTransaction = () => {
//   const [displa, setdisplay] = useState(false);

//   const [projectName, setProjectName] = useState("");
//   const [blockName, setBlockname] = useState("");
//   const [plotName, setPlotName] = useState("");
//   const [contractorName, setcontractorName] = useState("");
//   const [projectsData, setprojectsData] = useState([]);
//   const [blockData, setblockData] = useState([]);
//   const [plotData, setplotData] = useState([]);
//   const [currentPlot, setCurrentPlot] = useState([]);
//   const [contractorData, setcontractorData] = useState([]);
//   const [transactionData, settransactionData] = useState([]);
//   const [bookingData, setbooking] = useState([]);
//   const toast = useToast();

//   const loadContractor = async () => {
//     let query = "SELECT * FROM contractor;";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setcontractorData(response.data.phpresult);
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadProjects = async () => {
//     let query = "SELECT * FROM project;";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setprojectsData(response.data.phpresult);
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadBlocks = async (pname) => {
//     let query = "SELECT * FROM block where projectName = '" + pname + "' ;";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setblockData(response.data.phpresult);
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadPlots = async (bname) => {
//     let query =
//       "SELECT * FROM plot where blockName = '" +
//       bname +
//       "' AND projectName ='" +
//       projectName +
//       "';";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setplotData(response.data.phpresult);
//           console.log(response.data.phpresult);

//           loadTransaction(response.data.phpresult);
//           loadAmounts(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadTransaction = async (plotData) => {
//     let query =
//       "SELECT * FROM transaction where blockName = '" +
//       plotData[0]["blockName"] +
//       "' AND projectName ='" +
//       projectName +
//       "'AND plotno ='" +
//       plotData[0]["plotNo"] +
//       "';";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           settransactionData(response.data.phpresult);
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadAmounts = async (plotData) => {
//     let query =
//       "SELECT sum(Amount) as asum FROM transaction where blockName = '" +
//       plotData[0]["blockName"] +
//       "' AND projectName ='" +
//       projectName +
//       "'AND plotno ='" +
//       plotData[0]["plotNo"] +
//       "' ;";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           Number(document.getElementById("totalReceived")).innerHTML =
//             response.data.phpresult[0]["asum"];
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const loadTransactionlater = async () => {
//     let query =
//       "SELECT * FROM transaction where blockName = '" +
//       blockName +
//       "' AND projectName ='" +
//       projectName +
//       "'AND plotno ='" +
//       plotName +
//       "';";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           settransactionData(response.data.phpresult);
//           console.log(response.data.phpresult);
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const setData = async (plotName) => {
//     let query =
//       "SELECT * FROM booking where blockName = '" +
//       blockName +
//       "' AND projectName ='" +
//       projectName +
//       "' AND plotNo ='" +
//       plotName +
//       "'  ;";
//     // alert(query);

//     const url = "https://lkgexcel.com/backend/getQuery.php";
//     let fData = new FormData();

//     fData.append("query", query);

//     try {
//       const response = await axios.post(url, fData);

//       if (response && response.data) {
//         if (response.data.phpresult) {
//           setbooking(response.data.phpresult);
//           setCurrentPlot(response.data.phpresult);
//           console.log(response.data.phpresult);
//           document.getElementById("plotType").value =
//             response.data.phpresult[0]["plotType"];
//           document.getElementById("custName").value =
//             response.data.phpresult[0]["customerName"];
//           document.getElementById("custAddress").value =
//             response.data.phpresult[0]["customerAddress"];
//           //    document.getElementById("customerContact").value = response.data.phpresult[0]['customerContact'];
//           document.getElementById("registryGender").value =
//             response.data.phpresult[0]["registryGender"];
//           document.getElementById("areaSqmt").value =
//             response.data.phpresult[0]["areaSqft"];
//           document.getElementById("ratePerSqmt").value =
//             response.data.phpresult[0]["rateAreaSqft"];
//           document.getElementById("totalAmount").value =
//             response.data.phpresult[0]["totalAmount"];
//           document.getElementById("discountApplicable").value =
//             response.data.phpresult[0]["discountApplicable"];
//           document.getElementById("discountPercent").value =
//             response.data.phpresult[0]["discountPercent"];
//           document.getElementById("netAmount").value =
//             response.data.phpresult[0]["netAmount"];
//           document.getElementById("registryAmount").value =
//             response.data.phpresult[0]["registryAmount"];
//           document.getElementById("serviceAmount").value =
//             response.data.phpresult[0]["serviceAmount"];
//           document.getElementById("maintenanceAmount").value =
//             response.data.phpresult[0]["maintenanceAmount"];
//           document.getElementById("miscAmount").value =
//             response.data.phpresult[0]["miscAmount"];
//           document.getElementById("grandTotal").value =
//             response.data.phpresult[0]["grandTotal"];
//           document.getElementById("constructionApplicable").value =
//             response.data.phpresult[0]["constructionApplicable"];
//           setcontractorName(
//             response.data.phpresult[0]["constructionContractor"]
//           );
//           // document.getElementById("constructionContractor").value = response.data.phpresult[0]['constructionContractor'];
//           document.getElementById("totalAmountPayable").value =
//             response.data.phpresult[0]["totalAmountPayable"];
//           document.getElementById("guidelineAmount").value =
//             response.data.phpresult[0]["guidelineAmount"];
//           document.getElementById("registryPercent").value =
//             response.data.phpresult[0]["registryPercent"];
//           document.getElementById("bankAmountPayable").value =
//             response.data.phpresult[0]["bankAmountPayable"];
//           document.getElementById("cashAmountPayable").value =
//             response.data.phpresult[0]["cashAmountPayable"];
//           document.getElementById("bookingDate").value =
//             response.data.phpresult[0]["bookingDate"];
//           document.getElementById("constructionAmount").value =
//             response.data.phpresult[0]["constructionAmount"];

//           document.getElementById("bankPayable").innerHTML =
//             response.data.phpresult[0]["bankAmountPayable"];
//           document.getElementById("cashPayable").innerHTML =
//             response.data.phpresult[0]["cashAmountPayable"];
//           document.getElementById("totalPayable").innerHTML =
//             response.data.phpresult[0]["totalAmountPayable"];

//           document.getElementById("plotStatus").value =
//             plotData[0]["plotStatus"];
//         }
//       }
//     } catch (error) {
//       console.log("Please Select Proper Input");
//     }
//   };

//   const addPayment = async () => {
//     const url = "https://lkgexcel.com/backend/setQuery.php";
//     let query =
//       "INSERT INTO transaction (id,projectName,blockName,plotno, date, paymentType, amount, bankMode, cheqNo, bankName, transactionStatus, statusDate, remarks) VALUES (NULL,'" +
//       plotData[0]["projectName"] +
//       "','" +
//       plotData[0]["blockName"] +
//       "','" +
//       plotData[0]["plotNo"] +
//       "', '" +
//       document.getElementById("date").value +
//       "', '" +
//       document.getElementById("paymentType").value +
//       "', '" +
//       document.getElementById("amount").value +
//       "', '" +
//       document.getElementById("bankMode").value +
//       "', '" +
//       document.getElementById("cheqNo").value +
//       "', '" +
//       document.getElementById("bankName").value +
//       "', '" +
//       document.getElementById("transactionStatus").value +
//       "', '" +
//       document.getElementById("statusDate").value +
//       "', '" +
//       document.getElementById("remarks").value +
//       "');";

//     let fData = new FormData();
//     fData.append("query", query);
//     // Update total received amounts
//     const totalReceived =
//       parseFloat(document.getElementById("totalReceived").textContent) +
//       parseFloat(document.getElementById("amount").value);
//     document.getElementById("totalReceived").textContent =
//       totalReceived.toFixed(2);

//     // Update bank received amounts
//     const bankReceived = parseFloat(
//       document.getElementById("bankReceived").textContent
//     );
//     if (document.getElementById("bankMode").value === "bank") {
//       const bankAmount = parseFloat(document.getElementById("amount").value);
//       document.getElementById("bankReceived").textContent = (
//         bankReceived + bankAmount
//       ).toFixed(2);
//     }

//     // Update cash received amounts
//     const cashReceived = parseFloat(
//       document.getElementById("cashReceived").textContent
//     );
//     if (document.getElementById("bankMode").value === "cash") {
//       const cashAmount = parseFloat(document.getElementById("amount").value);
//       document.getElementById("cashReceived").textContent = (
//         cashReceived + cashAmount
//       ).toFixed(2);
//     }

//     // Update total balance amounts
//     const totalBalance =
//       totalReceived -
//       Number(document.getElementById("totalPayable").textContent);
//     document.getElementById("totalBalance").textContent =
//       totalBalance.toFixed(2);

//     // Update bank balance amounts
//     const bankBalance =
//       parseFloat(document.getElementById("bankPayable").textContent) -
//       parseFloat(document.getElementById("bankReceived").textContent);
//     document.getElementById("bankBalance").textContent = bankBalance.toFixed(2);

//     // Update cash balance amounts
//     const cashBalance =
//       parseFloat(document.getElementById("cashPayable").textContent) -
//       parseFloat(document.getElementById("cashReceived").textContent);
//     document.getElementById("cashBalance").textContent = cashBalance.toFixed(2);

//     try {
//       const response = await axios.post(url, fData);
//       toast({
//         title: "Payment added successfully!",
//         status: "success",
//         duration: 3000,
//         position: "top",
//         isClosable: true,
//       });
//     } catch (error) {
//       console.log(error.toJSON());
//     }
//   };

//   useEffect(() => {
//     // Call the loadContractor function when the component mounts
//     loadProjects();
//     loadContractor();
//     // loadTransaction();
//   }, []);

//   return (
//     <Box display={"flex"} height={"100vh"} maxW={"100vw"}>
//       <Box flex={"20%"} borderRight={"1px solid grey"}>
//         <VStack alignItems={"flex-start"} gap={0}>
//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="projectName">Project Name</FormLabel>
//               <Select
//                 id="projectName"
//                 placeholder="Select Project"
//                 onChange={(e) => {
//                   setProjectName(e.target.value);
//                   loadBlocks(e.target.value);
//                 }}
//                 w={"60%"}
//               >
//                 {projectsData.map((project) => {
//                   return (
//                     <option
//                       key={project.projectName}
//                       value={project.projectName}
//                     >
//                       {project.projectName}
//                     </option>
//                   );
//                 })}
//                 {/* Add more projects as needed */}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="blockName">Block Name</FormLabel>
//               <Select
//                 id="blockName"
//                 placeholder="Select Block"
//                 onChange={(e) => {
//                   setBlockname(e.target.value);
//                   loadPlots(e.target.value);
//                 }}
//                 w={"60%"}
//               >
//                 {blockData.map((block) => {
//                   return (
//                     <option key={block.blockName} value={block.blockName}>
//                       {block.blockName}
//                     </option>
//                   );
//                 })}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="plotNo">Plot No</FormLabel>
//               <Select
//                 id="plotNo"
//                 placeholder="Select Plot No"
//                 onChange={(e) => {
//                   setPlotName(e.target.value);
//                   setData(e.target.value);
//                 }}
//                 w={"60%"}
//               >
//                 {plotData.map((plot) => {
//                   return (
//                     <option key={plot.plotNo} value={plot.plotNo}>
//                       {plot.plotNo}
//                     </option>
//                   );
//                 })}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="plotType">Plot Type</FormLabel>
//               <Input
//                 id="plotType"
//                 type="text"
//                 placeholder="Enter Plot Type"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="custName">Cust Name</FormLabel>
//               <Input
//                 id="custName"
//                 type="text"
//                 placeholder="Enter Cust name"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="custAddress">Cust Address</FormLabel>
//               <Textarea
//                 id="custAddress"
//                 resize={"horizontal"}
//                 placeholder="Enter Address"
//                 w={"60%"}
//                 minH={"2.5rem"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="areaSqft">Ares Sqft</FormLabel>
//               <Input
//                 id="areaSqmt"
//                 type="text"
//                 placeholder="Enter Area Sqft"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="ratePerSqft">Rate Per Sqft</FormLabel>
//               <Input
//                 id="ratePerSqmt"
//                 type="text"
//                 placeholder="Enter Rate Sqft"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="totalAmount">Total Amount</FormLabel>
//               <Input
//                 id="totalAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="discount">Discount</FormLabel>
//               <Select
//                 id="discountApplicable"
//                 placeholder="Select Discount"
//                 w={"60%"}
//               >
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//                 {/* Add more options as needed */}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="discountPercent">Discount %</FormLabel>
//               <Input
//                 id="discountPercent"
//                 type="text"
//                 placeholder="Enter Discount%"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="netAmount">Net Amount</FormLabel>
//               <Input
//                 id="netAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="registryAmount">Registry Amount</FormLabel>
//               <Input
//                 id="registryAmount"
//                 type="text"
//                 placeholder="Enter Registry"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="serviceAmount">Service Amount</FormLabel>
//               <Input
//                 id="serviceAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="maintenanceAmount">Maintenace Amt</FormLabel>
//               <Input
//                 id="maintenanceAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="miscAmount">Misc Amount</FormLabel>
//               <Input
//                 id="miscAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="grandTotal">Grand Total</FormLabel>
//               <Input
//                 id="grandTotal"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="construction">Construction Yes/No</FormLabel>
//               <Select
//                 id="constructionApplicable"
//                 placeholder="Select"
//                 w={"60%"}
//               >
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//                 {/* Add more options as needed */}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="contractor">Contractor</FormLabel>
//               <Select
//                 id="constructionContractor"
//                 placeholder="Select"
//                 value={contractorName}
//                 onChange={(e) => {
//                   setcontractorName();
//                 }}
//                 w={"60%"}
//               >
//                 {contractorData.map((block) => {
//                   return (
//                     <option
//                       key={block.contractorName}
//                       value={block.contractorName}
//                     >
//                       {block.contractorName}
//                     </option>
//                   );
//                 })}
//               </Select>
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="constructionAmount">
//                 Construction Amount
//               </FormLabel>
//               <Input
//                 id="constructionAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="totalAmountPayable">
//                 Total Amount Payable
//               </FormLabel>
//               <Input
//                 id="totalAmountPayable"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="guidelineAmount">Guideline Amount</FormLabel>
//               <Input
//                 id="guidelineAmount"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="registryPercent">Registry Percent</FormLabel>
//               <Input
//                 id="registryPercent"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="bankAmountPayable">
//                 Bank Amount Payable
//               </FormLabel>
//               <Input
//                 id="bankAmountPayable"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <FormControl>
//             <Flex
//               align="center"
//               justifyContent={"space-between"}
//               padding={"0px 4px 0px 4px"}
//             >
//               <FormLabel htmlFor="cashAmountPayable">
//                 Cash Amount Payable
//               </FormLabel>
//               <Input
//                 id="cashAmountPayable"
//                 type="text"
//                 placeholder="Enter Amount"
//                 w={"60%"}
//               />
//             </Flex>
//           </FormControl>

//           <Flex padding={"0px 4px 0px 4px"} alignSelf={"end"}>
//             <Button colorScheme="blue"> Edit</Button>
//           </Flex>
//           {/* <Center>
//             <hr style={{ width: "80%", marginTop: "10px" }} />
//           </Center> */}
//         </VStack>
//       </Box>

//       <Box flex={"80%"} maxW={"80%"}>
//         <Box borderBottom={"1px solid black"} w={"100%"} p={2} pb={4}>
//           <HStack justifyContent={"space-between"}>
//             <Box maxW={"80%"}>
//               <HStack marginLeft={2}>
//                 <FormControl>
//                   <Flex
//                     align="center"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                   >
//                     <FormLabel fontSize={"sm"}>Plot Status</FormLabel>
//                     <Input type="text" id="plotStatus" w={"60%"} />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="center"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                   >
//                     <FormLabel fontSize={"sm"}>Registry Gender</FormLabel>
//                     <Input type="text" id="registryGender" w={"60%"} />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="center"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                   >
//                     <FormLabel fontSize={"sm"}>Registry Date</FormLabel>
//                     <Input type="date" id="bookingDate" w={"60%"} />
//                   </Flex>
//                 </FormControl>
//               </HStack>
//               <Divider mt={4} />
//               <HStack
//                 alignContent={"flex-start"}
//                 justifyContent={"space-between"}
//                 mt={4}
//                 mb={4}
//               >
//                 <VStack>
//                   <Text>
//                     Total Amount Payable = <span id="totalPayable">0</span>
//                   </Text>
//                   <Text>
//                     Bank Amount Payable = <span id="bankPayable">0</span>
//                   </Text>
//                   <Text>
//                     Cash Amount Payable = <span id="cashPayable">0</span>
//                   </Text>
//                 </VStack>
//                 <VStack>
//                   <Text>
//                     Total Amount Received = <span id="totalReceived">0</span>
//                   </Text>
//                   <Text>
//                     Bank Amount Received = <span id="bankReceived">0</span>
//                   </Text>
//                   <Text>
//                     Cash Amount Received = <span id="cashReceived">0</span>
//                   </Text>
//                 </VStack>
//                 <VStack>
//                   <Text>
//                     Total Amount Balance = <span id="totalBalance">0</span>
//                   </Text>
//                   <Text>
//                     Bank Amount Balance = <span id="bankBalance">0</span>
//                   </Text>
//                   <Text>
//                     Cash Amount Balance = <span id="cashBalance">0</span>
//                   </Text>
//                 </VStack>
//               </HStack>
//             </Box>
//             <VStack>
//               <Button colorScheme="orange" size={"sm"}>
//                 Registry
//               </Button>
//               <Button colorScheme="orange" size={"sm"}>
//                 Cancel Plot
//               </Button>
//               <Button colorScheme="orange" size={"sm"}>
//                 Delete Plot
//               </Button>
//               <Button colorScheme="orange" size={"sm"}>
//                 Register Plot
//               </Button>
//               <Button colorScheme="orange" size={"sm"}>
//                 History
//               </Button>
//             </VStack>
//           </HStack>
//           <Divider w={"100%"} bg={"#121212"} />
//           <HStack
//             alignContent={"flex-start"}
//             justifyContent={"space-between"}
//             mt={4}
//           >
//             <Text>Payment Transaction</Text>
//             <Button
//               colorScheme="teal"
//               size="sm"
//               onClick={() => {
//                 setdisplay(!displa);
//               }}
//             >
//               Add Payment
//             </Button>
//           </HStack>
//           <Divider w={"100%"} bg={"#121212"} mt={4} />
//           <Box display={displa == true ? "flex" : "none"}>
//             <VStack alignItems={"flex-start"}>
//               <HStack gap={"15px"} p={3}>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Date
//                     </FormLabel>
//                     <Input
//                       id="date"
//                       type="date"
//                       // w={"60%"}
//                     />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Payment Type
//                     </FormLabel>
//                     <Select placeholder="Select" id="paymentType">
//                       <option value="cash">Cash</option>
//                       <option value="bank">Bank</option>
//                       {/* Add more projects as needed */}
//                     </Select>
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Amount
//                     </FormLabel>
//                     <Input
//                       id="amount"
//                       type="text"
//                       // w={"60%"}
//                     />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Bank Mode
//                     </FormLabel>
//                     <Select placeholder="Select " id="bankMode">
//                       <option value="none">None</option>
//                       <option value="cheque">Cheque/DD</option>
//                       <option value="rtgs">RTGS/NEFT</option>
//                       <option value="loan">Loan</option>
//                       <option value="upi">UPI</option>

//                       {/* Add more projects as needed */}
//                     </Select>
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Chq/Ref No
//                     </FormLabel>
//                     <Input
//                       id="cheqNo"
//                       type="text"
//                       // w={"60%"}
//                     />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Bank Name
//                     </FormLabel>
//                     <Input
//                       id="bankName"
//                       type="text"
//                       // w={"60%"}
//                     />
//                   </Flex>
//                 </FormControl>
//               </HStack>
//               <HStack gap={"15px"} p={3} pt={0}>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Trasaction Status
//                     </FormLabel>
//                     <Select id="transactionStatus" placeholder="Select">
//                       <option value="pending">Pending</option>
//                       <option value="clear">Clear</option>
//                       <option value="pdc">PDC</option>
//                       <option value="prov">Provisional</option>
//                       <option value="bounced">Bounced</option>
//                       <option value="return">Returned</option>

//                       {/* Add more projects as needed */}
//                     </Select>
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Status Date
//                     </FormLabel>
//                     <Input
//                       id="statusDate"
//                       type="Date"
//                       // w={"60%"}
//                     />
//                   </Flex>
//                 </FormControl>
//                 <FormControl>
//                   <Flex
//                     align="flex-start"
//                     // justifyContent={"space-between"}
//                     // padding={"0px 4px 0px 4px"}
//                     flexDirection={"column"}
//                   >
//                     <FormLabel fontSize={"sm"} margin={0}>
//                       Remarks
//                     </FormLabel>
//                     <Input id="remarks" type="text" w={"250%"} />
//                   </Flex>
//                 </FormControl>
//                 {/* <Button
//                   colorScheme="telegram"
//                   top={3}
//                   size={"md"}
//                   pos={"relative"}
//                   left={"60%"}
//                   w={"80%"}
//                 >
//                   Submit
//                 </Button> */}
//               </HStack>
//               <Button
//                 colorScheme="telegram"
//                 alignSelf={"flex-end"}
//                 size={"md"}
//                 m={3}
//                 mt={0}
//                 onClick={addPayment}
//               >
//                 Submit
//               </Button>
//             </VStack>
//           </Box>
//           <Divider w={"100%"} bg={"#121212"} />
//           <Box display={""}>
//             <TableContainer>
//               <Table>
//                 <Thead color={"white"}>
//                   <Tr bg={"#121212"} color={"whitesmoke"}>
//                     <Th color={"white"}>Date</Th>
//                     <Th color={"white"}>Payment Type</Th>
//                     <Th color={"white"}>Amount</Th>
//                     <Th color={"white"}>Bank Mode</Th>
//                     <Th color={"white"}>Chq/Ref No</Th>
//                     <Th color={"white"}>Bank Name</Th>
//                     <Th color={"white"}>Transaction Status</Th>
//                     <Th color={"white"}>Status Date</Th>
//                     <Th color={"white"}>Remarks</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {transactionData.map((res) => (
//                     <tr key={res.date}>
//                       <Td>{res.date}</Td>
//                       <Td>{res.paymentType}</Td>
//                       <Td>{res.amount}</Td>
//                       <Td>{res.bankMode}</Td>
//                       <Td>{res.cheqNo}</Td>
//                       <Td>{res.bankName}</Td>
//                       <Td>{res.transactionStatus}</Td>
//                       <Td>{res.statusDate}</Td>
//                       <Td>{res.remarks}</Td>
//                     </tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </TableContainer>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PaymentTransaction;
import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  GridItem,
  Input,
  FormControl,
  FormLabel,
  Box,
  Flex,
  Center,
  useToast,
  VStack,
  Textarea,
  HStack,
  Divider,
  Text,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  TableContainer,
} from "@chakra-ui/react";

const PaymentTransaction = () => {
  const [displa, setdisplay] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [blockName, setBlockname] = useState("");
  const [plotName, setPlotName] = useState("");
  const [contractorName, setcontractorName] = useState("");
  const [projectsData, setprojectsData] = useState([]);
  const [blockData, setblockData] = useState([]);
  const [plotData, setplotData] = useState([]);
  const [currentPlot, setCurrentPlot] = useState([]);
  const [contractorData, setcontractorData] = useState([]);
  const [transactionData, settransactionData] = useState([]);

  const toast = useToast();

  const loadContractor = async () => {
    let query = "SELECT * FROM contractor;";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setcontractorData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadProjects = async () => {
    let query = "SELECT * FROM project;";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setprojectsData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadBlocks = async (pname) => {
    let query = "SELECT * FROM block where projectName = '" + pname + "' ;";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setblockData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadPlots = async (bname) => {
    let query =
      "SELECT * FROM plot where blockName = '" +
      bname +
      "' AND projectName ='" +
      projectName +
      "';";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setplotData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadTransaction = async (plotData) => {
    let query =
      "SELECT * FROM transaction where blockName = '" +
      document.getElementById("blockName").value +
      "' AND projectName ='" +
      document.getElementById("projectName").value +
      "'AND plotno ='" +
      document.getElementById("plotNo").value +
      "';";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          settransactionData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadAmounts = async () => {
    let query =
      "SELECT sum(Amount) as asum FROM transaction where blockName = '" +
      document.getElementById("blockName").value +
      "' AND projectName ='" +
      document.getElementById("projectName").value +
      "'AND plotno ='" +
      document.getElementById("plotNo").value +
      "'  AND transactionStatus IN ('Provisional', 'PDC', 'Clear', 'Pending');";

    //alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          document.getElementById("totalReceived").innerHTML =
            response.data.phpresult[0]["asum"];
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadAmountsBAR = async () => {
    let query =
      "SELECT sum(Amount) as asum FROM transaction where blockName = '" +
      document.getElementById("blockName").value +
      "' AND projectName ='" +
      document.getElementById("projectName").value +
      "'AND plotno ='" +
      document.getElementById("plotNo").value +
      "' AND paymentType ='bank'  AND transactionStatus IN ('Provisional', 'PDC', 'Clear', 'Pending');";

    //alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          document.getElementById("bankReceived").innerHTML =
            response.data.phpresult[0]["asum"];
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadAmountsCAR = async () => {
    let query =
      "SELECT sum(Amount) as asum FROM transaction where blockName = '" +
      document.getElementById("blockName").value +
      "' AND projectName ='" +
      document.getElementById("projectName").value +
      "'AND plotno ='" +
      document.getElementById("plotNo").value +
      "' AND paymentType ='cash'  AND transactionStatus IN ('Provisional', 'PDC', 'Clear', 'Pending');";

    //alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          document.getElementById("cashReceived").innerHTML =
            response.data.phpresult[0]["asum"];
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const calcAmounts = () => {
    document.getElementById("totalBalance").innerHTML =
      parseInt(document.getElementById("totalPayable").innerHTML) -
      parseInt(document.getElementById("totalReceived").innerHTML);
    document.getElementById("bankBalance").innerHTML =
      parseInt(document.getElementById("bankPayable").innerHTML) -
      parseInt(document.getElementById("bankReceived").innerHTML);
    document.getElementById("cashBalance").innerHTML =
      parseInt(document.getElementById("cashPayable").innerHTML) -
      parseInt(document.getElementById("cashReceived").innerHTML);
  };

  const loadTransactionlater = async () => {
    let query =
      "SELECT * FROM transaction where blockName = '" +
      blockName +
      "' AND projectName ='" +
      projectName +
      "'AND plotno ='" +
      plotName +
      "';";
    // alert(query);

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          settransactionData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const setData = async (plotName) => {
    let query =
      "SELECT * FROM booking where blockName = '" +
      blockName +
      "' AND projectName ='" +
      projectName +
      "' AND plotNo ='" +
      plotName +
      "'  ;";
    // alert(query);
    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setCurrentPlot(response.data.phpresult);
          console.log(response.data.phpresult);
          document.getElementById("plotType").value =
            response.data.phpresult[0]["plotType"];
          document.getElementById("custName").value =
            response.data.phpresult[0]["customerName"];
          document.getElementById("custAddress").value =
            response.data.phpresult[0]["customerAddress"];
          //    document.getElementById("customerContact").value = response.data.phpresult[0]['customerContact'];
          document.getElementById("registryGender").value =
            response.data.phpresult[0]["registryGender"];
          document.getElementById("areaSqmt").value =
            response.data.phpresult[0]["areaSqft"];
          document.getElementById("ratePerSqmt").value =
            response.data.phpresult[0]["rateAreaSqft"];
          document.getElementById("totalAmount").value =
            response.data.phpresult[0]["totalAmount"];
          document.getElementById("discountApplicable").value =
            response.data.phpresult[0]["discountApplicable"];
          document.getElementById("discountPercent").value =
            response.data.phpresult[0]["discountPercent"];
          document.getElementById("netAmount").value =
            response.data.phpresult[0]["netAmount"];
          document.getElementById("registryAmount").value =
            response.data.phpresult[0]["registryAmount"];
          document.getElementById("serviceAmount").value =
            response.data.phpresult[0]["serviceAmount"];
          document.getElementById("maintenanceAmount").value =
            response.data.phpresult[0]["maintenanceAmount"];
          document.getElementById("miscAmount").value =
            response.data.phpresult[0]["miscAmount"];
          document.getElementById("grandTotal").value =
            response.data.phpresult[0]["grandTotal"];
          document.getElementById("constructionApplicable").value =
            response.data.phpresult[0]["constructionApplicable"];
          setcontractorName(
            response.data.phpresult[0]["constructionContractor"]
          );
          // document.getElementById("constructionContractor").value = response.data.phpresult[0]['constructionContractor'];
          document.getElementById("totalAmountPayable").value =
            response.data.phpresult[0]["totalAmountPayable"];
          document.getElementById("guidelineAmount").value =
            response.data.phpresult[0]["guidelineAmount"];
          document.getElementById("registryPercent").value =
            response.data.phpresult[0]["registryPercent"];
          document.getElementById("bankAmountPayable").value =
            response.data.phpresult[0]["bankAmountPayable"];
          document.getElementById("cashAmountPayable").value =
            response.data.phpresult[0]["cashAmountPayable"];
          document.getElementById("bookingDate").value =
            response.data.phpresult[0]["bookingDate"];
          document.getElementById("constructionAmount").value =
            response.data.phpresult[0]["constructionAmount"];

          document.getElementById("bankPayable").innerHTML =
            response.data.phpresult[0]["bankAmountPayable"];
          document.getElementById("cashPayable").innerHTML =
            response.data.phpresult[0]["cashAmountPayable"];
          document.getElementById("totalPayable").innerHTML =
            response.data.phpresult[0]["totalAmountPayable"];

          document.getElementById("plotStatus").value =
            plotData[0]["plotStatus"];

          loadAmounts(response.data.phpresult);
          loadAmountsBAR();
          loadAmountsCAR();
          setTimeout(function () {
            calcAmounts();
          }, 3000);
          loadTransaction(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const addPayment = async () => {
    const url = "https://lkgexcel.com/backend/setQuery.php";
    let query =
      "INSERT INTO transaction (id,projectName,blockName,plotno, date, paymentType, amount, bankMode, cheqNo, bankName, transactionStatus, statusDate, remarks) VALUES (NULL,'" +
      plotData[0]["projectName"] +
      "','" +
      plotData[0]["blockName"] +
      "','" +
      plotData[0]["plotNo"] +
      "', '" +
      document.getElementById("date").value +
      "', '" +
      document.getElementById("paymentType").value +
      "', '" +
      document.getElementById("amount").value +
      "', '" +
      document.getElementById("bankMode").value +
      "', '" +
      document.getElementById("cheqNo").value +
      "', '" +
      document.getElementById("bankName").value +
      "', '" +
      document.getElementById("transactionStatus").value +
      "', '" +
      document.getElementById("statusDate").value +
      "', '" +
      document.getElementById("remarks").value +
      "');";

    let fData = new FormData();
    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);
      toast({
        title: "Payment added successfully!",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      loadAmounts();
      loadTransaction();
      loadAmountsBAR();
      loadAmountsCAR();
      setTimeout(function () {
        calcAmounts();
      }, 3000);
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  useEffect(() => {
    // Call the loadContractor function when the component mounts
    loadProjects();
    loadContractor();
  }, []);

  return (
    // <>
    //   <Grid
    //     h="100vh"
    //     templateRows="repeat(1, 1fr)"
    //     templateColumns="repeat(4, 1fr)"
    //     gap={4}
    //   >
    //     {/* First box  */}
    //     <GridItem colSpan={1} border={"1px solid green"}>
    //       <Box
    //         height="100%"
    //         display="flex"
    //         flexDirection="column"
    //         padding="10px"
    //       >
    //         <FormControl marginBottom="1rem">
    //           <Flex align="center">
    //             <FormLabel>Project Name:</FormLabel>
    //             <Input type="text" placeholder="Enter project name" w={"60%"} />
    //           </Flex>
    //         </FormControl>
    //       </Box>
    //     </GridItem>
    //     {/* second box */}
    //     <GridItem colSpan={3} border={"1px solid black"}>
    //       <Center>Second Box </Center>
    //     </GridItem>
    //   </Grid>
    // </>
    <Box display={"flex"} height={"100vh"} maxW={"100vw"}>
      <Box flex={"20%"} borderRight={"1px solid grey"}>
        <VStack alignItems={"flex-start"} gap={0}>
          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="projectName">Project Name</FormLabel>
              <Select
                id="projectName"
                placeholder="Select Project"
                onChange={(e) => {
                  setProjectName(e.target.value);
                  loadBlocks(e.target.value);
                }}
                w={"60%"}
              >
                {projectsData.map((project) => {
                  return (
                    <option
                      key={project.projectName}
                      value={project.projectName}
                    >
                      {project.projectName}
                    </option>
                  );
                })}
                {/* Add more projects as needed */}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="blockName">Block Name</FormLabel>
              <Select
                id="blockName"
                placeholder="Select Block"
                onChange={(e) => {
                  setBlockname(e.target.value);
                  loadPlots(e.target.value);
                }}
                w={"60%"}
              >
                {blockData.map((block) => {
                  return (
                    <option key={block.blockName} value={block.blockName}>
                      {block.blockName}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="plotNo">Plot No</FormLabel>
              <Select
                id="plotNo"
                placeholder="Select Plot No"
                onChange={(e) => {
                  setPlotName(e.target.value);
                  setData(e.target.value);
                }}
                w={"60%"}
              >
                {plotData.map((plot) => {
                  return (
                    <option key={plot.plotNo} value={plot.plotNo}>
                      {plot.plotNo}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="plotType">Plot Type</FormLabel>
              <Input
                id="plotType"
                type="text"
                placeholder="Enter Plot Type"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="custName">Cust Name</FormLabel>
              <Input
                id="custName"
                type="text"
                placeholder="Enter Cust name"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="custAddress">Cust Address</FormLabel>
              <Textarea
                id="custAddress"
                resize={"horizontal"}
                placeholder="Enter Address"
                w={"60%"}
                minH={"2.5rem"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="areaSqft">Ares Sqft</FormLabel>
              <Input
                id="areaSqmt"
                type="text"
                placeholder="Enter Area Sqft"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="ratePerSqft">Rate Per Sqft</FormLabel>
              <Input
                id="ratePerSqmt"
                type="text"
                placeholder="Enter Rate Sqft"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="totalAmount">Total Amount</FormLabel>
              <Input
                id="totalAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="discount">Discount</FormLabel>
              <Select
                id="discountApplicable"
                placeholder="Select Discount"
                w={"60%"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                {/* Add more options as needed */}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="discountPercent">Discount %</FormLabel>
              <Input
                id="discountPercent"
                type="text"
                placeholder="Enter Discount%"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="netAmount">Net Amount</FormLabel>
              <Input
                id="netAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="registryAmount">Registry Amount</FormLabel>
              <Input
                id="registryAmount"
                type="text"
                placeholder="Enter Registry"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="serviceAmount">Service Amount</FormLabel>
              <Input
                id="serviceAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="maintenanceAmount">Maintenace Amt</FormLabel>
              <Input
                id="maintenanceAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="miscAmount">Misc Amount</FormLabel>
              <Input
                id="miscAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="grandTotal">Grand Total</FormLabel>
              <Input
                id="grandTotal"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="construction">Construction Yes/No</FormLabel>
              <Select
                id="constructionApplicable"
                placeholder="Select"
                w={"60%"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                {/* Add more options as needed */}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="contractor">Contractor</FormLabel>
              <Select
                id="constructionContractor"
                placeholder="Select"
                value={contractorName}
                onChange={(e) => {
                  setcontractorName();
                }}
                w={"60%"}
              >
                {contractorData.map((block) => {
                  return (
                    <option
                      key={block.contractorName}
                      value={block.contractorName}
                    >
                      {block.contractorName}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="constructionAmount">
                Construction Amount
              </FormLabel>
              <Input
                id="constructionAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="totalAmountPayable">
                Total Amount Payable
              </FormLabel>
              <Input
                id="totalAmountPayable"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="guidelineAmount">Guideline Amount</FormLabel>
              <Input
                id="guidelineAmount"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="registryPercent">Registry Percent</FormLabel>
              <Input
                id="registryPercent"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="bankAmountPayable">
                Bank Amount Payable
              </FormLabel>
              <Input
                id="bankAmountPayable"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <FormControl>
            <Flex
              align="center"
              justifyContent={"space-between"}
              padding={"0px 4px 0px 4px"}
            >
              <FormLabel htmlFor="cashAmountPayable">
                Cash Amount Payable
              </FormLabel>
              <Input
                id="cashAmountPayable"
                type="text"
                placeholder="Enter Amount"
                w={"60%"}
              />
            </Flex>
          </FormControl>

          <Flex padding={"0px 4px 0px 4px"} alignSelf={"end"}>
            <Button colorScheme="blue"> Edit</Button>
          </Flex>
          {/* <Center>
            <hr style={{ width: "80%", marginTop: "10px" }} />
          </Center> */}
        </VStack>
      </Box>

      <Box flex={"80%"} maxW={"80%"}>
        <Box borderBottom={"1px solid black"} w={"100%"} p={2} pb={4}>
          <HStack justifyContent={"space-between"}>
            <Box maxW={"80%"}>
              <HStack marginLeft={2}>
                <FormControl>
                  <Flex
                    align="center"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                  >
                    <FormLabel fontSize={"sm"}>Plot Status</FormLabel>
                    <Input type="text" id="plotStatus" w={"60%"} />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="center"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                  >
                    <FormLabel fontSize={"sm"}>Registry Gender</FormLabel>
                    <Input type="text" id="registryGender" w={"60%"} />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="center"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                  >
                    <FormLabel fontSize={"sm"}>Registry Date</FormLabel>
                    <Input type="date" id="bookingDate" w={"60%"} />
                  </Flex>
                </FormControl>
              </HStack>
              <Divider mt={4} />
              <HStack
                alignContent={"flex-start"}
                justifyContent={"space-between"}
                mt={4}
                mb={4}
              >
                <VStack>
                  <Text>
                    Total Amount Payable = <span id="totalPayable">0</span>
                  </Text>
                  <Text>
                    Bank Amount Payable = <span id="bankPayable">0</span>
                  </Text>
                  <Text>
                    Cash Amount Payable = <span id="cashPayable">0</span>
                  </Text>
                </VStack>
                <VStack>
                  <Text>
                    Total Amount Received = <span id="totalReceived">0</span>
                  </Text>
                  <Text>
                    Bank Amount Received = <span id="bankReceived">0</span>
                  </Text>
                  <Text>
                    Cash Amount Received = <span id="cashReceived">0</span>
                  </Text>
                </VStack>
                <VStack>
                  <Text>
                    Total Amount Balance = <span id="totalBalance">0</span>
                  </Text>
                  <Text>
                    Bank Amount Balance = <span id="bankBalance">0</span>
                  </Text>
                  <Text>
                    Cash Amount Balance = <span id="cashBalance">0</span>
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <VStack>
              <Button colorScheme="orange" size={"sm"}>
                Registry
              </Button>
              <Button colorScheme="orange" size={"sm"}>
                Cancel Plot
              </Button>
              <Button colorScheme="orange" size={"sm"}>
                Delete Plot
              </Button>
              <Button colorScheme="orange" size={"sm"}>
                Register Plot
              </Button>
              <Button colorScheme="orange" size={"sm"}>
                History
              </Button>
            </VStack>
          </HStack>
          <Divider w={"100%"} bg={"#121212"} />
          <HStack
            alignContent={"flex-start"}
            justifyContent={"space-between"}
            mt={4}
          >
            <Text>Payment Transaction</Text>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => {
                setdisplay(!displa);
              }}
            >
              Add Payment
            </Button>
          </HStack>
          <Divider w={"100%"} bg={"#121212"} mt={4} />
          <Box display={displa == true ? "flex" : "none"}>
            <VStack alignItems={"flex-start"}>
              <HStack gap={"15px"} p={3}>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Date
                    </FormLabel>
                    <Input
                      id="date"
                      type="date"
                      // w={"60%"}
                    />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Payment Type
                    </FormLabel>
                    <Select placeholder="Select" id="paymentType">
                      <option value="cash">Cash</option>
                      <option value="bank">Bank</option>
                      {/* Add more projects as needed */}
                    </Select>
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Amount
                    </FormLabel>
                    <Input
                      id="amount"
                      type="text"
                      // w={"60%"}
                    />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      bank Mode
                    </FormLabel>
                    <Select placeholder="Select " id="bankMode">
                      <option value="none">None</option>
                      <option value="cheque">Cheque/DD</option>
                      <option value="rtgs">RTGS/NEFT</option>
                      <option value="loan">Loan</option>
                      <option value="upi">UPI</option>

                      {/* Add more projects as needed */}
                    </Select>
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Chq/Ref No
                    </FormLabel>
                    <Input
                      id="cheqNo"
                      type="text"
                      // w={"60%"}
                    />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      bank Name
                    </FormLabel>
                    <Input
                      id="bankName"
                      type="text"
                      // w={"60%"}
                    />
                  </Flex>
                </FormControl>
              </HStack>
              <HStack gap={"15px"} p={3} pt={0}>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Trasaction Status
                    </FormLabel>
                    <Select id="transactionStatus" placeholder="Select">
                      <option value="pending">Pending</option>
                      <option value="clear">Clear</option>
                      <option value="pdc">PDC</option>
                      <option value="prov">Provisional</option>
                      <option value="bounced">Bounced</option>
                      <option value="return">Returned</option>

                      {/* Add more projects as needed */}
                    </Select>
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Status Date
                    </FormLabel>
                    <Input
                      id="statusDate"
                      type="Date"
                      // w={"60%"}
                    />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Flex
                    align="flex-start"
                    // justifyContent={"space-between"}
                    // padding={"0px 4px 0px 4px"}
                    flexDirection={"column"}
                  >
                    <FormLabel fontSize={"sm"} margin={0}>
                      Remarks
                    </FormLabel>
                    <Input id="remarks" type="text" w={"250%"} />
                  </Flex>
                </FormControl>
                {/* <Button
                  colorScheme="telegram"
                  top={3}
                  size={"md"}
                  pos={"relative"}
                  left={"60%"}
                  w={"80%"}
                >
                  Submit
                </Button> */}
              </HStack>
              <Button
                colorScheme="telegram"
                alignSelf={"flex-end"}
                size={"md"}
                m={3}
                mt={0}
                onClick={addPayment}
              >
                Submit
              </Button>
            </VStack>
          </Box>
          <Divider w={"100%"} bg={"#121212"} />
          <Box display={""}>
            <TableContainer>
              <Table>
                <Thead color={"white"}>
                  <Tr bg={"#121212"} color={"whitesmoke"}>
                    <Th color={"white"}>Date</Th>
                    <Th color={"white"}>Payment Type</Th>
                    <Th color={"white"}>Amount</Th>
                    <Th color={"white"}>bank Mode</Th>
                    <Th color={"white"}>Chq/Ref No</Th>
                    <Th color={"white"}>bank Name</Th>
                    <Th color={"white"}>Transaction Status</Th>
                    <Th color={"white"}>Status Date</Th>
                    <Th color={"white"}>Remarks</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactionData.map((res) => (
                    <tr key={res.date}>
                      <Td>{res.date}</Td>
                      <Td>{res.paymentType}</Td>
                      <Td>{res.amount}</Td>
                      <Td>{res.bankMode}</Td>
                      <Td>{res.cheqNo}</Td>
                      <Td>{res.bankName}</Td>
                      <Td>{res.transactionStatus}</Td>
                      <Td>{res.statusDate}</Td>
                      <Td>{res.remarks}</Td>
                    </tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentTransaction;
