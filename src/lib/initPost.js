// agregar post con data del usuario
export const sendingPost= (textToPosted) =>
  firebase.firestore().collection('posts').add({
    content: textToPosted,
    UID: firebase.auth().currentUser.uid,
    name: firebase.auth().currentUser.name,
   timePost: new Date()
  })
  .then(docRef => {
    console.log("Status Saved");
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  })
// obtener posts automaticamente con onSnapshot
/*export const getingPost = (callback, user) => {
  if (user !== null) {
    firebase.firestore().collection('posts').orderBy('date', 'desc') 
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        return callback(data);
      });
  } 
}; */

// Eliminar Publicacion
export const deletePost = (idPost) =>
  firebase.firestore().collection('posts').doc(idPost).delete();



// CREAR POST
/*  const database = firebase.firestore();

//Funcion para guardar post en firebase
export const sendingPost = (textToPosted) =>{
  console.log('esta guardando' + textToPosted + 'to Firestore');
  database.collection('post').add({
    message: textToPosted,
    timePost: new Date()
  })
  .then(docRef => {
    console.log("Status Saved");
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  })
}
//funcion traer post
 export const getingPost = (textToPosted) => {
    console.log('esta guardando' + textToPosted + 'to Firestore');
    const collectionPost = database.collection('post')
    const collectionPostForTime = collectionPost.orderBy("timePost","desc")
    collectionPostForTime.onSnapshot((querySnapshot) =>{
      querySnapshot.forEach((doc) =>{
        contentMessage.innerHTML = `

        <p id="postMessage">${doc.data().message}</p>
        <h1>${doc. timePost} </h1>
        
        `
    })
  })
 }  

 */