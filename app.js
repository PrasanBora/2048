
const gameBoard =document.querySelector(".gameBoard")

const userScore= document.querySelector(".points")


let filledCell;
let endGame ;
let score;

function startGame () { score =0;
filledCell=[[0 , 0 , 0 , 0] , [0 , 0 , 0 , 0]
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
  
}

// function to genrate a new cell value i.e 2 or 4
generate =()=>{

  let newValue =Math.floor(Math.random()*2);
  if(newValue===0)
  { return 2;}
  else 
  { return 4;}
}


// function to get a new position for new cell 
newPosition=()=>{
      
    if(canPlay()===1)
    {
        let newi =Math.floor(Math.random()*4);
    let newj =Math.floor(Math.random()*4);
    
    if(filledCell[newi][newj]!=0)
    {
       newPosition();
    }
    else 
    filledCell[newi][newj]=generate();
    updateValue(newi,newj);
}
else alert("you loose refresh page for new game ");
}

startGame();

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
                moveRight();
                newPosition();
            break

            case "ArrowLeft":
                moveLeft();
                newPosition();
            break  
    }
});


function updateValue(i,j)
{
            if(filledCell[i][j]>0)
            {
                let cell=document.querySelector(`#index${i}-${j}`);
                  cell.innerHTML=filledCell[i][j];
                  cell.classList.add(`value${filledCell[i][j]}`);

            }
            else
            {
                document.querySelector(`#index${i}-${j}`).innerHTML="";  
            }
        }
 
function moveUp()
{
    for(let j=0;j<4;j++)
    {
        // console.log("--     555555555--");
        for(let i=3;i>0;i--)
        {
            // console.log(filledCell[i][j]);
            // console.log("----");
            if(filledCell[i][j]===filledCell[i-1][j] && filledCell[i][j])
            {  
                // merge
                filledCell[i-1][j]=2*filledCell[i][j];
                filledCell[i][j]=0;
                score=score+filledCell[i-1][j];
                userScore.innerHTML=score;
                updateValue(i,j);
                updateValue(i-1,j);
                i--;
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

function moveDown()
{
    // console.log("move down called");
   for(let j=0;j<4;j++)
   {
    for( let i=0;i<3;i++)
    {
        // console.log("loop is great ");
      if(filledCell[i][j]===filledCell[i+1][j] && filledCell[i][j])
      {
        filledCell[i+1][j]=2*filledCell[i][j];
        filledCell[i][j]=0;
        score=score+filledCell[i+1][j];
        userScore.innerHTML=score;
        updateValue(i,j);
        updateValue(i+1,j);
        i++;
      }

      else if(filledCell[i][j] && !filledCell[i+1][j])
      {
        filledCell[i+1][j]=filledCell[i][j];
        filledCell[i][j]=0;
        updateValue(i,j);
        updateValue(i+1,j);
      }
    }
   }
}

function moveLeft()
{
    for( i=0;i<4;i++)
    {
        for( j=3;j>0;j--)
        {
            if(filledCell[i][j]===filledCell[i][j-1] && filledCell[i][j])
            {
               filledCell[i][j-1]=2*filledCell[i][j];
               filledCell[i][j]=0;
               updateValue(i,j);
               updateValue(i,j-1);
               score=score+filledCell[i][j-1];
               userScore.innerHTML=score;
               j--;
            }

            else if(filledCell[i][j] && !filledCell[i][j-1])
            {
                filledCell[i][j-1] =filledCell[i][j];
                filledCell[i][j]=0;
                updateValue(i,j);
                updateValue(i,j-1);
            }
        }
    }
}

function moveRight()
{ for(let i=0;i<4;i++)
    {
     for( let j=0;j<3;j++)
     {
        //  console.log("loop is great ");
       if(filledCell[i][j]===filledCell[i][j+1] && filledCell[i][j])
       {
         filledCell[i][j+1]=2*filledCell[i][j];
         filledCell[i][j]=0;
         score=score+filledCell[i][j+1];
         userScore.innerHTML=score;
         updateValue(i,j);
         updateValue(i,j+1);
         i++;
       }
 
       else if(filledCell[i][j] && !filledCell[i][j+1])
       {
         filledCell[i][j+1]=filledCell[i][j];
         filledCell[i][j]=0;
         updateValue(i,j);
         updateValue(i,j+1);
       }
     }
    }

}

function canPlay()
{ 
    for(let i=0;i<4;i++)
    {
     for( let j=0;j<4;j++)
     {
      if(filledCell[i][j]==0){
        return 1;
      }
}
}
return 0 ;
}