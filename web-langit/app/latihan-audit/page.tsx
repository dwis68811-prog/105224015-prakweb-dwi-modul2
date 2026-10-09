export default function LatihanAudit() {
  return (
    <div className="p-8">
      <div className="text-2xl font-bold">Katalog Alat Laboratorium</div>
      
      {/* 1. Menambahkan atribut alt yang deskriptif pada gambar */}
      <img src="/next.svg" alt="Logo Next.js" width={120} height={24} />
      
      <p className="text-gray-300">Stok diperbarui setiap hari.</p>
      
      {/* 2. Menambahkan elemen label yang terhubung (atau menggunakan aria-label jika tanpa label visual) */}
      <div className="mt-4">
        <label htmlFor="search-input" className="block text-sm font-medium mb-1">
          Cari Alat
        </label>
        <input 
          id="search-input"
          type="search" 
          className="border p-2" 
          placeholder="Cari alat..." 
        />
        
        {/* 3. Menambahkan aria-label pada tombol agar memiliki nama aksesibel */}
        <button className="ml-2 border p-2" aria-label="Cari">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="currentColor" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
}