import React from 'react';
import './imageContent.scss';

const ImageContent = (props) => {
    const { id, name, created, image } = props;

    const getYearsOld = (DOB) => {
        const today = new Date();
        const birthDate = new Date(DOB);
        const m = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
    
        return age;
    }

    const yearsOld = created ? getYearsOld(created) : 0;

    return (
        <div className='imageContent'>
            <img src={ image } />
            <div className='info'>
                <span className='name'>{name}</span>
                <span className='created'>{`id: ${ id } - created ${ yearsOld } ${ yearsOld > 1 ? 'years' : 'year' } ago`}</span>
            </div>
        </div>
    );
}

export default ImageContent;