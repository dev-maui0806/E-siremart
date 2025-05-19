import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../utils/Axios';
import { updatedAvatar } from '../store/userSlice';
import { IoClose } from 'react-icons/io5';
import SummaryApi from '../common/SummaryApi';
import toast from 'react-hot-toast';
const UserProfileAvatarEdit = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleUploadAvatarImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', 'avatar');
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.uploadAvatar,
        data: formData,
      })
      const { data: responseData } = response;
      if(responseData.success) {
          toast.success(responseData.message);
          dispatch(updatedAvatar(response.data.data.avatar));
          close();
      }
      else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error('Error uploading avatar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-60 p-4 flex items-center justify-center'>
      <div className='bg-white max-w-sm w-full rounded p-4 flex flex-col items-center justify-center'>
        <button onClick={close} className='text-neutral-800 w-fit block ml-auto'>
          <IoClose size={20} />
        </button>
        <div className='w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
          {user.avatar ? (
            <img alt={user.name} src={user.avatar} className='w-full h-full' />
          ) : (
            <FaRegUserCircle size={65} />
          )}
        </div>
        <input type='file' onChange={handleUploadAvatarImage} />
        {loading && <p>Uploading...</p>}
      </div>
    </section>
  );
};

export default UserProfileAvatarEdit;
