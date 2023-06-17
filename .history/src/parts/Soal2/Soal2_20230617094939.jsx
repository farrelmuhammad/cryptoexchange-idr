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
    <div>
      <h1>Dropdown Example</h1>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Pilih Kategori</option>
        {Object.keys(options).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Pilih Opsi</option>
          {options[selectedCategory].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {selectedOption && (
        <button>{selectedOption}</button>
      )}
    </div>
  );
}

export default Soal2;
