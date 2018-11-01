import React from 'react';

class Calculator extends React.Component {

    showOders(orders) {
        if (!orders || orders.length === 0) {
            return <li className="text-right">ไม่มีสินค้า</li>
        } else {
            return orders.map(order => {
                return (
                    <li className="text-right">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)} >X</button>
                    </li>
                )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props
        return (
            <div>
                <h2 className="text-right">{totalPrice}</h2>
                <hr />
                <ul className="list-unstyled">
                    {this.showOders(orders)}
                </ul>
                <hr />
                <button className="btn-block btn-success">ยืนยัน</button>
                <button className="btn-block btn-danger">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator;