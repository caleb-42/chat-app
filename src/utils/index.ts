import { UseToastOptions } from "@chakra-ui/toast";

export default class Helper {
	static gotoPage = (page: string, container = 'body') => {
		const app = document.querySelector(container);
		const elem: any = document?.querySelector?.(page);
		app?.scrollTo({
			top: elem?.offsetTop,
			behavior: 'smooth',
		});
	};


static titleCase = (str: string = '', lowerCase?: boolean) => {
  let newStr = str || '';
  if (lowerCase) {
    newStr = newStr.toLowerCase();
  }
  const splitStr = newStr.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};


	static toastObj = (description: string, status = 'success') => ({
		description,
		status,
		duration: 5000,
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

	static saveToLocalStorage({ obj, key, isJson = true }: { obj: any, key: string, isJson?: boolean }) {
		if (obj) {
			localStorage.setItem(key, isJson ? JSON.stringify(obj) : obj);
		}
	}

	static clearLocalStorage = ({ key }: { key: string }) => {
		localStorage.removeItem(key);
	};

	static getLocalStorage({ key, isJson = true }: { key: string, isJson?: boolean }) {
		const val = localStorage.getItem(key);
		if (!val) return null;
		return isJson ? JSON.parse(val) : val;
	}
}
