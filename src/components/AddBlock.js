import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  Center,
  Heading,
  useToast,
  Table,
  Thead,
  Tr,
  HStack,
  Td,
  Tbody,
  Th,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

const AddBlock = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState(null);
  const toast = useToast();
  const [projects, setProjects] = useState([]);
  const [block, setBlock] = useState([]);

  const [formData, setFormData] = useState({
    projectName: "",
    blockName: "",
    areaSqft: "",
    areaSqmt: "",
    ratePerSqft: "",
  });

  //fetch only project name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lkgexcel.com/backend/getprojects.php"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //fetch block data in table
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://lkgexcel.com/backend/getblock.php"
  //       );
  //       setBlock(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lkgexcel.com/backend/getblock.php"
      );
      setBlock(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onAddBlock = async (e) => {
    e.preventDefault();

    const url = "https://lkgexcel.com/backend/addblock.php";
    const fData = new FormData();
    fData.append("projectName", formData.projectName);
    fData.append("blockName", formData.blockName);
    fData.append("areaSqft", formData.areaSqft);
    fData.append("areaSqmt", formData.areaSqmt);
    fData.append("ratePerSqft", formData.ratePerSqft);

    try {
      const response = await axios.post(url, fData);
      toast({
        title: "Block added successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(response);
      // Clear the form data after successful submission
      setFormData({
        projectName: "",
        blockName: "",
        areaSqft: "",
        areaSqmt: "",
        ratePerSqft: "",
      });
    } catch (error) {
      console.log(error.toJSON());
    }
  };
  useEffect(() => {
    fetchData();
  }, [onAddBlock]);

  // const handleDelete = async (projectId) => {
  //   try {
  //     // Make a DELETE request to your API endpoint for deleting a block
  //     await axios.delete(
  //       `https://lkgexcel.com/backend/deleteblock.php?id=${projectId}`
  //     );

  //     // Update the block state after successful deletion
  //     setBlock((prevBlock) =>
  //       prevBlock.filter((item) => item.id !== projectId)
  //     );

  //     toast({
  //       title: "Block deleted successfully!",
  //       // status: "danger",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
  //     console.error("Error deleting block:", error);
  //   }
  // };
  const handleDelete = (projectId) => {
    setProjectIdToDelete(projectId);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      // Make a DELETE request to your API endpoint for deleting a project
      await axios.delete(
        `https://lkgexcel.com/backend/deleteblock.php?id=${projectIdToDelete}`
      );
      // Update the projects state after successful deletion
      setBlock(block.filter((project) => project.id !== projectIdToDelete));
      toast({
        title: "Project deleted successfully!",
        // status: "danger",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      // Reset the state after handling delete
      setIsDeleteDialogOpen(false);
      setProjectIdToDelete(null);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editFormData, setEditFormData] = useState({
    id: "",
    projectName: "",
    blockName: "",
    areaSqft: "",
    areaSqmt: "",
    ratePerSqft: "",
  });

  const handleEditBlockChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditBlockSubmit = async (e) => {
    e.preventDefault();
    const url = "https://lkgexcel.com/backend/editblock.php";

    try {
      const formData = new FormData();
      formData.append("id", editFormData.id);
      formData.append("projectName", editFormData.projectName);
      formData.append("blockName", editFormData.blockName);
      formData.append("areaSqft", editFormData.areaSqft);
      formData.append("areaSqmt", editFormData.areaSqmt);
      formData.append("ratePerSqft", editFormData.ratePerSqft);

      const response = await axios.post(url, formData);

      if (response && response.data && response.data.status === "success") {
        // Close the modal after successful submission
        setIsModalOpen(false);

        // Fetch updated block data (make sure this function is implemented correctly)
        fetchData();

        // Show a success toast message
        toast({
          title: "Block updated successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Handle error response
        console.error("Error updating block. Response:", response);

        // Show an error toast message
        toast({
          title: "Error updating block",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error in handleEditBlockSubmit:", error);

      // Show an error toast message
      toast({
        title: "Error updating block",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box p={4} width="100%">
        <Center pb={4}>
          <Heading fontSize={"25px"}>Add Block</Heading>
        </Center>
        <form onSubmit={onAddBlock}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>Project Name</FormLabel>
              <Select
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Select Project"
                required
              >
                {projects.map((project) => (
                  <option key={project.id} value={project.projectName}>
                    {project.projectName}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Block Name</FormLabel>
              <Input
                type="text"
                name="blockName"
                value={formData.blockName}
                onChange={handleChange}
                placeholder="Enter Block Name"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Area (in sqft)</FormLabel>
              <Input
                type="number"
                name="areaSqft"
                value={formData.areaSqft}
                onChange={handleChange}
                placeholder="Enter Area (sqft)"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Area (in sqmt)</FormLabel>
              <Input
                type="number"
                name="areaSqmt"
                value={formData.areaSqmt}
                onChange={handleChange}
                placeholder="Enter Area (sqmt)"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Rate (per sqft)</FormLabel>
              <Input
                type="number"
                name="ratePerSqft"
                value={formData.ratePerSqft}
                onChange={handleChange}
                placeholder="Enter Rate (per sqft)"
                required
              />
            </FormControl>
            <Button colorScheme="blue" type="submit" mt={8}>
              Submit
            </Button>
          </Grid>
          <Center></Center>
        </form>
      </Box>
      <Box>
        <Center mb={"15px"}>
          <VStack>
            <Heading fontSize={"25px"}>Block Details</Heading>
          </VStack>
        </Center>
        <Table variant="simple" colorScheme="blue">
          <Thead>
            <Tr>
              <Th bg="blue.500" color="white" fontSize="13px">
                Sr No.
              </Th>
              <Th bg="blue.500" color="white" fontSize="13px">
                Project Name
              </Th>
              <Th bg="blue.500" color="white" fontSize="13px">
                Block Name
              </Th>
              <Th bg="blue.500" color="white" fontSize="13px">
                Area sqft
              </Th>
              <Th bg="blue.500" color="white" fontSize="13px">
                Area sqmt
              </Th>
              <Th bg="blue.500" color="white" fontSize="13px">
                Rate PerSqft
              </Th>
              <Th bg="blue.500" color="white" fontSize="14px">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {block.map((blockItem, index) => (
              <Tr key={blockItem.id}>
                <Td>{index + 1}</Td>
                <Td>{blockItem.projectName}</Td>
                <Td>{blockItem.blockName}</Td>
                <Td>{blockItem.areaSqft}</Td>
                <Td>{blockItem.areaSqmt}</Td>
                <Td>{blockItem.ratePerSqft}</Td>
                <Td>
                  <HStack>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(blockItem.id)} // Pass projectId to handleDelete
                    >
                      Delete
                    </Button>
                    <DeleteConfirmationDialog
                      isOpen={isDeleteDialogOpen}
                      onClose={() => setIsDeleteDialogOpen(false)}
                      onConfirm={confirmDelete}
                    />
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        setIsModalOpen(true);
                        setEditFormData({
                          id: blockItem.id,
                          projectName: blockItem.projectName,
                          blockName: blockItem.blockName,
                          areaSqft: blockItem.areaSqft,
                          areaSqmt: blockItem.areaSqmt,
                          ratePerSqft: blockItem.ratePerSqft,
                        });
                      }}
                    >
                      Edit
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Block</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleEditBlockSubmit}>
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Project Name</FormLabel>
                <Select
                  name="projectName"
                  value={editFormData.projectName || ""}
                  onChange={handleEditBlockChange}
                  placeholder="Select Project"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.projectName}>
                      {project.projectName}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Block Name</FormLabel>
                <Input
                  type="text"
                  name="blockName"
                  value={editFormData.blockName || ""}
                  onChange={handleEditBlockChange}
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Area (in sqft)</FormLabel>
                <Input
                  type="number"
                  name="areaSqft"
                  value={editFormData.areaSqft || ""}
                  onChange={handleEditBlockChange}
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Area (in sqmt)</FormLabel>
                <Input
                  type="number"
                  name="areaSqmt"
                  value={editFormData.areaSqmt || ""}
                  onChange={handleEditBlockChange}
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Rate (per sqft)</FormLabel>
                <Input
                  type="number"
                  name="ratePerSqft"
                  value={editFormData.ratePerSqft || ""}
                  onChange={handleEditBlockChange}
                  required
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

export default AddBlock;
