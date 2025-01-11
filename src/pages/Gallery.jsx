import Pattern from '../assets/Pattern.jpg'
export default function Gallery () {
    const images = [Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern, Pattern,]
    return (
        <div className="Gallery-section">
            <h1>Gallery</h1>
            <div className="Gallery-img-container">
                {images.map((item, index) => (
                    <div className={`gal-${index}`}>
                        <img src={item} alt="pattern" key={index}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}