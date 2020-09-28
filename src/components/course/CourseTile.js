
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faBook, faFilm, faPencilAlt, faUndoAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import '../../style/course.scss';

const CourseTile = (props) => {
    
    const bookIcon = <FontAwesomeIcon icon={faBook} />
    const pencilIcon = <FontAwesomeIcon icon={faPencilAlt} />
    const filmIcon = <FontAwesomeIcon icon={faFilm} />
    const gitIcon = <FontAwesomeIcon icon={faUndoAlt} />
    const homeIcon = <FontAwesomeIcon icon={faHome} />

    let icons = [filmIcon,pencilIcon,bookIcon,gitIcon,homeIcon]

    return(
        <div className="course-page-tile hvr-float">
              <div className="course-page-tile-title">{props.tile}</div>
              <div className="course-page-tile-icon">{icons[props.icon]}</div>
          </div>
    );
}

export default CourseTile
