import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 리액트" numOfPage={350}></Book>
            <Book name="처음 만난 뷰" numOfPage={289}></Book>
        </div>
    );
}

export default Library;