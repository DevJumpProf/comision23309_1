const getNameAxios = async (idPost) => {
  try {
    const resPost = await axios(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    /*      console.log(resPost.data); */
    const resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    document.write(
      `${resUser.data.name} escribio el post n: ${resPost.data.id} y vive en la calle ${resUser.data.address.street}`
    );
  } catch (error) {
    console.log(error);
  }
};
getNameAxios(8);
