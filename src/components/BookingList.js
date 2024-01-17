import React from "react";
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
const testData = [
  {
    srNo: 1,
    projectName: "Project 1",
    blockName: "Block A",
    plotNo: "A101",
    plotType: "Residential",
    custName: "John Doe",
    customerAddress: "123 Main St, City",
    customerContact: "123-456-7890",
    registryGender: "Male",
    areaSqft: 1200,
    rateAreaSqft: 150,
    totalAmount: 180000,
    discountApplicable: true,
    discountPercent: 10,
    netAmount: 162000,
    registryAmount: 5000,
    serviceAmount: 2000,
    maintenanceAmount: 1000,
    miscAmount: 500,
    grandTotal: 169500,
    constructionApplicable: true,
    constructionContractor: "ABC Builders",
    constructionAmount: 25000,
    totalAmountPayable: 194500,
    guidelineAmount: 200000,
    registryPercent: 80,
    bankAmountPayable: 150000,
    bookingDate: "2024-01-01",
    cashAmountPayable: 44500,
    remarks: "Sample remarks",
    registryDate: "2024-01-15",
    status: "Not Tally",
  },
  {
    srNo: 2,
    projectName: "Project 1",
    blockName: "Block A",
    plotNo: "A101",
    plotType: "Residential",
    custName: "John Doe",
    customerAddress: "123 Main St, City",
    customerContact: "123-456-7890",
    registryGender: "Male",
    areaSqft: 1200,
    rateAreaSqft: 150,
    totalAmount: 180000,
    discountApplicable: true,
    discountPercent: 10,
    netAmount: 162000,
    registryAmount: 5000,
    serviceAmount: 2000,
    maintenanceAmount: 1000,
    miscAmount: 500,
    grandTotal: 169500,
    constructionApplicable: true,
    constructionContractor: "ABC Builders",
    constructionAmount: 25000,
    totalAmountPayable: 194500,
    guidelineAmount: 200000,
    registryPercent: 80,
    bankAmountPayable: 150000,
    bookingDate: "2024-01-01",
    cashAmountPayable: 44500,
    remarks: "Sample remarks",
    registryDate: "2024-01-15",
    status: "Not Tally",
  },
  {
    srNo: 3,
    projectName: "Project 1",
    blockName: "Block A",
    plotNo: "A101",
    plotType: "Residential",
    custName: "John Doe",
    customerAddress: "123 Main St, City",
    customerContact: "123-456-7890",
    registryGender: "Male",
    areaSqft: 1200,
    rateAreaSqft: 150,
    totalAmount: 180000,
    discountApplicable: true,
    discountPercent: 10,
    netAmount: 162000,
    registryAmount: 5000,
    serviceAmount: 2000,
    maintenanceAmount: 1000,
    miscAmount: 500,
    grandTotal: 169500,
    constructionApplicable: true,
    constructionContractor: "ABC Builders",
    constructionAmount: 25000,
    totalAmountPayable: 194500,
    guidelineAmount: 200000,
    registryPercent: 80,
    bankAmountPayable: 150000,
    bookingDate: "2024-01-01",
    cashAmountPayable: 44500,
    remarks: "Sample remarks",
    registryDate: "2024-01-15",
    status: "Not Tally",
  },
  {
    srNo: 4,
    projectName: "Project 1",
    blockName: "Block A",
    plotNo: "A101",
    plotType: "Residential",
    custName: "John Doe",
    customerAddress: "123 Main St, City",
    customerContact: "123-456-7890",
    registryGender: "Male",
    areaSqft: 1200,
    rateAreaSqft: 150,
    totalAmount: 180000,
    discountApplicable: true,
    discountPercent: 10,
    netAmount: 162000,
    registryAmount: 5000,
    serviceAmount: 2000,
    maintenanceAmount: 1000,
    miscAmount: 500,
    grandTotal: 169500,
    constructionApplicable: true,
    constructionContractor: "ABC Builders",
    constructionAmount: 25000,
    totalAmountPayable: 194500,
    guidelineAmount: 200000,
    registryPercent: 80,
    bankAmountPayable: 150000,
    bookingDate: "2024-01-01",
    cashAmountPayable: 44500,
    remarks: "Sample remarks",
    registryDate: "2024-01-15",
    status: "Not Tally",
  },
  {
    srNo: 5,
    projectName: "Project 1",
    blockName: "Block A",
    plotNo: "A101",
    plotType: "Residential",
    custName: "John Doe",
    customerAddress: "123 Main St, City",
    customerContact: "123-456-7890",
    registryGender: "Male",
    areaSqft: 1200,
    rateAreaSqft: 150,
    totalAmount: 180000,
    discountApplicable: true,
    discountPercent: 10,
    netAmount: 162000,
    registryAmount: 5000,
    serviceAmount: 2000,
    maintenanceAmount: 1000,
    miscAmount: 500,
    grandTotal: 169500,
    constructionApplicable: true,
    constructionContractor: "ABC Builders",
    constructionAmount: 25000,
    totalAmountPayable: 194500,
    guidelineAmount: 200000,
    registryPercent: 80,
    bankAmountPayable: 150000,
    bookingDate: "2024-01-01",
    cashAmountPayable: 44500,
    remarks: "Sample remarks",
    registryDate: "2024-01-15",
    status: "Not Tally",
  },
];
const BookingList = () => {
  return (
    <>
      <Center>
        <Heading size={"md"}>Booking List</Heading>
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
                <Th>registryDate</Th>
                <Th>Action</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {testData.map((data) => (
                <Tr key={data.srNo}>
                  <Td>{data.srNo}</Td>
                  <Td>{data.projectName}</Td>
                  <Td>{data.blockName}</Td>
                  <Td>{data.plotNo}</Td>
                  <Td>{data.plotType}</Td>
                  <Td>{data.custName}</Td>
                  <Td>{data.customerAddress}</Td>
                  <Td>{data.customerContact}</Td>
                  <Td>{data.registryGender}</Td>
                  <Td>{data.areaSqft}</Td>
                  <Td>{data.rateAreaSqft}</Td>
                  <Td>{data.totalAmount}</Td>
                  <Td>{data.discountApplicable ? "Yes" : "No"}</Td>
                  <Td>{data.discountPercent}</Td>
                  <Td>{data.netAmount}</Td>
                  <Td>{data.registryAmount}</Td>
                  <Td>{data.serviceAmount}</Td>
                  <Td>{data.maintenanceAmount}</Td>
                  <Td>{data.miscAmount}</Td>
                  <Td>{data.grandTotal}</Td>
                  <Td>{data.constructionApplicable ? "Yes" : "No"}</Td>
                  <Td>{data.constructionContractor}</Td>
                  <Td>{data.constructionAmount}</Td>
                  <Td>{data.totalAmountPayable}</Td>
                  <Td>{data.guidelineAmount}</Td>
                  <Td>{data.registryPercent}</Td>
                  <Td>{data.bankAmountPayable}</Td>
                  <Td>{data.bookingDate}</Td>
                  <Td>{data.cashAmountPayable}</Td>
                  <Td>{data.remarks}</Td>
                  <Td>{data.registryDate}</Td>
                  <Td>
                    <Button colorScheme="teal">Tally</Button>
                  </Td>
                  <Td>{data.status}</Td>
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
