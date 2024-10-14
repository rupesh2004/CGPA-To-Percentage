import './App.css';
import react from 'react';

const AllUi = () => {
  const [percentage, setPercentage] = react.useState(0);
  const [cgpa, setCGPA] = react.useState(0);
  const [combineArray, setCombineArray] = react.useState([]);

  function resetButton() {
    setPercentage(0);
    setCGPA(0);
    setCombineArray([]);
  }

  function convertToPercentage(){
    if(cgpa===0){
      alert('Please enter a valid CGPA')
    }else{
      const result = (cgpa*9.5).toFixed(2)
      setPercentage(result) 
      const newEntry = {cgpa : cgpa, percentage : result}
      if(combineArray.length === 5){
        alert('Not enough entries')
      }else{
        setCombineArray([...combineArray, newEntry])
      }
    }
    
   
  }

  return (
    <div className='container'>
      <div className='whiteBck'>
        <div className='header'>
          <h1>CGPA to Percentage Calculator</h1>
        </div>
        <div className='inputs'>
          <input
            type='number'
            placeholder='Enter CGPA'
            id='cgpa'
            onChange={(e) => setCGPA(e.target.value)}
            value={cgpa}
          />
          <br />
          <br />
          <input
            type='number'
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder='Percentage'
            disabled
            id='percentage'
          />
        </div>
        <div className='buttons'>
          <button className='calculate' onClick={convertToPercentage}>Calculate</button>
          <button className='reset' onClick={resetButton}>Reset</button>
        </div>
        <div className='head-history'>
          <h3>Calculation History</h3>
          <div className='table'>
            <table>
              <tr>
                <th>Sr.No</th>
                <th>CGPA</th>
                <th>Percentage</th>
              </tr>
                {combineArray.map((entry,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{entry.cgpa}</td>
                    <td>{entry.percentage}</td>
                  </tr>
                ))}

            </table>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 CGPA to Percentage Calculator By <a target='blank' href="http://github.com/rupesh2004">Rupesh Bhosale</a></p>
      </footer>
    </div>
  );
};

export { AllUi };
