import { ChangeEvent, useState } from "react";
import { cross, defImg, edit, trash } from "../../assets";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/UISlice";
import axios from "axios";
import { Blogs } from "../../interfaces";

function CreateNewPopup({ createPopup, setCreatePopup }: { createPopup: boolean; setCreatePopup: (x: boolean) => void }) {

    // const [user, setUser] = useState<User>({ email: '' })

    // const fetchRaisings = async () => {
    //     try {
    //       const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`, {
    //         headers: {
    //           Authorization: user.token
    //         }
    //       });

    //       dispatch(setUserFundraisings(res.data.fundraisings));
    //     } catch (e: any) {
    //       dispatch(setAlert({ message: e.response.data.message, type: "error" }))
    //       console.log(e.response.data)
    //     }

    //   }

    // useEffect(() => {
    //     if (typeof window !== undefined) {
    //         const userData = localStorage.getItem('credentials');
    //         if (userData)
    //             setUser(JSON.parse(userData));
    //     }
    // }, []);

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement | HTMLSelectElement & { files?: FileList };

        if (type === 'file' && files) {
            setFormData((p) => ({ ...p, [name]: files[0], }));
        } else {
            setFormData(p => ({ ...p, [name]: value }));
        }
    }

    const handleSubmit = async () => {

        if (!formData.img) {
            dispatch(setAlert({ message: 'No Thumbnail', type: 'warning' }))
            setTimeout(() => dispatch(setAlert({ message: '', type: 'info' })), 1200)
            return;
        }

        const data = new FormData();
        data.append("file", formData.img);
        data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string);
        data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string);

        try {
            const thumbnailResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, data);

            // const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/raising`, { ...formData, img: thumbnailResponse.data.secure_url});
            console.log({ ...formData, img: thumbnailResponse.data.secure_url })

            // dispatch(setAlert({ message: res.data.message, type: 'success' }))

            // fetchRaisings()

            setFormData({ date: '', img: null, post: '', tag: '', title: '', })

        } catch (e: any) {
            dispatch(setAlert({ message: e.response.data.message, type: 'warning' }))
        }
        finally {
            setTimeout(() => dispatch(setAlert({ message: '', type: 'info' })), 1200)
        }
    };

    const [formData, setFormData] = useState<Blogs>({
        date: '',
        img: null,
        post: '',
        tag: '',
        title: '',
    });

    const { img } = formData;

    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        (document.getElementById("img") as HTMLInputElement).files = dataTransfer.files;
    };

    const clearThumbnail = () => {
        (document.getElementById("img") as HTMLInputElement).files = null
        setFormData((p: any) => ({ ...p, img: null }))
    }

    return (
        <div className="create-new relative overflow-hidden popup-animation h-[60%] md:h-[80%] max-w-[621px] w-[90%] flex flex-col gap-6 xl:p-8 md:p-6 p-4 bg-white">
            <div className="pb-5 flex justify-between w-full border-b border-b-[#D9D9D9]">
                <h2 className="text-[#112230] font-inter text-[20px] leading-7 font-bold opacity-[0.87]">Create new</h2>
                <div className="w-6 h-6 relative" onClick={() => setCreatePopup(!createPopup)}>
                    <img src={cross} alt="Cancel" />
                </div>
            </div>
            <div className="flex flex-col gap-[21px] overflow-y-auto">
                <h2 className="text-black font-bold text-[21px] font-inter">Title</h2>
                <div className="form-group h-[64px] flex justify-end flex-col relative">
                    <input type="text" id="title" name="title" value={formData.title ?? ''} onChange={handleChange} placeholder="Enter Title" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                    <label htmlFor="title" className="form-label bg-white text-[12px] font-[500]">Enter Title</label>
                </div>
                <h2 className="text-black font-bold text-[21px] font-inter">Tag</h2>
                <div className="form-group h-[64px] flex justify-end flex-col relative">
                    <input type="text" id="tag" name="tag" value={formData.tag ?? ''} onChange={handleChange} placeholder="Enter Tag" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                    <label htmlFor="tag" className="form-label bg-white text-[12px] font-[500]">Enter Tag</label>
                </div>
                <h2 className="text-black font-bold text-[21px] font-inter">Post</h2>
                <div className="form-group h-[64px] flex justify-end flex-col relative">
                    <input type="text" id="post" name="post" value={formData.post ?? ''} onChange={handleChange} placeholder="Enter Post" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                    <label htmlFor="post" className="form-label bg-white text-[12px] font-[500]">Enter Post</label>
                </div>
                <h2 className="text-black font-bold text-[21px] font-inter">date</h2>
                <div className="form-group h-[64px] flex justify-end flex-col relative">
                    <input type="date" id="date" name="date" value={formData.date ?? ''} onChange={handleChange} placeholder="Enter date" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                    <label htmlFor="date" className="form-label bg-white text-[12px] font-[500]">Enter date</label>
                </div>
                <p className="text-[14px] leading-5 font-inter">Choose the location where you plan to withdraw your funds.</p>
                <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Add a cover photo</h2>
                <p className="font-popins text-[14px] leading-6 text-[#676767]">Use clear and bright photo helps people connect to your blog instantly.</p>
                <div className="relative">
                    <input type="file" className="z-[2] opacity-0 h-[260px] md:h-[360px] relative w-[100%]" id="img" accept="image/*" name="img" onChange={handleChange} onDragOver={handleDragOver} onDrop={handleDrop} />
                    <div className="flex w-[100%] z-[1] absolute top-0">
                        {
                            !img ?
                                <label htmlFor="img" className="border-dashed border-2 w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]" >
                                    <img src={defImg} alt="Default Image Icon" />
                                    <p className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">
                                        Drag or upload your photo here
                                    </p>
                                </label> :
                                <div className="rounded-lg w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]">
                                    <img src={URL.createObjectURL(img as any)} className="rounded-lg bg-contain w-[100%] h-[100%]" alt="Preview Image" />
                                </div>
                        }
                    </div>
                    {
                        img &&
                        <div className="flex justify-between pt-2 px-1.5">
                            <img src={edit} alt='Edit' onClick={clearThumbnail} />
                            <img src={trash} alt='Trash' onClick={clearThumbnail} />
                        </div>
                    }
                </div>
                <div className=" px-2 py-1.5 cursor-pointer bg-gradient-to-b from-[#4F38DC] to-[#563CF0] rounded-[36px] justify-center items-center gap-1 flex" onClick={handleSubmit}>
                        <div className="text-center text-white text-sm font-medium font-popins leading-normal">Submit</div>
                </div>
            </div>

        </div>

    );
}

export default CreateNewPopup;