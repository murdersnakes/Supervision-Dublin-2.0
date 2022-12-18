import Link from 'next/link';
import React from 'react';

export default function Pricing() {
	return (
		<div className='relative bg-medium z-0 '>
			<div className='absolute bottom-0 w-full h-1/3 bg-white -z-10'></div>
			<div className='relative cont z-10'>
				<div className='text-center max-w-xl mx-auto'>
					<h4 className='h1 text-dark'>Affordable for everyone</h4>
					<p className='mt-4 p text-gray-600'>
						We understand that therapy supervision can be a financial
						investment, especially for students. That&apos;s why we offer
						reduced rates for students to help make supervision more accessible
						and affordable.
					</p>
				</div>
				<div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div>
						<div className='p-8 bg-dark rounded'>
							<div className='mb-4 text-center'>
								<p className='text-xl font-medium tracking-wide text-white'>
									Standard Session
								</p>
								<div className='flex items-center justify-center'>
									<p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
										€80
									</p>
									<p className='text-lg text-gray-300'>/ session</p>
								</div>
							</div>

							<Link href='/bookings'>
								<button className='btn w-full'>Book a Session</button>
							</Link>
						</div>
						<div className='w-11/12 h-2 mx-auto bg-dark rounded-b opacity-75' />
						<div className='w-10/12 h-2 mx-auto bg-dark rounded-b opacity-50' />
						<div className='w-9/12 h-2 mx-auto bg-dark rounded-b opacity-25' />
					</div>
					<div>
						<div className='p-8 bg-dark rounded'>
							<div className='mb-4 text-center'>
								<p className='text-xl font-medium tracking-wide text-white'>
									Student Rate
								</p>
								<div className='flex items-center justify-center'>
									<p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
										€65
									</p>
									<p className='text-lg text-gray-300'>/ session</p>
								</div>
							</div>

							<Link href='/bookings'>
								<button className='btn w-full'>Book a Session</button>
							</Link>
						</div>
						<div className='w-11/12 h-2 mx-auto bg-dark rounded-b opacity-75' />
						<div className='w-10/12 h-2 mx-auto bg-dark rounded-b opacity-50' />
						<div className='w-9/12 h-2 mx-auto bg-dark rounded-b opacity-25' />
					</div>
				</div>
			</div>
		</div>
	);
}
