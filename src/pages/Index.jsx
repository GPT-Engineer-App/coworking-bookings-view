import { Box, Flex, Text, Heading, Button, Image, VStack, HStack, Avatar, Tag } from "@chakra-ui/react";
import { FaBuilding, FaUserFriends, FaCalendarAlt } from "react-icons/fa";

const bookings = [
  {
    id: 1,
    coworkingSpace: "GreenHub",
    date: "2023-10-05",
    colleagues: [
      { name: "Alice Johnson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMEFsaWNlJTIwSm9obnNvbnxlbnwwfHx8fDE3MTQxMTcxMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Bob Smith", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMEJvYiUyMFNtaXRofGVufDB8fHx8MTcxNDExNzExOHww&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  },
  {
    id: 2,
    coworkingSpace: "TechTower",
    date: "2023-10-06",
    colleagues: [
      { name: "Carol White", avatar: "https://images.unsplash.com/photo-1594271597920-4875033d248a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMENhcm9sJTIwV2hpdGV8ZW58MHx8fHwxNzE0MTE3MTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Dave Brown", avatar: "https://images.unsplash.com/photo-1608533240306-9bf2a56958c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMERhdmUlMjBCcm93bnxlbnwwfHx8fDE3MTQxMTcxMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Coworking Bookings</Heading>
      <VStack spacing={5}>
        {bookings.map((booking) => (
          <Flex key={booking.id} p={5} boxShadow="md" borderRadius="lg" width="full" alignItems="center" justifyContent="space-between">
            <VStack alignItems="flex-start">
              <HStack>
                <FaBuilding />
                <Text fontWeight="bold">{booking.coworkingSpace}</Text>
              </HStack>
              <HStack>
                <FaCalendarAlt />
                <Text>{booking.date}</Text>
              </HStack>
            </VStack>
            <HStack spacing={4}>
              <FaUserFriends />
              {booking.colleagues.map((colleague) => (
                <Tag size="lg" key={colleague.name} borderRadius="full">
                  <Avatar src={colleague.avatar} size="xs" name={colleague.name} ml={-1} mr={2} />
                  {colleague.name}
                </Tag>
              ))}
              <Button colorScheme="blue">Book Now</Button>
            </HStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
