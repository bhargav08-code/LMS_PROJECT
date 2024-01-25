import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Flex,
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  TableContainer,
} from "@chakra-ui/react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
const PaymentTransaction = () => {
  const [displa, setdisplay] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [transactionIdToDelete, setTransactionIdToDelete] = useState(null);

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

  const onRegistry = async () => {
    const userConfirmed = window.confirm(
      "Do you really want to registry this plot?"
    );

    if (!userConfirmed) {
      return;
    }
    const url = "https://lkgexcel.com/backend/setQuery.php";
    let query =
      "INSERT INTO registry (id, projectName, blockName, plotNo, plotType, customerName, customerAddress, customerContact, registryGender, areaSqft, rateAreaSqft, totalAmount, discountApplicable, discountPercent, netAmount, registryAmount, serviceAmount, maintenanceAmount, miscAmount, grandTotal, constructionApplicable, constructionContractor, constructionAmount, totalAmountPayable, guidelineAmount, registryPercent, bankAmountPayable,  cashAmountPayable,  registryDate) VALUES (NULL, '" +
      document.getElementById("projectName").value +
      "', '" +
      document.getElementById("blockName").value +
      "', '" +
      document.getElementById("plotNo").value +
      "', '" +
      document.getElementById("plotType").value +
      "', '" +
      document.getElementById("custName").value +
      "', '" +
      document.getElementById("custAddress").value +
      "', '" +
      currentPlot[0]["customerContact"] +
      "', '" +
      document.getElementById("registryGender").value +
      "', '" +
      document.getElementById("areaSqmt").value +
      "', '" +
      document.getElementById("ratePerSqmt").value +
      "', '" +
      document.getElementById("totalAmount").value +
      "', '" +
      document.getElementById("discountApplicable").value +
      "', '" +
      document.getElementById("discountPercent").value +
      "', '" +
      document.getElementById("netAmount").value +
      "', '" +
      document.getElementById("registryAmount").value +
      "', '" +
      document.getElementById("serviceAmount").value +
      "', '" +
      document.getElementById("maintenanceAmount").value +
      "', '" +
      document.getElementById("miscAmount").value +
      "', '" +
      document.getElementById("grandTotal").value +
      "', '" +
      document.getElementById("constructionApplicable").value +
      "', '" +
      document.getElementById("constructionContractor").value +
      "', '" +
      document.getElementById("constructionAmount").value +
      "', '" +
      document.getElementById("totalAmountPayable").value +
      "', '" +
      document.getElementById("guidelineAmount").value +
      "', '" +
      document.getElementById("registryPercent").value +
      "', '" +
      document.getElementById("bankAmountPayable").value +
      "', '" +
      document.getElementById("cashAmountPayable").value +
      "', '" +
      // document.getElementById("remarks").value +
      // "', '" +
      document.getElementById("registryD").value +
      "');";

    console.log(query);
    let fData = new FormData();
    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);
      updatePlotStatusRegistry();
      toast({
        title: "Registry added successfully!",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error.toJSON());
    }
  };
  const updatePlotStatusRegistry = async () => {
    const url = "https://lkgexcel.com/backend/setQuery.php";
    let query =
      "UPDATE plot SET plotStatus = 'Registered' WHERE plotNo = '" +
      plotName +
      "';";

    let fData = new FormData();
    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);
      console.log("Plot status updated to Registered.");
    } catch (error) {
      console.log(error.toJSON());
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
    const totalPayableElem = document.getElementById("totalPayable");
    const totalReceivedElem = document.getElementById("totalReceived");
    const bankPayableElem = document.getElementById("bankPayable");
    const bankReceivedElem = document.getElementById("bankReceived");
    const cashPayableElem = document.getElementById("cashPayable");
    const cashReceivedElem = document.getElementById("cashReceived");

    if (
      totalPayableElem &&
      totalReceivedElem &&
      bankPayableElem &&
      bankReceivedElem &&
      cashPayableElem &&
      cashReceivedElem
    ) {
      const totalPayable = parseInt(totalPayableElem.innerHTML) || 0;
      const totalReceived = parseInt(totalReceivedElem.innerHTML) || 0;
      const bankPayable = parseInt(bankPayableElem.innerHTML) || 0;
      const bankReceived = parseInt(bankReceivedElem.innerHTML) || 0;
      const cashPayable = Number(cashPayableElem.innerHTML) || 0;
      const cashReceived = Number(cashReceivedElem.innerHTML) || 0;

      document.getElementById("totalBalance").innerHTML =
        totalPayable - totalReceived;
      document.getElementById("bankBalance").innerHTML =
        bankPayable - bankReceived;
      document.getElementById("cashBalance").innerHTML =
        cashPayable - cashReceived;
    } else {
      // Handle case where one or more elements are not found
      console.log("One or more elements not found");
    }
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
          // document.getElementById("bookingDate").value =
          //   response.data.phpresult[0]["bookingDate"];
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

      document.getElementById("date").value = "";
      document.getElementById("paymentType").value = "";
      document.getElementById("amount").value = "";
      document.getElementById("bankMode").value = "";
      document.getElementById("cheqNo").value = "";
      document.getElementById("bankName").value = "";
      document.getElementById("transactionStatus").value = "";
      document.getElementById("statusDate").value = "";
      document.getElementById("remarks").value = "";
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  useEffect(() => {
    loadProjects();
    loadContractor();
  }, []);
  const deletePayment = async () => {
    const url = "https://lkgexcel.com/backend/setQuery.php";
    let query =
      "DELETE FROM transaction WHERE id = " + transactionIdToDelete + ";";

    let fData = new FormData();
    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);
      toast({
        title: "Payment deleted successfully!",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });

      // Call your load functions after deletion
      loadAmounts();
      loadTransaction();
      loadAmountsBAR();
      loadAmountsCAR();
      setTimeout(function () {
        calcAmounts();
      }, 3000);
    } catch (error) {
      console.log(error.toJSON());
    } finally {
      // Reset the state after handling delete
      setIsDeleteDialogOpen(false);
      setTransactionIdToDelete(null);
    }
  };

  const handleDeletePayment = (transactionId) => {
    setTransactionIdToDelete(transactionId);
    setIsDeleteDialogOpen(true);
  };

  const cancelPlot = async () => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm(
      "Do you really want to cancel the plot?"
    );

    // Check if the user confirmed
    if (userConfirmed) {
      const url = "https://lkgexcel.com/backend/setQuery.php";
      let query =
        "UPDATE plot SET plotStatus = 'Available' WHERE plotNo = '" +
        plotName +
        "';";

      let fData = new FormData();
      fData.append("query", query);

      try {
        const response = await axios.post(url, fData);

        // Show success toast
        toast({
          title: "Plot canceled successfully!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        window.location.reload();
      } catch (error) {
        console.log(error.toJSON());

        // Show error toast
        toast({
          title: "Failed to cancel plot. Please try again.",
          status: "error",

          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }
  };
  const deletePlot = async () => {
    const userConfirmed = window.confirm(
      "Do you really want to delete the plot?"
    );

    if (userConfirmed) {
      const url = "https://lkgexcel.com/backend/setQuery.php";
      let query = "DELETE FROM plot WHERE plotNo = '" + plotName + "';";

      let fData = new FormData();
      fData.append("query", query);

      try {
        const response = await axios.post(url, fData);

        // Show success toast
        toast({
          title: "Plot deleted successfully!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });

        // Reload the page
        window.location.reload();
      } catch (error) {
        console.log(error.toJSON());

        // Show error toast
        toast({
          title: "Failed to delete plot. Please try again.",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }
  };

  return (
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
                    <Input type="date" id="registryD" w={"60%"} />
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
              <Button colorScheme="yellow" size={"sm"} onClick={onRegistry}>
                Registry
              </Button>
              <Button colorScheme="yellow" size={"sm"} onClick={cancelPlot}>
                Cancel Plot
              </Button>
              <Button colorScheme="yellow" size={"sm"} onClick={deletePlot}>
                Delete Plot
              </Button>
              <Button colorScheme="yellow" size={"sm"}>
                Register Plot
              </Button>
              <Button colorScheme="yellow" size={"sm"}>
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
              colorScheme="gray"
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
                      <option value="Pending">Pending</option>
                      <option value="Clear">Clear</option>
                      <option value="PDC">PDC</option>
                      <option value="Provisional">Provisional</option>
                      <option value="Bounced">Bounced</option>
                      <option value="Return">Returned</option>

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
                  <Tr
                    bg={"#121212"}
                    color={"whitesmoke"}
                    border="1px solid black"
                  >
                    <Th color={"white"} border="1px solid black">
                      SrNo.
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Date
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Payment Type
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Amount
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      bank Mode
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Chq/Ref No
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      bank Name
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Transaction Status
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Status Date
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Remarks
                    </Th>
                    <Th color={"white"} border="1px solid black">
                      Action
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactionData.map((res, index) => (
                    <tr key={res.date}>
                      <Td border="1px solid black">{index + 1}</Td>
                      <Td border="1px solid black"> {res.date}</Td>
                      <Td border="1px solid black">{res.paymentType}</Td>
                      <Td border="1px solid black">{res.amount}</Td>
                      <Td border="1px solid black">{res.bankMode}</Td>
                      <Td border="1px solid black">{res.cheqNo}</Td>
                      <Td border="1px solid black">{res.bankName}</Td>
                      <Td
                        border="1px solid black"
                        style={{
                          backgroundColor:
                            res.transactionStatus === "Clear"
                              ? "#22c35e"
                              : res.transactionStatus === "Provisional"
                              ? "#ECC94B"
                              : res.transactionStatus === "Pending" ||
                                res.transactionStatus === "PDC"
                              ? "#ECC94B"
                              : "inherit",
                          color:
                            res.transactionStatus === "Clear"
                              ? "white"
                              : res.transactionStatus === "Provisional"
                              ? "black"
                              : res.transactionStatus === "Bounced"
                              ? "#E53E3E"
                              : "inherit",
                          textDecoration:
                            res.transactionStatus === "Bounced"
                              ? "line-through"
                              : "none",
                        }}
                      >
                        {res.transactionStatus}
                      </Td>
                      <Td border="1px solid black">{res.statusDate}</Td>
                      <Td border="1px solid black">{res.remarks}</Td>
                      <Td
                        display={"flex"}
                        gap={"10px"}
                        border="1px solid black"
                      >
                        <Button colorScheme="green">Edit</Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDeletePayment(res.id)}
                        >
                          Delete
                        </Button>
                        <DeleteConfirmationDialog
                          isOpen={isDeleteDialogOpen}
                          onClose={() => setIsDeleteDialogOpen(false)}
                          onConfirm={deletePayment}
                        />
                      </Td>
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
