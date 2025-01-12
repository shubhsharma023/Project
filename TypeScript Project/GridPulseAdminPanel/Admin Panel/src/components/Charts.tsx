'use client';

import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'An interactive line chart';

const chartData = [
  { date: '2024-04-01', actual: 222, mobile: 150 },
  { date: '2024-04-02', actual: 97, mobile: 180 },
  { date: '2024-04-03', actual: 167, mobile: 120 },
  { date: '2024-04-04', actual: 242, mobile: 260 },
  { date: '2024-04-05', actual: 373, mobile: 290 },
  { date: '2024-04-06', actual: 301, mobile: 340 },
  { date: '2024-04-07', actual: 245, mobile: 180 },
  { date: '2024-04-08', actual: 409, mobile: 320 },
  { date: '2024-04-09', actual: 59, mobile: 110 },
  { date: '2024-04-10', actual: 261, mobile: 190 },
  { date: '2024-04-11', actual: 327, mobile: 350 },
  { date: '2024-04-12', actual: 292, mobile: 210 },
  { date: '2024-04-13', actual: 342, mobile: 380 },
  { date: '2024-04-14', actual: 137, mobile: 220 },
  { date: '2024-04-15', actual: 120, mobile: 170 },
  { date: '2024-04-16', actual: 138, mobile: 190 },
  { date: '2024-04-17', actual: 446, mobile: 360 },
  { date: '2024-04-18', actual: 364, mobile: 410 },
  { date: '2024-04-19', actual: 243, mobile: 180 },
  { date: '2024-04-20', actual: 89, mobile: 150 },
  { date: '2024-04-21', actual: 137, mobile: 200 },
  { date: '2024-04-22', actual: 224, mobile: 170 },
  { date: '2024-04-23', actual: 138, mobile: 230 },
  { date: '2024-04-24', actual: 387, mobile: 290 },
  { date: '2024-04-25', actual: 215, mobile: 250 },
  { date: '2024-04-26', actual: 75, mobile: 130 },
  { date: '2024-04-27', actual: 383, mobile: 420 },
  { date: '2024-04-28', actual: 122, mobile: 180 },
  { date: '2024-04-29', actual: 315, mobile: 240 },
  { date: '2024-04-30', actual: 454, mobile: 380 },
  { date: '2024-05-01', actual: 165, mobile: 220 },
  { date: '2024-05-02', actual: 293, mobile: 310 },
  { date: '2024-05-03', actual: 247, mobile: 190 },
  { date: '2024-05-04', actual: 385, mobile: 420 },
  { date: '2024-05-05', actual: 481, mobile: 390 },
  { date: '2024-05-06', actual: 498, mobile: 520 },
  { date: '2024-05-07', actual: 388, mobile: 300 },
  { date: '2024-05-08', actual: 149, mobile: 210 },
  { date: '2024-05-09', actual: 227, mobile: 180 },
  { date: '2024-05-10', actual: 293, mobile: 330 },
  { date: '2024-05-11', actual: 335, mobile: 270 },
  { date: '2024-05-12', actual: 197, mobile: 240 },
  { date: '2024-05-13', actual: 197, mobile: 160 },
  { date: '2024-05-14', actual: 448, mobile: 490 },
  { date: '2024-05-15', actual: 473, mobile: 380 },
  { date: '2024-05-16', actual: 338, mobile: 400 },
  { date: '2024-05-17', actual: 499, mobile: 420 },
  { date: '2024-05-18', actual: 315, mobile: 350 },
  { date: '2024-05-19', actual: 235, mobile: 180 },
  { date: '2024-05-20', actual: 177, mobile: 230 },
  { date: '2024-05-21', actual: 82, mobile: 140 },
  { date: '2024-05-22', actual: 81, mobile: 120 },
  { date: '2024-05-23', actual: 252, mobile: 290 },
  { date: '2024-05-24', actual: 294, mobile: 220 },
  { date: '2024-05-25', actual: 201, mobile: 250 },
  { date: '2024-05-26', actual: 213, mobile: 170 },
  { date: '2024-05-27', actual: 420, mobile: 460 },
  { date: '2024-05-28', actual: 233, mobile: 190 },
  { date: '2024-05-29', actual: 78, mobile: 130 },
  { date: '2024-05-30', actual: 340, mobile: 280 },
  { date: '2024-05-31', actual: 178, mobile: 230 },
  { date: '2024-06-01', actual: 178, mobile: 200 },
  { date: '2024-06-02', actual: 470, mobile: 410 },
  { date: '2024-06-03', actual: 103, mobile: 160 },
  { date: '2024-06-04', actual: 439, mobile: 380 },
  { date: '2024-06-05', actual: 88, mobile: 140 },
  { date: '2024-06-06', actual: 294, mobile: 250 },
  { date: '2024-06-07', actual: 323, mobile: 370 },
  { date: '2024-06-08', actual: 385, mobile: 320 },
  { date: '2024-06-09', actual: 438, mobile: 480 },
  { date: '2024-06-10', actual: 155, mobile: 200 },
  { date: '2024-06-11', actual: 92, mobile: 150 },
  { date: '2024-06-12', actual: 492, mobile: 420 },
  { date: '2024-06-13', actual: 81, mobile: 130 },
  { date: '2024-06-14', actual: 426, mobile: 380 },
  { date: '2024-06-15', actual: 307, mobile: 350 },
  { date: '2024-06-16', actual: 371, mobile: 310 },
  { date: '2024-06-17', actual: 475, mobile: 520 },
  { date: '2024-06-18', actual: 107, mobile: 170 },
  { date: '2024-06-19', actual: 341, mobile: 290 },
  { date: '2024-06-20', actual: 408, mobile: 450 },
  { date: '2024-06-21', actual: 169, mobile: 210 },
  { date: '2024-06-22', actual: 317, mobile: 270 },
  { date: '2024-06-23', actual: 480, mobile: 530 },
  { date: '2024-06-24', actual: 132, mobile: 180 },
  { date: '2024-06-25', actual: 141, mobile: 190 },
  { date: '2024-06-26', actual: 434, mobile: 380 },
  { date: '2024-06-27', actual: 448, mobile: 490 },
  { date: '2024-06-28', actual: 149, mobile: 200 },
  { date: '2024-06-29', actual: 103, mobile: 160 },
  { date: '2024-06-30', actual: 446, mobile: 400 },
];

const chartConfig = {
  actual: {
    label: 'Actual',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function Component() {
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.actual, 0),
    []
  );

  return (
    <Card>
      <CardHeader className='flex flex-col items-center space-y-0 p-0'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-4 py-4 text-center'>
          <CardTitle>Power Consumed in KWh</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Line
              dataKey='actual'
              type='monotone'
              stroke='var(--color-actual)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
