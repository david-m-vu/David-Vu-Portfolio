import "./Contact.css";
import haas from "../../assets/haas.jpeg";

const Contact = () => {
    return (
        <div id="Contact" className="px-4 pb-4 inline-flex items-start flex-col gap-4">
                        <div className="rounded-lg p-2 bg-black">
                <img src={haas} className="rounded-lg w-[15rem]"></img>
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