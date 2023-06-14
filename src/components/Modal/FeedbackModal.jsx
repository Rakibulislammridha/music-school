import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Swal from 'sweetalert2';

const FeedbackModal = ({ closeModal, isOpen, id, refetch}) => {

    const modalHandler = (event) =>{
        event.preventDefault()
    
        const form = event.target;

        const feedback= form.feedback.value;

        fetch(`https://learn-music-server-rakibulislammridha.vercel.app/subjects/feedback/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({feedback})
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            closeModal()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Feedback send !",
                showConfirmButton: false,
                timer: 1500,
              });
        })
    
      }
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Send Feedback
                  </Dialog.Title>
                  <div>
                  <form onSubmit={modalHandler} className="mt-2">
                  <input 
                  type="text"
                  name="feedback"
                  placeholder="Type Your Feedback" 
                  className="input input-bordered input-primary w-full max-w-xs" />

                  <button type="submit" className='btn btn-sm  mt-4 bg-orange-600 text-white hover:bg-orange-600'>Send Feedback</button>
                  </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default FeedbackModal;