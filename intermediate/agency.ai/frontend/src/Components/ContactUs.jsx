import toast from "react-hot-toast";
import assets from "../assets/assets"
import Title from "./Title"

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "ad5b7977-5ef1-4d54-856f-dd50b05099a1");

        try {

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission")
                event.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }


    };

    return (
        <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white" id='contact-us'>
            <Title title="Reach out ot us" desc="From strategy to exucution, we craft digital solutions that move your business forward." />

            <form onSubmit={onSubmit}
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">

                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img className="" src={assets.person_icon} />
                        <input name="name" type="text" placeholder="Enter your Name" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium">Email ID</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img className="" src={assets.email_icon} />
                        <input name="email" type="email" placeholder="Enter your Email" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows={8} placeholder="Enter your Message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-300" required />
                </div>

                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Submit <img src={assets.arrow_icon} className="w-4" />
                </button>

            </form>
        </div>
    )
}

export default ContactUs
