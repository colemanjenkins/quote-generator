import React, { Component } from "react";
import "./display.css";

const quoteData = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "Mark Twain",
        pic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MTUzNTA5OTAz/mark-twain-9512564-1-402.jpg"
    },
    {
        quote: "I can't understand why people are frightened of new ideas. I'm frightened of the old ones.",
        author: "John Cage",
        pic: "http://sassas.org/wp-content/uploads/2014/07/JohnCage-youngpiano.png"
    },
    {
        quote: "The tragedy of life is not so much what men suffer, but rather what they miss.",
        author: "Thomas Carlyle",
        pic: "https://landmarkevents.org/assets/email/2020/02-03-history-highlight/inline-carlyle.jpg"
    },
    {
        quote: "The dumbest people I know are those who know it all.",
        author: "Malcolm Forbes",
        pic: "https://i2.wp.com/farm8.staticflickr.com/7206/7085479133_3b6fc2112e.jpg?resize=500%2C315"
    },
    {
        quote: "Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that's creativity.",
        author: "Charles Mingus",
        pic: "https://cdn.britannica.com/48/197648-050-1E976AB8/Charles-Mingus-1974.jpg"
    },
    {
        quote: "Money alone isn't enough to bring happiness . . . happiness [is] when you're actually truly ok with losing everything you have.",
        author: "Tony Hsieh",
        pic: "https://www.incimages.com/uploaded_files/image/1940x900/IN0610FZA01_pan_359017.jpg"
    },
]

class QuoteDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: quoteData[0],
            value: 0
        }
    }

    handleButtonClick = () => {
        this.setState(prevState => {
            return {
                currentQuote: quoteData[(prevState.value + 1) % quoteData.length],
                value: prevState.value + 1
            };
        });
    }

    render() {
        return (
            <div className="quoteDisplay">
                <button className="quoteChangeButton"
                    onClick={() => this.handleButtonClick()}>
                    Change Quote
                    </button>
                <p className="quoteStyle">
                    {this.state.currentQuote.quote}
                </p>
                <h5>-{this.state.currentQuote.author}</h5>
                <div className="buttonWithPicture">
                    <img className="picture"
                        src={this.state.currentQuote.pic} alt={"Picture of " + this.state.currentQuote.author} />
                </div>
            </div>
        );
    }
}
// const Display = (props) => {
//     return (
//         <div className="quoteDisplay">
//             <p>{props.buttonVal} + Hello</p>
//             <h5>{quoteData[0].author}:</h5>
//             <p>{quoteData[0].quote}</p>
//             <button className="quoteChangeButton"
//                 onClick={() => props.handleButtonClick()}>
//                 Change Quote
//                 </button>
//         </div>
//     );
// };


export default QuoteDisplay;