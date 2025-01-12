import { FAQs } from '@/components/FAQs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <section className="w-full bg-[url('./assets/hostel.jpg')] bg-no-repeat bg-fixed bg-cover max-md:bg-center">
        <div className='backdrop-blur-sm w-full pt-24'>
          <div className='container space-y-10 xl:space-y-16'>
            <div className='grid gap-4 px-10 md:grid-cols-2 md:gap-16'>
              <div>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-yellow-400'>
                  The complete platform for updating and fine tuning your Summer
                  Semester Bot.
                </h1>
              </div>
              <div className='flex flex-col items-start space-y-4'>
                {' '}
                {/* Add image */}
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white font-medium'>
                  Login to your account to get started with the Summer Semester
                  Bot. Here you will get all the queries and answers related to
                  the Summer Semester that students have asked.
                </p>
                <div className='space-x-4'>
                  <Link
                    to={'/feedbacks'}
                    className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    prefetch={false}
                  >
                    Update Changes
                  </Link>
                </div>
              </div>
            </div>
            <FAQs />
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container space-y-12 px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                Features
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Faster Implementation.
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Due to this Admin Panel we are able to refine our LLm within
                seconds. With Automatic updates after every 24 hours we are able
                to provide the best possible answers to the students and
                reducing the load of the Administration.
              </p>
            </div>
          </div>
          <div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>
                Infinite scalability, zero config
              </h3>
              <p className='text-sm text-muted-foreground'>
                Enable code to run on-demand without needing to manage your own
                infrastructure or upgrade hardware.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>
                Real-time insights and controls
              </h3>
              <p className='text-sm text-muted-foreground'>
                Get granular, first-party, real-user metrics on site performance
                per deployment.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>Personalization at the edge</h3>
              <p className='text-sm text-muted-foreground'>
                Deliver dynamic, personalized content, while ensuring users only
                see the best version of your site.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>
                Real-time insights and controls
              </h3>
              <p className='text-sm text-muted-foreground'>
                Get granular, first-party, real-user metrics on site performance
                per deployment.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>Personalization at the edge</h3>
              <p className='text-sm text-muted-foreground'>
                Deliver dynamic, personalized content, while ensuring users only
                see the best version of your site.
              </p>
            </div>
            <div className='grid gap-1'>
              <h3 className='text-lg font-bold'>
                Infinite scalability, zero config
              </h3>
              <p className='text-sm text-muted-foreground'>
                Enable code to run on-demand without needing to manage your own
                infrastructure or upgrade hardware.
              </p>
            </div>
          </div>
          <div className='flex justify-center flex-col sm:flex-row items-start gap-4'>
            <a
              href='#'
              className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              prefetch={false}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        {' '}
        {/* Designed by team */}
        <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
              Designed By{' '}
              <Link to='/feedbacks' className='text-primary underline'>
                Team
              </Link>{' '}
              {/* Add team link */}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
