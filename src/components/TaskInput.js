import React, { useState } from 'react'
import { addDoc, serverTimestamp, collection } from "@firebase/firestore";
// import 'firebase/firestore'
import db from '../utils/firebase'
 





export default function TaskInput() {

    const [input,setInput] = useState('')
    

    const handleForm = async(e) => {
        //prevent default so page doesn't reload
        e.preventDefault();

        //create a document in the collection by passing the object
        await addDoc(collection(db,"tasks"),{
    
             //Don't forget to import firebase from firebase for this
            date: serverTimestamp(),
            task: input
        })

        //reset the input field once we hit enter
        setInput('')

    }

    return (
        <form onSubmit = {handleForm} className = "taskInput">
            <input
                type = "text"
                value = {input}
                placeholder = "Type your task..."
                //get the target that sent the event and grab its value
                onChange = {(e)=>{setInput(e.target.value)}}
            />
        </form>
    )
}
