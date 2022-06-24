export default function Hero(){
    return(
        <>
        <div className="text">
            <h3>Unhappy with your website?</h3>
            <h2>We create beautiful<br/>and fast web services</h2>
        </div>
        <div className="hero">
            <img src="images/heroImage.jpg"/>
        </div>
        <div className="text story">
            <h2>Story, emotion<br/> and purpose</h2>
            <p>We help transform your ideas into real<br/> world applications that will outperform<br/> your toughest competition and help you<br/> achieve your strategic goals in short<br/> period of time.</p>
            <div className="email">
                <p>want us to contact you?</p>
                <div className="input">
                    <input type="text" />
                    <button>Join</button>

                </div>
            </div>
        </div>
        </>
    )
}