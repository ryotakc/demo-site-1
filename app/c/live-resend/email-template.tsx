import * as React from 'react';
import { Text, Tailwind, Heading } from '@react-email/components';
import { FormData } from './schema';


export const EmailTemplate: React.FC<Readonly<FormData>> = ({
    name,
    email,
    body
}: FormData) => (
    <Tailwind>
        <Heading>Welcome, {name}!</Heading>

        <Text>
            <Text>Thank you for your message!</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
        </Text>

        <Text>
            {body}
        </Text>
    </Tailwind>
);
