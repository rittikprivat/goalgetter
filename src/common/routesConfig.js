import {HomePage} from "../components/pages/HomePage/HomePage";

export const basePath = process.env.PUBLIC_URL;
export const routesConfig = [
    {
        path: `${basePath}`,
        component: HomePage,
        titleKey: 'Goal Getter',
        exact: true
    }
];
