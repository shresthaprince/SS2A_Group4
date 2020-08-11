import React, {Component} from 'react';
import {Modal , Button} from 'react-bootstrap';

class Test extends Component {
constructor()
{
    super()
    this.state = {
        show:false
    }
}
handleregpopup()
{
    this.setState({show:!this.state.show })
}

    render() {
        return (<div>
        <Button onClick={()=>{this.handleregpopup()}}>Register</Button>

        <Modal show={this.state.show} onHide={()=>this.handleregpopup()}>
            <Modal.Header closeButton>Thanks for Registering</Modal.Header>
            <Modal.Body>Click on Login to proceed</Modal.Body>
            <Modal.Footer>
                <Button to="login">Login</Button>
            </Modal.Footer>

        </Modal>
        
      
        
        
        
        </div>)
        
    }
}
export default Test;