import React , {useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';

function Dropdown(){
    const data = [
      {student: 'Prince' , id: 1},
      {student: 'Rico' , id: 2},
      {student: 'Pratik' , id: 3}
    ]
  const [options] = useState(data);
return (
    <row>
<div class="d-flex justify-content-center">
    
        <h3>G1</h3>
        <Multiselect options={options} displayValue="student" />
        <h3>G2</h3>
        <Multiselect options={options} displayValue="student" />
        
       
    </div>
    </row>
    
);
}
export default Dropdown;