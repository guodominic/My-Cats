
function Background({ clickChange, colorSelectChange }) {
    return (
        <div >
            <input
                className="color1 br3 b--white"
                type="color"
                onChange={colorSelectChange} />
            <input
                className='button1 pt1 br3 ba b--white'
                type='button'
                value="Random Background"
                onClick={clickChange} />
            <input
                className="color2 br3 b--white"
                type="color"
                onChange={colorSelectChange} />
            <h3></h3>
        </div>
    )
};
export default Background;