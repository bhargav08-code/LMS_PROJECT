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
  HStack,
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
  const [amount, setAmount] = useState("");
  const [cheqNo, setCheqNo] = useState("");
  const [remarks, setRemarks] = useState("");
  const [lessPercent, setLessPercent] = useState(0);
  const [transactionDate, setTransactionDate] = useState("");
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [fetchData, setFetchData] = useState([""]);
  const toast = useToast(); // Define useToast hook
  const loadAmounts = async () => {
    const { projectName, blockName, contractor, plotNo } = constructionData;

    const query = `SELECT lessPercent, totalPaid, totalBalance, totalPayable FROM contractorTransaction WHERE projectName='${projectName}' AND blockName='${blockName}' AND contractor='${contractor}' AND plotNo='${plotNo}'`;

    const url = "https://lkgexcel.com/backend/getQuery.php";
    const formData = new FormData();
    formData.append("query", query);

    try {
      const response = await axios.post(url, formData);
      if (
        response &&
        response.data &&
        response.data.phpresult &&
        response.data.phpresult.length > 0
      ) {
        const reversedResult = response.data.phpresult.reverse(); // Reverse the order of the array
        const { lessPercent, totalPaid, totalBalance, totalPayable } =
          reversedResult[0];
        setLessPercent(lessPercent);
        setTotalPaid(totalPaid);
        setTotalBalance(totalBalance);
        setTotalPayable(totalPayable);
      } else {
        // No matching data found
        setLessPercent(0);
        setTotalPaid(0);
        setTotalBalance(0);
        setTotalPayable(0);
      }
    } catch (error) {
      console.log("Error fetching contractor transaction data:", error);
    }
  };
  const loadData = async () => {
    let query = "SELECT * FROM `contractorTransaction`;";

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

  // Calculate total payable only once when the component mounts
  useEffect(() => {
    const amtPayable =
      constructionData.amount - (constructionData.amount * lessPercent) / 100;
    const updatedTotalBalance = isNaN(amtPayable) ? 0 : amtPayable;
    setTotalPayable(updatedTotalBalance);
    setTotalBalance(updatedTotalBalance); // Initialize total balance with total payable
  }, [constructionData, lessPercent]);

  const handleSubmit = async () => {
    try {
      const amountPaid = parseFloat(amount);
      const updatedTotalPaid = Number(totalPaid) + amountPaid;

      const updatedTotalBalance = totalBalance - amountPaid; // Update total balance

      const data = {
        contractor: constructionData.contractor,
        projectName: constructionData.projectName,
        blockName: constructionData.blockName,
        plotNo: constructionData.plotNo,
        lessPercent: lessPercent,
        date: transactionDate,
        cheqNo: cheqNo,
        remarks: remarks,
        totalPaid: updatedTotalPaid,
        totalBalance: updatedTotalBalance, // Assign the updated total balance
        totalPayable: totalPayable, // Assign the total payable without recalculating
        amount: amount,
      };
      console.log(data);

      const url = "https://lkgexcel.com/backend/setQuery.php";
      const query = `INSERT INTO contractorTransaction (contractor, projectName, blockName, plotNo, amount, lessPercent, cheqNo, remarks, transactionDate, totalPaid, totalBalance, totalPayable) VALUES ('${data.contractor}', '${data.projectName}', '${data.blockName}', '${data.plotNo}', '${data.amount}', '${data.lessPercent}', '${data.cheqNo}', '${data.remarks}', '${data.date}', '${data.totalPaid}', '${data.totalBalance}', '${data.totalPayable}')`;
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
        setTotalPaid(updatedTotalPaid); // Update total paid state
        setTotalBalance(updatedTotalBalance); // Update total balance state
        await loadData();
        await loadAmounts();
      } else {
        console.error("Failed to save contractor transaction:", response.data);
      }

      // Reset form fields after successful submission
      setAmount("");
      setCheqNo("");
      setRemarks("");
      setTransactionDate("");
    } catch (error) {
      console.error("Error saving contractor transaction:", error.message);
    }
  };
  useEffect(() => {
    loadData();
    loadAmounts();
  }, []);
  return (
    <Box display={"flex"} height={"100vh"} maxW={"100vw"}>
      <Box flex={"19%"} borderRight={"1px solid grey"}>
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
            Construction Amount :- {constructionData.amount}
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
            Total Payable :- {totalPayable}
          </Text>
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Total Paid :- {totalPaid}
          </Text>{" "}
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Total Bal :- {totalBalance}
          </Text>{" "}
        </VStack>
      </Box>
      <Box flex={"89%"} maxW={"89%"}>
        <Text marginLeft={"10px"}>Contractor Transaction</Text>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          mt={"15px"}
        >
          <HStack alignItems={"flex-start"}>
            <FormControl>
              <FormLabel>Date :-</FormLabel>
              <Input
                type="date"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                id="amount"
                type="number"
                value={amount} // Value from state
                onChange={(e) => setAmount(parseFloat(e.target.value))} // Update state onChange
              />
            </FormControl>

            {/* Input field for Cheq/Ref No */}
            <FormControl>
              <FormLabel>Chq/Ref No</FormLabel>
              <Input
                id="cheqNo"
                type="text"
                value={cheqNo} // Value from state
                onChange={(e) => setCheqNo(e.target.value)} // Update state onChange
              />
            </FormControl>

            {/* Input field for Remarks */}
            <FormControl>
              <FormLabel>Remarks</FormLabel>
              <Input
                id="remarks"
                type="text"
                value={remarks} // Value from state
                onChange={(e) => setRemarks(e.target.value)} // Update state onChange
              />
            </FormControl>

            <Button
              colorScheme="telegram"
              alignSelf={"flex-end"}
              size={"md"}
              w={"60%"}
              mt={"30px"}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </HStack>
        </Box>

        <Table variant="simple" marginTop={"20px"} size="sm">
          <Thead>
            <Tr bg={"#121212"} color={"whitesmoke"}>
              <Th color={"white"} border="1px solid black">
                Contractor
              </Th>
              <Th color={"white"} border="1px solid black">
                Project
              </Th>
              <Th color={"white"} border="1px solid black">
                Block
              </Th>
              <Th color={"white"} border="1px solid black">
                Plot
              </Th>
              <Th color={"white"} border="1px solid black">
                Amount
              </Th>
              <Th color={"white"} border="1px solid black">
                Less(%)
              </Th>
              <Th color={"white"} border="1px solid black">
                Cheque
              </Th>{" "}
              <Th color={"white"} border="1px solid black">
                Remarks
              </Th>
              <Th color={"white"} border="1px solid black">
                Date
              </Th>
              <Th color={"white"} border="1px solid black">
                Paid
              </Th>{" "}
              <Th color={"white"} border="1px solid black">
                Balance
              </Th>{" "}
              <Th color={"white"} border="1px solid black">
                Payable
              </Th>
              <Th color={"white"} border="1px solid black">
                Action
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
                    <Td border="1px solid black">{data.lessPercent}</Td>
                    <Td border="1px solid black">{data.cheqNo}</Td>
                    <Td border="1px solid black">{data.remarks}</Td>
                    <Td border="1px solid black">{data.transactionDate}</Td>
                    <Td border="1px solid black">{data.totalPaid}</Td>
                    <Td border="1px solid black">{data.totalBalance}</Td>
                    <Td border="1px solid black">{data.totalPayable}</Td>
                    <Td display={"flex"} border="1px solid black" gap={"5px"}>
                      <Button colorScheme="green" size="sm">
                        Edit
                      </Button>
                      <Button colorScheme="red" size="sm">
                        Delete
                      </Button>
                    </Td>
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
