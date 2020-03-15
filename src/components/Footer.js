
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import '../style/footer.scss';

const Footer = () => {
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return(
        <div className="page-footer">
            <a href="https://github.com/CarletonComputerScienceStudyCenter" target="_blank" rel="noopener noreferrer">
                <div className="page-footer-icon">{githubIcon}</div>  
            </a>   
        </div>
    );
}

export default Footer
