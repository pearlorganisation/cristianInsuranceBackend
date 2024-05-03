import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";
import { updateFaq } from "../../features/actions/faq";






const UpdateFaq = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {state:item}= useLocation();
  const {faqData,isLoading} = useSelector((state)=>state.faq)

    const {register,handleSubmit,formState: { errors },}=useForm({
        defaultValues:{
            question: item?.question || "",
            answer: item?.answer || ""
        }
    })

        const onSubmit = data =>{

            dispatch(updateFaq({id:item?._id,payload:data}))
            
          }
       
          useEffect(() => {
            console.log(faqData)
            if(faqData?.status){
              navigate("/faq")
            }
          }, [faqData]);

  return (
    <div>
        <div className="bg-gray-100 h-screen">
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Update faq details
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
              <button className="w-full px-4 py-2 text-white bg-pink-700  font-medium hover:bg-pink-800 active:bg-pink-700 rounded-lg duration-150">
              {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Update</>)}
              </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateFaq