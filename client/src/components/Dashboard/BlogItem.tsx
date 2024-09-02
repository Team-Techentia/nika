import { ChangeEvent, useEffect, useState } from "react";
import { Blogs } from "../../interfaces";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAlert } from "../../store/UISlice";
import { attach_file, defImg, edit, trash, trash2 } from "../../assets";


function BlogItem({ setDeletePopup }: { setDeletePopup: (data: boolean) => void }) {

    // const [user, setUser] = useState<User>({ email: '' });

    const [formData, setFormData] = useState<Blogs>({
        date: '',
        img: null,
        post: '',
        tag: '',
        title: '',
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = localStorage.getItem('credentials');
        if (userData) {
            // setUser(JSON.parse(userData));
        }

        window.scrollTo(0, 0);
        fetchRaising();
    }, []);

    const fetchRaising = async () => {
        try {
            // const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/raising/${id}`);
            // setFormData(res.data.raising);
        } catch (e: any) {
            dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            console.error(e);
        }
    };

    const updateRaising = async () => {

        if (!formData.img) {
            console.error('No img');
            return;
        }

        const data = new FormData();
        try {
            if (typeof formData.img !== 'string') {
                data.append("file", formData.img);
                data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
                data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string);

                const imgResponse = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, data);
                const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/raising/${id}`, {
                    ...formData,
                    img: imgResponse.data.secure_url,
                    // email: user.email
                });

                setFormData(res.data.raising);
            } else {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/raising/${id}`, formData);
            }
            dispatch(setAlert({ message: 'Raising Updated successfully', type: "error" }));
        } catch (e: any) {
            dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            console.error(e.response.data);
        } finally {
            setTimeout(() => dispatch(setAlert({ message: '', type: "error" })), 1200);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement | HTMLSelectElement & { files?: FileList };

        if (type === 'file' && files) {
            setFormData((p) => ({ ...p, [name]: files[0] }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const clearimg = () => {
        setFormData((p: any) => ({ ...p, img: null }));
        const imgInput = document.getElementById("img") as HTMLInputElement;
        if (imgInput) {
            imgInput.value = '';
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        const imgInput = document.getElementById("img") as HTMLInputElement;
        if (imgInput) {
            imgInput.files = dataTransfer.files;
        }
    };


    return (
        <>
            <div className="justify-start overflow-auto flex-col  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                <div className="pb-[14px]">
                    <Link to="/dashboard" className="py-1.5 px-2 flex justify-center items-center gap-1 rounded-[36px] text-[#298D7C] text-center font-popins text-[14px] leading-6 font-[500]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="#298D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Back to fundraisers</p>
                    </Link>
                </div>
                <div className="max-w-[793px] w-[100%] xlg:p-4 md:p-3 p-2.5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch h- rounded-lg flex-col justify-center items-center gap-3 flex">
                        <div className="h-auto xs:h-[35vw] xl:h-[400px] w-full relative overflow-hidden rounded-lg">
                            {
                                !formData.img ? (
                                    <>
                                        <input type="file" className="z-[2] opacity-0 h-[0px] bg-red-600 relative w-full" id="img"
                                            accept="image/*" name="img" onChange={handleChange}
                                            onDragOver={handleDragOver} onDrop={handleDrop} />
                                        <label htmlFor="img" className="border-dashed border-2 w-full h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]">
                                            <img src={defImg} alt="Default Image Icon" />
                                            <p className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">Drag or upload your photo here</p>
                                        </label>
                                    </>
                                ) : (
                                    <label htmlFor="img" className="w-full h-full flex flex-col justify-center items-center gap-[39px] p-2 m-2">
                                        <img src={typeof formData.img === 'string' ? formData.img : URL.createObjectURL(formData.img)} alt="img" />
                                        <p className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">Drag or upload your photo here</p>
                                    </label>
                                )
                            }
                        </div>
                        <div className="self-stretch px-1.5 justify-between items-start inline-flex">
                            <div className="w-5 h-5 relative">
                                <img src={trash} alt="Trash" onClick={clearimg} />
                            </div>
                            <div className="w-5 h-5 relative">
                                <img src={edit} alt="Edit" onClick={clearimg} />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-5 flex">
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
                        <div className="self-stretch w-full justify-end items-end gap-3 inline-flex">
                            <button onClick={updateRaising} className="px-2 py-1.5 sm:w-fit w-full bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                <div className="justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-[#288d7c] text-sm font-medium font-['Poppins'] leading-normal">Save changes</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-[#d9d9d9]" />
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-normal">Delete Fundraiser</div>
                        <div className="w-5 h-5 relative" />
                    </div>
                    <div className="sm:flex-row flex-col sm:justify-between gap-5 w-full sm:items-center inline-flex">
                        <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this fundraising ...</div>
                        <div className="px-2 py-1.5 rounded-[36px] border-2 cursor-pointer border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeletePopup(true)}>
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-[#ff4f49] text-sm font-medium font-['Poppins'] leading-normal">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BlogItem;