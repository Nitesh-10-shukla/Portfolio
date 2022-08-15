const ProgressBar = (props) => {
    const { bgcolor, completed,lang } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: '20px',
      textAlign: 'right'
    }
  
  
    return (
      <div className="pb-2">
        <h1 className="text-[16px] font-normal px-2 ">{lang}</h1>
        <div style={fillerStyles}>
          <span className="flex items-center justify-end pr-2 text-[12px] text-white font-semibold">{`${completed}%`}</span>
        </div>
        
      </div>
    );
  };
  export default ProgressBar;
  