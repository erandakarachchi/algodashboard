import React, { Component } from 'react'
import ArrayNode from "./ArrayNode"

export default class InsertionSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unsortedArray: [150,90,80,65,43,54,43,65,2,74,98,43,76,32]
        }

        this.renderArrayNodes = this.renderArrayNodes.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    sleep = (secs) => {
        return new Promise(resolve=>setTimeout(resolve,secs))
    }

    insertionSort = async () => {
        let elementArray = [...this.state.unsortedArray];
        
        for (let i = 1; i < elementArray.length; i++) {
            let key = elementArray[i];
            let j = i - 1;
            while (j >= 0 && elementArray[j] > key) {
                await this.sleep(50);
                elementArray[j + 1] = elementArray[j];
                j = j - 1

            }
            elementArray[j + 1] = key
            this.setState({
                unsortedArray: elementArray
            });
        }
        console.log("SORTED : ",elementArray)
    }

    componentDidMount() {
        this.insertionSort()
    }

    renderArrayNodes = () => {
        return (
            <div>
                {
                    this.state.unsortedArray.map((element, idx) => {
                        return (
                            <ArrayNode key={idx} value={element}></ArrayNode>
                        )
                    })
                }

            </div>
        )
    }

    render() {
        return (
            <div>
                InsertionSort
                <div>
                    {
                        this.renderArrayNodes()
                    }
                </div>
            </div>
        )
    }
}
