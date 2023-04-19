import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const isLoading = false;

const companyCommonStyles = "d-flex justify-content-center align-items-center border border-gray-400 text-sm font-light text-white min-h-70 px-2 min-w-120";

// import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  // const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const handleChange = ()=>{};
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    // sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
         
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] btn btn-primary"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          

            <div class="row row-cols-3 row-cols-md-2 mt-5">
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Reliability</h5>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Security</h5>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Ethereum</h5>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Web 3.0</h5>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Low Fees</h5>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card bg-secondary text-white">
      <div class="card-body text-center">
        <h5 class="card-title">Blockchain</h5>
      </div>
    </div>
  </div>
</div>


        </div>
     </div>

     <div className="flex flex-col items-center justify-start w-full mf:mt-0 mt-10">
  <div className="p-3 flex flex-col justify-between items-start rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
    <div className="flex justify-between items-start w-full h-full">
      <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
        <SiEthereum fontSize={21} color="#fff" />
      </div>
      <BsInfoCircle fontSize={17} color="#fff" />
    </div>
    <div>
      <p className="text-white font-light text-sm">
        {/* {shortenAddress(currentAccount)} */}
      </p>
      <p className="text-white font-semibold text-lg mt-1">
        Ethereum
      </p>
    </div>
  </div>
  <div className="p-5 pr-2 sm:w-96 w-full flex flex-col justify-space items-center blue-glassmorphism">
    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

    <div className="h-1 w-full bg-gray-400 my-2" />

    {isLoading
      ? <Loader />
      : (
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-secondary w-full mt-2 border-2 p-2 border-blue-600 hover:bg-blue-600 rounded-full cursor-pointer"
        >
          Send now
        </button>
      )}
  </div>
</div>


  </div>)
}

export default Welcome;
