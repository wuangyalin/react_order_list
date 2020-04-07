import React, { Component } from 'react';
import './style.css';

export default class OrderItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            stars: props.data.star || 0,
            editing: false,
            comment: props.data.comment || ""
        }
    }

    render() {
        const {shop, product, price, picture, ifCommented} = this.props.data;

        return (
            <div className='orderItem'>
                {/* Follow BEM naming standard */}
                <div className='orderItem__picContainer'>
                    <img className='orderItem__pic' src={picture} alt={product} />
                </div>
                <div className='orderItem__content'>
                    <div className='orderItem__product'>{product}</div>
                    <div className='orderItem__shop'>{shop}</div>
                    <div className='orderItem__detail'>
                        <div className='orderItem__price'>{price}</div>
                        <div>
                            {ifCommented ? this.renderStars(false) : null}
                            {
                                ifCommented ? 
                                <button className='orderItem__btn orderItem__btn--grey'>Reviewed</button> :
                                <button className='orderItem__btn orderItem__btn--red' onClick={this.handleOpenEditer}>Review</button>
                            }
                            
                        </div>
                    </div>
                </div>
                {this.state.editing ? this.renderEditaArea() : null}
            </div>
        )
    }

    renderEditaArea() {
        return (
            <div className='orderItem__commentContainer'>
                <textarea onChange={this.handleCommentChange} value={this.state.comment} className='orderItem__comment' />
                {this.renderStars(true)}
                <button onClick={this.handleSubmitComment} className='orderItem__btn orderItem__btn--red'>Submit</button>
                <button onClick={this.handleCancelComment} className='orderItem__btn orderItem__btn--grey'>Cancel</button>
            </div>
        )
    }

    renderStars(editable){
        const{stars} = this.state;
        return(
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light = stars >= item ? "orderItem__btn--red" : "";
                        return (
                            <span className={"orderItem__star "+light} onClick={editable ? this.handleClickStars.bind(this,item) : null} key={index}>★</span>
                        )
                    })
                }
            </div>
        )
    }

    handleOpenEditer = () => {
        this.setState({
            editing: true
        })
    }
    handleCommentChange = (e) =>{
        this.setState({
            comment: e.target.value
        });
    }
    handleClickStars = (stars) =>{
        this.setState({
            stars: stars
        });
    }

    handleCancelComment = () => {
        this.setState({
            stars: this.props.data.star || 0,
            editing: false,
            comment: this.props.data.comment || ""
        });
    }

    handleSubmitComment = () => {
        const {id} = this.props.data;
        const {comment, stars} = this.state;
        this.setState({
            editing: false
        });
        this.props.onSubmit(id, comment, stars);
    }
    
}
