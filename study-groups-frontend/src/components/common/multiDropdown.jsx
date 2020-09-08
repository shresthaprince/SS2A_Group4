import React , {useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';


function Dropdown(){
    const data = [
      {student: '1' , id: 1},
      {student: '2' , id: 2},
      {student: '3' , id: 3}
    ]
  const [options] = useState(data);
  const [dropdownCount, setDropdownCount] = React.useState(0);
  return (
    <div>
      {Array.from({ length: dropdownCount }).map((v, idx) => {
        return ( 
          <div>
            <p>Group {idx + 1}</p>
            <Multiselect options={options} displayValue="student" />
          </div>
        )
      })}
      <row>
      <button type="button" class="btn btn-primary" onClick={() => setDropdownCount(dropdownCount + 1)}>
          Add Group
      </button>
      <button type="button" class="btn btn-primary" onClick={() => setDropdownCount(dropdownCount - 1)}>
          Remove Group
      </button>
      </row>
    </div>
  );

}

    
  
export default Dropdown;