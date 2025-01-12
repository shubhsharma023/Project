import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar } from './ui/avatar';
import { Linkedin } from 'lucide-react';
// import { Avatar, Card, CardContent, CardHeader, Typography, IconButton } from 'shadcn';

const TeamMemberCard = ({ member }) => {
    return (
        <Card className="w-full max-w-sm mx-auto my-4">
            <CardHeader>
                <Avatar src={member.photo} alt={member.name} className="w-24 h-24 mx-auto" />
                <h3 className="text-center text-lg font-semibold mt-4">{member.name}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700">
                    <strong>Phone:</strong> {member.phone}
                </p>
                <p className="text-gray-700">
                    <strong>Roll No:</strong> {member.rollNo}
                </p>
                <p className="text-gray-700">
                    <strong>Email:</strong> {member.email}
                </p>
                <Linkedin
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z" />
                    </svg>
                    <span className="ml-2">LinkedIn</span>
                </Linkedin>
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
