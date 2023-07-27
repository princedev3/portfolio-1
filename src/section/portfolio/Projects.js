//{}[]

import Project  from "./Project"

const Projects = ({project}) => {
    return (
      <div className='porfolio__projects'>
          {
              project.map(project=>
                  <Project project={project} key={project.id}/>
              )
          }
      </div>
    )
  }
  
  export default Projects