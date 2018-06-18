import React, { Component } from 'react';

class Result extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            content: 'Some content here :D'
        }
        this.handleChangeText = this.handleChangeText.bind(this);
    }
    

    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color
        };
    }
    
    handleChangeText(event){
        event.target.value === '' ?
        this.setState({
            content: "some content :D"
        })
        :
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p> Color: {this.props.color} - Fontsize: 15px </p>
                <div id="out-content" style={this.setStyle()} >
                    {this.state.content}
                </div>
                <hr/>
                <input 
                    type="text" 
                    id="inp-content" 
                    onChange={this.handleChangeText}
                    placeholder="Input some text here :D"
                    style={this.setStyle()}></input>
            </div>
        );
    }
}

export default Result;