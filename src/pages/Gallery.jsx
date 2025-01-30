
import ts1 from '../assets/ts1.jpg'
import ts2 from '../assets/ts2.jpg'
import ts3 from '../assets/ts3.png'
import ts4 from '../assets/ts4.jpg'
import ts5 from '../assets/ts5.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.png'
import fs1 from '../assets/fs1.jpg'
import fs2 from '../assets/fs2.png'
import fs3 from '../assets/fs3.jpg'
import fs4 from '../assets/fs4.jpg'
import fs5 from '../assets/fs5.jpg'
import fr1 from '../assets/fr1.jpg'
import fr2 from '../assets/fr2.jpg'
import fr3 from '../assets/fr3.jpg'
import fr4 from '../assets/fr4.jpg'
import fr5 from '../assets/fr5.jpg'
import r1 from '../assets/r1.jpg'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.jpg'
import r4 from '../assets/r4.jpg'
import r5 from '../assets/r5.png'
import wp1 from '../assets/wp1.jpg'
import wp2 from '../assets/wp2.jpg'
import wp3 from '../assets/wp3.jpg'
import wp4 from '../assets/wp4.jpg'
import wp5 from '../assets/wp5.jpg'
export default function Gallery () {
    const images = [ts1, ts2, ts3, ts4, ts5, s1, s2, s3, s4, s5, f1, f2, f3, f4, f5, fs1, fs2, fs3, fs4, fs5, fr1, fr2, fr3, fr4, fr5, r1, r2, r3, r4, r5, wp1, wp2, wp3, wp4, wp5]
    return (
        <div className="Gallery-section">
            <h1><b className='text'>Gallery</b></h1>
            <div className="Gallery-img-container">
                {images.map((item, index) => (
                    <div className={`gal-${index}`} key={`pattern-${index}`}>
                        <img src={item} alt="pattern"></img>
                    </div>
                ))}
            </div>
        </div>
    )
}