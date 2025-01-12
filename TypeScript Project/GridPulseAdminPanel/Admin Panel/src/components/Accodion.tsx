import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area'; // Import your ScrollArea
import { TopPSelector } from './top-p-selector';
import { MaxLengthSelector } from './maxlength-selector';
import { TemperatureSelector } from './temperature-selector';

export function AccordionDemo() {
  return (
    <Card className='w-full'>
      <CardHeader className='border-b p-4 text-center'>
        <CardTitle>Customisation Bar</CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        {/* Use ScrollArea to wrap the Accordion for custom scroll behavior */}
        <ScrollArea className='h-[450px]'>
          {' '}
          {/* Limit height and enable scrollbar */}
          <Accordion type='single' collapsible className='w-full -ml-4'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>Can I customize it?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>Is it mobile-friendly?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6'>
              <AccordionTrigger>
                Does it support multiple sections?
              </AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-7'>
              <AccordionTrigger>Can I disable animation?</AccordionTrigger>
              <AccordionContent>
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
