export const getBaseUrl = (route: string) => {
    return `${process.env.REACT_APP_BASEURL}/${route}`;
};
