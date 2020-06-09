import React, { Component } from 'react'
import ArrayNode from "./ArrayNode"
import SiteHeader from "./../common_components/SiteHeader"


export default class InsertionSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unsortedArray: [150,90,80,65,43,54,43,65,10,74,98,43,76,32,54]
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
