import "./Explore.css";
const Explore = () => {
  return (
    <>
      <div>
        <h1>Explore</h1>
        <p>
          Could you tell how many conflicts are active today among all the
          people in the world?
        </p>
      </div>
      <br></br>
      <div>
        <h2>Desinformation and manipulation:</h2>
        <p>
          {" "}
          The manipulation of information makes us think that the only conflicts
          today are the ones that are visible in the mainstream media. Tactics
          of desinformation campaigns are becoming more sophisticated, we need
          to build new frameworks of analysis to strengthen our collective
          defenses. A database of active conflicts can change our perception of
          reality.
          <button onClick={() => ShowMeMore(text)}> Show me more </button>{" "}
        </p>
      </div>
    </>
  );
};

export default Explore;
