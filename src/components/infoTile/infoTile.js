import React from 'react';
import './infoTile.scss';
import ImageContent from '../imageContent/imageContent';

const InfoTile = (props) => {
    const {
            id,
            name,
            created,
            image,
            status,
            species,
            gender,
            origin,
            location
        } = props.tileData;
    const imageContentProps = {
        id,
        name,
        created,
        image
    };
    return (
        <div className='infoTile'>
            <ImageContent { ...imageContentProps } />
            <ul className="info-details">
                <li className="info-data">
                    <span className='lbl'>STATUS</span>
                    <span className='val'>{status}</span>
                </li>
                <li className="info-data">
                    <span className='lbl'>SPECIES</span>
                    <span className='val'>{species}</span>
                </li>
                <li className="info-data">
                    <span className='lbl'>GENDER</span>
                    <span className='val'>{gender}</span>
                </li>
                <li className="info-data">
                    <span className='lbl'>ORIGIN</span>
                    <span className='val'>{origin.name}</span>
                </li>
                <li className="info-data">
                    <span className='lbl'>LAST LOCATION</span>
                    <span className='val'>{location.name}</span>
                </li>
            </ul>
        </div>
    );
}

export default InfoTile;