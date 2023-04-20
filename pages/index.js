
import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log(ctx)
    const myChart = new Chart(ctx, {
      
      type: 'line',
      data: {
        labels: ["day1", "day2", "day3", "day4", "day5", "day6", "day7"],
        datasets: [{
          data: [60, 114, 106, 106, 107, 111, 133],
          
          label: "Team 1",
          borderColor: "#44D62C",
          backgroundColor: "#7bb6dd",
          tension:0,
          borderDash:[0,0],
          fill: false,
        }, {
          data: [16, 90, 38, 60, 83, 90, 100],
          label: "Team 2",
          borderColor: "#CCFF00",
          backgroundColor: "#71d1bd",
          tension:0,
          borderDash:[0,0],
          fill: false,
        }, {
          data: [1, 21, 60, 45, 17, 21, 17],
          label :"Team 3",
          borderColor: "#59CBE8",
          backgroundColor: "#ffc04d",
          tension:0,
          borderDash:[0,0],
          fill: false,
        }, {
          data: [6, 30,25, 15, 35, 35, 25],
          label: "Team 4",
          borderColor: "#DB3EB1",
          backgroundColor: "#d78f89",
          tension:0,
          borderDash:[0,0],
          fill: false,
        }
        ]
      },
    });
  }, [])

  //config
  const config={
    type:'line',
   
    option: {
      tension:0,
      scales:
      {
        y:{
          beginAtZero:true
        }
      }
    }
  };

  //render init block
  const myChart=new Chart(
    document.getElementById('myChart'),
    config
  );

  const bgColor =[];
  const bColor= myChart.data.datasets.map(color=>{
      bgColor.push(color.backgroundColor)
      return color.borderColor;
   })

     

  
  function highLightLine(line){
    console.log('line')

    myChart.config.data.datasets['line'].borderDash=[6,6];
    myChart.update();
 }

  return (
    <>
      {/* line chart */}
      <h1 style={{color: "#fff"}} className="w-[200px] mx-auto mt-10 text-xl font-semibold capitalize ">Team Progress Graph</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
          <div>
          <button className="spacing-x-4 px-10" onClick={()=>highLightLine(0)} style={{color: "#fff"}}>  TeamA    </button>
          <button className="px-10" onClick={()=>highLightLine(1)} style={{color: "#fff"}}>  TeamB    </button>
          <button className="px-10" onClick={()=>highLightLine(2)} style={{color: "#fff"}}>  TeamC    </button>
          <button className="px-10" onClick={()=>highLightLine(3)} style={{color: "#fff"}}>  TeamD    </button>
          <button className="" style={{color: "#fff"}}> Reset</button>
          </div>

          
                 
          </div>
      </div>
      


    </>
  )
}


export default Example;