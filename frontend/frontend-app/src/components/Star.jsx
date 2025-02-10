/* eslint-disable react/prop-types */
import { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex space-x-1 text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-6 w-6 cursor-pointer transition ${
                        (hover || rating) >= star ? "fill-current" : "stroke-current"
                    }`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
