import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Spinner,
  useToast,
  Button,
  HStack,
  Center,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import PaginationControl from "./PaginationControl";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMaster, setFilteredMaster] = useState([]);

  //fetching user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lkgexcel.com/backend/getuser.php"
        );
        setUsers(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: `${error}. Please try again later`,
          status: "error",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);
  // useEffect(() => {
  //   // Filter master data based on the search query
  //   const filteredData = users.filter((item) =>
  //     item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredMaster(filteredData);
  // }, [users, searchQuery]);
  const [totalItems, setTotalItems] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page according to your preference
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   // Filter master data based on the search query
  //   const filteredData = users.filter((item) =>
  //     item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setSearchResults(filteredData);
  // }, [users, searchQuery]);
  useEffect(() => {
    // Filter master data based on the search query
    console.log("users:", users); // Log the users array
    const filteredData = users.filter(
      (item) =>
        item.userName &&
        item.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filteredData:", filteredData); // Log the filteredData
    setFilteredMaster(filteredData);
    setTotalItems(filteredData.length);
  }, [users, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMaster.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Make a DELETE request to your API endpoint for deleting a user
      await axios.delete(
        `https://lkgexcel.com/backend/deleteuser.php?id=${userId}`
      );

      // Update the users state after successful deletion
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.userId !== userId)
      );

      toast({
        title: "User deleted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Error deleting user",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const handleEditUserChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const url = "https://lkgexcel.com/backend/edituser.php";
    const formData = new FormData();

    formData.append("userId", editFormData.userId);
    formData.append("userName", editFormData.userName);
    formData.append("userEmail", editFormData.userEmail);
    formData.append("userCity", editFormData.userCity);
    formData.append("userState", editFormData.userState);
    formData.append("userAddress", editFormData.userAddress);
    try {
      const response = await axios.post(url, formData);
      console.log("Response:", response);
      if (response && response.data && response.data.status === "success") {
        // Handle success, e.g., fetch updated data, show a toast
        console.log("User updated successfully:", response.data.message);
        toast({
          title: "User updated successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.userId === editFormData.userId
              ? { ...user, ...editFormData }
              : user
          )
        );
        // Close the modal after successful edit
        setIsModalOpen(false);

        // Implement any additional logic you need here
      } else {
        // Handle error response
        console.error("Error updating user:", response.data.message);

        toast({
          title: "Error updating user",
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        // Still close the modal in case of an error
        setIsModalOpen(false);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error in handleUpdateUser:", error);

      toast({
        title: "Error updating user",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      // Still close the modal in case of an error
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Box p={4} width="100%" margin="auto">
        <Center mb={"15px"}>
          <VStack>
            <Heading fontSize={"28px"}>User Details</Heading>
            <Input
              type="text"
              w={"100%"}
              placeholder="Search by User Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </VStack>
        </Center>
        {loading ? (
          <Center>
            {" "}
            <Spinner />
          </Center>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th bg="blue.500" color="white" fontSize="14px">
                  ID
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  Name
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  Email
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  Address
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  City
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  State
                </Th>
                <Th bg="blue.500" color="white" fontSize="14px">
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.isArray(currentItems) ? (
                currentItems.map((user) => (
                  <Tr key={user.userId}>
                    <Td>{user.userId}</Td>
                    <Td>{user.userName}</Td>
                    <Td>{user.userEmail}</Td>
                    <Td>{user.userAddress}</Td>
                    <Td>{user.userCity}</Td>
                    <Td>{user.userState}</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme="teal"
                          onClick={() => {
                            setIsModalOpen(true);
                            setEditFormData({
                              userId: user.userId,
                              userName: user.userName,
                              userEmail: user.userEmail,
                              userAddress: user.userAddress,
                              userCity: user.userCity,
                              userState: user.userState,
                            });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDeleteUser(user.userId)}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))
              ) : (
                // Handle the case where users is not an array, e.g., show a loading spinner or a message
                <Tr>
                  <Td colSpan={7}>Loading...</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        )}
        <PaginationControl
          changePage={changePage}
          page={currentPage}
          total={totalItems}
          limit={itemsPerPage}
        />
      </Box>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleUpdateUser}>
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={editFormData.userName}
                  onChange={handleEditUserChange}
                  placeholder="User Name"
                  name="userName"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={editFormData.userEmail}
                  onChange={handleEditUserChange}
                  placeholder="Email"
                  name="userEmail"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  value={editFormData.userAddress}
                  onChange={handleEditUserChange}
                  placeholder="Address"
                  name="userAddress"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  value={editFormData.userCity}
                  onChange={handleEditUserChange}
                  name="userCity"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  value={editFormData.userState}
                  onChange={handleEditUserChange}
                  name="userState"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit">
                Save Changes
              </Button>
              <Button onClick={() => setIsModalOpen(false)} ml={4}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserList;
