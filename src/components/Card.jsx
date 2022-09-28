import './Card.scss'
import ImageContent from './ImageContent';
import TextContent from './TextContent';

function Card() {
    return ( 
        <div className="card">
            <ImageContent />
            <TextContent />
        </div>
     );
}

export default Card;
