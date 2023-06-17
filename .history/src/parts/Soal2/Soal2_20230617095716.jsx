import React, { useState } from 'react';

const options = {
    'Pendidikan Pra Sekolah': ['PAUD (Pendidikan Anak Usia Dini)', 'TK (Taman Kanak-kanak)', 'RA (Raudhatul Athfal)'],
    'Pendidikan Dasar': ['SD (Sekolah Dasar)', 'MI (Madrasah Ibtidaiyah)', 'SMP (Sekolah Menengah Pertama)', 'MTs (Madrasah Tsanawiyah)'],
    'Pendidikan Menengah': ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)', 'SMK (Sekolah Menengah Kejuruan)'],
    'Pendidikan Tinggi': ['D3 Diploma', 'S1/D4 Sarjana', 'S2 Magister', 'S3 Doktoral']
};

function Soal2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedOption(null);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                    <div className="w-full mb-10">
                        <div className="p-4">
                            <h1 className="text-xl font-bold mb-4">Soal Kedua</h1>
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="bg-green-500 text-white py-2 px-4 rounded"
                            >
                                <option value="">Pilih Kategori</option>
                                {Object.keys(options).map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            {selectedCategory && (
                                <select
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                                >
                                    <option value="">Pilih Opsi</option>
                                    {options[selectedCategory].map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Soal2;
