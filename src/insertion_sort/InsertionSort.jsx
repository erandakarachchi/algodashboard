import React, { Component } from 'react'
import ArrayNode from "./ArrayNode"
import SiteHeader from "./../common_components/SiteHeader"

const UNSORTED_COLOR = "#f6cd61";
const SORTED_COLOR = "#a8df65";
const KEY_COLOR = "black";

export default class InsertionSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unsortedArray: []
        }

        this.renderArrayNodes = this.renderArrayNodes.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
        this.sleep = this.sleep.bind(this);
        this.generateRandomArray = this.generateRandomArray.bind(this);
    }
    componentDidMount() {
        this.setState({
            unsortedArray: this.generateRandomArray(20)
        })
    }

    generateRandomArray = (max) => {
        const RAND_CONST = 20; //Make sure that min value is always greated than 20
        let randNumbers = []
        let rand = 0;
        for (let i = 50; i < 70; i++){
            rand = Math.floor(Math.random()*i)+RAND_CONST;
            randNumbers = [...randNumbers, {value:rand,color:UNSORTED_COLOR}];
        }
        return randNumbers
    }
    

    sleep = (secs) => {
        return new Promise(resolve => setTimeout(resolve, secs))
    }

    insertionSort = async () => {
        let elementArray = [...this.state.unsortedArray];

        for (let i = 1; i < elementArray.length; i++) {
            let key = elementArray[i].value;
            elementArray[i].value = KEY_COLOR
            let j = i - 1;
            await this.sleep(250);
            while (j >= 0 && elementArray[j].value > key) {
                elementArray[j + 1].value = elementArray[j].value;
                elementArray[j + 1].color = SORTED_COLOR;
                j = j - 1
            }
            elementArray[j + 1].value = key
            elementArray[j + 1].color = SORTED_COLOR;
            this.setState({
                unsortedArray: elementArray
            });
        }

    }

    renderArrayNodes = () => {
        return (
            <div>
                {
                    this.state.unsortedArray.map((element, idx) => {
                        return (
                            <ArrayNode key={idx} value={element.value} color={element.color}></ArrayNode>
                        )
                    })
                }

            </div>
        )
    }

    render() {
        return (
            <div>
                <SiteHeader onVisualizeClick={this.insertionSort}></SiteHeader>
                <div className="sort-container">
                    {
                        this.renderArrayNodes()
                    }
                </div>
            </div>
        )
    }
}
