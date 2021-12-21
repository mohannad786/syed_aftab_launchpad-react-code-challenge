import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar} from 'react-bootstrap';
import { AddModal } from './AddModal';


export class Home extends Component {

    constructor (props){
        super(props);
            this.state = {deps:[], AddModalShow : false}
        }
     
  componentDidMount (){
      this.refreshList();
  }

    refreshList (){
       fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
       .then(response=> response.json())
       .then(data => { this.setState({deps:data})

    }
       );
}
        

    render () {
        const{deps} =this.state;
        let AddModalClose =() => this.setState({AddModalShow:false});
        
        return (
           
           <div>
        
          <AddModal show={this.state.AddModalShow}
          onHide = {AddModalClose}/>
            <br></br>
            <Table className='mt-6'  striped bordered hover size='sm'>
                <thead>
                
                    <tr>
                        
                       <th> userId</th>
                       <th>id</th>
                       <th>title</th>
                       <th>body</th>
                    </tr>
                </thead>
                
               <tbody> { deps.map (dep => 
                    <tr key = {dep.userId}>
                        <td>{dep.userId}</td>
                        <td>{dep.id}</td>
                        <td>{dep.title}</td>
                        <td>{dep.body}</td>
                    </tr>
                    )}
                             
                </tbody>
             </Table>
             <ButtonToolbar>       
        <Button variant='secondary' onClick={ ()=> this.setState({AddModalShow: true})}
        >Add Data</Button>

        <AddModal show={this.state.AddModalShow}
        onHide={AddModalClose} />

        </ButtonToolbar>

        </div>
    )

} }
