import './ImageContent.scss'
import ImageNFT from '../assets/images/image-equilibrium.jpg'
import ImageOverlay from '../assets/images/icon-view.svg'

function ImageContent() {
    return ( 
        <div className='image-content'>
            <img src={ ImageNFT } alt="NFT Equilibrium" />
            <div className='card-overlay'>
                <img className='image-overlay' src={ ImageOverlay } alt="overlay" aria-hidden={true} />
            </div>
        </div>
     );
}

export default ImageContent;