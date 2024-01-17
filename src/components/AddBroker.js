import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  GridItem,
  Center,
  Heading,
} from "@chakra-ui/react";

const states = [
  "AP|Andhra Pradesh",
  "AR|Arunachal Pradesh",
  "AS|Assam",
  "BR|Bihar",
  "CT|Chhattisgarh",
  "GA|Goa",
  "GJ|Gujarat",
  "HR|Haryana",
  "HP|Himachal Pradesh",
  "JK|Jammu and Kashmir",
  "JH|Jharkhand",
  "KA|Karnataka",
  "KL|Kerala",
  "MP|Madhya Pradesh",
  "MH|Maharashtra",
  "MN|Manipur",
  "ML|Meghalaya",
  "MZ|Mizoram",
  "NL|Nagaland",
  "OR|Odisha",
  "PB|Punjab",
  "RJ|Rajasthan",
  "SK|Sikkim",
  "TN|Tamil Nadu",
  "TG|Telangana",
  "TR|Tripura",
  "UT|Uttarakhand",
  "UP|Uttar Pradesh",
  "WB|West Bengal",
  "AN|Andaman and Nicobar Islands",
  "CH|Chandigarh",
  "DN|Dadra and Nagar Haveli",
  "DD|Daman and Diu",
  "DL|Delhi",
  "LD|Lakshadweep",
  "PY|Puducherry",
];

const AddBroker = () => {
  const [formData, setFormData] = useState({
    brokerName: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission
    console.log("Form Data:", formData);
  };

  return (
    <Box p={4} width="100%" margin="auto">
      <Center pb={8}>
        <Heading>Add Broker</Heading>
      </Center>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Broker (Company)</FormLabel>
              <Input
                type="text"
                name="brokerName"
                value={formData.brokerName}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Broker Name</FormLabel>
              <Input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Contact</FormLabel>
              <Input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Email ID</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Select State"
              >
                {states.map((state) => {
                  const [code, name] = state.split("|");
                  return (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </GridItem>
          <Button mt={8} colorScheme="blue" type="submit">
            Add Broker
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default AddBroker;
