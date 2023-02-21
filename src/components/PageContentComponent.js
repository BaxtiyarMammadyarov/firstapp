import React from 'react'
import AboutSectionComponent from './AboutSectionComponent'
import ContactSectionComponent from './ContactSectionComponent'
import ImageOfLocationcomponent from './ImageOfLocationcomponent'
import ProjectSectionComponent from './ProjectSectionComponent'

function PageContentComponent() {
  return (
    <>
      <ProjectSectionComponent/>
      <AboutSectionComponent/>
      <ContactSectionComponent/>
      <ImageOfLocationcomponent/>
    </>
  )
}

export default PageContentComponent
