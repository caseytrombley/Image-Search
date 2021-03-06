import React, {Component} from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {

        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <a href={urls.regular} target="_blank" rel="noopener noreferrer">
                    <img
                        className="ui medium rounded image"
                        src={urls.small}
                        alt={description}
                        ref={this.imageRef}
                    />
                </a>
            </div>
        );
    }
}

export default ImageCard;