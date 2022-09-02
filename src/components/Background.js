
function Background({ clickChange, colorOneChange, colorTwoChange, colorOne, colorTwo }) {
    return (
        <div >
            <input
                className="color1 br3 b--white dim pointer"
                type="color"
                value={colorOne}
                onChange={colorOneChange} />
            <input
                className='button1 pt1 br3 ba b--white purple dim pointer'
                type='button'
                value="Random Background"
                onClick={clickChange} />
            <input
                className="color2 br3 b--white dim pointer"
                type="color"
                value={colorTwo}
                onChange={colorTwoChange} />
            <h3 className="white f6"></h3>
        </div>
    )
};
export default Background;