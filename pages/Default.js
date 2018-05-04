// backup version in case the GitHub API goes down and the latest data
// cannot be retrieved.

const DefaultData = {
    ld: {
        "@context": "http://schema.org",
        "@type": "Person",
        email: "mailto:Southclaws@gmail.com",
        image: "https://southcla.ws/static/Southclaw-icon-vec-final-square-0500.png",
        name: "Barnaby Keene",
        birthDate: "1994-12-04",
        gender: "male",
        nationality: "British",
        url: "https://southcla.ws",
        sameAs: [
            "https://github.com/Southclaws/",
            "https://www.linkedin.com/in/barnabykeene",
            "http://twitter.com/Southclaws"
        ],
        description: [
            "Hey I'm Barnaby Keene, also known as Southclaws on the net. I'm a software engineer based in Nottingham. I'm a Golang and Kubernetes fan with a big interest in cloud technology and big data analysis. Check my GitHub out for examples of API servers, React apps, developer tools and more!",
            "Outside of tech, I am a hobbyist filmmaker and artist. When not deep into an editing session on Premiere Pro or After Effects I'm out filming the world, working on 3D art or doing anything else to excersise my creative muscles.",
            "Currently residing in the city of Nottingham studying Computer Science and building things. I listen to anything from jazz to dubstep; grunge to orchestral. And I share a birthday with the original PlayStation!"
        ]
    },
    portfolio: [
        {
            "@context": "http://schema.org",
            "@type": "SoftwareSourceCode",
            name: "sampctl",
            image: "https://raw.githubusercontent.com/Southclaws/sampctl/master/sampctl-wordmark.png",
            about: "A dev-tool written in Go, provides a package manager to the Pawn scripting language.",
            url: "https://github.com/Southclaws/sampctl"
        },
        {
            "@context": "http://schema.org",
            "@type": "VisualArtwork",
            artMedium: "Digital",
            name: "Jimi Mack Tour Poster",
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/e87e0160609729.Y3JvcCwxNDAzLDEwOTgsMCww.jpg",
            about: "A tour poster I designed for songwriter, Jimi Mack's EP release tour",
            url: "https://www.behance.net/gallery/60609729/Jimi-Mack-Tour-Poster"
        },
        {
            "@context": "http://schema.org",
            "@type": "VisualArtwork",
            artMedium: "Digital",
            name: "Sonderlust Album Cover",
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/2f7ce560609035.Y3JvcCwxNDAzLDEwOTgsMCwxNTk.png",
            about: "An album cover I designed for a local band known as Sonderlust using Houdini, Maya and Mental Ray",
            url: "https://www.behance.net/gallery/60609035/Sonderlust-EP-Album-Cover"
        },
        {
            "@context": "http://schema.org",
            "@type": "VisualArtwork",
            artMedium: "Digital",
            name: "Personal Branding Design",
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/658b1e60606683.Y3JvcCwxNDAzLDEwOTgsMCwxMDA.png",
            about: "My personal branding icon",
            url: "https://www.behance.net/gallery/60606683/Southclaws-Personal-Branding"
        }
    ]
};
export default DefaultData;
