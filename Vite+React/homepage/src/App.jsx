import './App.css';

export default function App() {
    const outNow = "Mellow";
    const outNowLink = "https://open.spotify.com/album/332eQnIev1i5PYjB866Ic7";

    const redirect = (link) => {

    }

    return (
        <>
            <div className={'banner'}>
                <div className={'banner-content'}>
                    <h1>'${outNow}': Out Now!</h1>
                    <span>Exsisential Jams. Take a listen wherever you can. <a target={"_blank"} href={outNowLink}>Spotify</a> | <a target={"_blank"} href={`../articles/${outNow}.html`}>Article</a></span>
                </div>
            </div>
            <div className={'main-content'}>
                <div className={'button-container'}>
                    <button className={'button'}
                            onClick={redirect("https://linktr.ee/acidfog87")}
                            >Link Tree</button>

                    <button className={'button'}
                            onClick={redirect("https://acidfog87.bandcamp.com/")}
                            >Bandcamp Page</button>

                    <button className={'button'}
                            onClick={redirect("./articles/ArticleList.html")}
                            >Article List</button>

                    <button className={'button'}
                            onClick={redirect("../trivia/trivia.html")}
                            >Trivia</button>

                    <button className={'button'}
                            onClick={redirect("../calendar/events.html")}
                            >Upcoming Events</button>

                    <button className={'button'}
                            onClick={redirect("../articles/sotm.html")}
                            >Song of the Month</button>

                    <button className={'button'}
                            onClick={redirect("https://www.youtube.com/@AcidFogOfficial87")}
                            >Official YouTube Channel</button>
                </div>
            </div>
            <div className={'footer'}>

            </div>
        </>
    )
}