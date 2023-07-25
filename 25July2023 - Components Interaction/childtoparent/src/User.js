function User(props) {
    var user = {
        name: "kiran",
        address: "hyderabad"
    }

    props.userData(user);
    return (
        <div>
            <h1>I am user component!</h1>
        </div>
    )


}
export default User;