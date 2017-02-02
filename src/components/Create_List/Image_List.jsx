import React, {Component} from 'react';
import Image from './Image';
import {fetchFood} from '../../actions/index'


export default class ImageList extends Component {
    constructor(props) {
        super(props);

        // this.generateImageList = this.generateImageList.bind(this);
        // this.generateImageList();
    }
    // async generateImageList() {
    //     // let food = await fetchFood();
    //     // console.log(food);
    //     // let foodArray = [food]
    //     let {groceries} = this.props;
    //     // console.log(groceries);
    //     // console.log(groceries);
    //     return groceries.map((food) => {
    //         // console.log(this.props);
    //         let {name, product_image_url} = food;
    //         return (
    //                 <Image handleClick={this.props.handleClick} image={product_image_url} name={name}/>
    //         )
    //
    //     })
    // }
    render() {

            let {groceries} = this.props
            // console.log(groceries);
            let food = groceries.map((ele) => {
                let {name, product_image_url, id} = ele;
                return (
                     <Image id={id} handleClick={this.props.handleClick} image={product_image_url} name={name}/>
                )
            })

            return (
            <div id="imageContainer">
                {food}
            </div>
        )
    }
}
