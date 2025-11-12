
const Contact = () => {
    return (
        <section className='contact c-space section-spacing'>
            <h2 className='text-3xl font-bold mb-6 text-white text-shadow-card border rounded-lg p-4 shadow-smfixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>Contact Us!</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value=/>
                <div className=' p-10 input-box text-shadow-card border rounded-lg backdrop-blur-2xl inset-x-0 bg-primary/20'>
                    <div className='mb-6'>
                        <label className='bold z-20 w-full mb-2 block'>Name</label>
                        <input type="text" className="field-input w-full p-3 rounded-md" placeholder='Enter your name...' required />
                    </div>

                    <div className="mb-6">
                        <label className='bold z-20 w-full mb-2 block'>Email Address</label>
                        <input type="email" className="field-input mb-6" placeholder="Enter your email..." required />
                    </div>

                    <div className='mb-6'>
                        <label className="bold z-20 w-full mb-2 block">Your Message</label>
                        <textarea
                            className="field-input w-full p-3 rounded-md h-32 resize-y"
                            placeholder={'Enter your message...'}
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <button type="submit" className='field-input w-full p-3 rounded-md bg-primary text-white hover:bg-primary/80 transition duration-300'>Send Us a Message!</button>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default Contact