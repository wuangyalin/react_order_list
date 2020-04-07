import React, { Component } from 'react';
import OrderItem from '../OrderItem';

export default class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = {datas: []};
    }

    componentDidMount(){
        fetch('/mock/orders.json').then(res => {
            if(res.ok){
                res.json().then(data =>{
                    this.setState({
                        datas: data
                    })
                })
            }
        })
    }
    
    render() {
        return (
            <div>
            {
                this.state.datas.map(data => {
                    return <OrderItem key={data.id} data={data} onSubmit={this.handleSubmit} />
                })
            }
            </div>
        )
    }

    handleSubmit = (id,comment,stars) => {
        // featch('saveComment').then(()=>{

        // })
        const newDatas = this.state.datas.map(item=>{
            return item.id === id ? {
                ...item, comment, stars, ifCommented: true
            } : item
        });
        this.setState({
            datas: newDatas
        });
    }
}
