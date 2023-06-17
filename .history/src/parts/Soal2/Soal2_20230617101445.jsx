import React, { useState } from 'react';

const options = {
    'Pendidikan Pra Sekolah': ['PAUD (Pendidikan Anak Usia Dini)', 'TK (Taman Kanak-kanak)', 'RA (Raudhatul Athfal)'],
    'Pendidikan Dasar': ['SD (Sekolah Dasar)', 'MI (Madrasah Ibtidaiyah)', 'SMP (Sekolah Menengah Pertama)', 'MTs (Madrasah Tsanawiyah)'],
    'Pendidikan Menengah': ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)', 'SMK (Sekolah Menengah Kejuruan)'],
    'Pendidikan Tinggi': ['D3 Diploma', 'S1/D4 Sarjana', 'S2 Magister', 'S3 Doktoral']
};

function Soal2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isOptionOpen, setIsOptionOpen] = useState(false);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedOption('');
        setIsCategoryOpen(false);
        setIsOptionOpen(false);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsOptionOpen(false);
    };

    return (
        <>
            <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
                <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                    <div className="w-full mb-10">
                        <h1 className="text-2xl font-bold text-center text-gray-700">Soal Kedua</h1>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-[400px] rounded-md border border-gray-300 shadow-sm bg-green-500 hover:bg-green-600 text-white py-2 px-4"
                                        onClick={() => {
                                            setIsCategoryOpen(!isCategoryOpen);
                                            setIsOptionOpen(false);
                                        }}
                                    >
                                        {selectedCategory ? selectedCategory : 'Pilih Kategori'}
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                {isCategoryOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {Object.keys(options).map((category) => (
                                                <button
                                                    key={category}
                                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                    onClick={() => {
                                                        handleCategoryChange(category);
                                                    }}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className={`inline-flex justify-center w-[400px] rounded-md border border-gray-300 shadow-sm ${selectedCategory ? 'bg-red-500 hover:bg-red-600' : 'bg-red-500'} text-white py-2 px-4 ${selectedCategory ? '' : 'opacity-50'}`}
                                        disabled={!selectedCategory}
                                        onClick={() => {
                                            if (selectedCategory) {
                                                setIsOptionOpen(!isOptionOpen);
                                            }
                                        }}
                                    >
                                        {selectedOption ? selectedOption : 'Pilih Opsi'}
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                {isOptionOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {options[selectedCategory]?.map((option) => (
                                                <button
                                                    key={option}
                                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                    onClick={() => {
                                                        handleOptionChange(option);
                                                    }}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Soal2;
