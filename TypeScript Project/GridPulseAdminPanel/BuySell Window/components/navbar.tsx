import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png';
import { Bell, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center">
        <Image src={logo} alt="Grid Pulse" width={50} height={50} className="mr-2" />
        <h1 className="text-4xl font-bold text-blue-400">Grid Pulse</h1>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="#" className="hover:text-blue-400">Institutional</Link>
        <Link href="#" className="hover:text-blue-400">Wallet</Link>
        <Link href="#" className="hover:text-blue-400">Orders</Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Deposit
        </button>
        <Bell className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
        <Settings className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
      </nav>
    </header>
  )
}