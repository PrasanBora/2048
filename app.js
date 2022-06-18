
const gameBoard =document.querySelector(".gameBoard")
// const cell =document.querySelectorAll(".box");
const userScore= document.querySelector(".points")
// cell[0].innerHTML=34;

let score =0;
let filledCell=[[0 , 0 , 0 , 0] , [0 , 0 , 0 , 0]
,[0 , 0 , 0 , 0],[0 , 0 , 0 , 0]]; //array to mark cell with value 

   for(let j=0;j<4;j++)
    {
        for(let k=0;k<4;k++)
        {
            let  cell=document.createElement("div");
            cell.id=`index${j}-${k}`;
            gameBoard.append(cell);
            
            updateValue(j,k);

           
        }
    }
    // updateValue();

// function to genrate a new cell value i.e 2 or 4
generate =()=>{

  let newValue =Math.floor(Math.random()*2);
  if(newValue===0)
  { return 2;}
  else 
  { return 4;}
}
// console.log(generate());

// function to get a new position for new cell 
newPosition=()=>{
    let newi =Math.floor(Math.random()*4);
    let newj =Math.floor(Math.random()*4);
    
    if(filledCell[newi][newj]!=0)
    newPosition();
    else 
    filledCell[newi][newj]=generate();
    updateValue(newi,newj);
}
newPosition();

document.querySelector("body").addEventListener('keyup',(e)=>{
    // console.log(e.key);
    switch(e.key)
    {
            case "ArrowUp":
                
                moveUp();
                newPosition();
              break

            case "ArrowDown":
                
                moveDown();
                newPosition();
                break

            case "ArrowRight":
                newPosition();
            break

            case "ArrowLeft":
                newPosition();
            break  
    }
});


function updateValue(i,j)
{
    
            if(filledCell[i][j]>0)
            document.querySelector(`#index${i}-${j}`).innerHTML=filledCell[i][j];
             
            else
            {
                document.querySelector(`#index${i}-${j}`).innerHTML="";  
            }
            

        }
 
function moveUp()
{
    for(let j=0;j<4;j++)
    {
        console.log("--     555555555--");
        for(let i=3;i>0;i--)
        {
            console.log(filledCell[i][j]);
            console.log("----");
            if(filledCell[i][j]===filledCell[i-1][j] && filledCell[i][j]!=0)
            {  
                // merge
                filledCell[i-1][j]=2*filledCell[i][j];
                filledCell[i][j]=0;
                score=score+filledCell[i-1][j];
                userScore.innerHTML=score;
                updateValue(i,j);
                updateValue(i-1,j);
            }

             else if(filledCell[i][j] && !filledCell[i-1][j])
            {
                filledCell[i-1][j] =filledCell[i][j];
                filledCell[i][j]=0;
                updateValue(i,j);
                updateValue(i-1,j);
            }

        }
    }
}

