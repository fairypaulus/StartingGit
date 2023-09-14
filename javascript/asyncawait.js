const ticket=()=>{

    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        console.log("here are the tickets");
  
        resolve('tickets');
  
      }, 3000);
  
    })
  
  }
  
  
  
  const popcorn=async ()=>{
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        console.log("here are the popcorn");
  
        resolve('popcorn');
  
      }, 3000);
  
    })
  
  }
  
  
  
  const butter=async ()=>{
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        console.log("here are the butter");
  
        resolve('butter');
  
      }, 3000);
  
    })
  
  }
  
  
  
  const coldDrink=async ()=>{
  
    return new Promise((resolve,reject)=>{
  
      setTimeout(() => {
  
        console.log("here are the cold drink");
  
        resolve('coldzdrink');
  
      }, 3000);
  
    })
  
  }
  
  
  
  
  
  async function movie(){
  
    const tkt= await ticket();
  
    console.log(tkt)
  
    const pop= await popcorn();
  
    console.log(tkt+" "+pop)
  
    const btr= await butter();
  
    console.log(tkt+" "+pop+" "+btr)
  
    const cd= await coldDrink();
  
    console.log(tkt+" "+pop+" "+btr+" "+cd)
  
  }
  
  movie();