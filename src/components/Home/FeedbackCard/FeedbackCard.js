import React from 'react';

const FeedbackCard = ({feedback}) => {
    const {image, name, description, companyName} = feedback;
    return (
        <div className="card rounded mb-5 pb-4">
            <div className="card-header d-flex align-items-center border-0 bg-transparent">
                <img src={image} alt="" width="60"/>
                <div className="pl-2">
                    <h6 className="color-group">{name}</h6>
                    <p className="text-secondary m-0">{companyName}</p>
                </div>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;