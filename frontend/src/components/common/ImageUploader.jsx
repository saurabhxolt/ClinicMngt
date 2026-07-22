import { useState } from 'react';
import { FaCloudUploadAlt, FaTrash, FaLink, FaImage } from 'react-icons/fa';

export default function ImageUploader({ value, onChange, label = "Image", className = "" }) {
    const [mode, setMode] = useState("file"); // "file" | "url"

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 3 * 1024 * 1024) {
                alert("File size is too large. Please select an image under 3MB.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`space-y-2 text-xs ${className}`}>
            <div className="flex items-center justify-between">
                <label className="font-bold text-slate-700 uppercase flex items-center gap-1.5">
                    <FaImage className="text-sky-600" /> {label}
                </label>

                {/* Toggle Mode */}
                <div className="flex items-center gap-1 bg-slate-200 p-0.5 rounded-lg text-[10px] font-bold">
                    <button
                        type="button"
                        onClick={() => setMode("file")}
                        className={`px-2 py-0.5 rounded ${mode === "file" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"}`}
                    >
                        Upload File
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("url")}
                        className={`px-2 py-0.5 rounded ${mode === "url" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"}`}
                    >
                        Image URL
                    </button>
                </div>
            </div>

            {/* Preview Box */}
            {value && (
                <div className="relative group rounded-xl overflow-hidden border-2 border-sky-100 bg-slate-900 h-32 w-full flex items-center justify-center">
                    <img
                        src={value}
                        alt="Uploaded Preview"
                        className="h-full w-full object-contain"
                    />
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-700 text-white p-1.5 rounded-lg shadow-md transition-all text-xs"
                        title="Remove Image"
                    >
                        <FaTrash />
                    </button>
                </div>
            )}

            {/* File Upload Mode */}
            {mode === "file" && (
                <label className="border-2 border-dashed border-sky-300 hover:border-sky-500 bg-sky-50/50 hover:bg-sky-50 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all">
                    <FaCloudUploadAlt className="text-2xl text-sky-600 mb-1" />
                    <span className="font-bold text-slate-800 text-xs">Click to Upload Image</span>
                    <span className="text-[10px] text-slate-500">PNG, JPG, WEBP up to 3MB</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>
            )}

            {/* URL Input Mode */}
            {mode === "url" && (
                <div className="relative">
                    <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg or /images/..."
                        value={value || ""}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:ring-2 focus:ring-sky-600"
                    />
                </div>
            )}
        </div>
    );
}
