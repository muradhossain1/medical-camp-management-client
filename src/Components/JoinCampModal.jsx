/* eslint-disable react/prop-types */


const JoinCampModal = ({ camp }) => {
    console.log(camp)
    return (
        <div>
            <button className="px-6 py-2 text-base text-white font-medium my-2 bg-gray-700 rounded-md hover:bg-gray-800" onClick={() => document.getElementById('my_modal_5').showModal()}>Join Camp</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JoinCampModal;