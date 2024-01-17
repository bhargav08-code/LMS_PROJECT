import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  chakra,
  Container,
  Stack,
  HStack,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const BrokerList = ({ brokerData }) => {
  return (
    <Container maxW="10xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <chakra.div w="100%" overflowX="auto">
          <Table>
            <Center pb={4}>
              <Heading> Broker List</Heading>
            </Center>
            <Thead>
              <Tr>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Broker ID
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Broker (Company) Name
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Contact
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Email
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Address
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  City
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  State
                </Th>
                <Th bg="blue.500" color="white" fontSize="16px">
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {brokerData.map((broker) => (
                <Tr key={broker.id}>
                  <Td>{broker.id}</Td>
                  <Td>{broker.brokerName}</Td>
                  <Td>{broker.contact}</Td>
                  <Td>{broker.email}</Td>
                  <Td>{broker.address}</Td>
                  <Td>{broker.city}</Td>
                  <Td>{broker.state}</Td>
                  <Td>
                    <HStack>
                      <Button colorScheme="teal">Edit</Button>
                      <Button colorScheme="red">Delete</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </chakra.div>
      </Stack>
    </Container>
  );
};

export default BrokerList;
