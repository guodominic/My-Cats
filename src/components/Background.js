
function Background({ clickChange, colorOneChange, colorTwoChange, colorOne, colorTwo }) {
    return (
        <div className=" br3 b--white purple dim">
            <input
                className="color1"
                type="color"
                value={colorOne}
                onChange={colorOneChange} />
            <input
                className='button1 pt1 ba'
                type='button'
                value="Random Background"
                onClick={clickChange} />
            <input
                className="color2"
                type="color"
                value={colorTwo}
                onChange={colorTwoChange} />
            <h3 className="white f6"></h3>
        </div>
    )
};
export default Background;
