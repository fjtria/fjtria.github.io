import '../../index.css';
import './ProjectCard.css';

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ image, altText, title, description, link}) => {
    return (
        <div className='card'>
            <img src={image} alt={altText} loading='lazy'>
            </img>
            <div className='card-text'>
                <h4>{title}</h4>
                <p className='card-subtext'>
                    {description}
                </p>
                <a className='card-button' href={link} target='_blank' rel='noopener noreferrer'>View Project ↗</a>
            </div>
        </div>
    );
}