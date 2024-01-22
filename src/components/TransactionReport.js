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
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
const TransactionReport = () => {
  const [transaction, setTransaction] = useState([]);

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
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  useEffect(() => {
    loadTransaction();
  }, []);
  return (
    <>
      <Center>
        <Heading size={"lg"}>Transaction Report</Heading>
      </Center>
      <Box maxW={"100%"} overflowX={"scroll"}>
        <Table variant="simple">
          <TableContainer>
            <Thead>
              <Tr>
                <Th>SrNo</Th>
                <Th>Project Name</Th>
                <Th>Block Name</Th>
                <Th>Plot No</Th>
                <Th>Date</Th>
                <Th>Payment Type</Th>
                <Th>Amount</Th>
                <Th>Bank Mode</Th>

                <Th>Cheq No</Th>
                <Th>Bank Name</Th>
                <Th>Transaction Status</Th>
                <Th>Status Date</Th>
                <Th>Remakrs</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transaction.map((data, index) => (
                <Tr key={data.srNo}>
                  <Td>{index + 1}</Td>
                  <Td>{data.projectName}</Td>
                  <Td>{data.blockName}</Td>
                  <Td>{data.plotno}</Td>
                  <Td>{data.date}</Td>
                  <Td>{data.paymentType}</Td>
                  <Td>{data.amount}</Td>
                  <Td>{data.bankMode}</Td>
                  <Td>{data.cheqNo}</Td>
                  <Td>{data.bankName}</Td>
                  <Td>{data.transactionStatus}</Td>
                  <Td>{data.statusDate}</Td>
                  <Td>{data.remarks}</Td>
                </Tr>
              ))}
            </Tbody>
          </TableContainer>
        </Table>
      </Box>
    </>
  );
};

export default TransactionReport;
