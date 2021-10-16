import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const LoadPage = () => <Box
	height="100%"
	display="flex"
	justifyContent="center"
	alignItems="center"
>
	<Spinner size="xl" />
</Box>;

export default LoadPage;