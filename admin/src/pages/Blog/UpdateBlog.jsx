import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { updateBlog } from '../../features/actions/blog';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import ReactTextEditor from '../../components/TextEditor/ReactTextEditor';

const UpdateBlog = () => {
  const { blogData, isLoading } = useSelector((state) => state.blog);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const {state: item}= useLocation()
  
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    }


  useEffect(() => {
    // Add event listener to each textarea on component mount
    document.querySelectorAll('textarea').forEach((textarea) => {
      textarea.addEventListener('input', resizeTextarea);
    });
    // Remove event listener on component unmount
    return () => {
      document.querySelectorAll('textarea').forEach((textarea) => {
        textarea.removeEventListener('input', resizeTextarea);
      });
    };
  }, []);
  useEffect(() => {
    if (blogData?.status) {
      navigate('/blog');
    }
  }, [blogData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
        title: item?.title ||"",
        description: item?.description|| "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    const { banner, ...rest } = data;
    formData.append('banner', banner[0]);
    formData.append('description', data?.description);
    formData.append('title', data?.title);
  

    dispatch(updateBlog({ id:item._id,payload:formData }));
  };
  // Function to dynamically resize textarea
  const resizeTextarea = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };



  return (
    <div>
      <div className="bg-gray-100">
        <div className=" flex justify-center">
          <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
            Update blog details
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
          <form
            className="space-y-6 mx-8 sm:mx-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="font-medium">Title</label>
            <input
              {...register('title', { required: 'title is required' })}
              type="text"
              className="w-full mt-2 me-50 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}

         

            <div className="flex-1 items-center mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full space-y-1">
                <label htmlFor="input" className="font-medium ">
                  Banner
                </label>
                <div className="items-center justify-center  mx-auto">
                  <label
                    className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                    id="drop"
                  >
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="font-medium text-gray-600">
                      {selectedFile ? selectedFile.name : 'Drop files to Attach, or '}
                        <span className="text-blue-600 underline ml-[4px]">
                          browse
                        </span>
                      </span>
                    </span>
                    <input
                      type="file"
                      {...register('banner')}
                      className="hidden "
                    //   onChange={handleFileChange}
                      accept="image/png,image/jpeg,image/webp"
                      id="input"
                    />
                  </label>
                </div>
                {/* {errors.banner && (
                  <span className="text-red-500">Banner is required</span>
                )} */}
              </div>
            </div>


            <div>
              <label className="font-medium">Description</label>
              <Controller
                name={`description`}
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <ReactTextEditor
                    sendContent={item?.description}
                    onChange={(data) => onChange(data)}
                  
                  />
                )}
                rules={{ required: true }}
              />

              {errors?.description && (
                <span className="fw-normal fs-6 text-red-500">
                   Description is required
                </span>
              )}
            </div>

            <div style={{ marginTop: '4rem' }}>
              <button className="w-full px-4 py-2 text-white font-medium bg-pink-700 hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
                {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Update</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;