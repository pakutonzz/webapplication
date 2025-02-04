import React, { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "grey",
    height: "100vh",
    padding: "20px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: "20px",
    color: "gold",
  },
  card: {
    backgroundColor: "#fdebd7",
    width: "800px",
    padding: "20px",
    borderRadius: "8px",
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    textAlign: "left",
    paddingRight: "20px",
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
  voteContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  voteButton: {
    backgroundColor: "#f1eeef",
    padding: "5px 10px",
    cursor: "pointer",
    border: "1px solid black",
    margin: "0 5px",
  },
  voteCount: {
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#89e122",
    padding: "5px 10px",
    border: "3px solid #963de6",
    borderRadius: "5px",
    color: "#963de6",
  },
};

const Card = ({ name, description, details, image, maxVotes = 10, minVotes = 0 }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = (change) => {
    const newVotes = votes + change;
    if (newVotes > maxVotes) return alert("Cannot Vote more");
    if (newVotes < minVotes) return alert("Cannot Unvote");
    setVotes(newVotes);
  };

  return (
    <div style={styles.card}>
      <div style={styles.contentContainer}>
        <div style={styles.textContainer}>
          <h2>{name}</h2>
          <h3>{description}</h3>
          <p>{details}</p>
        </div>
        <div style={styles.imageContainer}>
          <img src={image} alt={name} style={styles.image} />
        </div>
      </div>
      <VoteBar votes={votes} handleVote={handleVote} />
    </div>
  );
};

const VoteBar = ({ votes, handleVote }) => (
  <div style={styles.voteContainer}>
    <button onClick={() => handleVote(1)} style={styles.voteButton}>Click to Vote</button>
    <span style={styles.voteCount}>{votes === 0 ? "MIN" : votes === 10 ? "MAX" : votes}</span>
    <button onClick={() => handleVote(-1)} style={styles.voteButton}>Click to Unvote</button>
  </div>
);

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>โหวตอาหาร</h1>
      <Card
        name="อาหารคาว"
        description="ข้าวผัด"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula nisi, porta luctus elit vitae, faucibus commodo est. Vivamus iaculis lectus ac neque ullamcorper, eu aliquet arcu bibendum. Morbi urna diam, porttitor non sapien non, sagittis luctus leo. Quisque a metus nunc. In hendrerit accumsan nibh vestibulum molestie."
        image="https://www.maggi.co.th/sites/default/files/srh_recipes/83a50d7c0bfbf8e82e864c6c5b66fc59.jpg"
      />
      <Card
        name="อาหารหวาน"
        description="บัวลอย"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula nisi, porta luctus elit vitae, faucibus commodo est. Vivamus iaculis lectus ac neque ullamcorper, eu aliquet arcu bibendum. Morbi urna diam, porttitor non sapien non, sagittis luctus leo. Quisque a metus nunc. In hendrerit accumsan nibh vestibulum molestie."
        image="data:image/jpeg;base64,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"
      />
    </div>
  );
};

export default App;
