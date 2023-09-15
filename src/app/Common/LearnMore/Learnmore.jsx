import React from 'react'

const Learnmore = ({
	text = 'Learn More',
	fontSize = '1.4',
	fontWeight = 'semiBold',
}) => {
	return (
		<div className="flex items-center gap-[1rem] lg:gap-[0.7rem] cursor-pointer bg-gray">
			<p
				className={`text-[0.8rem] lg:text-[1rem] text-transparent bg-clip-text bg-gradient-to-r from-[#3B3BF9]  to-[#10E0F9] hover:mr-5 duration-300`}
			>
				{text}
			</p>
            <img
				src="/icons/icon-arrowRight.svg"
				className="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
				alt="arrowRight"
			/>
		</div>
	)
}

export default Learnmore
