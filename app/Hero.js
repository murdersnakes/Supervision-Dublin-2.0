import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
	return (
		<div className='z-40 relative flex flex-col-reverse pt-36 md:py-16 lg:pt-0 lg:flex-col lg:pb-0'>
			<div className='inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 hidden md:block'>
				<svg
					className='absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block'
					viewBox='0 0 100 100'
					fill='currentColor'
					preserveAspectRatio='none slice'
				>
					<path d='M50 0H100L50 100H0L50 0Z' />
				</svg>
				<Image
					className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full'
					src='/session.webp'
					alt='session'
					width={900}
					height={400}
					priority
				/>
			</div>
			<div className='relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl'>
				<div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
					<p className='inline-block pr-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
						Accredited, Accessible, Affordable.
					</p>
					<h1 className='mb-5 h1'>
						Therapy Supervision
						<br />
						<span className='font-light italic'>Dublin</span>
					</h1>
					<h2 className='p text-gray-600 mb-5'>
						Expert guidance for mental health professionals in the heart of
						Dublin. Empowering therapists to be their best.
					</h2>
					<div className='flex items-center'>
						<Link
							href='/bookings'
							className='btn'
						>
							Book a Session
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
