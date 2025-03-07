import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'
function Termcondition() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className='w-full h-auto bg-gray-900 '>
            <div className="pt-6 relative z-50">
                <Navbar />
            </div>
            <div className=" text-white  p-6 flex justify-center ">
                <div className="max-w-3xl w-full">
                    <h1 className="text-2xl md:text-[62px] font-bold text-center">TERMS AND CONDITIONS</h1>
                    <p className="text-center text-gray-400 text-[20px] mt-1">Last updated:<span className='text-white'> 25/01/2025 </span></p>
                </div>
            </div>



            <div className="mt-6 space-y-6 lg:px-20 pb-6">

                <div className="w-full p-2 rounded-md flex flex-col gap-4">
                    <h2 className="text-[38.85px] font-semibold text-white mb-2">Description</h2>
                    <p className="text-gray-300 text-[20px]">Elit class porta interdum commodo nisi sociosqu maecenas curae. Ad in nullam libero commodo magnis tristique, accumsan etiam viverra. Massa arcu sociosqu nascetur magna parturient morbi ultrices senectus. Consectetur venenatis penatibus primis tristique ac ultrices cras suscipit! Porta auctor laoreet dui nisl tempor</p>
                    <p className="text-gray-300 text-[20px]">Eu netus turpis himenaeos congue urna, volutpat laoreet dignissim. Natoque bibendum ante tempor sem vestibulum tortor urna potenti. Vulputate augue porta elementum eget; ut imperdiet. Velit himenaeos etiam eu est egestas dis nullam fringilla sit.</p>
                    <p className="text-gray-300 text-[20px]"> Quam maximus cras augue suspendisse cubilia sed vulputate congue sagittis. Turpis commodo fermentum aliquam facilisis rutrum senectus maximus. Ut donec natoque ac finibus senectus faucibus ante. Facilisi risus auctor ex lacus scelerisque mauris, nostra sed orci.</p>
                    <p className="text-gray-300 text-[20px]">Iaculis est rutrum vulputate nisi erat nullam sed. Consequat orci maecenas purus cursus pellentesque rutrum hac. Proin parturient dignissim elementum magnis aptent fusce curae. Accumsan vestibulum vel laoreet dui at tellus nisi dolor.</p>
                    <p className="text-gray-300 text-[20px]">
                        Parturient nunc montes, habitasse ligula habitant facilisi. Luctus dis penatibus ad augue rutrum. Non gravida sociosqu pellentesque cursus dictum. </p>

                </div>


                <div className="w-full p-4 rounded-md flex flex-col gap-4">
                    <h2 className="text-[38.85px] font-semibold text-white mb-2">Description</h2>
                    <p className="text-gray-300 text-[20px]">Elit class porta interdum commodo nisi sociosqu maecenas curae. Ad in nullam libero commodo magnis tristique, accumsan etiam viverra. Massa arcu sociosqu nascetur magna parturient morbi ultrices senectus. Consectetur venenatis penatibus primis tristique ac ultrices cras suscipit! Porta auctor laoreet dui nisl tempor</p>
                    <p className="text-gray-300 text-[20px]">Eu netus turpis himenaeos congue urna, volutpat laoreet dignissim. Natoque bibendum ante tempor sem vestibulum tortor urna potenti. Vulputate augue porta elementum eget; ut imperdiet. Velit himenaeos etiam eu est egestas dis nullam fringilla sit.</p>
                    <p className="text-gray-300 text-[20px]"> Quam maximus cras augue suspendisse cubilia sed vulputate congue sagittis. Turpis commodo fermentum aliquam facilisis rutrum senectus maximus. Ut donec natoque ac finibus senectus faucibus ante. Facilisi risus auctor ex lacus scelerisque mauris, nostra sed orci.</p>
                    <p className="text-gray-300 text-[20px]">Iaculis est rutrum vulputate nisi erat nullam sed. Consequat orci maecenas purus cursus pellentesque rutrum hac. Proin parturient dignissim elementum magnis aptent fusce curae. Accumsan vestibulum vel laoreet dui at tellus nisi dolor.</p>
                    <p className="text-gray-300 text-[20px]">
                        Parturient nunc montes, habitasse ligula habitant facilisi. Luctus dis penatibus ad augue rutrum. Non gravida sociosqu pellentesque cursus dictum. </p>

                </div>



                <div className="w-full p-4 rounded-md flex flex-col gap-4">
                    <h2 className="text-[38.85px] font-semibold text-white mb-2">Description</h2>
                    <p className="text-gray-300 text-[20px]">Elit class porta interdum commodo nisi sociosqu maecenas curae. Ad in nullam libero commodo magnis tristique, accumsan etiam viverra. Massa arcu sociosqu nascetur magna parturient morbi ultrices senectus. Consectetur venenatis penatibus primis tristique ac ultrices cras suscipit! Porta auctor laoreet dui nisl tempor</p>
                    <p className="text-gray-300 text-[20px]">Eu netus turpis himenaeos congue urna, volutpat laoreet dignissim. Natoque bibendum ante tempor sem vestibulum tortor urna potenti. Vulputate augue porta elementum eget; ut imperdiet. Velit himenaeos etiam eu est egestas dis nullam fringilla sit.</p>
                    <p className="text-gray-300 text-[20px]"> Quam maximus cras augue suspendisse cubilia sed vulputate congue sagittis. Turpis commodo fermentum aliquam facilisis rutrum senectus maximus. Ut donec natoque ac finibus senectus faucibus ante. Facilisi risus auctor ex lacus scelerisque mauris, nostra sed orci.</p>
                    <p className="text-gray-300 text-[20px]">Iaculis est rutrum vulputate nisi erat nullam sed. Consequat orci maecenas purus cursus pellentesque rutrum hac. Proin parturient dignissim elementum magnis aptent fusce curae. Accumsan vestibulum vel laoreet dui at tellus nisi dolor.</p>
                    <p className="text-gray-300 text-[20px]">
                        Parturient nunc montes, habitasse ligula habitant facilisi. Luctus dis penatibus ad augue rutrum. Non gravida sociosqu pellentesque cursus dictum. </p>
                </div>
                <hr className='border-2 border-gray-600' />

            </div>
            <Footer />
        </div>
    )
}

export default Termcondition