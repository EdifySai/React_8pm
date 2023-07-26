import { useState } from 'react';
function Contact() {
    const [contact, setContact] = useState(
        {
            username: '',
            message: ''
        }
    )
    const stateHandler = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setContact({ ...contact, [name]: value }) // {username: '',message: '',username:"ravi"} = {message:'',username:'ravi'}

    }
    const contactBtn = (event) => {
        event.preventDefault();
        console.log("contact", contact);
    }
    return (
        <div>

            <form>
                <input onChange={stateHandler} type="text" name="username" placeholder="username"></input>
                <input onChange={stateHandler} type="text" name="message" placeholder="message"></input>
                <button onClick={contactBtn}>Contact</button>
            </form>
        </div>
    )


}
export default Contact;