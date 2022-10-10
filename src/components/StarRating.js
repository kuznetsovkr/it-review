import React, {useState} from "react";
import Star from "./Star";

export default function StarRating({ numTotalStars = 5, initialRating = 0 }) {
    const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
    const [numHoveringStars, setNumHoveringStars] = useState(null);

    const [isUserHovering, setIsUserHovering] = useState(false);

    function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return (i < threshold) ? "#4985FF" : "grey";
    }

    return (
        <div className="star-rating">
            <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)} >
                {Array.from({ length: numTotalStars }).map((e, i) =>
                    <Star
                        key={i}
                        color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
                        handleSelect={() => setNumSelectedStars(i + 1)}
                        handleHover={() => setNumHoveringStars(i + 1)}
                    />)}
            </div>
            <div className="label d-flex justify-content-center"> Оценка {numSelectedStars}</div>
        </div>
    );
}