import React from "react";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

export const App = () => {
    const route = useRoutes(routes);
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <DefaultLayout>
                {route}
            </DefaultLayout>
        </Suspense>
    );
};