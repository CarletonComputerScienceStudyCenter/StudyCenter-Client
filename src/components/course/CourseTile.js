
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faBook, faFilm, faPencilAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import '../../style/course.scss';

const CourseTile = (props) => {
    
    const bookIcon = <FontAwesomeIcon icon={faBook} />
    const pencilIcon = <FontAwesomeIcon icon={faPencilAlt} />
    const filmIcon = <FontAwesomeIcon icon={faFilm} />
    const gitIcon = <FontAwesomeIcon icon={faUndoAlt} />

    let icons = [filmIcon,pencilIcon,bookIcon,gitIcon]

    return(
        <div className="course-page-tile hvr-float">
              <div className="course-page-tile-title">{props.tile}</div>
              <div className="course-page-tile-icon">{icons[props.icon]}</div>
          </div>
    );
}

export default CourseTile
