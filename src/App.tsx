import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Select,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />

    <Box textAlign="center" fontSize="xl" marginX={'auto'}>
      <Grid minH="100vh" p={3}>
        <Center p={5} maxW={1000}>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          
        </Center>
      </Grid>
    </Box>
  </ChakraProvider>
);
