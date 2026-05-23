// Data 25 Fitur Unggulan ISchool
const listFitur = [
  {
    id: 1,
    nama: "Akademik & Rapor",
    kategori: "akademik",
    type: "schedule",
    deskripsi: "Jadwal pelajaran, absensi kelas, dan penilaian rapor otomatis terintegrasi kurikulum nasional."
  },
  {
    id: 2,
    nama: "Absensi Siswa & Pegawai",
    kategori: "akademik",
    type: "schedule",
    deskripsi: "Fitur presensi digital siswa dan pegawai berbasis geofencing dan biometrik ponsel."
  },
  {
    id: 3,
    nama: "Penerimaan Siswa Baru (PPDB)",
    kategori: "akademik",
    type: "schedule",
    deskripsi: "Manajemen pendaftaran siswa baru secara online dari formulir hingga seleksi berkas otomatis."
  },
  {
    id: 4,
    nama: "Manajemen Keuangan",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Pengelolaan kas, rekening bank, pembukuan otomatis, dan pembuatan jurnal keuangan sekolah."
  },
  {
    id: 5,
    nama: "Sistem Keuangan & Tagihan",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Manajemen tagihan SPP bulanan, iuran kegiatan, dan sistem reminder otomatis wali murid."
  },
  {
    id: 6,
    nama: "Dedicated Server Pod",
    kategori: "server",
    type: "server",
    deskripsi: "Migrasi infrastruktur IT/SIAK Anda ke VPS Dedicated terisolasi untuk performa maksimal dan keamanan penuh."
  },
  {
    id: 7,
    nama: "Server Booster",
    kategori: "server",
    type: "server",
    deskripsi: "Tingkatkan performa server secara instan dengan alokasi tambahan kapasitas CPU & RAM dinamis."
  },
  {
    id: 8,
    nama: "Dedicated IP Address",
    kategori: "server",
    type: "server",
    deskripsi: "Alokasi IP publik statis khusus untuk menjamin reputasi email dan stabilitas akses yayasan Anda."
  },
  {
    id: 9,
    nama: "Extra Storage 10GB",
    kategori: "server",
    type: "server",
    deskripsi: "Tambahan ruang penyimpanan cloud terenkripsi untuk berkas administrasi dan tugas belajar mengajar."
  },
  {
    id: 10,
    nama: "Custom Domain",
    kategori: "server",
    type: "server",
    deskripsi: "Gunakan alamat domain web sendiri (seperti sekolahanda.sch.id) untuk branding profesional."
  },
  {
    id: 11,
    nama: "WhatsApp Gateway",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Kirim notifikasi otomatis tagihan, absensi, dan pengumuman sekolah langsung ke WhatsApp wali murid."
  },
  {
    id: 12,
    nama: "n8n Workflow Automation",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Otomatisasi alur kerja antar aplikasi (seperti Google Drive, WhatsApp, dan database) tanpa coding."
  },
  {
    id: 13,
    nama: "Manajemen Kantin",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Sistem kasir Point of Sales (POS) untuk kantin sekolah terintegrasi pembayaran digital siswa."
  },
  {
    id: 14,
    nama: "Badge Premium di Forum",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Tanda pengenal premium bagi anggota aktif di forum diskusi pendidikan nasional."
  },
  {
    id: 15,
    nama: "Forum Diskusi Premium",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Akses tanpa batas ke komunitas guru dan praktisi pendidikan terbaik se-Indonesia."
  },
  {
    id: 16,
    nama: "Absen Guru",
    kategori: "akademik",
    type: "schedule",
    deskripsi: "Sistem presensi khusus guru dengan verifikasi foto wajah (selfie) dan lokasi mengajar."
  },
  {
    id: 17,
    nama: "Ujian Berbasis Komputer (CBT)",
    kategori: "akademik",
    type: "exam",
    deskripsi: "Sistem ujian online/offline yang aman dengan fitur anti-cheat lock, timer, dan penilaian otomatis."
  },
  {
    id: 18,
    nama: "Kecerdasan Buatan (AI)",
    kategori: "integrasi",
    type: "exam",
    deskripsi: "Akses otomatis generator soal ujian AI dan asisten pintar untuk merancang modul ajar."
  },
  {
    id: 19,
    nama: "Payment Gateway",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Integrasi pembayaran modern via Midtrans, Xendit, atau Duitku untuk SPP instan via e-wallet & VA."
  },
  {
    id: 20,
    nama: "Website Profil Sekolah",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Website profil modern, responsif, dan SEO-friendly siap pakai untuk memajang prestasi sekolah."
  },
  {
    id: 21,
    nama: "Integrasi Website Sekolah",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Sinkronisasi otomatis berita, galeri, dan prestasi dari database internal langsung ke website profil."
  },
  {
    id: 22,
    nama: "BioLink / Linktree",
    kategori: "integrasi",
    type: "workflow",
    deskripsi: "Halaman landing bio link kustom profesional untuk dipajang di akun sosial media sekolah Anda."
  },
  {
    id: 23,
    nama: "Laporan Rekapitulasi",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Export rekapitulasi data akademik, absen, dan keuangan ke format Excel atau dokumen PDF siap cetak."
  },
  {
    id: 24,
    nama: "Priority Support 24/7",
    kategori: "server",
    type: "server",
    deskripsi: "Jaminan bantuan teknis prioritas melalui panggilan telepon langsung atau chat WhatsApp 24 jam."
  },
  {
    id: 25,
    nama: "Aplikasi Kasir Kantin",
    kategori: "finansial",
    type: "ledger",
    deskripsi: "Kasir kantin mandiri (self-service) dengan sistem tapping kartu e-wallet siswa."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // --- PONDASI GLOBAL & THEME ---
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  
  // Set default theme to light (to match Onesoft luxury light-violet/white/red styling)
  body.classList.add("light-theme");
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      const icon = themeToggle.querySelector("i");
      if (body.classList.contains("light-theme")) {
        icon.className = "fas fa-moon text-gray-800 text-lg";
      } else {
        icon.className = "fas fa-sun text-yellow-400 text-lg";
      }
    });
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const icon = menuBtn.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  // --- HERO BACKGROUND IMAGE SLIDER (Magnific AI style) ---
  const heroSlideItems = document.querySelectorAll(".hero-slider-nav-item");
  const heroSlides = document.querySelectorAll(".hero-slide");
  let activeSlideIndex = 0;
  let slideTimer;

  function setActiveSlide(index) {
    if (index < 0 || index >= heroSlideItems.length) return;
    activeSlideIndex = index;

    // Reset slider nav items styling
    heroSlideItems.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Reset slide background visibility
    heroSlides.forEach((slide, idx) => {
      if (idx === (index % heroSlides.length)) {
        slide.style.opacity = "1";
      } else {
        slide.style.opacity = "0";
      }
    });

    // Smoothly scroll active tab into view horizontally in the scroll container
    const activeItem = heroSlideItems[index];
    const scrollContainer = document.querySelector(".hero-scroll-container");
    if (activeItem && scrollContainer) {
      const containerWidth = scrollContainer.clientWidth;
      const itemWidth = activeItem.clientWidth;
      const itemLeft = activeItem.offsetLeft;
      const targetScrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      const rect = scrollContainer.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        scrollContainer.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth"
        });
      } else {
        scrollContainer.scrollLeft = targetScrollLeft;
      }
    }
  }

  // Auto transition slides every 6 seconds
  function startSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
      let nextIndex = (activeSlideIndex + 1) % heroSlideItems.length;
      setActiveSlide(nextIndex);
    }, 6000);
  }

  heroSlideItems.forEach((item) => {
    item.addEventListener("click", () => {
      const index = parseInt(item.getAttribute("data-slide"));
      setActiveSlide(index);
      startSlideTimer(); // Restart auto-slide on click
    });

    item.addEventListener("mouseenter", () => {
      const index = parseInt(item.getAttribute("data-slide"));
      setActiveSlide(index);
      startSlideTimer(); // Restart auto-slide on hover
    });
  });

  // Start auto-rotating on load
  startSlideTimer();

  // --- DYNAMIC 25 FEATURES RENDERING & SEARCH/FILTER ---
  const featuresGrid = document.getElementById("features-grid");
  const searchInput = document.getElementById("search-features");
  const categoryFilters = document.querySelectorAll(".category-filter-btn");

  let currentCategory = "semua";
  let searchQuery = "";
  let showAllFeatures = false; // State to toggle viewing all features

  // Expose global function to expand features dynamically on click
  window.revealAllFeatures = function() {
    showAllFeatures = true;
    renderFeatures();
  };

  function renderFeatures() {
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = "";
    
    const filtered = listFitur.filter(fitur => {
      const matchCategory = currentCategory === "semua" || fitur.kategori === currentCategory;
      const matchSearch = fitur.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          fitur.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      featuresGrid.innerHTML = `
        <div class="col-span-full text-center py-12 glass-card rounded-xl p-8 animate-fadeIn">
          <i class="fas fa-search text-4xl text-red-500/40 mb-4"></i>
          <p class="text-lg font-semibold text-gray-400">Fitur tidak ditemukan</p>
          <p class="text-sm text-gray-500 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
        </div>
      `;
      return;
    }

    // Determine slice based on showAllFeatures state
    let featuresToShow = filtered;
    let needsLihatSemuaButton = false;

    if (currentCategory === "semua" && searchQuery === "" && !showAllFeatures) {
      featuresToShow = filtered.slice(0, 6); // Show only the first 6 features initially
      needsLihatSemuaButton = true;
    }

    featuresToShow.forEach((fitur, index) => {
      const card = document.createElement("div");
      
      // Fixed: Strictly equal 1 column size (no bento spans, exactly 3 cards in 1 row on desktop!)
      card.className = "glass-card p-0 rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-300 col-span-1";
      
      card.innerHTML = `
        <!-- Full Bleed Top Illustration (No padding around it!) -->
        <div class="h-48 w-full overflow-hidden select-none pointer-events-none border-b border-gray-200/60 dark:border-white/5">
          <img src="img/bg/bg1.png" alt="${fitur.nama}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async">
        </div>
        
        <!-- Bottom Content with exact padding, font sizes, and margins from reference -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-semibold mb-2 tracking-tight group-hover:text-red-500 transition-colors text-gray-900 dark:text-white mt-1">${fitur.nama}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 light:text-gray-600 leading-relaxed font-normal">${fitur.deskripsi}</p>
          </div>
        </div>
      `;
      featuresGrid.appendChild(card);
    });

    // Render "Lihat Semua Fitur" button at the bottom of the grid if collapsed
    if (needsLihatSemuaButton) {
      const btnContainer = document.createElement("div");
      btnContainer.className = "col-span-full flex justify-center mt-8 animate-fadeIn";
      btnContainer.innerHTML = `
        <button onclick="revealAllFeatures()" class="btn-glow-red bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3.5 px-8 rounded-full text-xs transition-all shadow-none border-none">
          Lihat Semua Fitur (${filtered.length} Fitur) <i class="fas fa-chevron-down ml-2"></i>
        </button>
      `;
      featuresGrid.appendChild(btnContainer);
    }
  }

  // Search input event listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchQuery !== "") {
        showAllFeatures = true; // Auto expand when searching to see all matches
      } else {
        showAllFeatures = false; // Re-collapse when search query is cleared
      }
      renderFeatures();
    });
  }

  // Header Search connecting to Features Grid Search
  const headerSearch = document.getElementById("header-search-fitur");
  if (headerSearch && searchInput) {
    headerSearch.addEventListener("input", (e) => {
      searchInput.value = e.target.value;
      searchQuery = e.target.value;
      if (searchQuery !== "") {
        showAllFeatures = true;
      } else {
        showAllFeatures = false;
      }
      renderFeatures();
      
      // Auto scroll to features grid
      const fiturSection = document.getElementById("fitur");
      if (fiturSection) {
        fiturSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Category buttons click listener
  categoryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilters.forEach(b => b.classList.remove("active", "bg-red-500", "text-white"));
      
      // Update visual active state
      btn.classList.add("active");
      
      currentCategory = btn.getAttribute("data-category");
      showAllFeatures = false; // Reset collapsed state when tab changes
      renderFeatures();
    });
  });

  // Initial render
  renderFeatures();

  // --- INTERACTIVE DASHBOARD WIDGET TABS & SIMULATORS (ONESOFT STYLE) ---
  const dashboardTabs = document.querySelectorAll(".dashboard-tab-btn");
  const dashboardPanels = document.querySelectorAll(".dashboard-panel");

  dashboardTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      dashboardTabs.forEach(t => {
        t.classList.remove("active", "border-red-500", "text-red-500");
        t.classList.add("border-transparent");
      });
      dashboardPanels.forEach(p => p.classList.add("hidden"));

      tab.classList.add("active", "border-red-500", "text-red-500");
      tab.classList.remove("border-transparent");
      const targetId = tab.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove("hidden");
        targetPanel.classList.add("animate-fadeIn");
      }
    });
  });

  // --- INTERACTIVE SIMULATORS LOGIC ---

  // 1. CBT & AI Simulator Logic
  const cbtQuestions = [
    {
      question: "Siapakah pencipta teori gravitasi universal?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
      answer: 1,
      aiTip: "AI Analysis: Isaac Newton mempublikasikan hukum gravitasi universal dalam karyanya 'Philosophiae Naturalis Principia Mathematica' pada tahun 1687."
    },
    {
      question: "Manakah komponen sel darah yang berfungsi untuk pembekuan darah?",
      options: ["Eritrosit", "Leukosit", "Trombosit", "Plasma Darah"],
      answer: 2,
      aiTip: "AI Analysis: Trombosit (keping darah) melepaskan enzim trombokinase saat terjadi luka untuk mempercepat pembekuan darah."
    },
    {
      question: "Jika 3x + 5 = 20, berapakah nilai x?",
      options: ["3", "4", "5", "6"],
      answer: 2,
      aiTip: "AI Analysis: Kurangi 5 dari kedua sisi menjadi 3x = 15. Bagi kedua sisi dengan 3, didapatkan x = 5."
    }
  ];

  let currentCbtIndex = 0;
  let correctCbtAnswers = 0;
  
  const cbtQuestionEl = document.getElementById("cbt-question-text");
  const cbtOptionsEl = document.getElementById("cbt-options-container");
  const cbtProgressEl = document.getElementById("cbt-progress-indicator");
  const cbtResultEl = document.getElementById("cbt-result-box");
  const cbtQuizBox = document.getElementById("cbt-quiz-box");
  const cbtNextBtn = document.getElementById("cbt-next-btn");
  const cbtAiInsightEl = document.getElementById("cbt-ai-insight");

  function loadCbtQuestion() {
    if (!cbtQuestionEl || !cbtOptionsEl) return;

    // Reset styles
    cbtNextBtn.classList.add("hidden");
    cbtAiInsightEl.classList.add("hidden");
    cbtOptionsEl.innerHTML = "";

    const q = cbtQuestions[currentCbtIndex];
    cbtQuestionEl.textContent = `${currentCbtIndex + 1}. ${q.question}`;
    cbtProgressEl.textContent = `Soal ${currentCbtIndex + 1} dari ${cbtQuestions.length}`;

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "w-full text-left p-3.5 rounded-lg border border-white/10 glass-panel hover:bg-red-500/10 hover:border-red-500/30 transition-all text-sm font-semibold flex items-center justify-between";
      btn.innerHTML = `
        <span>${opt}</span>
        <i class="far fa-circle text-gray-500"></i>
      `;
      btn.addEventListener("click", () => selectCbtAnswer(idx, btn));
      cbtOptionsEl.appendChild(btn);
    });
  }

  function selectCbtAnswer(selectedIdx, selectedBtn) {
    const q = cbtQuestions[currentCbtIndex];
    const buttons = cbtOptionsEl.querySelectorAll("button");
    
    // Disable all options
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const icon = btn.querySelector("i");
      if (idx === q.answer) {
        // Correct answer (green highlights)
        btn.className = "w-full text-left p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-all text-sm font-semibold flex items-center justify-between";
        icon.className = "fas fa-check-circle text-emerald-400";
      } else if (idx === selectedIdx) {
        // Wrong selected (red highlights)
        btn.className = "w-full text-left p-3.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 transition-all text-sm font-semibold flex items-center justify-between";
        icon.className = "fas fa-times-circle text-red-400";
      }
    });

    if (selectedIdx === q.answer) {
      correctCbtAnswers++;
    }

    // Show AI Insight and next button
    cbtAiInsightEl.querySelector("p").textContent = q.aiTip;
    cbtAiInsightEl.classList.remove("hidden");
    cbtAiInsightEl.classList.add("animate-fadeIn");
    
    cbtNextBtn.classList.remove("hidden");
    if (currentCbtIndex === cbtQuestions.length - 1) {
      cbtNextBtn.textContent = "Selesai Ujian & Lihat Rapor";
    } else {
      cbtNextBtn.textContent = "Soal Selanjutnya";
    }
  }

  if (cbtNextBtn) {
    cbtNextBtn.addEventListener("click", () => {
      if (currentCbtIndex < cbtQuestions.length - 1) {
        currentCbtIndex++;
        loadCbtQuestion();
      } else {
        // Show result score
        cbtQuizBox.classList.add("hidden");
        cbtResultEl.classList.remove("hidden");
        cbtResultEl.classList.add("animate-fadeIn");
        
        const finalScore = Math.round((correctCbtAnswers / cbtQuestions.length) * 100);
        document.getElementById("cbt-score").textContent = finalScore;
        const feedbackText = document.getElementById("cbt-feedback-text");
        
        if (finalScore === 100) {
          feedbackText.textContent = "Sempurna! Anda luar biasa cerdas. AI merekomendasikan Anda mengikuti olimpiade sains lanjutan!";
        } else if (finalScore >= 60) {
          feedbackText.textContent = "Hebat! Hasil yang sangat baik. Tingkatkan belajar Anda di materi pembekuan darah.";
        } else {
          feedbackText.textContent = "Butuh Belajar Lebih. Jangan menyerah, gunakan generator latihan soal AI ISchool untuk remedial mandiri!";
        }
      }
    });
  }

  const restartCbtBtn = document.getElementById("cbt-restart-btn");
  if (restartCbtBtn) {
    restartCbtBtn.addEventListener("click", () => {
      currentCbtIndex = 0;
      correctCbtAnswers = 0;
      cbtResultEl.classList.add("hidden");
      cbtQuizBox.classList.remove("hidden");
      loadCbtQuestion();
    });
  }

  // Initialize CBT Quiz
  loadCbtQuestion();

  // 2. Kantin POS & E-Wallet Simulator Logic
  const menuItems = [
    { id: "bakso", nama: "Bakso Mercon Khas Kantin", harga: 15000, img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=200" },
    { id: "fried-rice", nama: "Nasi Goreng Telur Spesial", harga: 12000, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=200" },
    { id: "iced-tea", nama: "Es Teh Manis Segar Jumbo", harga: 4000, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=200" },
    { id: "siomay", nama: "Siomay Bandung Gurih", harga: 10000, img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=200" }
  ];

  let cart = [];
  let ewalletBalance = 85000;

  const menuGridEl = document.getElementById("pos-menu-grid");
  const posCartEl = document.getElementById("pos-cart-items");
  const posSubtotalEl = document.getElementById("pos-subtotal");
  const posWalletEl = document.getElementById("pos-wallet-balance");
  const posCheckoutBtn = document.getElementById("pos-checkout-btn");

  function renderPosMenu() {
    if (!menuGridEl) return;
    menuGridEl.innerHTML = "";
    menuItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "glass-panel rounded-lg cursor-pointer hover:border-red-500/40 hover:bg-red-500/5 transition-all flex flex-col justify-between h-[145px] overflow-hidden border border-white/5";
      card.innerHTML = `
        <div class="relative w-full h-20 bg-black/10 flex-shrink-0">
          <img src="${item.img}" alt="${item.nama}" class="w-full h-full object-cover" loading="lazy" decoding="async">
        </div>
        <div class="p-2 flex-grow flex flex-col justify-between min-w-0">
          <h4 class="text-[9px] font-bold text-gray-700 dark:text-gray-200 truncate leading-tight" title="${item.nama}">${item.nama}</h4>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[9px] text-red-500 font-extrabold">Rp ${item.harga.toLocaleString('id-ID')}</span>
            <button class="w-5 h-5 rounded bg-red-500/10 text-red-500 text-[9px] flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors font-bold flex-shrink-0" onclick="event.stopPropagation(); addToCart(item);">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      `;
      card.addEventListener("click", () => addToCart(item));
      menuGridEl.appendChild(card);
    });
  }

  function addToCart(item) {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
  }

  function updateCartUI() {
    if (!posCartEl) return;
    posCartEl.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
      posCartEl.innerHTML = `
        <div class="text-center py-8 text-gray-500 text-[10px]">
          <i class="fas fa-shopping-basket text-xl opacity-40 mb-1.5"></i>
          <p>Belum ada pesanan</p>
        </div>
      `;
      posSubtotalEl.textContent = "Rp 0";
      posCheckoutBtn.disabled = true;
      return;
    }

    cart.forEach((item, index) => {
      const itemPrice = item.harga * item.qty;
      subtotal += itemPrice;

      const row = document.createElement("div");
      row.className = "flex items-center justify-between border-b border-white/5 pb-2 text-[10px]";
      row.innerHTML = `
        <div class="flex-1 pr-2">
          <p class="font-bold leading-tight line-clamp-1">${item.nama}</p>
          <p class="text-[8px] text-gray-500 mt-0.5">${item.qty}x @ Rp ${item.harga.toLocaleString('id-ID')}</p>
        </div>
        <div class="flex items-center gap-1.5">
          <p class="font-extrabold text-red-500 text-[9px]">Rp ${itemPrice.toLocaleString('id-ID')}</p>
          <button class="text-gray-400 hover:text-red-500 p-1 flex items-center justify-center" onclick="event.stopPropagation(); removeFromCart('${item.id}')">
            <i class="fas fa-trash text-[9px]"></i>
          </button>
        </div>
      `;
      posCartEl.appendChild(row);
    });

    posSubtotalEl.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    posCheckoutBtn.disabled = false;
  }

  // Globally accessible removal function
  window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
  };

  // High fidelity custom animated notification helper
  function showCustomAlert(status, title, message) {
    const existing = document.getElementById("custom-cashier-alert");
    if (existing) existing.remove();

    const alertBox = document.createElement("div");
    alertBox.id = "custom-cashier-alert";
    alertBox.className = "fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md opacity-0 transition-opacity duration-300 pointer-events-none";
    
    const isSuccess = status === "success";
    const iconClass = isSuccess ? "fa-check-double text-emerald-500 dark:text-emerald-400" : "fa-exclamation-triangle text-red-500";
    const iconBg = isSuccess ? "bg-emerald-500/10 border-emerald-500/20" : "bg-red-500/10 border-red-500/20";
    
    alertBox.innerHTML = `
      <div class="glass-card p-8 rounded-xl max-w-sm w-full text-center border border-white/10 shadow-2xl transform scale-90 translate-y-6 opacity-0 transition-all duration-300">
        <div class="w-14 h-14 ${iconBg} border rounded-full flex items-center justify-center text-2xl mx-auto mb-5 shadow-lg shadow-black/10">
          <i class="fas ${iconClass}"></i>
        </div>
        <h3 class="text-xl font-black tracking-tight mb-2 text-gray-900 dark:text-white">${title}</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          ${message}
        </p>
        <button class="btn-glow-red bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-2.5 px-6 rounded-lg w-full text-[11px] transition-all cursor-pointer shadow-lg shadow-red-500/20">
          Oke, Mengerti
        </button>
      </div>
    `;
    
    document.body.appendChild(alertBox);
    
    // Reflow
    alertBox.offsetHeight;
    
    alertBox.classList.remove("opacity-0", "pointer-events-none");
    alertBox.classList.add("opacity-100");
    
    const innerCard = alertBox.querySelector(".glass-card");
    innerCard.classList.remove("scale-90", "translate-y-6", "opacity-0");
    innerCard.classList.add("scale-100", "translate-y-0", "opacity-100");
    
    // Spring physics transition curves
    innerCard.style.transitionTimingFunction = "cubic-bezier(0.34, 1.56, 0.64, 1)";

    const closeAlert = () => {
      alertBox.classList.remove("opacity-100");
      alertBox.classList.add("opacity-0", "pointer-events-none");
      innerCard.classList.remove("scale-100", "translate-y-0", "opacity-100");
      innerCard.classList.add("scale-90", "translate-y-6", "opacity-0");
      setTimeout(() => alertBox.remove(), 300);
    };

    alertBox.querySelector("button").addEventListener("click", closeAlert);
    alertBox.addEventListener("click", (e) => {
      if (e.target === alertBox) closeAlert();
    });
  }

  if (posCheckoutBtn) {
    posCheckoutBtn.addEventListener("click", () => {
      let subtotal = cart.reduce((acc, item) => acc + (item.harga * item.qty), 0);
      
      if (ewalletBalance < subtotal) {
        showCustomAlert(
          "error", 
          "Transaksi Kantin Gagal", 
          `Saldo E-Wallet siswa tidak mencukupi untuk transaksi sebesar <span class="text-red-500 font-extrabold">Rp ${subtotal.toLocaleString('id-ID')}</span>. Saldo Anda saat ini adalah <span class="text-emerald-600 dark:text-emerald-400 font-extrabold">Rp ${ewalletBalance.toLocaleString('id-ID')}</span>.`
        );
        return;
      }

      // Perform checkout
      ewalletBalance -= subtotal;
      if (posWalletEl) posWalletEl.textContent = `Rp ${ewalletBalance.toLocaleString('id-ID')}`;
      
      // Clear cart
      cart = [];
      updateCartUI();

      showCustomAlert(
        "success", 
        "Transaksi Kantin Berhasil!", 
        `Pembayaran total <span class="text-emerald-600 dark:text-emerald-400 font-extrabold">Rp ${subtotal.toLocaleString('id-ID')}</span> berhasil didebit secepat kilat dengan tapping kartu RFID E-Wallet Siswa. Struk digital otomatis dikirim via WhatsApp wali murid!`
      );
    });
  }

  // Initialize POS
  renderPosMenu();
  if (posWalletEl) posWalletEl.textContent = `Rp ${ewalletBalance.toLocaleString('id-ID')}`;

  // 3. QR Scan Kehadiran Simulator
  const btnScanQr = document.getElementById("btn-scan-qr");
  const attendanceList = document.getElementById("attendance-list");
  const presenceCountEl = document.getElementById("presence-count");
  const activeQrBox = document.getElementById("qr-camera-box");

  const listSiswaSimulasi = [
    { nama: "Budi Santoso", kelas: "XI MIPA 2", nis: "24019", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" },
    { nama: "Siti Aminah", kelas: "XII IPS 1", nis: "23088", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" },
    { nama: "Rian Hidayat", kelas: "X-4", nis: "25042", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
    { nama: "Clara Angelica", kelas: "XI MIPA 4", nis: "24103", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    { nama: "Fajar Aditya", kelas: "XII MIPA 1", nis: "23012", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" }
  ];

  let currentQrIndex = 0;
  let countSiswaScan = 248; // Awal hitungan siswa hadir

  if (btnScanQr) {
    btnScanQr.addEventListener("click", () => {
      // Toggle scan effect animation
      btnScanQr.disabled = true;
      btnScanQr.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>Membaca Chip Kartu...`;
      
      const scanBar = document.createElement("div");
      scanBar.className = "absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_15px_#ef4444] animate-bounce";
      scanBar.style.top = "50%";
      activeQrBox.appendChild(scanBar);

      setTimeout(() => {
        scanBar.remove();
        btnScanQr.disabled = false;
        btnScanQr.innerHTML = `<i class="fas fa-qrcode mr-2"></i>Tap Kartu RFID / Scan QR`;

        if (currentQrIndex >= listSiswaSimulasi.length) {
          alert("Semua siswa simulasi telah melakukan absensi!");
          return;
        }

        const siswa = listSiswaSimulasi[currentQrIndex];
        currentQrIndex++;
        countSiswaScan++;
        if (presenceCountEl) presenceCountEl.textContent = countSiswaScan;

        // Visual flash overlay
        const flash = document.createElement("div");
        flash.className = "absolute inset-0 bg-white/20 z-10 transition-opacity pointer-events-none duration-100";
        activeQrBox.appendChild(flash);
        setTimeout(() => flash.remove(), 150);

        // Add to list
        const time = new Date().toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const li = document.createElement("div");
        li.className = "flex items-center gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10 animate-fadeIn";
        li.innerHTML = `
          <img src="${siswa.foto}" alt="${siswa.nama}" class="w-9 h-9 rounded-lg object-cover" loading="lazy" decoding="async">
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold leading-none">${siswa.nama}</p>
            <p class="text-[10px] text-gray-500 mt-1">${siswa.kelas} • NIS ${siswa.nis}</p>
          </div>
          <div class="text-right">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">Berhasil</span>
            <p class="text-[9px] text-gray-500 mt-1">${time}</p>
          </div>
        `;
        
        if (attendanceList.querySelector(".text-gray-500")) {
          attendanceList.innerHTML = "";
        }
        attendanceList.insertBefore(li, attendanceList.firstChild);
      }, 1200);
    });
  }

  // --- FAQ ACCORDION LOGIC ---
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      // Toggle current item
      const isActive = item.classList.contains("active");
      
      // Close all items
      faqItems.forEach(i => i.classList.remove("active"));
      
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });  // --- PRICING DYNAMIC DOUBLE TOGGLE ENGINE (Premium & Smooth) ---
  const billingToggle = document.getElementById("billing-toggle");
  const pkgSekolahBtn = document.getElementById("pkg-sekolah-btn");
  const pkgYayasanBtn = document.getElementById("pkg-yayasan-btn");
  const pricingCards = document.querySelectorAll(".pricing-card");

  let pricingState = {
    category: "sekolah", // "sekolah" or "yayasan"
    billing: "bulanan"   // "bulanan" or "tahunan"
  };

  // Structured Pricing Data Model
  const pricingData = {
    sekolah: {
      starter: {
        title: "Dasar (Starter)",
        subtitle: "Sempurna untuk sekolah/lembaga rintisan mandiri.",
        bulanan: { current: "Rp 499.000", old: "Rp 625.000", hasUnit: true },
        tahunan: { current: "Rp 399.000", old: "Rp 499.000", hasUnit: true },
        desc: "Termasuk 500 murid/tahun",
        features: [
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: true, text: "Buku Kas Keuangan Sekolah", info: "Manajemen buku kas, SPP, dan tagihan wali murid" },
          { active: false, text: "Ujian Online CBT Anti-Cheat" },
          { active: false, text: "Dedicated Server Pod & VPS" }
        ],
        shaded: [
          { active: false, text: "WhatsApp Gateway" },
          { active: false, text: "Custom Domain (.sch.id)" },
          { active: false, text: "Server Booster CPU & RAM" },
          { active: false, text: "Priority Support 24/7" }
        ]
      },
      pro: {
        title: "Paket Unggulan (Pro)",
        subtitle: "Untuk sekolah modern berskala menengah-besar.",
        bulanan: { current: "Rp 1.200.000", old: "Rp 1.500.000", hasUnit: true },
        tahunan: { current: "Rp 999.000", old: "Rp 1.200.000", hasUnit: true },
        desc: "Termasuk 2.000 murid/tahun",
        features: [
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: true, text: "Buku Kas Keuangan Sekolah", info: "Manajemen buku kas, SPP, dan tagihan wali murid" },
          { active: true, text: "Ujian Online CBT Anti-Cheat", info: "Simulator ujian online berdaya AI dengan timer" },
          { active: false, text: "Dedicated Server Pod & VPS" }
        ],
        shaded: [
          { active: true, text: "WhatsApp Gateway", badge: "TERINTEGRASI" },
          { active: true, text: "Custom Domain", badge: "TERINTEGRASI" },
          { active: true, text: "Server Booster", badge: "TERINTEGRASI" },
          { active: false, text: "Priority Support 24/7" }
        ]
      },
      enterprise: {
        title: "Paket Yayasan (Enterprise)",
        subtitle: "Multi-sekolah, yayasan besar, & kustomisasi server.",
        bulanan: { current: "Hubungi Kami", old: "Rp 3.000.000", hasUnit: false },
        tahunan: { current: "Hubungi Kami", old: "Rp 2.400.000", hasUnit: false },
        desc: "Murid Tidak Terbatas",
        features: [
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: true, text: "Buku Kas Keuangan Sekolah", info: "Manajemen buku kas, SPP, dan tagihan wali murid" },
          { active: true, text: "Ujian Online CBT Anti-Cheat", info: "Simulator ujian online berdaya AI dengan timer" },
          { active: true, text: "Dedicated Server Pod & VPS", info: "Virtual private server terisolasi dengan performa booster" }
        ],
        shaded: [
          { active: true, text: "WhatsApp Gateway", badge: "FULL AKSES" },
          { active: true, text: "Custom Domain", badge: "FULL AKSES" },
          { active: true, text: "Server Booster", badge: "FULL AKSES" },
          { active: true, text: "Priority Support 24/7", badge: "FULL AKSES" }
        ]
      }
    },
    yayasan: {
      starter: {
        title: "Yayasan Starter",
        subtitle: "Sempurna untuk grup yayasan kecil (hingga 3 sekolah).",
        bulanan: { current: "Rp 1.499.000", old: "Rp 1.875.000", hasUnit: true },
        tahunan: { current: "Rp 1.199.000", old: "Rp 1.499.000", hasUnit: true },
        desc: "Maksimal 3 Sekolah Terdaftar",
        features: [
          { active: true, text: "Multi-School Management Console", info: "Dasbor pemantau seluruh sekolah dalam satu akun" },
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: false, text: "Ujian Online CBT Anti-Cheat" },
          { active: false, text: "Dedicated Server Pod & VPS" }
        ],
        shaded: [
          { active: false, text: "WhatsApp Gateway" },
          { active: false, text: "Custom Domain (.sch.id)" },
          { active: false, text: "Server Booster CPU & RAM" },
          { active: false, text: "Priority Support 24/7" }
        ]
      },
      pro: {
        title: "Yayasan Professional",
        subtitle: "Sistem integrasi tangguh untuk grup yayasan menengah (hingga 8 sekolah).",
        bulanan: { current: "Rp 3.599.000", old: "Rp 4.499.000", hasUnit: true },
        tahunan: { current: "Rp 2.879.000", old: "Rp 3.599.000", hasUnit: true },
        desc: "Maksimal 8 Sekolah Terdaftar",
        features: [
          { active: true, text: "Multi-School Management Console", info: "Dasbor pemantau seluruh sekolah dalam satu akun" },
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: true, text: "Ujian Online CBT Anti-Cheat", info: "Simulator ujian online berdaya AI dengan timer" },
          { active: false, text: "Dedicated Server Pod & VPS" }
        ],
        shaded: [
          { active: true, text: "WhatsApp Gateway", badge: "TERINTEGRASI" },
          { active: true, text: "Custom Domain", badge: "TERINTEGRASI" },
          { active: true, text: "Server Booster", badge: "TERINTEGRASI" },
          { active: false, text: "Priority Support 24/7" }
        ]
      },
      enterprise: {
        title: "Yayasan Enterprise",
        subtitle: "Solusi kustom cloud untuk jaringan yayasan sekolah skala besar nasional.",
        bulanan: { current: "Hubungi Kami", old: "Rp 6.000.000", hasUnit: false },
        tahunan: { current: "Hubungi Kami", old: "Rp 4.800.000", hasUnit: false },
        desc: "Sekolah & Murid Tidak Terbatas",
        features: [
          { active: true, text: "Multi-School Management Console", info: "Dasbor pemantau seluruh sekolah dalam satu akun" },
          { active: true, text: "Akademik & Rapor Sekolah", info: "Modul nilai rapor terintegrasi kurikulum nasional" },
          { active: true, text: "Penerimaan Siswa Baru (PPDB)", info: "Penerimaan dan registrasi berkas pendaftaran online" },
          { active: true, text: "Presensi Kehadiran QR Siswa", info: "Scan kehadiran real-time via AbsenQR ponsel" },
          { active: true, text: "Ujian Online CBT Anti-Cheat", info: "Simulator ujian online berdaya AI dengan timer" },
          { active: true, text: "Dedicated Server Pod & VPS", info: "Virtual private server terisolasi dengan performa booster" }
        ],
        shaded: [
          { active: true, text: "WhatsApp Gateway", badge: "SEUMUR HIDUP" },
          { active: true, text: "Custom Domain", badge: "SEUMUR HIDUP" },
          { active: true, text: "Server Booster", badge: "SEUMUR HIDUP" },
          { active: true, text: "Priority Support 24/7", badge: "SEUMUR HIDUP" }
        ]
      }
    }
  };

  function renderList(targetEl, items) {
    targetEl.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      if (item.active) {
        li.className = "flex items-center justify-between py-1.5";
        li.innerHTML = `
          <span class="flex items-center text-gray-800 dark:text-gray-200 font-medium">
            <span class="text-red-500 font-black mr-3 select-none text-sm">✓</span> ${item.text}
          </span>
          <i class="fas fa-info-circle text-[10px] text-gray-400 hover:text-red-500 cursor-help" title="${item.info}"></i>
        `;
      } else {
        li.className = "flex items-center text-gray-400/50 dark:text-gray-500/50 line-through py-1.5";
        li.innerHTML = `
          <span class="flex items-center">
            <span class="text-gray-300 dark:text-gray-700 mr-3 select-none text-sm">✗</span> ${item.text}
          </span>
        `;
      }
      targetEl.appendChild(li);
    });
  }

  function renderShadedBox(targetEl, items) {
    targetEl.innerHTML = "";
    items.forEach(item => {
      const row = document.createElement("div");
      if (item.active) {
        row.className = "flex items-center justify-between text-[11px] py-1";
        row.innerHTML = `
          <span class="flex items-center text-gray-800 dark:text-gray-200 font-medium">
            <span class="text-red-500 font-black mr-2 select-none text-xs">✓</span> ${item.text}
          </span>
          <span class="gold-badge">${item.badge}</span>
        `;
      } else {
        row.className = "flex items-center text-gray-400/50 dark:text-gray-500/50 line-through text-[11px] py-1";
        row.innerHTML = `
          <span class="flex items-center">
            <span class="text-gray-300 dark:text-gray-700 mr-2 select-none text-xs">✗</span> ${item.text}
          </span>
        `;
      }
      targetEl.appendChild(row);
    });
  }

  function updatePricingContent() {
    const categoryData = pricingData[pricingState.category];
    const cycle = pricingState.billing;

    // Starter Elements
    const starterOldPrice = document.getElementById("starter-old-price");
    const starterPrice = document.getElementById("starter-price");
    const starterTitle = document.getElementById("starter-title");
    const starterSubtitle = document.getElementById("starter-subtitle");
    const starterDesc = document.getElementById("starter-desc");
    const starterFeatures = document.getElementById("starter-features");
    const starterShadedItems = document.getElementById("starter-shaded-items");
    const starterDiscountBadge = document.getElementById("starter-discount-badge");

    // Pro Elements
    const proOldPrice = document.getElementById("pro-old-price");
    const proPrice = document.getElementById("pro-price");
    const proTitle = document.getElementById("pro-title");
    const proSubtitle = document.getElementById("pro-subtitle");
    const proDesc = document.getElementById("pro-desc");
    const proFeatures = document.getElementById("pro-features");
    const proShadedItems = document.getElementById("pro-shaded-items");

    // Enterprise Elements
    const enterpriseOldPrice = document.getElementById("enterprise-old-price");
    const enterprisePrice = document.getElementById("enterprise-price");
    const enterpriseTitle = document.getElementById("enterprise-title");
    const enterpriseSubtitle = document.getElementById("enterprise-subtitle");
    const enterpriseDesc = document.getElementById("enterprise-desc");
    const enterpriseFeatures = document.getElementById("enterprise-features");
    const enterpriseShadedItems = document.getElementById("enterprise-shaded-items");
    const enterpriseUnit = document.getElementById("enterprise-unit");

    // 1. Update Starter
    const dStarter = categoryData.starter;
    const pStarter = dStarter[cycle];
    if (starterTitle) starterTitle.textContent = dStarter.title;
    if (starterSubtitle) starterSubtitle.textContent = dStarter.subtitle;
    if (starterOldPrice) starterOldPrice.textContent = pStarter.old;
    if (starterPrice) starterPrice.textContent = pStarter.current;
    if (starterDesc) starterDesc.textContent = dStarter.desc;
    if (starterFeatures) renderList(starterFeatures, dStarter.features);
    if (starterShadedItems) renderShadedBox(starterShadedItems, dStarter.shaded);
    if (starterDiscountBadge) {
      if (cycle === "tahunan") {
        starterDiscountBadge.classList.remove("hidden");
      } else {
        starterDiscountBadge.classList.add("hidden");
      }
    }

    // 2. Update Pro
    const dPro = categoryData.pro;
    const pPro = dPro[cycle];
    if (proTitle) proTitle.textContent = dPro.title;
    if (proSubtitle) proSubtitle.textContent = dPro.subtitle;
    if (proOldPrice) proOldPrice.textContent = pPro.old;
    if (proPrice) proPrice.textContent = pPro.current;
    if (proDesc) proDesc.textContent = dPro.desc;
    if (proFeatures) renderList(proFeatures, dPro.features);
    if (proShadedItems) renderShadedBox(proShadedItems, dPro.shaded);

    // 3. Update Enterprise
    const dEnterprise = categoryData.enterprise;
    const pEnterprise = dEnterprise[cycle];
    if (enterpriseTitle) enterpriseTitle.textContent = dEnterprise.title;
    if (enterpriseSubtitle) enterpriseSubtitle.textContent = dEnterprise.subtitle;
    if (enterpriseOldPrice) enterpriseOldPrice.textContent = pEnterprise.old;
    if (enterprisePrice) enterprisePrice.textContent = pEnterprise.current;
    if (enterpriseDesc) enterpriseDesc.textContent = dEnterprise.desc;
    if (enterpriseFeatures) renderList(enterpriseFeatures, dEnterprise.features);
    if (enterpriseShadedItems) renderShadedBox(enterpriseShadedItems, dEnterprise.shaded);
    if (enterpriseUnit) {
      if (pEnterprise.hasUnit) {
        enterpriseUnit.textContent = "/bulan";
      } else {
        enterpriseUnit.textContent = "";
      }
    }
  }

  function triggerPricingSwitch() {
    // Add fade-out class to all pricing cards
    pricingCards.forEach(card => {
      card.classList.add("pricing-fade-out");
    });

    // Wait 300ms, then switch data and fade back in
    setTimeout(() => {
      updatePricingContent();
      
      pricingCards.forEach(card => {
        card.classList.remove("pricing-fade-out");
      });
    }, 300);
  }

  // Bind Toggle Category (Sekolah vs Yayasan)
  if (pkgSekolahBtn && pkgYayasanBtn) {
    pkgSekolahBtn.addEventListener("click", () => {
      if (pricingState.category === "sekolah") return;
      pricingState.category = "sekolah";

      pkgSekolahBtn.className = "px-5 py-2 rounded-full transition-all bg-neutral-900 text-white dark:bg-white dark:text-black font-bold border-none shadow-none";
      pkgYayasanBtn.className = "px-5 py-2 rounded-full transition-all text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-none shadow-none";

      triggerPricingSwitch();
    });

    pkgYayasanBtn.addEventListener("click", () => {
      if (pricingState.category === "yayasan") return;
      pricingState.category = "yayasan";

      pkgYayasanBtn.className = "px-5 py-2 rounded-full transition-all bg-neutral-900 text-white dark:bg-white dark:text-black font-bold border-none shadow-none";
      pkgSekolahBtn.className = "px-5 py-2 rounded-full transition-all text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-none shadow-none";

      triggerPricingSwitch();
    });
  }

  // Bind Toggle Billing Cycle (Bulanan vs Tahunan)
  if (billingToggle) {
    billingToggle.addEventListener("change", () => {
      pricingState.billing = billingToggle.checked ? "tahunan" : "bulanan";
      triggerPricingSwitch();
    });
  }

  // Initial pricing content render
  updatePricingContent();

  // --- DYNAMIC REGISTRATION/CTA MODAL SIMULATION ---
  const registerCtaButtons = document.querySelectorAll(".btn-register-cta");
  registerCtaButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const registerModal = document.createElement("div");
      registerModal.className = "fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/85 backdrop-blur-md";
      registerModal.innerHTML = `
        <div class="glass-card p-8 rounded-xl max-w-lg w-full border-red-500/10 relative">
          <button class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" id="close-register-modal">
            <i class="fas fa-times text-lg"></i>
          </button>
          <div class="text-center mb-6">
            <div class="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center text-xl mx-auto mb-4 border border-red-500/20">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gradient-red">Formulir Pendaftaran ISchool</h3>
            <p class="text-xs text-gray-400 mt-2">Segera modernisasi operasional sekolah Anda dengan uji coba gratis 30 hari penuh.</p>
          </div>
          <form id="school-registration-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-gray-400 mb-1.5">Nama Lengkap Pendaftar</label>
              <input type="text" required placeholder="Budi Rahardjo, S.Pd." class="w-full text-sm px-4 py-3 rounded-lg glass-input">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-400 mb-1.5">Nama Instansi / Sekolah</label>
              <input type="text" required placeholder="SMA Negeri 1 Jakarta" class="w-full text-sm px-4 py-3 rounded-lg glass-input">
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-400 mb-1.5">Email Pendaftar</label>
                <input type="email" required placeholder="budi@sekolah.sch.id" class="w-full text-sm px-4 py-3 rounded-lg glass-input">
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-400 mb-1.5">No. WhatsApp Aktif</label>
                <input type="tel" required placeholder="08123456789" class="w-full text-sm px-4 py-3 rounded-lg glass-input">
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-400 mb-1.5">Paket yang Diminati</label>
              <select class="w-full text-sm px-4 py-3 rounded-lg glass-input cursor-pointer bg-neutral-900 border border-white/10 text-white">
                <option value="starter">Paket Dasar (Starter) - Rp 499k/bln</option>
                <option value="professional" selected>Paket Unggulan (Professional) - Rp 1.2jt/bln</option>
                <option value="enterprise">Paket Yayasan (Enterprise) - Custom Cloud</option>
              </select>
            </div>
            <button type="submit" class="btn-glow-red w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-3.5 px-6 rounded-lg text-sm transition-all mt-4">
              Kirim Formulir & Aktivasi Demo 30 Hari
            </button>
          </form>
        </div>
      `;
      document.body.appendChild(registerModal);

      // Close handlers
      const closeBtn = document.getElementById("close-register-modal");
      closeBtn.addEventListener("click", () => registerModal.remove());
      registerModal.addEventListener("click", (evt) => {
        if (evt.target === registerModal) registerModal.remove();
      });

      // Submit handler
      const form = document.getElementById("school-registration-form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        registerModal.remove();
        
        // Show success alert
        const successBox = document.createElement("div");
        successBox.className = "fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md";
        successBox.innerHTML = `
          <div class="glass-card p-8 rounded-xl max-w-md w-full text-center border-red-500/20 floating-widget">
            <div class="w-16 h-16 bg-red-500/10 text-red-500 border border-red-500/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gradient-red mb-2">Terima Kasih!</h3>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed">
              Formulir pendaftaran uji coba Anda telah berhasil kami terima. CS kami akan menghubungi Anda melalui WhatsApp dalam waktu maksimal 10 menit untuk memberikan kredensial login admin sekolah Anda!
            </p>
            <button class="btn-glow-red bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-2.5 px-6 rounded-lg w-full text-sm">
              Oke, Mengerti!
            </button>
          </div>
        `;
        document.body.appendChild(successBox);
        successBox.querySelector("button").addEventListener("click", () => successBox.remove());
      });
    });
  });

  // --- CBT & AI PINTAR GENERATOR SIMULATOR ---
  // Global AI Simulator Functions to ensure absolute clickability and reliability
  window.selectAiTopic = function(pill) {
    const text = pill.getAttribute("data-text");
    const input = document.getElementById("ai-material-input");
    if (input) {
      input.value = text;
    }
    // Highlight active pill
    const pills = document.querySelectorAll(".ai-topic-pill");
    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    
    // Auto-generate
    window.generateAiExam();
  };

  window.clickAiOption = function(btn) {
    console.log("clickAiOption clicked:", btn);
    const container = btn.closest(".p-3.5") || btn.closest("[data-explanation]") || document.getElementById("ai-simulator-result");
    if (!container) {
      console.error("clickAiOption: container not found");
      return;
    }
    
    const optBtns = container.querySelectorAll(".ai-opt-btn");
    const feedbackEl = container.querySelector("#ai-sim-feedback") || container.querySelector(".ai-sim-feedback");
    const isCorrect = btn.getAttribute("data-correct") === "true";
    
    console.log("isCorrect:", isCorrect, "feedbackEl:", feedbackEl);

    // Reset styling of all buttons in this card
    optBtns.forEach(b => {
      b.classList.remove(
        "bg-emerald-500/10", "border-emerald-500/30", "text-emerald-500", "text-emerald-400",
        "bg-red-500/10", "border-red-500/30", "text-red-500", "text-red-400"
      );
      const icon = b.querySelector("i");
      if (icon) {
        icon.className = "fas hidden"; // reset class and hide
      }
    });

    const icon = btn.querySelector("i");
    if (isCorrect) {
      btn.classList.add("bg-emerald-500/10", "border-emerald-500/30", "text-emerald-500");
      if (icon) {
        icon.className = "fas fa-check text-emerald-500";
        icon.classList.remove("hidden");
      }
      if (feedbackEl) {
        feedbackEl.classList.remove("hidden", "bg-red-500/10", "text-red-500", "border-red-500/20");
        feedbackEl.classList.add("bg-emerald-500/10", "text-emerald-500", "border-emerald-500/20");
        const exp = container.getAttribute("data-explanation") || "Jawaban Anda Benar! Kerja bagus!";
        feedbackEl.innerHTML = `<i class="fas fa-check-circle mr-1"></i> <strong>Benar!</strong> ${exp}`;
      }
    } else {
      btn.classList.add("bg-red-500/10", "border-red-500/30", "text-red-500");
      if (icon) {
        icon.className = "fas fa-times text-red-500";
        icon.classList.remove("hidden");
      }
      if (feedbackEl) {
        feedbackEl.classList.remove("hidden", "bg-emerald-500/10", "text-emerald-500", "border-emerald-500/20");
        feedbackEl.classList.add("bg-red-500/10", "text-red-500", "border-red-500/20");
        feedbackEl.innerHTML = `<i class="fas fa-times-circle mr-1"></i> <strong>Salah!</strong> Jawaban kurang tepat, coba pilihan lainnya.`;
      }
    }
  };

  window.generateAiExam = function() {
    const btn = document.getElementById("btn-generate-ai");
    const resultContainer = document.getElementById("ai-simulator-result");
    
    if (!btn) return;

    // Disable button & animate loading
    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.innerHTML = `<i class="fas fa-wand-magic-sparkles animate-spin"></i> AI sedang menganalisis materi...`;

    if (resultContainer) {
      resultContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center p-6 bg-red-500/5 rounded-lg border border-red-500/10 space-y-3">
          <div class="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin"></div>
          <p class="text-[10px] font-bold text-red-500 tracking-wider uppercase animate-pulse">AI sedang memproses naskah soal...</p>
        </div>
      `;
    }

    const aiQuestionsDb = {
      matematika: [
        {
          question: "Jika f(x) = 2x + 3 dan g(x) = x^2 - 1, berapakah nilai (f ∘ g)(2)?",
          options: [
            { label: "A. 9", correct: true },
            { label: "B. 7", correct: false },
            { label: "C. 5", correct: false },
            { label: "D. 11", correct: false }
          ],
          explanation: "g(2) = 2^2 - 1 = 3. Maka f(g(2)) = f(3) = 2(3) + 3 = 9."
        },
        {
          question: "Berapakah turunan pertama dari fungsi f(x) = 3x^2 - 4x + 5?",
          options: [
            { label: "A. 6x - 4", correct: true },
            { label: "B. 6x", correct: false },
            { label: "C. 3x - 4", correct: false },
            { label: "D. 6x + 5", correct: false }
          ],
          explanation: "Turunan 3x^2 adalah 6x, turunan -4x adalah -4, dan turunan konstanta 5 adalah 0."
        },
        {
          question: "Berapakah nilai dari lim (x -> 3) (x^2 - 9) / (x - 3)?",
          options: [
            { label: "A. 6", correct: true },
            { label: "B. 3", correct: false },
            { label: "C. 0", correct: false },
            { label: "D. Tak hingga", correct: false }
          ],
          explanation: "Faktorkan pembilang menjadi (x-3)(x+3). Coret (x-3), tersisa (x+3). Substitusikan x=3, didapat 3+3 = 6."
        },
        {
          question: "Dalam kotak ada 5 bola merah & 3 biru. Diambil 2 bola acak, berapakah peluang keduanya bola merah?",
          options: [
            { label: "A. 5/14", correct: true },
            { label: "B. 5/8", correct: false },
            { label: "C. 25/64", correct: false },
            { label: "D. 15/28", correct: false }
          ],
          explanation: "Kombinasi 2 bola merah dari 5: C(5,2)=10. Total cara ambil 2 bola dari 8: C(8,2)=28. Peluang = 10/28 = 5/14."
        },
        {
          question: "Diketahui matriks A = [[2, 3], [1, 4]]. Berapakah determinan dari matriks A?",
          options: [
            { label: "A. 5", correct: true },
            { label: "B. 11", correct: false },
            { label: "C. -5", correct: false },
            { label: "D. 8", correct: false }
          ],
          explanation: "Determinan ad - bc = (2)(4) - (3)(1) = 8 - 3 = 5."
        },
        {
          question: "Berapakah nilai dari integral (6x^2 - 2x) dx?",
          options: [
            { label: "A. 2x^3 - x^2 + C", correct: true },
            { label: "B. 3x^3 - 2x^2 + C", correct: false },
            { label: "C. 6x^3 - 2x^2 + C", correct: false },
            { label: "D. 2x^3 - 2x^2 + C", correct: false }
          ],
          explanation: "Integral dari 6x^2 adalah 2x^3, integral dari -2x adalah -x^2. Ditambah konstanta C."
        },
        {
          question: "Persamaan kuadrat x^2 - 5x + 6 = 0 memiliki akar x1 dan x2. Berapakah nilai x1 + x2?",
          options: [
            { label: "A. 5", correct: true },
            { label: "B. -5", correct: false },
            { label: "C. 6", correct: false },
            { label: "D. -6", correct: false }
          ],
          explanation: "Menurut rumus Vieta, jumlah akar-akar x1 + x2 = -b/a = -(-5)/1 = 5."
        },
        {
          question: "Berapakah nilai dari logaritma log2(32)?",
          options: [
            { label: "A. 5", correct: true },
            { label: "B. 4", correct: false },
            { label: "C. 6", correct: false },
            { label: "D. 16", correct: false }
          ],
          explanation: "Karena 2^5 = 32, maka log2(32) = 5."
        },
        {
          question: "Sebuah segitiga siku-siku memiliki sisi tegak 8 cm dan alas 6 cm. Berapa panjang sisi miringnya?",
          options: [
            { label: "A. 10 cm", correct: true },
            { label: "B. 14 cm", correct: false },
            { label: "C. 12 cm", correct: false },
            { label: "D. 9 cm", correct: false }
          ],
          explanation: "Menggunakan teorema Pythagoras: akar(8^2 + 6^2) = akar(64 + 36) = akar(100) = 10 cm."
        },
        {
          question: "Berapakah banyaknya diagonal bidang pada sebuah kubus?",
          options: [
            { label: "A. 12", correct: true },
            { label: "B. 6", correct: false },
            { label: "C. 8", correct: false },
            { label: "D. 4", correct: false }
          ],
          explanation: "Kubus memiliki 6 sisi, masing-masing memiliki 2 diagonal bidang. Total = 6 x 2 = 12 diagonal."
        }
      ],
      kimia: [
        {
          question: "Manakah unsur berikut yang termasuk dalam golongan gas mulia?",
          options: [
            { label: "A. Helium", correct: true },
            { label: "B. Hidrogen", correct: false },
            { label: "C. Oksigen", correct: false },
            { label: "D. Nitrogen", correct: false }
          ],
          explanation: "Golongan VIII A (Gas Mulia) terdiri dari Helium (He), Neon (Ne), Argon (Ar), Kripton (Kr), Xenon (Xe), dan Radon (Rn)."
        },
        {
          question: "Berapakah nilai pH dari larutan asam kuat pada umumnya?",
          options: [
            { label: "A. < 7", correct: true },
            { label: "B. > 7", correct: false },
            { label: "C. 7", correct: false },
            { label: "D. 14", correct: false }
          ],
          explanation: "Larutan asam memiliki nilai pH kurang dari 7, larutan basa lebih dari 7, dan larutan netral pH = 7."
        },
        {
          question: "Apakah nama senyawa kimia dengan rumus molekul NaCl?",
          options: [
            { label: "A. Natrium Klorida", correct: true },
            { label: "B. Natrium Karbonat", correct: false },
            { label: "C. Kalium Klorida", correct: false },
            { label: "D. Kalsium Klorida", correct: false }
          ],
          explanation: "NaCl terbentuk dari kation Natrium (Na+) dan anion Klorida (Cl-), membentuk garam dapur Natrium Klorida."
        },
        {
          question: "Partikel penyusun inti atom yang bermuatan positif disebut dengan...",
          options: [
            { label: "A. Proton", correct: true },
            { label: "B. Elektron", correct: false },
            { label: "C. Neutron", correct: false },
            { label: "D. Positron", correct: false }
          ],
          explanation: "Inti atom terdiri atas Proton (bermuatan positif) dan Neutron (netral), sedangkan Elektron (negatif) mengelilingi inti."
        },
        {
          question: "Proses perubahan wujud zat dari padat langsung menjadi gas dinamakan...",
          options: [
            { label: "A. Menyublim", correct: true },
            { label: "B. Menguap", correct: false },
            { label: "C. Mengkristal", correct: false },
            { label: "D. Mencair", correct: false }
          ],
          explanation: "Menyublim adalah perubahan wujud zat padat menjadi gas tanpa melalui fase cair terlebih dahulu."
        },
        {
          question: "Manakah rumus kimia yang tepat untuk senyawa air?",
          options: [
            { label: "A. H2O", correct: true },
            { label: "B. CO2", correct: false },
            { label: "C. H2SO4", correct: false },
            { label: "D. CH4", correct: false }
          ],
          explanation: "Air terdiri dari dua atom Hidrogen dan satu atom Oksigen (H2O)."
        },
        {
          question: "Apakah hukum dasar kimia yang menyatakan bahwa massa zat sebelum dan sesudah reaksi adalah sama?",
          options: [
            { label: "A. Hukum Kekekalan Massa", correct: true },
            { label: "B. Hukum Perbandingan Tetap", correct: false },
            { label: "C. Hukum Kelipatan Perbandingan", correct: false },
            { label: "D. Hukum Avogadro", correct: false }
          ],
          explanation: "Lavoisier merumuskan Hukum Kekekalan Massa yang menyatakan total massa reaktan sama dengan total massa produk."
        },
        {
          question: "Reaksi kimia yang membebaskan kalor dari sistem ke lingkungan disebut...",
          options: [
            { label: "A. Reaksi Eksoterm", correct: true },
            { label: "B. Reaksi Endoterm", correct: false },
            { label: "C. Reaksi Adisi", correct: false },
            { label: "D. Reaksi Reduksi", correct: false }
          ],
          explanation: "Reaksi eksoterm membebaskan energi panas (kalor) sehingga suhu lingkungan mengalami peningkatan."
        },
        {
          question: "Jenis ikatan kimia akibat serah terima elektron antara unsur logam dan non-logam adalah...",
          options: [
            { label: "A. Ikatan Ion", correct: true },
            { label: "B. Ikatan Kovalen", correct: false },
            { label: "C. Ikatan Logam", correct: false },
            { label: "D. Ikatan Hidrogen", correct: false }
          ],
          explanation: "Ikatan ion terjadi karena adanya gaya elektrostatis antara ion positif (logam) dan ion negatif (non-logam) hasil transfer elektron."
        },
        {
          question: "Manakah indikator asam-basa alami berikut yang paling umum digunakan?",
          options: [
            { label: "A. Ekstrak kunyit", correct: true },
            { label: "B. Metil jingga", correct: false },
            { label: "C. Fenolftalein", correct: false },
            { label: "D. Bromtimol biru", correct: false }
          ],
          explanation: "Kunyit berubah warna menjadi kuning terang dalam kondisi asam dan merah kecokelatan dalam kondisi basa."
        }
      ],
      biologi: [
        {
          question: "Apakah nama organel sel yang berfungsi sebagai tempat respirasi seluler dan penghasil energi (ATP)?",
          options: [
            { label: "A. Mitokondria", correct: true },
            { label: "B. Kloroplas", correct: false },
            { label: "C. Lisosom", correct: false },
            { label: "D. Ribosom", correct: false }
          ],
          explanation: "Mitokondria dikenal sebagai powerhouse of cell karena bertugas melakukan respirasi aerob dan memproduksi ATP."
        },
        {
          question: "Manakah pembuluh darah yang berfungsi mengalirkan darah bersih kaya oksigen dari jantung ke seluruh tubuh?",
          options: [
            { label: "A. Arteri (Nadi)", correct: true },
            { label: "B. Vena (Balik)", correct: false },
            { label: "C. Kapiler", correct: false },
            { label: "D. Alveolus", correct: false }
          ],
          explanation: "Arteri sistemik mengedarkan darah kaya oksigen dari bilik kiri jantung ke seluruh jaringan tubuh manusia."
        },
        {
          question: "Proses pembuatan makanan pada tumbuhan hijau dengan bantuan cahaya matahari disebut...",
          options: [
            { label: "A. Fotosintesis", correct: true },
            { label: "B. Kemosintesis", correct: false },
            { label: "C. Transpirasi", correct: false },
            { label: "D. Respirasi", correct: false }
          ],
          explanation: "Fotosintesis mengonversi karbondioksida dan air menjadi glukosa dan oksigen menggunakan energi radiasi matahari."
        },
        {
          question: "Bagian darah yang berperan penting dalam proses pembekuan darah saat terjadi luka adalah...",
          options: [
            { label: "A. Trombosit", correct: true },
            { label: "B. Eritrosit", correct: false },
            { label: "C. Leukosit", correct: false },
            { label: "D. Plasma Darah", correct: false }
          ],
          explanation: "Trombosit melepaskan enzim trombokinase untuk memicu pembentukan benang fibrin guna menyumbat pendarahan luka."
        },
        {
          question: "Hewan pemakan tumbuhan saja dikelompokkan ke dalam golongan...",
          options: [
            { label: "A. Herbivora", correct: true },
            { label: "B. Karnivora", correct: false },
            { label: "C. Omnivora", correct: false },
            { label: "D. Detritivora", correct: false }
          ],
          explanation: "Herbivora adalah konsumen primer yang hanya memakan produsen (tumbuhan/alga)."
        },
        {
          question: "Apakah organ pernapasan utama pada manusia tempat terjadinya pertukaran gas O2 dan CO2?",
          options: [
            { label: "A. Paru-paru (Alveolus)", correct: true },
            { label: "B. Trakea", correct: false },
            { label: "C. Laring", correct: false },
            { label: "D. Bronkus", correct: false }
          ],
          explanation: "Di dalam paru-paru terdapat kantung alveolus tipis tempat difusi gas oksigen ke darah dan karbondioksida ke rongga paru."
        },
        {
          question: "Zat warna hijau daun pada tumbuhan yang berfungsi menyerap cahaya matahari dinamakan...",
          options: [
            { label: "A. Klorofil", correct: true },
            { label: "B. Karotenoid", correct: false },
            { label: "C. Fikobilin", correct: false },
            { label: "D. Amiloplas", correct: false }
          ],
          explanation: "Klorofil adalah pigmen fotosintetik utama yang terdapat di dalam tilakoid kloroplas tumbuhan."
        },
        {
          question: "Kelompok makhluk hidup yang mampu membuat makanannya sendiri disebut organisme...",
          options: [
            { label: "A. Autotrof", correct: true },
            { label: "B. Heterotrof", correct: false },
            { label: "C. Parasit", correct: false },
            { label: "D. Saprofit", correct: false }
          ],
          explanation: "Autotrof mensintesis senyawa organik dari zat anorganik sederhana, umumnya melalui fotosintesis."
        },
        {
          question: "Jenis sendi yang memungkinkan gerakan bebas ke segala arah pada tubuh manusia adalah...",
          options: [
            { label: "A. Sendi Peluru", correct: true },
            { label: "B. Sendi Engsel", correct: false },
            { label: "C. Sendi Putar", correct: false },
            { label: "D. Sendi Pelana", correct: false }
          ],
          explanation: "Sendi peluru menghubungkan tulang berbentuk bola dengan mangkok sendi, memfasilitasi rotasi dan gerak multi-arah."
        },
        {
          question: "Penyakit akibat kekurangan vitamin C yang ditandai dengan gusi berdarah disebut...",
          options: [
            { label: "A. Skorbut", correct: true },
            { label: "B. Rakitis", correct: false },
            { label: "C. Beri-beri", correct: false },
            { label: "D. Anemia", correct: false }
          ],
          explanation: "Defisiensi vitamin C mengganggu sintesis kolagen, memicu rapuhnya pembuluh darah kapiler di gusi (skorbut)."
        }
      ],
      sejarah: [
        {
          question: "Siapakah tokoh yang membacakan naskah Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
          options: [
            { label: "A. Ir. Soekarno", correct: true },
            { label: "B. Moh. Hatta", correct: false },
            { label: "C. Sutan Syahrir", correct: false },
            { label: "D. Sayuti Melik", correct: false }
          ],
          explanation: "Ir. Soekarno didampingi Drs. Mohammad Hatta membacakan naskah proklamasi kemerdekaan di Pegangsaan Timur 56."
        },
        {
          question: "Perang Dunia II di kawasan Asia-Pasifik secara resmi berakhir setelah peristiwa...",
          options: [
            { label: "A. Pengeboman Hiroshima & Nagasaki", correct: true },
            { label: "B. Penyerangan Pearl Harbor", correct: false },
            { label: "C. Perjanjian Versailles", correct: false },
            { label: "D. Jatuhnya Berlin", correct: false }
          ],
          explanation: "Jepang menyerah tanpa syarat pada sekutu pada 15 Agustus 1945 setelah kota Hiroshima dan Nagasaki dijatuhi bom atom."
        },
        {
          question: "Apakah nama kerajaan Hindu tertua di Indonesia yang terletak di Kalimantan Timur?",
          options: [
            { label: "A. Kerajaan Kutai", correct: true },
            { label: "B. Kerajaan Tarumanegara", correct: false },
            { label: "C. Kerajaan Majapahit", correct: false },
            { label: "D. Kerajaan Sriwijaya", correct: false }
          ],
          explanation: "Kutai Martadipura dibuktikan oleh penemuan 7 prasasti Yupa bertuliskan huruf Pallawa peninggalan Raja Mulawarman sekitar abad ke-4 M."
        },
        {
          question: "Siapakah patih Kerajaan Majapahit yang terkenal dengan Sumpah Palapa untuk menyatukan Nusantara?",
          options: [
            { label: "A. Gajah Mada", correct: true },
            { label: "B. Hayam Wuruk", correct: false },
            { label: "C. Raden Wijaya", correct: false },
            { label: "D. Kertanegara", correct: false }
          ],
          explanation: "Mahapatih Gajah Mada mengikrarkan Sumpah Palapa bahwa ia tidak akan menikmati buah palapa sebelum menyatukan wilayah Nusantara di bawah Majapahit."
        },
        {
          question: "Perjanjian yang membagi wilayah dunia luar Eropa antara Spanyol dan Portugis pada tahun 1494 adalah...",
          options: [
            { label: "A. Perjanjian Tordesillas", correct: true },
            { label: "B. Perjanjian Saragosa", correct: false },
            { label: "C. Perjanjian London", correct: false },
            { label: "D. Perjanjian Linggajati", correct: false }
          ],
          explanation: "Perjanjian Tordesillas menetapkan garis demarkasi imaginer membagi wilayah eksplorasi barat untuk Spanyol dan timur untuk Portugis."
        },
        {
          question: "Kongres Pemuda II yang melahirkan ikrar Sumpah Pemuda diselenggarakan pada tanggal...",
          options: [
            { label: "A. 28 Oktober 1928", correct: true },
            { label: "B. 20 Mei 1908", correct: false },
            { label: "C. 17 Agustus 1945", correct: false },
            { label: "D. 1 Juni 1945", correct: false }
          ],
          explanation: "Ikrar Sumpah Pemuda (Satu Nusa, Satu Bangsa, Satu Bahasa) disepakati pada penutupan Kongres Pemuda II tanggal 28 Oktober 1928 di Jakarta."
        },
        {
          question: "Apakah nama organisasi pergerakan nasional pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908?",
          options: [
            { label: "A. Budi Utomo", correct: true },
            { label: "B. Sarekat Islam", correct: false },
            { label: "C. Indische Partij", correct: false },
            { label: "D. Muhammadiyah", correct: false }
          ],
          explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan mahasiswa STOVIA atas inisiasi Dr. Wahidin Sudirohusodo, menandai kebangkitan nasional."
        },
        {
          question: "Candi Borobudur yang merupakan candi Buddha terbesar di dunia dibangun pada masa pemerintahan dinasti...",
          options: [
            { label: "A. Syailendra", correct: true },
            { label: "B. Sanjaya", correct: false },
            { label: "C. Isyana", correct: false },
            { label: "D. Warmadewa", correct: false }
          ],
          explanation: "Borobudur dibangun pada abad ke-8 dan ke-9 Masehi oleh Dinasti Syailendra dari Kerajaan Mataram Kuno penganut Buddha Mahayana."
        },
        {
          question: "Siapakah penjelajah asal Italia yang berhasil mencapai benua Amerika pada tahun 1492?",
          options: [
            { label: "A. Christopher Columbus", correct: true },
            { label: "B. Vasco da Gama", correct: false },
            { label: "C. Ferdinand Magellan", correct: false },
            { label: "D. Amerigo Vespucci", correct: false }
          ],
          explanation: "Columbus memimpin ekspedisi kerajaan Spanyol menyeberangi Samudera Atlantik dan mendarat di kepulauan Bahama Amerika."
        },
        {
          question: "Peristiwa diculiknya Soekarno dan Hatta oleh golongan muda menjelang Proklamasi disebut peristiwa...",
          options: [
            { label: "A. Peristiwa Rengasdengklok", correct: true },
            { label: "B. Peristiwa Malari", correct: false },
            { label: "C. Peristiwa Cikini", correct: false },
            { label: "D. Peristiwa Tiga Daerah", correct: false }
          ],
          explanation: "Golongan muda melarikan Soekarno-Hatta ke Rengasdengklok agar terhindar dari pengaruh Jepang dan segera memproklamasikan kemerdekaan."
        }
      ]
    };

    const activeTab = document.querySelector(".cbt-sec-tab-btn.active");
    const topic = activeTab ? activeTab.getAttribute("data-topic") : "matematika";
    const topicList = aiQuestionsDb[topic] || aiQuestionsDb.matematika;
    
    // Choose a random question out of the 10 available!
    const matchedQ = topicList[Math.floor(Math.random() * topicList.length)];

    setTimeout(() => {
      btn.innerHTML = `<i class="fas fa-brain animate-pulse"></i> AI sedang merumuskan butir soal...`;

      setTimeout(() => {
        btn.disabled = false;
        btn.style.pointerEvents = "auto";
        btn.innerHTML = `<i class="fas fa-wand-magic-sparkles"></i> Regenerate Soal Baru`;

        if (resultContainer) {
          let optionsHtml = "";
          matchedQ.options.forEach((opt, idx) => {
            optionsHtml += `
              <button type="button" onclick="window.clickAiOption(this)" class="ai-opt-btn p-2 rounded text-left bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 flex items-center justify-between outline-none cursor-pointer" data-correct="${opt.correct}">
                <span>${opt.label}</span>
                <i class="fas ${opt.correct ? 'fa-check text-emerald-500' : 'fa-times text-red-500'} hidden"></i>
              </button>
            `;
          });

          resultContainer.innerHTML = `
            <div class="p-3.5 rounded-lg bg-red-500/5 border border-red-500/10 space-y-2 animate-fadeIn" data-explanation="${matchedQ.explanation}">
              <p class="text-red-500 font-bold flex items-center gap-1.5"><i class="fas fa-check-circle"></i> Hasil Soal Rekomendasi AI:</p>
              <p class="font-bold text-gray-700 dark:text-gray-300">"${matchedQ.question}"</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-semibold pt-1">
                ${optionsHtml}
              </div>
              <p id="ai-sim-feedback" class="ai-sim-feedback text-[9px] font-semibold mt-2 hidden p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"></p>
            </div>
          `;
        }
      }, 700);
    }, 700);
  };

  // --- CBT Section Spotlight Tab Switcher (Topic Based) ---
  const cbtSecTabs = document.querySelectorAll(".cbt-sec-tab-btn");

  cbtSecTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      cbtSecTabs.forEach(t => {
        t.classList.remove("active", "border-red-500", "text-red-500");
        t.classList.add("border-transparent");
      });

      tab.classList.add("active", "border-red-500", "text-red-500");
      tab.classList.remove("border-transparent");

      const text = tab.getAttribute("data-text");
      const input = document.getElementById("ai-material-input");
      if (input) {
        input.value = text;
      }
      window.generateAiExam();
    });
  });
});


