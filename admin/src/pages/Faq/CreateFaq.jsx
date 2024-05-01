import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { createFaq } from "../../features/actions/faq";






const CreateFaq = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {faqData,isLoading} = useSelector((state)=>state.faq)

    const {register,handleSubmit,formState: { errors },}=useForm()

        const onSubmit = data =>{
console.log(data)
            dispatch(createFaq(data))
            
          }
       
          useEffect(() => {
            if(faqData?.status){
              navigate("/faq")
            }
          }, [faqData]);

  return (
    <div>
        <div className="bg-gray-100 h-screen">
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Create faq details
        </h3>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
        <form className="space-y-6 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
    
        <div className="w-full">
            <label className="font-medium">Question</label>
            <input 
            {...register('question', { required:true })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors.question && (
                    <span className="text-red-500">
                      Question is required
                    </span>
                  )}
                  </div>
        <div className="w-full">
            <label className="font-medium">Answer</label>
            <input 
            {...register('answer', { required:true })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors.answer && (
                    <span className="text-red-500">
                      Answer is required
                    </span>
                  )}
                  </div>
        
           
         
        
          <div style={{ marginTop: '4rem' }}>
              <button className="w-full px-4 py-2 text-white bg-pink-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
              {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Create</>)}
              </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateFaq