import { Box } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Helper from "../../../utils";

export const SignUpFormStyle = styled(Box)`
& {
	.screen-con {
		${({ theme }) => Helper.breakpoints(theme, 'md', 'up')} {
			padding: 2rem 0;
		}
	}
	.form-con {
		${({ theme }) => Helper.breakpoints(theme, 'lg', 'up')} {
			width: 80%;
			.switch {
				display: none;
			}
		}
		form {
			display: flex;
			flex-direction: column;
		}
	}
	${({ theme }) => Helper.breakpoints(theme, 'lg', 'up')} {
		.switch {
			button{
				display: none;
			}
		}
	}
}
`;