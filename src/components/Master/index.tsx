import React, { ReactNode } from 'react';
import { Container } from './styles';

interface MasterProps {
    children?: ReactNode;
}

export function Master({ children }: MasterProps) {

    return (
        <Container>
            {children}
        </Container>
    );

}
