const getNameFetch = (idPost) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => {
        /*    console.log(res) */
        return res.json();
      })
      .then((post) => {
        /*  console.log(post) */
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            return res.json();
          })
          .then((user) => {
            console.log(`${user.name} escribio el post n: ${post.id} y vive en la calle${user.address.street}`);
          });
      });
  } catch (error) {
    console.log(error);
  }
};
getNameFetch(44);
