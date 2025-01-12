import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);

            const difference = midnight - now;
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ hours, minutes, seconds });
        };

        const timerInterval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timerInterval); // Cleanup on component unmount
    }, []);

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
            <SideBar />
            <Link to={"/"} className="text-xl font-bold">Summer Semester Bot</Link>
            <div className="flex items-center gap-2 text-lg font-semibold">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
        </header>
    );
};

export default NavBar;
