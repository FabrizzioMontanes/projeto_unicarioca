Object.assign(JParticles.commonConfig, {
    opacity: 0.4,
    color: [],
    resize: true,
    maxSpeed: 0.4,
     minSpeed: 0.2,
    })
    Object.assign(JParticles.easing, {
        swing: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
        },
    })
    new JParticles.Particle('#background', {
        lineShape: 'cube',
        range: 2000,
        proximity: 90,
        parallax: true,
    })