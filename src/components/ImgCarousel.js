import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Carousel({ slides }) {
    const [curr, setcurr] = useState(0);

    let previousSlide = () => {
        if (curr === 0) setcurr(slides.length - 1);
        else setcurr(curr - 1);
    }

    let nextSlide = () => {
        if (curr === slides.length - 1) setcurr(0);
        else setcurr(curr + 1);
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-300" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {/* Adjusted to display one image at a time */}
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                        className="w-full h-auto max-h-64 md:max-h-96"
                        style={{ minWidth: "100%"}} // Ensures responsiveness
                    />
                ))}
            </div>
            <div className="absolute top-8 h-full w-full flex justify-between items-center px-10 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowAltCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowAltCircleRight />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => (
                    <div
                        key={`circle${i}`}
                        onClick={() => setcurr(i)}
                        className={`rounded-full w-5 h-5 cursor-pointer ${i === curr ? "bg-white" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}
