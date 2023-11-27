import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/new-recipe.css'
import '../App.css';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import {ref, uploadBytes, getStorage, getDownloadURL} from 'firebase/storage';
import { useState } from "react";
import { storage } from "../App";



export default function NewRecipe({addToDB, db}){
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState('');

    async function UploadImage(){
        if(imageUpload === null) return;
        const imageRef = ref(storage, `image/${imageUpload.name}`);
            await uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded");
        })      
        await getDownloadURL(imageRef).then((url) => {
            setImageURL(url)
            console.log(url);
    })
    }

    function selectFile(event){
        document.getElementById('getFile').click();
        event.preventDefault();
    }
    function addRec(event){
        const name = document.getElementById('recipename').value;
        const descr = document.getElementById('descr').value;
        const cont = document.getElementById('cont').value;
        const currDate = new Date();
        addToDB(name, descr, cont, imageURL, currDate);
        event.preventDefault();
    }
    return (
        <section className="createrecipe" id="createrecipe">
            <h1 className="text-white">Create new recipe</h1>
            <div className="hr"></div>
            <form className="form upload">
            <div className="photo">
                <h3>Upload your photo</h3>
                <button
                className="fileupload"
                onClick={(event) => {
                    selectFile(event);
                    UploadImage();

                }}>
                <i className="fas fa-file-upload" />
                <br />
                <br />
                Upload your photo here
                </button>
                <input type="file" id="getFile" style={{ display: "none" }} onChange={(event) => {
                    setImageUpload(event.target.files[0])
                }}/>
            </div>
                <div className="namedesc">
                    <h2>Write a name for your recipe</h2>
                    <label htmlFor="recipename">
                    Name: <input className="form-control" id="recipename" type="text" />
                    </label>
                    <h2>Write a short description</h2>
                    <textarea
                    id="descr"
                    className="form-control" 
                    placeholder="This is a cheap service..."
                    defaultValue={""}
                    />
                    <h2>Choose category/ies</h2>
                    <div className="checkgrid">
                    <label htmlFor="tech">
                        <input type="checkbox" />
                        Technology
                    </label>
                    <label htmlFor="tech">
                        <input type="checkbox" />
                        Technology
                    </label>
                    <label htmlFor="tech">
                        <input type="checkbox" />
                        Technology
                    </label>
                    </div>
                    <h2>Write your process</h2>
                    <textarea
                    id="cont"
                    className="form-control" 
                    placeholder="This is a cheap service..."
                    defaultValue={""}
                    />
                    <button className="btn btn-warning" onClick={addRec}>Submit</button>
                </div>
            </form>
        </section>
    )
}