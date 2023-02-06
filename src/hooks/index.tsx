import React, { ReactNode } from 'react';

import { NewsProvider } from './news';

interface AppProviderProps {
    children: ReactNode;
}


function AppProvider({ children }: AppProviderProps) {
    return (
        <NewsProvider>
            {children}
        </NewsProvider>
    )
}

export default AppProvider;