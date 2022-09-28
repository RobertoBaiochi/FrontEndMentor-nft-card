import './TextContent.scss'
import AvatarCreator from '../assets/images/image-avatar.png'

function TextContent() {
    return ( 
        <div className="text-content">
            <h1 className='title'>Equilibrium #3429</h1>

            <p className='text-card'>Our Equilibrium collection promotes balance and calm.</p>

            <div className='price-container'>
                <span className='price'>0.041 ETH</span>
                <span className='days'>3 days left</span>
            </div>

            <div className='line'></div>

            <div className='coin-creator'>
                <img src={AvatarCreator} alt="Avatar picture" aria-hidden={true} />
                <p className='creator'>Creation of <a href='/'>Jules Wyvern</a></p>
            </div>
        </div>
     );
}

export default TextContent;