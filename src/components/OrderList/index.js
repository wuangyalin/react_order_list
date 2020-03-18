import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const datas = [
    {
        id: 1,
        shop: "food 1",
        picture: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
        price: 11.9,
        ifCommented: true
    },
    {
        id: 2,
        shop: "food 2",
        picture: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
        price: 22.9,
        ifCommented: false
    },
    {
        id: 3,
        shop: "food 3",
        picture: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
        price: 31.9,
        ifCommented: true
    },
    {
        id: 4,
        shop: "food 4",
        picture: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
        price: 9.9,
        ifCommented: false
    }
]


export default class OrderList extends Component {
    render() {
        return (
            <div>
            {
                datas.map(data => {
                    return <OrderItem key={data.id} data={data} />
                })
            }
            </div>
        )
    }
}
