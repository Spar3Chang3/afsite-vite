import './App.css';
import { useState } from 'react';

export default function App() {
    const outNow = "Mellow";
    const outNowLink = "https://open.spotify.com/album/332eQnIev1i5PYjB866Ic7";

    const [ popoutHeight, setPopoutHeight ] = useState('0');
    const [ arrowRotation, setArrowRotation ] = useState('0')

    const redirect = (link) => {
        window.open(link, '_blank').focus();
    };

    const handlePopout = () => {
        switch (popoutHeight) {
            case '0':
                setPopoutHeight('10%');
                setArrowRotation('-180deg');
                break;
            case '10%':
                setPopoutHeight('0');
                setArrowRotation('0');
                break;
        }
    }

    return (
        <div className={'homepage'}>
            <div className={'banner'}>
                <div className={'banner-content'}>
                    <h1>'{outNow}': Out Now!</h1>
                    <span>Exsisential Jams. Take a listen wherever you can. <a target={"_blank"} href={outNowLink}>Spotify</a> | <a target={"_blank"} href={`../articles/${outNow}.html`}>Article</a></span>
                </div>
            </div>
            <div className={'main-content'}>
                <div className={'button-container'}>
                    <button className={'button'}
                            onClick={() => redirect("https://linktr.ee/acidfog87")}
                    >Link Tree
                    </button>

                    <div className={'qr-popout'}>
                        <button className={'tiny-button'}
                                onClick={() => handlePopout()}
                        >Click to view QR Code</button>
                        <div style={{transform: `rotate(${arrowRotation})`, transition: '100ms ease'}}>▼</div>
                    </div>

                    <img src={'http://acidfog.com/siteimage/aflt.png'} alt={"Link Tree QR Code"}
                         style={{height: popoutHeight}}/>

                    <button className={'button'}
                            onClick={() => redirect("https://acidfog87.bandcamp.com/")}
                    >Bandcamp Page
                    </button>

                    <div className={'activity-buttons'}>
                        <button className={'button'}
                                onClick={() => redirect("/articles/index.html")}
                        >Articles?
                        </button>

                        <button className={'button'}
                                onClick={() => redirect("/trivia/index.html")}
                        >Trivia?
                        </button>

                        <button className={'button'}
                                onClick={() => redirect("/calendar/index.html")}
                        >Upcoming Events?
                        </button>
                    </div>

                    <button className={'button'}
                            onClick={() => redirect("/sotm/index.html")}
                    >Song of the Month
                    </button>

                    <div className={'promo-buttons'}>
                        <button className={'button'}
                                onClick={() => redirect("https://www.youtube.com/@AcidFogOfficial87")}
                        >Official YouTube Channel
                        </button>

                        <button className={'button'}
                                onClick={() => redirect("https://www.youtube.com/@acidfogtapesofficial")}
                        >Acid Fog Tapes Channel
                        </button>
                    </div>
                </div>

                <div className={'spotify-plugin'}>
                    <iframe style={{borderRadius: '12px', width: '80%'}}
                            src="https://open.spotify.com/embed/artist/3JXrxOSYCRqrwIBF5KFNqO?utm_source=generator"
                            width="50%" height="700" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </div>
            </div>

            <hr/>

            <div className={'footer'}>
                <span>If you have a suggestion, or a problem with the site, please contact us at <a href="mailto:gloomofficial87@gmail.com">our email</a></span>
            </div>
        </div>
    )
}