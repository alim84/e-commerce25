

const Image = ({src, alt, className}) => {
    return (
        <div>
            <div>
                <img className={className} src={src} alt={alt}/>
            </div>
        </div>
    );
};

export default Image;