
$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    const workBoxes = ["#work-box-one", "#work-box-two", "#work-box-three", "#work-box-four"];

    workBoxes.forEach((box, index) => {
        gsap.to(`${box} .work-detail`, {
            scrollTrigger: {
                trigger: box,
                start: "20px 71%",
                end: "bottom 600px",
                toggleActions: "play reverse reverse reverse",
                scrub: true,
            },
            opacity: "1",
            duration: 3,
        });

        gsap.to(`${box} .upper`, {
            scrollTrigger: {
                trigger: box,
                start: "20px 71%",
                end: "bottom 600px",
                toggleActions: "play reverse reverse reverse",
                scrub: true,
            },
            height: "100%",
            duration: 3,
        });

        gsap.to(`${box} .img-mockup`, {
            scrollTrigger: {
                trigger: box,
                start: "20px 71%",
                end: "bottom 600px",
                toggleActions: "play reverse reverse reverse",
                scrub: true,
            },
            transform: "translateY(0%)",
        });

        gsap.to(`${box} .number span`, {
            scrollTrigger: {
                trigger: box,
                start: "20px 71%",
                end: "bottom 600px",
                toggleActions: "play reverse reverse reverse",
                scrub: true,
            },
            background: "#00B551",
        });
    });
});