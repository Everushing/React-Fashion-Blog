function Header(props) {
    return (
        <div style= {{backgroundcolor: props.bgcolor|| 'white'}}>
            <h1>{props.title}</h1>
            <h2>Better Dressed People</h2>
        </div>
    )


}


export default Header;