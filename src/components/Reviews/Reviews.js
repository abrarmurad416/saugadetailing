import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import ReviewsData from "./ReviewsData";

export default function Reviews() {
    const reviewslink =
        "https://www.google.com/search?q=google+reviews+sauga+detailing&rlz=1C1UEAD_enCA1019CA1019&oq=google+reviews+sauga+detailing&aqs=chrome..69i57j69i64.4739j0j7&sourceid=chrome&ie=UTF-8#lrd=0x882b3bfffba61d23:0xd7de284ea2f5f449,1,,,,";

    return (
        <div>
            <div className="ReviewsBigText">Reviews</div>
            <main>
                <section class="cards">
                    {ReviewsData.map((item, index) => (
                        <div class="card-box">
                            <div class="card__content" key={index}>
                                <div class="card__info" key={index}>
                                    <p
                                        class="card__title text--medium"
                                        key={index}
                                    >
                                        {item.name}
                                    </p>
                                    <p class="text--medium" key={index}>
                                        {item.review}
                                    </p>
                                    <br />
                                    <p className="text--medium" key={index}>
                                        <em>{item.traits}</em>
                                    </p>
                                    <br />
                                    <div
                                        className="ReviewsStarRating"
                                        key={index}
                                    >
                                        <AiTwotoneStar
                                            color="#FFD700"
                                            size={24}
                                        />
                                        <AiTwotoneStar
                                            color="#FFD700"
                                            size={24}
                                        />
                                        <AiTwotoneStar
                                            color="#FFD700"
                                            size={24}
                                        />
                                        <AiTwotoneStar
                                            color="#FFD700"
                                            size={24}
                                        />
                                        <AiTwotoneStar
                                            color="#FFD700"
                                            size={24}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <div className="ReviewsContainer">
                <div className="ReviewsButton">
                    <div>
                        <a
                            href={reviewslink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ReviewsButtonText"
                        >
                            Share your experience with us 🖊️
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
