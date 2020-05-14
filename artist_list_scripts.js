

if (screen.width > 813) {
    console.log("test working");

  let linkCollection = document.getElementsByClassName('link');

    for (var i = 0; i < linkCollection.length; i++) {
        linkCollection[i].addEventListener("mouseover", function(event) {

            let dataId = event.target.dataset.id;
            console.log(`YY->dataId from link is ${dataId}`);

            let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
            // console.log(linkedImage);
            if(linkedImage){
              linkedImage.style.display = "unset";
            }
         })
    }

    for (var i = 0; i < linkCollection.length; i++) {
        linkCollection[i].addEventListener("mouseout", function(event) {

            let dataId = event.target.dataset.id;
            console.log(` XX->dataId from link is ${dataId}`);

            let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
            // console.log(linkedImage);
            if(linkedImage){
              linkedImage.style.display = "none";
            }
        })
  }
}



// let linkCollection = document.getElementsByClassName('link');
//
//   for (var i = 0; i < linkCollection.length; i++) {
//       linkCollection[i].addEventListener("mouseover", function(event) {
//
//           let dataId = event.target.dataset.id;
//           console.log(`YY->dataId from link is ${dataId}`);
//
//           let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
//           // console.log(linkedImage);
//           if(linkedImage){
//             linkedImage.style.display = "unset";
//           }
//        })
//   }

//   for (var i = 0; i < linkCollection.length; i++) {
//       linkCollection[i].addEventListener("mouseout", function(event) {
//
//           let dataId = event.target.dataset.id;
//           console.log(` XX->dataId from link is ${dataId}`);
//
//           let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
//           // console.log(linkedImage);
//           if(linkedImage){
//             linkedImage.style.display = "none";
//           }
//       })
// }
