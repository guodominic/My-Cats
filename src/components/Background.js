
function Background({ clickChange, colorSelectChange }) {
    /*     let css = document.querySelector("h3");
        let color1 = document.querySelector(".color1");
        let color2 = document.querySelector(".color2");
        let body = document.getElementById("gradient");
        let button1 = document.querySelector(".button1");
        let letters = "0123456789ABCDEF";
    
        function setGradient() {
            body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
            css.textContent = color1.value + "<=Color-Code=>" + color2.value;
        }
    
        function randomColor() {
            let color3 = "#";
            let color4 = "#";
            for (let i = 0; i < 6; i++) {
                color3 += letters[Math.floor(Math.random() * 16)];
                color4 += letters[Math.floor(Math.random() * 16)];
            }
            body.style.background = "linear-gradient(to right, " + color3 + ", " + color4 + ")";
            color1.style.background = color4;
            color2.style.background = color3;
            button1.style.background = color4;
            color1.setAttribute("value", color3);
            color2.setAttribute("value", color4);
            css.textContent = color3 + "<=Color-Code=>" + color4;
        }
        setGradient();
        color1.addEventListener("input", setGradient);
        color2.addEventListener("input", setGradient);
        button1.addEventListener("click", randomColor); */
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