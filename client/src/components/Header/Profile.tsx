import { Box, Flex, Text } from '@chakra-ui/react'

import { useAuth } from '../../contexts/AuthContext';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useAuth();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user && user.name}</Text>

          <Text color="gray.300" fontSize="small">
            {user && user.email}
          </Text>
        </Box>
      )}
    </Flex>
  )
}