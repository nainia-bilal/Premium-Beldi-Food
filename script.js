// FILE: script.js

// 1. قاعدة بيانات الترجمة (قاموس)
const translations = {
    en: {
        home: "Home", collections: "Collections", shop: "Shop", about: "Our Story", contact: "Contact",
        hero_slogan: "Taste the Heritage", hero_btn: "Discover Flavors",
        cat_title: "Our Collections", loading: "Loading...", buy_btn: "Buy Now", form_send: "Send to WhatsApp",
        footer_copy: "© 2026 Maison Bilal. All Rights Reserved.",
        // About
        about_title: "The Soul of The Terroir", about_sub: "Origins & Passion",
        founder_title: "Founder's Note", founder_role: "Founder & Creative Director",
        val_quality: "Premium Quality", val_ethic: "Ethical Sourcing", val_service: "Luxury Service",
        quote: "\"Cooking is not just about ingredients, it's about history and love.\"",
        founder_text: "\"Welcome to Maison Bilal. This project was born from a deep passion for our Moroccan heritage. Every jar of Amlou, every drop of Argan oil is rigorously selected to offer you an unforgettable experience.\"",
        // Contact
        contact_title: "Let's Talk", contact_main: "Contact Us",
        label_phone: "Phone", label_email: "Email", label_addr: "Address",
        form_name: "Full Name", form_phone: "Phone Number", form_msg: "Message"
    },
    fr: {
        home: "Accueil", collections: "Collections", shop: "Boutique", about: "L'Histoire", contact: "Contact",
        hero_slogan: "Le Goût de l'Héritage", hero_btn: "Découvrir les Saveurs",
        cat_title: "Nos Collections", loading: "Chargement...", buy_btn: "Commander", form_send: "Envoyer sur WhatsApp",
        footer_copy: "© 2026 Maison Bilal. Tous droits réservés.",
        // About
        about_title: "L'Âme du Terroir", about_sub: "Origines & Passion",
        founder_title: "Le Mot du Fondateur", founder_role: "Fondateur & Directeur",
        val_quality: "Qualité Premium", val_ethic: "Éthique", val_service: "Service De Luxe",
        quote: "\"La cuisine n'est pas seulement une question d'ingrédients, c'est une question d'histoire et d'amour.\"",
        founder_text: "\"Bienvenue chez Maison Bilal. Ce projet est né d'une passion profonde pour notre héritage marocain. Chaque pot d'Amlou, chaque goutte d'huile d'Argan est sélectionnée avec rigueur pour vous offrir une expérience inoubliable.\"",
        // Contact
        contact_title: "Parlons-en", contact_main: "Contactez-Nous",
        label_phone: "Téléphone", label_email: "Email", label_addr: "Adresse",
        form_name: "Nom Complet", form_phone: "Téléphone", form_msg: "Message"
    },
    ar: {
        home: "الرئيسية", collections: "المجموعات", shop: "المتجر", about: "قصتنا", contact: "اتصل بنا",
        hero_slogan: "تستاهلو ديما ما حسن", hero_btn: "اكتشف النكهات",
        cat_title: "مجموعاتنا المختارة", loading: "جاري التحميل...", buy_btn: "اطلب الآن", form_send: "أرسل عبر واتساب",
        footer_copy: "© 2026 ميزون بلال. جميع الحقوق محفوظة.",
        // About
        about_title: "روح الأصالة المغربية", about_sub: "أصل وشغف",
        founder_title: "كلمة المؤسس", founder_role: "المؤسس والمدير الإبداعي",
        val_quality: "جودة عالية", val_ethic: "مصادر أخلاقية", val_service: "خدمة فاخرة",
        quote: "\"الطبخ ليس مجرد مكونات، إنه تاريخ وحب وذاكرة.\"",
        founder_text: "\"مرحباً بكم في ميزون بلال. وُلد هذا المشروع من شغف عميق بتراثنا المغربي. كل جرة أملو، وكل قطرة زيت أركان تم اختيارها بعناية فائقة لنقدم لكم تجربة لا تُنسى.\"",
        // Contact
        contact_title: "لنتحدث", contact_main: "تواصل معنا",
        label_phone: "الهاتف", label_email: "البريد الإلكتروني", label_addr: "العنوان",
        form_name: "الاسم الكامل", form_phone: "رقم الهاتف", form_msg: "الرسالة"
    }
};

// 2. قاعدة بيانات المنتجات (التي طلبتها)
const productsDB = [
    // AMLOU
    { id: 1, category: 'amlou', price: '150 DH', img: 'https://i.etsystatic.com/57771994/r/il/36f725/6751174485/il_340x270.6751174485_mysa.jpg', name: { en: "Almond Amlou", fr: "Amlou aux Amandes", ar: "أملو باللوز" } },
    { id: 2, category: 'amlou', price: '90 DH', img: 'https://plus.unsplash.com/premium_photo-1701210419456-78f3e42789ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVhbnV0JTIwYnV0dGVyfGVufDB8fDB8fHww', name: { en: "Peanut Amlou", fr: "Amlou Cacahuètes", ar: "أملو بالكاوكاو" } },
    { id: 3, category: 'amlou', price: '200 DH', img: 'https://i.etsystatic.com/55999415/r/il/589704/6593763505/il_340x270.6593763505_g67t.jpg', name: { en: "Pure Argan Amlou", fr: "Amlou Argan Pur", ar: "أملو بالأركان الحر" } },
    { id: 4, category: 'amlou', price: '130 DH', img: 'https://www.auxdelicesdupalais.net/wp-content/uploads/2022/01/Sans-titre-241.jpg', name: { en: "Mixed Amlou", fr: "Amlou Mixte", ar: "أملو مخلط" } },
    // HONEY
    { id: 5, category: 'honey', price: '300 DH', img: 'https://biomielandco.com/modules/ph_simpleblog/featured/93.png', name: { en: "Euphorbia Honey", fr: "Miel Daghmous", ar: "عسل الدغموس" } },
    { id: 6, category: 'honey', price: '120 DH', img: 'https://img.freepik.com/premium-photo/close-up-lemon-slice-against-white-background_1048944-20642629.jpg?semt=ais_hybrid&w=740&q=80', name: { en: "Lemon Honey", fr: "Miel Citron", ar: "عسل الليمون" } },
    { id: 7, category: 'honey', price: '150 DH', img: 'https://cdn11.bigcommerce.com/s-2ubphtnd0n/images/stencil/500x659/products/120/393/Chunk2__37116.1603141957.jpg?c=2', name: { en: "Eucalyptus Honey", fr: "Miel Eucalyptus", ar: "عسل الكالبتوس" } },
    { id: 8, category: 'honey', price: '250 DH', img: 'https://earthenconnect.com/wp-content/uploads/2025/01/Banner-2-Basil.jpg', name: { en: "Basil Honey", fr: "Miel Basilic", ar: "عسل الريحان" } },
    // DAIRY
    { id: 9, category: 'dairy', price: '80 DH', img: 'https://media.istockphoto.com/id/179875636/photo/butter.jpg?s=612x612&w=0&k=20&c=dQjAemP1f3RDr64uN7gN5TQCZI6XkkgijtWYo9yTB7o=', name: { en: "Beldi Butter", fr: "Beurre Beldi", ar: "زبدة بلدية" } },
    { id: 10, category: 'dairy', price: '70 DH', img: 'https://static.webteb.net/images/content/tbl_articles_article_25069_782d1122557-c492-4c06-8ea7-a26335dd0727.jpg', name: { en: "Aged Smen", fr: "Smen Beldi", ar: "سمن بلدي حار" } },
    // GRAINS
    { id: 11, category: 'grains', price: '40 DH', img: 'https://thumbs.dreamstime.com/b/fine-ground-barley-texture-background-whole-spelt-grain-species-high-protein-fiber-rich-vegan-plant-based-food-ingredient-gluten-398830630.jpg', name: { en: "Barley (Dchicha)", fr: "Semoule d'Orge", ar: "دشيشة الشعير" } }
];

let currentLang = localStorage.getItem('siteLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    setLanguage(currentLang);
    setupMobileMenu();
    renderProducts();

    // ربط تغيير اللغة
    const selectors = document.querySelectorAll('.lang-select');
    selectors.forEach(sel => {
        sel.value = currentLang;
        sel.addEventListener('change', (e) => setLanguage(e.target.value));
    });
});

// دالة تغيير اللغة
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });

    renderProducts(); // إعادة رسم المنتجات باللغة الجديدة
    
    // تحديث القوائم الاخرى
    document.querySelectorAll('.lang-select').forEach(s => s.value = lang);
}

// دالة عرض المنتجات
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCat = urlParams.get('cat');
    const title = document.getElementById('page-title');

    if(selectedCat) {
        title.innerText = (currentLang === 'ar') ? selectedCat : selectedCat.toUpperCase();
    } else {
        title.innerText = translations[currentLang].shop;
    }

    let displayProducts = productsDB;
    if (selectedCat && selectedCat !== 'all') {
        displayProducts = productsDB.filter(p => p.category === selectedCat);
    }

    grid.innerHTML = '';
    displayProducts.forEach(p => {
        const card = `
            <div class="product-card group relative overflow-hidden">
                <div class="h-64 overflow-hidden">
                    <img src="${p.img}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                </div>
                <div class="p-6">
                    <h3 class="font-heading text-lg text-white">${p.name[currentLang]}</h3>
                    <p class="text-xs text-gray-500 uppercase mt-1 mb-4">${p.category}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-[#C6A87C] font-bold">${p.price}</span>
                        <button onclick="openModal('${p.name[currentLang]}')" class="btn-gold" data-i18n="buy_btn">${translations[currentLang].buy_btn}</button>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Mobile Menu
function setupMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const close = document.getElementById('close-menu');
    if(btn) {
        btn.onclick = () => menu.classList.remove('translate-x-full');
        close.onclick = () => menu.classList.add('translate-x-full');
    }
}

// WhatsApp Order
function openModal(name) {
    document.getElementById('modal-product').innerText = name;
    document.getElementById('order-modal').classList.remove('hidden');
}
function closeModal() {
    document.getElementById('order-modal').classList.add('hidden');
}
function sendWhatsapp(e) {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const address = document.getElementById('c-address').value;
    const qty = document.getElementById('c-qty').value;
    const product = document.getElementById('modal-product').innerText;
    
    const msg = `Salam Maison Bilal, Commande:\n📦 Produit: *${product}*\n🔢 Qty: ${qty}\n👤 Nom: ${name}\n📍 Adresse: ${address}`;
    window.open(`https://wa.me/212687755912?text=${encodeURIComponent(msg)}`, '_blank');
    closeModal();
}