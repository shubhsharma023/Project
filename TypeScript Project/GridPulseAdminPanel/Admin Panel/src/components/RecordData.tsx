import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea for scroll behavior

const records = [
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
  {
    Camera: '7',
    Timestamp: '12:12/03-02-24',
    Voltage: '96.65',
    Current: '15.65',
    Power: '900',
    MeterID: '123',
  },
];

export function TableDemo() {
  return (
    <Card className='w-full'>
      <CardHeader className='border-b p-4 text-center'>
        <CardTitle>Recorded Data</CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        <ScrollArea className='h-[100px]'>
          {' '}
          {/* Adjust height as needed */}
          <Table>
            <TableCaption>A list of recent data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Camera</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Voltage</TableHead>
                <TableHead>Current</TableHead>
                <TableHead>Power</TableHead>
                <TableHead className='text-right'>MeterID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.MeterID}>
                  <TableCell>{record.Camera}</TableCell>
                  <TableCell>{record.Timestamp}</TableCell>
                  <TableCell>{record.Voltage}</TableCell>
                  <TableCell>{record.Current}</TableCell>
                  <TableCell>{record.Power}</TableCell>
                  <TableCell className='text-right'>{record.MeterID}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>{/* Footer content if needed */}</TableFooter>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
