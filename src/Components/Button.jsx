
const Button = ({children, version, size }) =>
{
    return(
        <button className ={`btn ${version} ${size}`}>{children}</button>
    );

}
Button.defaultProps =
{
    version :"blue",
    size:""
}
export default Button;
