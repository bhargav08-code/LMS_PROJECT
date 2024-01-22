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
const BookingList = () => {
  const [plotsData, setPlotsData] = useState([]);

  const loadBooking = async () => {
    let query = "SELECT * FROM booking;";

    const url = "https://lkgexcel.com/backend/getQuery.php";
    let fData = new FormData();

    fData.append("query", query);

    try {
      const response = await axios.post(url, fData);

      if (response && response.data) {
        if (response.data.phpresult) {
          setPlotsData(response.data.phpresult);
        }
      }
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  useEffect(() => {
    loadBooking();
  }, []);

  return (
    <>
      <Center>
        <Heading size={"lg"}>Booking List</Heading>
      </Center>
      <Box maxW={"100%"} overflowX={"scroll"}>
        <Table variant="simple">
          <TableContainer>
            <Thead>
              <Tr>
                <Th>SrNo</Th>
                <Th>projectName</Th>
                <Th>blockName</Th>
                <Th>plotNo</Th>
                <Th>plotType</Th>
                <Th>custName</Th>
                <Th>customerAddress</Th>
                <Th>customerContact</Th>
                <Th>registryGender</Th>
                <Th>areaSqft</Th>
                <Th>rateAreaSqft</Th>
                <Th>totalAmount</Th>
                <Th>discountApplicable</Th>
                <Th>discountPercent</Th>
                <Th>netAmount</Th>
                <Th>registryAmount</Th>
                <Th>serviceAmount</Th>
                <Th>maintenanceAmount</Th>
                <Th>miscAmount</Th>
                <Th>grandTotal</Th>
                <Th>constructionApplicable</Th>
                <Th>constructionContractor</Th>
                <Th>constructionAmount</Th>
                <Th>totalAmountPayable</Th>
                <Th>guidelineAmount</Th>
                <Th>registryPercent</Th>
                <Th>bankAmountPayable</Th>
                <Th>bookingDate</Th>
                <Th>cashAmountPayable</Th>
                <Th>remarks</Th>
                {/* <Th>registryDate</Th>
                <Th>Action</Th>
                <Th>Status</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {plotsData.map((data, index) => (
                <Tr key={data.srNo}>
                  <Td>{index + 1}</Td>
                  <Td>{data.projectName}</Td>
                  <Td>{data.blockName}</Td>
                  <Td>{data.plotNo}</Td>
                  <Td>{data.plotType}</Td>
                  <Td>{data.customerName}</Td>
                  <Td>{data.customerAddress}</Td>
                  <Td>{data.customerContact}</Td>
                  <Td>{data.registryGender}</Td>
                  <Td>{data.areaSqft}</Td>
                  <Td>{data.rateAreaSqft}</Td>
                  <Td>{data.totalAmount}</Td>
                  <Td>{data.discountApplicable}</Td>
                  <Td>{data.discountPercent}</Td>
                  <Td>{data.netAmount}</Td>
                  <Td>{data.registryAmount}</Td>
                  <Td>{data.serviceAmount}</Td>
                  <Td>{data.maintenanceAmount}</Td>
                  <Td>{data.miscAmount}</Td>
                  <Td>{data.grandTotal}</Td>
                  <Td>{data.constructionApplicable}</Td>
                  <Td>{data.constructionContractor}</Td>
                  <Td>{data.constructionAmount}</Td>
                  <Td>{data.totalAmountPayable}</Td>
                  <Td>{data.guidelineAmount}</Td>
                  <Td>{data.registryPercent}</Td>
                  <Td>{data.bankAmountPayable}</Td>
                  <Td>{data.bookingDate}</Td>
                  <Td>{data.cashAmountPayable}</Td>
                  <Td>{data.remarks}</Td>
                  {/* <Td>{data.registryDate}</Td> */}
                  {/* <Td>
                    <Button colorScheme="teal">Tally</Button>
                  </Td>
                  <Td>{data.status}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </TableContainer>
        </Table>
      </Box>
    </>
  );
};

export default BookingList;
