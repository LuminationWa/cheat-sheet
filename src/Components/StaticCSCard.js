//CHEATSHEET CARDS FOR static VIEW

const StaticCSCARD = (props) => {
  const info = props.object;
  const tags = [];
  for (const tag of info.tags) {
    tags.push(<h3>{tag}</h3>);
  }
  return (
    <div className="CS-card-static">
      <h1>{info.name}</h1>
      <h2>{info.description}</h2>
      <div className="tags">{tags}</div>
    </div>
  );
};

export default StaticCSCARD;
