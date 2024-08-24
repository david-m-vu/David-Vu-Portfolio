import "./Contact.css";
import me from "../../assets/me.png";

const Contact = () => {
    return (
        <div id="Contact" className="px-4 pb-4 inline-flex items-start flex-col gap-4">
                        <div className="rounded-lg p-2 bg-black">
                <img src={me} className="rounded-lg w-[10rem]"></img>
            </div>
            <div>
                <p>Berkeley, CA</p>
                <p>davidvu7887@gmail.com (email)</p>
                <p>david.vu@berkeley.edu (school email)</p>
            </div>

        </div>
    )
}

export default Contact;