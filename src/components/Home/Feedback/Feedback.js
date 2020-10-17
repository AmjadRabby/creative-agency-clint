import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://powerful-castle-90702.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])

    return (
        <section className="feedback container pb-5">
            <h4 className='font-weight-bold text-center p-5'>
            Clients  <span className='color-brand'>Feedback</span>
            </h4>
            <div className="card-deck">
                
                {
                    feedback.map((feedback => <FeedbackCard key={feedback._id} feedback={feedback}/>))
                }
            </div>
        </section>
    );
};

export default Feedback;