const ticket=()=>{



    return new Promise((resolve,reject)=>{
  
  
  
      setTimeout(() => {
  
  
  
        console.log("here are the tickets");
  
  
  
        resolve('tickets');
  
  
  
      }, 3000);
  
  
  
    })
  
  
  
  }
  
  
  
  
  
  
  
  const popcorn=()=>{
  
  
  
    return new Promise((resolve,reject)=>{
  
  
  
      setTimeout(() => {
  
  
  
        console.log("here are the popcorn");
  
  
  
        resolve('popcorn');
  
  
  
      }, 3000);
  
  
  
    })
  
  
  
  }
  
  
  
  
  
  
  
  const butter=()=>{
  
  
  
    return new Promise((resolve,reject)=>{
  
  
  
      setTimeout(() => {
  
  
  
        console.log("here are the butter");
  
  
  
        resolve('butter');
  
  
  
      }, 3000);
  
  
  
    })
  
  
  
  }
  
  
  
  
  
  const coldDrinks=()=>{
  
  
  
    return new Promise((resolve,reject)=>{
  
  
  
      setTimeout(() => {
  
  
  
        console.log("here are the cold drink");
  
  
  
        resolve('cold drink');
  
  
  
      }, 3000);
  
  
  
    })
  
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  ticket().then((t)=>{
  
  
  
  popcorn().then((p)=>{
  
  
  
  butter().then((b)=>{
  
  
  
  coldDrinks().then((cd)=>{
  
    console.log("we have all now "+ t+" "+p+" "+b+" "+cd+" lets go to movie");
  
  })
  
  
  
  })
  
  
  
  })
  
  
  
  })
  
  
  
  