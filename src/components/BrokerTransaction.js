import {
  Box,
  Text,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useData } from "../Context";
import { useEffect, useState } from "react";
import axios from "axios";
const BrokerTransaction = () => {
  const { constructionData } = useData();
  const [fetchData, setFetchData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [brokerageValue, setBrokerageValue] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [amountBalance, setAmountBalance] = useState(0);
  const [transaction, setTransaction] = useState([""]);
  const [transactionDate, setTransactionDate] = useState("");
  const toast = useToast();

  const loadData = async () => {
    let query = "SELECT * FROM `booking`;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setFetchData(response.data.phpresult);
          console.log("data coming");
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };
  const loadMasterData = async () => {
    let query = "SELECT * FROM `master`;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setMasterData(response.data.phpresult);
          console.log("master coming");
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const loadTransaction = async () => {
    let query = "SELECT * FROM `brokertransaction`;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setTransaction(response.data.phpresult);
          console.log("master coming");
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };
  useEffect(() => {
    loadData();
    loadMasterData();
    loadTransaction();
  }, []);
  useEffect(() => {
    const fetchDataItem = fetchData.find(
      (data) =>
        data.projectName === constructionData.projectName &&
        data.blockName === constructionData.blockName &&
        data.plotNo === constructionData.plotNo
    );
    setNetAmount(fetchDataItem?.netAmount || 0);
  }, [fetchData, constructionData]);

  useEffect(() => {
    const masterDataItem = masterData.find(
      (data) => data.projectName === constructionData.projectName
    );
    setBrokerageValue(masterDataItem?.brokerageValue || 0);
  }, [masterData, constructionData]);

  useEffect(() => {
    const calculatedTotalPayable = (netAmount * brokerageValue) / 100;
    setTotalPayable(calculatedTotalPayable);
    const calculatedAmountBalance = calculatedTotalPayable - amountPaid;
    setAmountBalance(calculatedAmountBalance);
  }, [netAmount, brokerageValue, amountPaid]);
  const addTransaction = async () => {
    try {
      const data = {
        broker: constructionData.brokerName,
        projectName: constructionData.projectName,
        blockName: constructionData.blockName,
        plotNo: constructionData.plotNo,
        netAmount: netAmount,
        brokerage: brokerageValue,
        AmtPayable: totalPayable,
        AmtPaid: amountPaid,
        AmtBal: amountBalance,
        date: transactionDate,
      };

      const url = "https://lkgexcel.com/backend/setQuery.php";
      const query = `INSERT INTO brokertransaction (broker, projectName, blockName, plotNo, netAmount, brokerage, AmtPayable, AmtPaid, AmtBal, date) VALUES ('${data.broker}', '${data.projectName}', '${data.blockName}', '${data.plotNo}', '${data.netAmount}', '${data.brokerage}', '${data.AmtPayable}', '${data.AmtPaid}', '${data.AmtBal}', '${data.date}')`;

      const formData = new FormData();
      formData.append("query", query);

      const response = await axios.post(url, formData);

      if (response.status === 200) {
        console.log(
          "Contractor transaction saved successfully:",
          response.data
        );
        toast({
          title: "Transaction added successfully!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        loadTransaction();
      } else {
        console.error("Failed to save broker transaction:", response.data);
      }
    } catch (error) {
      console.error("Error saving broker transaction:", error.message);
    }
  };
  return (
    <Box display={"flex"} height={"80vh"} maxW={"100vw"}>
      <Box flex={"15%"} borderRight={"1px solid grey"}>
        <VStack alignItems={"flex-start"} gap={8}>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Broker :- {constructionData.brokerName}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Project Name :- {constructionData.projectName}
          </Text>{" "}
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Block Name :- {constructionData.blockName}
          </Text>{" "}
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Plot No :- {constructionData.plotNo}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Net Amount :- {netAmount}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Brokerage (%) :- {brokerageValue}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Total Payable :- {totalPayable}
          </Text>
          <FormControl>
            <Flex align="center" justifyContent={"space-between"}>
              <FormLabel fontSize={"18px"} fontWeight={"semibold"}>
                Amount Paid :-
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter Value"
                w={"40%"}
                position={"relative"}
                right={"40px"}
                value={amountPaid}
                onChange={(e) => setAmountPaid(parseFloat(e.target.value))}
              />
            </Flex>
          </FormControl>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Amount Balance :- {amountBalance}
          </Text>
          <FormControl>
            <Flex align="center" justifyContent={"space-between"}>
              <FormLabel fontSize={"18px"} fontWeight={"semibold"}>
                Date :-
              </FormLabel>
              <Input
                type="date"
                w={"60%"}
                position={"relative"}
                right={"40px"}
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </Flex>
          </FormControl>
          <Button onClick={addTransaction}>Save</Button>
        </VStack>
      </Box>
      <Box flex={"85%"} maxW={"80%"}>
        <Text marginLeft={"10px"}>Broker Transaction</Text>
        <Table variant="simple" marginTop={"20px"}>
          <Thead>
            <Tr bg={"#121212"} color={"whitesmoke"}>
              <Th color={"white"} border="1px solid black">
                Broker
              </Th>
              <Th color={"white"} border="1px solid black">
                Project Name
              </Th>
              <Th color={"white"} border="1px solid black">
                Block Name
              </Th>
              <Th color={"white"} border="1px solid black">
                Plot No
              </Th>
              <Th color={"white"} border="1px solid black">
                Net Amount
              </Th>
              <Th color={"white"} border="1px solid black">
                Brokerage
              </Th>
              <Th color={"white"} border="1px solid black">
                Amt Payable
              </Th>{" "}
              <Th color={"white"} border="1px solid black">
                Amt Paid
              </Th>
              <Th color={"white"} border="1px solid black">
                Amt Bal
              </Th>
              <Th color={"white"} border="1px solid black">
                Date
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {transaction.map(
              (data, index) =>
                constructionData.projectName === data.projectName &&
                constructionData.blockName === data.blockName &&
                constructionData.brokerName === data.broker &&
                constructionData.plotNo === data.plotNo && (
                  <Tr key={index}>
                    <Td border="1px solid black">{data.broker}</Td>
                    <Td border="1px solid black">{data.projectName}</Td>
                    <Td border="1px solid black">{data.blockName}</Td>
                    <Td border="1px solid black">{data.plotNo}</Td>
                    <Td border="1px solid black">{data.netAmount}</Td>
                    <Td border="1px solid black">{data.brokerage}</Td>
                    <Td border="1px solid black">{data.AmtPayable}</Td>
                    <Td border="1px solid black">{data.AmtPaid}</Td>
                    <Td border="1px solid black">{data.AmtBal}</Td>
                    <Td border="1px solid black">{data.date}</Td>
                  </Tr>
                )
            )}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default BrokerTransaction;
