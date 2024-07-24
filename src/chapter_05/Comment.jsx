import React from 'react';

const styles = {
    wapper: {
      margin: 10,
      padding: 0,
      display: "flex",
      flexDirection : "row",
      border: "1px solid grey",
      borderRadius: 15,
    },
    imageContainer: {},
    iamge: {
        width: 50,
        heigh: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
}

function Comment(props) {
    return (
      <div style={styles.wapper}>
        <div style={styles.imageContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                 alt="1"
                 style={styles.iamge} 
            />
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    );
}

export default Comment;