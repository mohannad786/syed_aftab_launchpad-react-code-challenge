import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar} from 'react-bootstrap';
import { AddModal } from './AddModal';


export class Universities extends Component {

    constructor (props){
        super(props);
            this.state = {deps:[], AddModalShow : false}
        }
     
  componentDidMount (){
      this.refreshList();
  }

    refreshList (){
       fetch('http://universities.hipolabs.com/search?country=Canada')
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
        <ButtonToolbar>       
        <Button variant='primary' onClick={ ()=> this.setState({AddModalShow: true})}
        >Search</Button>

        <AddModal show={this.state.AddModalShow}
        onHide={AddModalClose} />

        </ButtonToolbar>

          <AddModal show={this.state.AddModalShow}
          onHide = {AddModalClose}/>
            <br></br>
            <Table className='mt-1'  striped bordered hover size='sm'>
                <thead>
                
                    <tr>
                        
                       <th> Country</th>
                       <th>web-page</th>
                       <th>University Name</th>
                       <th>domains</th>
                    </tr>
                </thead>
                
               <tbody> { deps.map (dep => 
                    <tr key = {dep.country}>
                        <td>{dep.country}</td>
                        <td>{dep.web_pages}</td>
                        <td>{dep.name}</td>
                        <td>{dep.domains}</td>
                    </tr>
                    )}
                             
                </tbody>
             </Table>
        
        </div>
    )

} }
//export default Universities;