
import React from 'react'
import PersonalDetails from './PersonalDetails'
import CareerDetails from './CareerDetails'
import EducationDetails from './EducationDetails'

const SelectedComponent = (props) => {
    

    switch(props.step){
        case 0:
        return <PersonalDetails/>
        break;
        case 1:
        return <EducationDetails/>
        break;
        case 2:
        return <CareerDetails/>
        break;
        default:
        return null;
    }

}

export default SelectedComponent
