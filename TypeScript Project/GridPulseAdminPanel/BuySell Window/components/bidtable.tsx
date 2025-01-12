export default function BiddingTables() {
    const biddingData = [
      { supplierCode: 'ES0867', rate: '0.13624', time: '18:42:34' },
      { supplierCode: 'IN0314', rate: '0.18760', time: '19:43:07' },
      { supplierCode: 'HR1238', rate: '0.08921', time: '21:56:45' },
      { supplierCode: 'JH8523', rate: '0.08726', time: '21:57:07' },
      { supplierCode: 'BS2341', rate: '0.03056', time: '22:23:34' },
    ]
  
    return (
      <div className="flex-1 p-4 bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Bidding Status</h2>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left font-medium text-gray-400">Supplier Code</th>
              <th className="text-left font-medium text-gray-400">Rate/Kwh</th>
              <th className="text-left font-medium text-gray-400">Time</th>
            </tr>
          </thead>
          <tbody>
            {biddingData.map((bid, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{bid.supplierCode}</td>
                <td className="py-2">{bid.rate}</td>
                <td className="py-2">{bid.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }