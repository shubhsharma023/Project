import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { List } from 'lucide-react';
import { Link } from "react-router-dom";

export function SideBar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <List className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent className={"flex flex-col justify-between"}>
                <div className="mt-8 mb-8 flex flex-col space-y-8 items-center border-y-2">
                    <h1 className="font-extrabold text-2xl pt-4"> Welcome</h1>
                    <h1 className="text-lg pb-4">User</h1>
                </div>
                <nav className="grid gap-10 text-lg font-medium mr-16">
                    <Link
                        to={"/"}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <HomeIcon className="h-5 w-5" />
                        Home
                    </Link>
                    <Link
                        to={"/feedbacks"}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <InboxIcon className="h-5 w-5" />
                        FeedBack
                    </Link>
                    <a
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <UsersIcon className="h-5 w-5" />
                        Team
                    </a>
                </nav>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <a
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground font-medium text-lg"
                    prefetch={false}
                >
                    <LogOutIcon className="h-5 w-5" />
                    Log Out                                                    {/* Add Log Out at the bottom*/}
                </a>
                <div></div>
            </SheetContent>
        </Sheet>
    )
}

function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9l9-7 9 7-9 7-9-7z" />
            <path d="M9 22v-8h6v8" />
        </svg>
    )
}

function LogOutIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 3h6v18h-6" />
            <path d="M10 17l5-5-5-5" />
            <path d="M3 12h13" />
        </svg>
    )
}

function InboxIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    )
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}