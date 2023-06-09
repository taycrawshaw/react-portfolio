import React from "react";

import { Grid } from '@mantine/core';
import ArticleCardFooter from './Card';

const projectsData = require('../Projects.json');







function CardGrid() {


  return (




    <>
        <Grid justify="space-around">
      
{projectsData.map((project) => (
  <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}> 
   <ArticleCardFooter 
   title={project.name}
   category= {project.tech} 
   image={project.img}
   repoLink={project.repo}
   liveLink={project.live}
   author={project.details}
   />
   </Grid.Col>
))}



</Grid>;
      {/* <ArticleCardFooter 
      title={projectsData[0].name}
      category= {projectsData[0].tech} 
      image={projectsData[0].img}
      footer={"yes"}
      author={projectsData[0].details}
      /> */}
      
      {/* <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  
      
      </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col>
      <Grid.Col md={6} style={{maxWidth: 350}} sm={4} xs={4}>  </Grid.Col> */}
   
    </>
  )
}

export default CardGrid