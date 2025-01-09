

const Image = ({src, alt}) => {
    return (
        <div>
            <div>
                <img src={src} alt={alt}/>
            </div>
        </div>
    );
};

export default Image;