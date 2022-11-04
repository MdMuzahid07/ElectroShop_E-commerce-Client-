import React from "react";

const Who_We_Are = () => {
    return (
        <section className="grid md:grid-cols-2 gap-7 my-20">
            <div>
                <iframe className="w-full h-96" src="https://www.youtube.com/embed/wf4F2-9UXUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="text-3xl font-bold"><span className="text-primary">|</span> Who we are?</h2>
                <p className="mt-5">
                    We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss.
                    <br />
                    <br />
                    Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes – and we’re committed to providing all sizes at the same price</p>
            </div>
        </section>
    );
};

export default Who_We_Are;