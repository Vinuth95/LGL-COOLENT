import { Card, CardContent } from '@material-ui/core';
import React, {  useState } from 'react'


function Temp() {
  const [dialogOpen,setDialogOpen]=useState(false);
  const [temperatureDialogData, setTemperatureDialogData] = useState({min: '', max:''});
  const [concentrationDialogData, setConcentrationDialogData] = useState({min: '', max:''});
  const [phDialogData, setPhDialogData] = useState({min: '', max: ''});
  const [min,setMin]=useState(0);
  const [max,setMax]=useState(100);
  const [currentDataType, setCurrentDataType] = useState();
  
  const handleOpenDialog = (dataType) => {
    setCurrentDataType(dataType);
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (inputValue >= 0 && inputValue<=100) {
      setMin(inputValue);
    }
  
  };
  const onChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (inputValue <= 100 && inputValue>=0) {
      setMax(inputValue);
     
    }
  };
  const handleSubmit = () => {
   switch (currentDataType) {
        case 'temperature':
        setTemperatureDialogData({min: min, max: max});
        break;
      case 'concentration':
        setConcentrationDialogData({min: min, max: max});
        break;
      case 'ph':
        setPhDialogData({min: min, max: max});
        break;
      default:
        break;
    }
    setDialogOpen(false);
  };
  const handleDelete = (dataType) => {
    switch (dataType) {
      case 'temperature':
        setTemperatureDialogData({min:"", max:""});
        break;
      case 'concentration':
        setConcentrationDialogData({min: "", max: ""});
        break;
      case 'ph':
        setPhDialogData({min: "", max:""});
        break;
      default:
        break;
      }
  };
  const handleEdit = () => {
    setDialogOpen(true);
  };

  return (
    <div>
  <Card id='td1' >
        <CardContent >
<span className='align'>Temperature Master</span>
            <button className='bt' onClick={() => handleOpenDialog('temperature')}>New</button>
            <p className='pt'>Min:{temperatureDialogData.min}</p>
            <p className='ptt'>Max:{temperatureDialogData.max}</p>
            <button className='edit'onClick={() => handleEdit('temperature')}>Edit</button>
            <button  className='delete'onClick={() => handleDelete('temperature')}>Delete</button>
      </CardContent>
        </Card>
        <Card  id='td2'>
        <CardContent >
          
  <span className='align'>Concentration Master</span>
    <button className='btn' onClick= {() => handleOpenDialog('concentration')}>New </button>
    <p className='ct'>Min :{concentrationDialogData.min} </p>
    <p className='ctt'>Max :{concentrationDialogData.max} </p>
    <button className='ed' onClick={() => handleEdit('concentration')}>Edit</button>
    <button className='del' onClick={() => handleDelete('concentration')}>Delete</button>
    </CardContent>
     </Card>
  <Card id='td3' >
      <CardContent>
   <span className='align'>PH Master</span>
    <button className='btnn' onClick={() => handleOpenDialog('ph')}>New </button>
    <p className='ph'>Min :{phDialogData.min}  </p>
    <p className='phh'>Max :{phDialogData.max} </p>
    <button className='edd'  onClick={() => handleEdit('ph')}>Edit</button>
<button className='dell' onClick={() => handleDelete('ph')}>Delete</button>
    </CardContent>
    </Card>
  {dialogOpen &&(
    <div className='dialog'>
      <div className='price-input'>
        <div className='field'>
      <span>Min</span>
      <input type="number"  value={min} onChange={handleChange} className='t'></input>
      </div>
      </div>
      <div className='seperator'>-</div>
      <div className='field1'>
        
      <span>Max</span>
      <input type="number"  value={max}  onChange={onChange}className='tt'></input>
      <button className="sb" onClick={handleSubmit}>Submit</button>
      <button className="cls"onClick={handleCloseDialog}>Close</button>
    
      </div>
    </div>
    
  )}



</div>
  )
}

export default Temp;