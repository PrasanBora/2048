
const gameBoard =document.querySelector(".gameBoard")
const cell =document.querySelectorAll(".box");
const userScore= document.querySelector(".points")
// cell[0].innerHTML=34;

let score =0;
let filledCell=[[0 , 0 , 0 , 0] , [0 , 0 , 0 , 0]
,[0 , 0 , 0 , 0],[0 , 0 , 0 , 0]]; //array to mark cell with value 



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
    let newValue =Math.floor(Math.random()*16);
    
    if(filledCell[newValue]=== 1)
    newPosition();
    else 
    cell[newValue].innerHTML= generate();
    filledCell[newValue]=1;
}
newPosition();

document.querySelector("body").addEventListener('keyup',(e)=>{
    // console.log(e.key);
    switch(e.key)
    {
            case "ArrowUp":
                newPosition();
                moveUp();
              break

            case "ArrowDown":
                newPosition();
                moveDown();
                break

            case "ArrowRight":
                newPosition();
            break

            case "ArrowLeft":
                newPosition();
            break  
    }
});

// console.log(filledCell[11]);

// function merge( to , from )
// {
//    if(cell[to].innerHTML===cell[from].innerHTML)
//    {
//     cell[from].innerHTML=2*cell[from].innerHTML;
//     score=score+Number(cell[from].innerHTML);
//     userScore.innerHTML=score;
//     cell[to].innerHTML="";
//     filledCell[to]=0;
//     return;
//    }
//    else 
//    {
//     return;
//    }
// }

// function moveUp ()
// {
//     for(let i=4 ; i<16;i++)
//      {
//         // console.log(filledCell[i] );

        
//         if(filledCell[i]===1 && filledCell[i-4]===1)
//         {  
//             merge(i-4,i);
//         }
//         if(filledCell[i]===1 && filledCell[i-4]===0)
//         {
//             cell[i-4].innerHTML=cell[i].innerHTML;
//             cell[i].innerHTML="";
//             filledCell[i-4]=1;
//             filledCell[i]=0;

//             // console.log(filledCell[i] , filledCell[i-4],cell[i].innerHTML,cell[i-4].innerHTML );

//         }

//       }  
// }

// function moveDown ()
// {
//     for(let i=0 ; i<12;i++)
//      {
//         console.log(filledCell[i] );

//         if(filledCell[i]===1 && filledCell[i+4]===1)
//         {  
//             merge(i,i+4);
//         }
//         if(filledCell[i]===1 && filledCell[i+4]===0)
//         {
//             cell[i+4].innerHTML=cell[i].innerHTML;
//             cell[i].innerHTML="";
//             filledCell[i+4]=1;
//             filledCell[i]=0;

//             // console.log(filledCell[i] , filledCell[i-4],cell[i].innerHTML,cell[i-4].innerHTML );

//         }

//       }  
// }