import './Carousel.css'
import './default-data.json'
import data from './default-data.json'
import arrow from './button.svg'

const Carousel = (props) => {

    const photos = data

    return (
        <div className="Carousel">
            <div className="reel">
                <div role="button" className="button back">
                    <img src={arrow} className="arrow" alt="back button"/>
                </div>

                { photos.map((photo, index) => {
                    return (
                        <img 
                            src={photo.url} 
                            alt={photo.name} 
                            key={index}
                            className=""    
                        />
                        )
                    })
                }

                <div role="button" className="button forward">
                    <img src={arrow} className="arrow" alt="forward button"/>
                </div>
            </div>
            <div className="progress">
                {
                    photos.map((photo, index) => {
                        return (
                            <svg 
                                viewBox="0 0 100 100" 
                                xmlns="http://www.w3.org/2000/svg"
                                key={index}
                            >
                                <circle cx="50" cy="50" r="50"/>
                            </svg>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel