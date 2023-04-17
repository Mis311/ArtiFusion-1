
//scenes prop will be an array of objects, each containing an image and text property
const VisualNovelContent = ({ scenes }) => {
  return (
    <div>
      {scenes.map((scene, index) => (
        <div key={index}>
          <img src={scene.image} alt={`Visual novel scene ${index + 1}`} />
          <div>{scene.text}</div>
        </div>
      ))}
    </div>
  );
};

export default VisualNovelContent;
