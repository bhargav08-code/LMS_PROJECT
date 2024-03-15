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
const ContractorTransaction = () => {
  const { constructionData } = useData();
  const [lessPercent, setLessPercent] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  const [transactionDate, setTransactionDate] = useState("");
  const [fetchData, setFetchData] = useState([""]);
  const toast = useToast();
  const loadData = async () => {
    let query = "SELECT * FROM `contractortransaction`;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setFetchData(response.data.phpresult);
          console.log(response.data.phpresult);
        }
      }
    } catch (error) {
      console.log("Please Select Proper Input");
    }
  };

  const amtPayable =
    constructionData.amount - (constructionData.amount * lessPercent) / 100;
  const totalAmountPayable = isNaN(amtPayable) ? 0 : amtPayable;
  const amountBalance = totalAmountPayable - (amountPaid || 0);

  const addTransaction = async () => {
    try {
      const data = {
        contractor: constructionData.contractor,
        projectName: constructionData.projectName,
        blockName: constructionData.blockName,
        plotNo: constructionData.plotNo,
        amount: constructionData.amount,
        lessPercent: lessPercent,
        amtPayable: totalAmountPayable,
        amountPaid: amountPaid,
        amountBalance: amountBalance,
        date: transactionDate,
      };

      const url = "https://lkgexcel.com/backend/setQuery.php";
      const query = `INSERT INTO contractortransaction (contractor, projectName, blockName, plotNo, amount, less, totalPayable, totalPaid, totalBal, date) VALUES ('${data.contractor}', '${data.projectName}', '${data.blockName}', '${data.plotNo}', '${data.amount}', '${data.lessPercent}', '${data.amtPayable}', '${data.amountPaid}', '${data.amountBalance}', '${data.date}')`;

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
        await loadData();
      } else {
        console.error("Failed to save contractor transaction:", response.data);
      }
    } catch (error) {
      console.error("Error saving contractor transaction:", error.message);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box display={"flex"} height={"80vh"} maxW={"100vw"}>
      <Box flex={"15%"} borderRight={"1px solid grey"}>
        <VStack alignItems={"flex-start"} gap={8}>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Contractor :- {constructionData.contractor}
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
            Amount :- {constructionData.amount}
          </Text>
          <FormControl>
            <Flex align="center" justifyContent={"space-between"}>
              <FormLabel fontSize={"18px"} fontWeight={"semibold"}>
                Less (%) :-
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter Value"
                w={"40%"}
                position={"relative"}
                right={"70px"}
                value={lessPercent}
                onChange={(e) => setLessPercent(parseFloat(e.target.value))}
              />
            </Flex>
          </FormControl>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Amount Payable :- {totalAmountPayable}
          </Text>{" "}
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
        <Text marginLeft={"10px"}>Contractor Transaction</Text>
        <Table variant="simple" marginTop={"20px"}>
          <Thead>
            <Tr bg={"#121212"} color={"whitesmoke"}>
              <Th color={"white"} border="1px solid black">
                Contractor
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
                Amount
              </Th>
              <Th color={"white"} border="1px solid black">
                Less(%)
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
            {fetchData.map(
              (data, index) =>
                constructionData.projectName === data.projectName &&
                constructionData.blockName === data.blockName &&
                constructionData.contractor === data.contractor &&
                constructionData.plotNo === data.plotNo && (
                  <Tr key={index}>
                    <Td border="1px solid black">{data.contractor}</Td>
                    <Td border="1px solid black">{data.projectName}</Td>
                    <Td border="1px solid black">{data.blockName}</Td>
                    <Td border="1px solid black">{data.plotNo}</Td>
                    <Td border="1px solid black">{data.amount}</Td>
                    <Td border="1px solid black">{data.less}</Td>
                    <Td border="1px solid black">{data.totalPayable}</Td>
                    <Td border="1px solid black">{data.totalPaid}</Td>
                    <Td border="1px solid black">{data.totalBal}</Td>
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

export default ContractorTransaction;
