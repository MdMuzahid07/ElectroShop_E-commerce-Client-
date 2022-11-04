import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Animated_Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color="244, 93, 60"
            outerAlpha={.7}
            innerScale={7}
            outerScale={0.7}
            clickables={[
                "a",
                "input[type='text']",
                "input[type='email']",
                "input[type='number']",
                "input[type='submit']",
                "input[type='image']",
                "label[for]",
                "select",
                "textarea",
                "button",
                "modal",
                ".link"
            ]}
        />
    );
};

export default Animated_Cursor;