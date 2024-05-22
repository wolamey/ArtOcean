import firebase from 'firebase/compat/app'
import firebaseConfig from "../../firebaseConfig.js";
import 'firebase/compat/database'
import { useQuery, useMutation, useQueryClient } from "react-query";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database()

console.log(12);


// export async function addUser(userData){
//     const ref = db.ref('users').push();
//     const newKey = ref.key;
//     const dataWithKey = { ...userData, key: newKey };
//     await ref.set(dataWithKey);
//     console.log(newKey);
// }

export async function getAllUsers(){
    const snapshot = await db.ref('users').once('value');
    return snapshot.val();
}

export function useEditData() {
    const queryClient = useQueryClient()
    return useMutation(async ({id, updateData})=>{
        await db.ref(`users/${id}`).set(updateData)
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('user')
        }
    })
}