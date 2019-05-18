import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (!props.song) {
    return <div>Select the song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p style={{margin: 0}}>Title: {props.song.title} </p>
      <p>Duration: {props.song.duration} </p>
    </div>
  )
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
