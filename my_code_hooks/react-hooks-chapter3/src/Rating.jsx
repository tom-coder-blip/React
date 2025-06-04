import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { Card, Container } from 'react-bootstrap';

function Rating(props) {
    const [rating, setRating] = useState(props.rating);

    return (
        <Container className="my-4 d-flex justify-content-center">
            <Card className="p-4 shadow-sm text-center" style={{ width: '300px' }}>
                <h2 className="mb-3">Rating: {rating}</h2>

                <div>
                    {rating >= 1 ? (
                        <IoIosStar onClick={() => setRating(1)} size={32} />
                    ) : (
                        <IoIosStarOutline onClick={() => setRating(1)} size={32} />
                    )}
                    {rating >= 2 ? (
                        <IoIosStar onClick={() => setRating(2)} size={32} />
                    ) : (
                        <IoIosStarOutline onClick={() => setRating(2)} size={32} />
                    )}
                    {rating >= 3 ? (
                        <IoIosStar onClick={() => setRating(3)} size={32} />
                    ) : (
                        <IoIosStarOutline onClick={() => setRating(3)} size={32} />
                    )}
                    {rating >= 4 ? (
                        <IoIosStar onClick={() => setRating(4)} size={32} />
                    ) : (
                        <IoIosStarOutline onClick={() => setRating(4)} size={32} />
                    )}
                    {rating >= 5 ? (
                        <IoIosStar onClick={() => setRating(5)} size={32} />
                    ) : (
                        <IoIosStarOutline onClick={() => setRating(5)} size={32} />
                    )}
                </div>
            </Card>
        </Container>
    );
}

export default Rating;