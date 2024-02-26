import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const BlockchainProjects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-6 mb-20"></div>

            <div className=" px-5  flex ">
                <h1 className="mb-0 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                        Some Projects
                    </span>
                    {" In "}
                    <span className="   underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
                        Blockchain Development
                    </span>
                </h1>
            </div>
          

            <div className=" flex flex-wrap justify-between  max-w-5xl m-auto p-5 mt-5 lg:mt-0 lg:p-16 ">

            




                <div data-aos="fade-zoom-in"  data-aos-anchor-placement="bottom-bottom" className=" h-fit w-fit m-auto lg:m-0 lg:mb-12  relative   rounded-md  overflow-hidden bg-gray-900 mb-12">
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-900"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-900"></div>

                    <div className=" relative  max-w-sm p-1    ">
                    <div className="   max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">

                        
                            <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-white">
                                Immortal Chat Contract
                            </h5>
                        
                        <p className="mb-3 font-normal text-gray-400">
                        The Immortal Chat app uses a secure smart contract on the Ethereum network, coded in Solidity , Hardhat and Ether.js. The contract creates a tamper-proof chat, with conversations permanently stored on the blockchain, guaranteeing user privacy.
                        </p>
                        <a
                            href="https://github.com/DIWAKARKASHYAP/immortal-chat-contract"
                            target="_blank"
                            rel="noreferrer"
                            className="  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            View Code
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    </div>
                </div>




                <div data-aos="fade-zoom-in"  data-aos-anchor-placement="center-bottom" className=" h-fit w-fit m-auto lg:m-0 lg:mb-12  relative   rounded-md  overflow-hidden bg-gray-900 mb-12">
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-900"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-900"></div>

                    <div className=" relative  max-w-sm p-1    ">
                    <div className="   max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">

                            <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-white">
                                Fee Charging Token Contract
                            </h5>
                        
                        <p className="mb-3 font-normal text-gray-400">
                        This Solidity-based contract charges a fee in the form of any token when transferFrom() and transfer() functions are executed. The owner has the exclusive right to claim all collected fees. This unique functionality sets it apart from other token contracts.
                        </p>
                        <a
                            href="https://github.com/DIWAKARKASHYAP/fee-charging-token-contract/blob/main/feeToken.sol"
                            target="_blank"
                            rel="noreferrer"

                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            View Code
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    </div>
                </div>








                <div data-aos="fade-zoom-in"  data-aos-anchor-placement="bottom-bottom" className=" h-fit w-fit m-auto lg:m-0 lg:mb-12  relative   rounded-md  overflow-hidden bg-gray-900 mb-12">
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-900"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-900"></div>

                    <div className=" relative  max-w-sm p-1    ">
                    <div className="   max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">

                            <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight capitalize text-white">
                            lottery smart contract
                            </h5>
                        <p className="mb-3 font-normal text-gray-400">
                        This lottery contract ensures a fair process as only the owner can generate a random number and determine the winner. The contract is reusable, providing  convenience to users after a winner is found.
                        </p>
                        <a
                            href="https://github.com/DIWAKARKASHYAP/solidityLottery"
                            target="_blank"
                            rel="noreferrer"

                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            View Code
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    </div>
                </div>



                <div data-aos="fade-zoom-in"  data-aos-anchor-placement="bottom-bottom" className=" h-fit w-fit m-auto lg:m-0 lg:mb-12  relative   rounded-md  overflow-hidden bg-gray-900 mb-12">
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-900"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-900"></div>

                    <div className=" relative  max-w-sm p-1    ">
                    <div className="   max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">

                            <h5 className=" costomFont mb-2 text-2xl font-bold capitalize tracking-tight text-white">
                            crowdfunding smart contract
                            </h5>
                        <p className="mb-3 font-normal text-gray-400">
                        This crowdfunding smart contract provides a secure and transparent way for entrepreneurs to raise funds from investors. The contract ensures accountability by releasing funds only when certain conditions are met.
                        </p>
                        <a
                            href="https://github.com/DIWAKARKASHYAP/crowd-funding"
                            target="_blank"
                            rel="noreferrer"

                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            View Code
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default BlockchainProjects;
