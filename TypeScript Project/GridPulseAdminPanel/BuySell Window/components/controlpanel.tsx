'use client'

import React, { useState } from 'react'

// This would typically come from an API or database
const availableSuppliers = ['PSPCL', 'BHEL', 'NTPC', 'NHPC', 'TATA Power']

const ControlPanel: React.FC = () => {
  const [buyPower, setBuyPower] = useState<string>('')
  const [sellPower, setSellPower] = useState<string>('')
  const [buySupplier, setBuySupplier] = useState<string>('PSPCL')
  const [sellSupplier, setSellSupplier] = useState<string>('BHEL')
  const [buyTotal, setBuyTotal] = useState<string>('0.00')
  const [sellTotal, setSellTotal] = useState<string>('0.00')

  const handleBuyPowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyPower(e.target.value)
    // In a real application, you would calculate the total here
    setBuyTotal((parseFloat(e.target.value) * 2.5).toFixed(2))
  }

  const handleSellPowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellPower(e.target.value)
    // In a real application, you would calculate the total here
    setSellTotal((parseFloat(e.target.value) * 6.5).toFixed(2))
  }

  return (
    <div className="w-150 p-4 bg-gray-800 border-l border-gray-700 flex">
      <div className="flex-1 pr-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="buyCost" className="block text-sm font-medium text-gray-400">Cost</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="buyCost"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                value="2.5"
                readOnly
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">INR</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="buyPower" className="block text-sm font-medium text-gray-400">Power</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="buyPower"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter kWh"
                value={buyPower}
                onChange={handleBuyPowerChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">kWh</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="buySupplier" className="block text-sm font-medium text-gray-400">Supplier</label>
            <select
              id="buySupplier"
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={buySupplier}
              onChange={(e) => setBuySupplier(e.target.value)}
            >
              {availableSuppliers.map((supplier) => (
                <option key={supplier} value={supplier}>{supplier}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="buyTotal" className="block text-sm font-medium text-gray-400">Total</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="buyTotal"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                value={buyTotal}
                readOnly
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">INR</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
            Buy
          </button>
        </div>
      </div>
      <div className="flex-1 pl-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="sellCost" className="block text-sm font-medium text-gray-400">Cost</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="sellCost"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                value="6.5"
                readOnly
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">INR</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sellPower" className="block text-sm font-medium text-gray-400">Power</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="sellPower"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter kWh"
                value={sellPower}
                onChange={handleSellPowerChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">kWh</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sellSupplier" className="block text-sm font-medium text-gray-400">Supplier</label>
            <select
              id="sellSupplier"
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={sellSupplier}
              onChange={(e) => setSellSupplier(e.target.value)}
            >
              {availableSuppliers.map((supplier) => (
                <option key={supplier} value={supplier}>{supplier}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sellTotal" className="block text-sm font-medium text-gray-400">Total</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="sellTotal"
                className="block w-full bg-gray-700 border-gray-600 rounded-md pl-3 pr-12 focus:ring-blue-500 focus:border-blue-500"
                value={sellTotal}
                readOnly
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 sm:text-sm">INR</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-150 ease-in-out">
            Sell
          </button>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel