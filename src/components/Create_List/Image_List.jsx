import React, {Component} from 'react';
import Image from './Image';



export default class ImageList extends Component {
    constructor(props) {
        super(props);

        this.generateImageList = this.generateImageList.bind(this);
        // this.generateImageList();
    }
    generateImageList() {
        let {groceries} = this.props;
        console.log(groceries);
        return groceries.map((food) => {
            // console.log(this.props);
            let {image, name} = food
            return (
                    <Image handleClick={this.props.handleClick} image={image} name={name}/>
            )

        })
    }
    render() {
        return (
            <div id="imageContainer">
                {this.generateImageList()}
            </div>
        )
    }
}
