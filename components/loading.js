const Loading = (props) => {
  const {style, spinnerSize} = props
  return (
    <div style={style} className="spinner-container">
      <div style={{'width': spinnerSize, 'height': spinnerSize}} className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
