const ProgressBar = (props) => {
    const { bgcolor, completed,lang } = props;
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: '20px',
      textAlign: 'right'
    }
  
  
    return (
      <div className="pb-2">
        <span className="text-lg font-semibold">{lang}</span>
        <div style={fillerStyles}>
          <span className="flex items-center justify-end pr-2 text-[12px] text-white font-semibold">{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  export default ProgressBar;
  