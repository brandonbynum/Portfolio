import './Sidebar.scss';

const Sidebar = () => {
    const images = [
        {
            id: 'linkedin',
            imgPath: 'images/social/linkedin.png',
            url: 'https://www.linkedin.com/in/brandon-bynum-90492014b/',
        },
        {
            id: 'github',
            imgPath: 'images/social/github.png',
            url: 'https://github.com/brandonbynum',
        },
        {
            id: 'spotify',
            imgPath: 'images/social/spotify.png',
            url: 'https://open.spotify.com/user/munyb?si=jp_kCtMWROmIlVGjzobb4w',
        },
    ];
    return (
        <div className="text-center w-100">
            {images.map((item) => {
                return (
                    <div className="py-2" key={item.id}>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="icon"
                                id={item.id}
                                src={item.imgPath}
                                alt={item.id}
                                height="25px"
                            />
                        </a>
                    </div>
                );
            })}
            <div className="vr"> </div>
        </div>
    );
};

export default Sidebar;
