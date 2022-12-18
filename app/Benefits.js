import React from 'react';
import { HiOutlineUserGroup, HiOutlineLocationMarker } from 'react-icons/hi';
import { TbHeadset } from 'react-icons/tb';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';

export default function Benefits() {
	return (
		<div className='bg-white'>
			<div className='cont grid grid-cols-2 md:grid-cols-4 gap-10 items-start'>
				<div className='flex flex-col justify-center items-center text-center'>
					<div className='mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl'>
						<TbHeadset />
					</div>
					<h2 className='h2'>Online Sessions Available</h2>
					<p className='p mt-4 text-sm'>
						Online therapy supervision is flexible, convenient, and offers wider
						access to supervisors.
					</p>
				</div>
				<div className='flex flex-col justify-center items-center text-center'>
					<div className='mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl'>
						<HiOutlineLocationMarker />
					</div>
					<h2 className='h2'>Great Central Location</h2>
					<p className='p mt-4 text-sm'>
						Located in Drumchondra, 5 minutes from Croke Park. Easily accessible
						with parking available nearby
					</p>
				</div>
				<div className='flex flex-col justify-center items-center text-center'>
					<div className='mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl'>
						<HiOutlineUserGroup />
					</div>
					<h2 className='h2'>Group Sessions Available</h2>
					<p className='p mt-4 text-sm'>
						Group supervision offers learning and collaboration opportunities,
						leading to improved knowledge and skills and a sense of community.
					</p>
				</div>
				<div className='flex flex-col justify-center items-center text-center'>
					<div className='mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl'>
						<RiMoneyEuroCircleFill />
					</div>
					<h2 className='h2'>Reduced Student Rate</h2>
					<p className='p mt-4 text-sm'>
						Student rates available for budget-friendly supervision.
					</p>
				</div>
			</div>
		</div>
	);
}
