import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "햄터",
        comment: "간짜장 나도 줘...",
    },
    {
        name: "hohojudy",
        comment: "리액트 어려워",
    },
    {
        name: "망곰이",
        comment: "지치지마!!!",
    },
]

function CommentList(props) {
    return (
        <div>
            {
               comments.map((item) => {
                    return(
                       <Comment name={item.name} comment={item.comment} />
                    );
               })
            }
        </div>
    );
}

export default CommentList;
