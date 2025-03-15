'use client';

import { ProgressProvider } from '@bprogress/next/app';

const ContextProgressProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider
            height="4px"
            color="#00ADB5"
            options={{ showSpinner: false }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
};

export default ContextProgressProvider;