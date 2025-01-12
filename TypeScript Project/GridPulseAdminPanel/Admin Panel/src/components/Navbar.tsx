import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CircleUser, Menu, Search, Bell } from 'lucide-react';
import logo1 from '@/components/images/logo.png';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b rounded-lg bg-background px-4 md:px-6'>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          <Image src={logo1} alt='logo' width={80} height={80} />
          
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Overview
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Forecasting
        </Link>
      </nav>

      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <form className='ml-auto flex-1 sm:flex-initial'>
          {/* <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search products...'
              className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            />
          </div> */}
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <Bell className='h-5 w-5' />
              <span className='sr-only'>Toggle notifications menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <p className='text-sm text-muted-foreground'>
                Temperature alert at Grid-4
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p className='text-sm text-muted-foreground'>
                Temperature alert at Grid-2
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p className='text-sm text-muted-foreground'>
                Grid-failure at station-3
              </p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUser className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Hello User</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
