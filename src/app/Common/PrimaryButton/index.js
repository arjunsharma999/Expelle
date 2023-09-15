import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ text, classes, onClick }) => {
	return (
		<button
			onClick={onClick}
			// type="submit"
			className={`${styles.button} medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[12.8rem] lg:h-[3rem] text-[5rem] lg:text-[1.4rem] py-[1rem] px-[5rem] lg:py-[1rem] lg:px-[2.5rem] ${classes}`}
		>
			{text}
			<img
				src="/icons/btn-arrow.svg"
				className="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
				alt="arrowRight"
			/>
		</button>
	)
}

export default PrimaryButton
