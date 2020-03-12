import React, { Component } from "react";
import "./display.css";

const quoteData = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "Mark Twain"
    },
    {
        quote: "I can't understand why people are frightened of new ideas. I'm frightened of the old ones.",
        author: "John Cage"
    },
    {
        quote: "The tragedy of life is not so much what men suffer, but rather what they miss.",
        author: "Thomas Carlyle"
    },
    {
        quote: "The dumbest people I know are those who know it all.",
        author: "Malcolm Forbes"
    },
    {
        quote: "Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that's creativity.",
        author: "Charles Mingus"
    },
    {
        quote: "Money alone isn't enough to bring happiness . . . happiness [is] when you're actually truly ok with losing everything you have.",
        author: "Tony Hsieh"
    },
]

class QuoteDisplay extends Component {
    render() {
        return <div className="quoteDisplay">
            <h5>{quoteData[this.props.buttonVal % quoteData.length].author}:</h5>
            <p>{quoteData[this.props.buttonVal % quoteData.length].quote}</p>
            <button className="quoteChangeButton"
                onClick={() => this.props.handleButtonClick()}>
                Change Quote
                 </button>
        </div>
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