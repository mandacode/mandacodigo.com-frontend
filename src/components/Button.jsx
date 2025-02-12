import React from "react";
import { Link } from "react-router-dom";


const Button = ({
    text = "Submit",
    to = "/",
    bgColor = "bg-white",
    hoverColor = "hover:bg-mandaMint",
    textColor = "text-black",
    borderColor = "border-mandaMint"
}) => (
    <div className="w-full md:w-80">
        <Link to={to}>
            <div
                className={`text-center font-konexy px-6 py-5 rounded-xl border transition-all duration-300 
                      ${borderColor} ${textColor} ${bgColor} ${hoverColor}`}
            >
                {text}
            </div>
        </Link>
    </div>
);

export default Button;
