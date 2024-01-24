// import firestore from '@react-native-firebase/firestore';
// export const fetchData = async () => {
//     console.log('object')
//     try {
//       const collectionRef =  firestore().collection('PostData');
//       const snapshot = await collectionRef.get();
  
//       const newData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
  
//       return newData
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


  //export  const addData = async () => {
  //   try {
  //     let data = await firestore().collection('IPlantAdd').doc().set({name:'rose'});
  //     console.log(data, 'sergfbvc');
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   addData();
  // }, []);


export const BaseUrl = 'https://plants-backend.onrender.com/';
export const LAYER1 = 'homeLayer1';
export const LAYER3 = 'homeLayer3';
export const LAYER4 = 'homeLayer4';
export const PRODUCT = 'product'
