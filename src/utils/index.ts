import { UseToastOptions } from "@chakra-ui/toast";

export default class Helper {
	static toastObj = (description: string, status = 'success') => ({
		description,
		status,
		duration: 7000,
		isClosable: true,
		position: 'top'
	} as UseToastOptions)
	static breakpoints = (theme: any, size: string, dir: string) =>
	({
		sm: {
			down: `@media (max-width: ${theme.breakpoints['sm']})`,
			up: `@media (min-width: ${theme.breakpoints['sm']})`,
		}[dir],
		md: {
			down: `@media (max-width: ${theme.breakpoints['md']})`,
			up: `@media (min-width: ${theme.breakpoints['md']})`,
		}[dir],
		lg: {
			down: `@media (max-width: ${theme.breakpoints['lg']})`,
			up: `@media (min-width: ${theme.breakpoints['lg']})`,
		}[dir],
		xl: {
			down: `@media (max-width: ${theme.breakpoints['xl']})`,
			up: `@media (min-width: ${theme.breakpoints['xl']})`,
		}[dir],
	}[size]);
}
