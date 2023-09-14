const posts=[{title:'first post'},{title:'2nd post'}];



const updateLastUserActivityTime=()=>{



    return new Promise((resolve,reject)=>{



        setTimeout(() => {



            const d=new Date();            



            const time=d.getTime();



           resolve(time);



        }, 1000);



    })



}







const createPosts=(updateLastUserActivityTime)=>{



    return new Promise((resolve, reject)=>{



        setTimeout(() => {



            posts.push({title:'3rd post'});



            resolve(updateLastUserActivityTime);



        }, 1000);



    })



}







const deletePosts=(updateLastUserActivityTime)=>{



    return new Promise((resolve, reject)=>{



        setTimeout(() => {



            posts.pop();



            resolve(updateLastUserActivityTime);



        }, 1000);



    })



}





const postsUpdate=async ()=>{

    const userActivity= await updateLastUserActivityTime();

    console.log(userActivity);



    const newPst1=await createPosts(userActivity);

    console.log(newPst1);

    console.log(posts);



    const postDel=await deletePosts(newPst1);

    console.log(postDel);

    console.log(posts);

}



postsUpdate();