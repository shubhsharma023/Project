export default function Sidebar() {
    const data = [
      { cost: 1.54, supplier: 'BR2345', mtdl: '1,999.99288' },
      { cost: 1.78, supplier: 'JH7654', mtdl: '19.56789' },
      { cost: 1.89, supplier: 'UP9834', mtdl: '13.17866' },
      { cost: 1.99, supplier: 'PB6643', mtdl: '5,544.80562' },
      { cost: 2.01, supplier: 'PB6754', mtdl: '391.56464' },
      { cost: 2.43, supplier: 'JK5432', mtdl: '14,691.95305' },
    ]
  
    return (
      <div className="w-64 bg-gray-800 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Market Data</h2>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left font-medium text-gray-400">Cost</th>
              <th className="text-left font-medium text-gray-400">Supplier</th>
              <th className="text-left font-medium text-gray-400">MTDL (Rs/kWh)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 text-green-400">{row.cost}</td>
                <td className="py-2">{row.supplier}</td>
                <td className="py-2">{row.mtdl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }