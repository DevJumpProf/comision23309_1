const getNameAsync = async (idPost) => {
  try {
    let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    /*   console.log(resPost); */
    let post = await resPost.json();
   /*  console.log(post); */

   let resUser = await  fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
   let user = await resUser.json();
/*    console.log(user); */
   console.log(`${user.name} escribio el post n: ${post.id} y vive en la calle ${user.address.city}`);

  } catch (error) {
    console.log(error);
  }
};
getNameAsync(71);
