// import loading from './assets/loain.svg'
import loading_icon from '../assets/loading.svg'
const Loading = () => {
  return (
	<div className='flex justify-center mt-2'>
		<img src={loading_icon} alt="loading icon" width={50} height={50} className='animate-pulse'/>
	</div>
  )
}

export default Loading