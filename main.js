// ============================================================
//  TRANSLATIONS
// ============================================================
const translations = {
    mn: {
        nav_home:       "НҮҮР ХУУДАС",
        nav_about:      "БИДНИЙ ТУХАЙ",
        nav_products:   "БҮТЭЭГДЭХҮҮН",
        nav_services:   "ҮЙЛЧИЛГЭЭ",
        nav_contact:    "ҮНИЙН САНАЛ",
        settings_title: "Тохиргоо",
        settings_lang:  "Хэл",
        settings_theme: "Харанхуй горим",

        hero_subtitle: "Augmented Reality",
        hero_title:    "ХЭВЛЭЛИЙН ҮЙЛЧИЛГЭЭ",
        hero_desc:     "ХЭВЛЭЛИЙГ ШИНЭ ТҮВШИНД   . . .",
        hero_cta:      "БИДНИЙ АЖИЛТАЙ ТАНИЛЦАХ",

        about_title:    "БИДНИЙ ТУХАЙ",
        about_headline: "Хэвлэл + Технологи + AR шийдэл = ARGUN.",
        about_p1:       '"ARGUN" ХХК нь хэвлэлийн үйлчилгээ болон дижитал технологийг хослуулсан инновацлаг компани юм. Бид уламжлалт хэвлэлийг орчин үеийн технологитой уялдуулж, AR (Augmented Reality) зэрэг ухаалаг шийдлүүдийг бүтээгдэхүүн, сурталчилгаа, танилцуулгад нэвтрүүлэн харилцагчдад илүү интерактив, сэтгэлд хоногших туршлагыг бий болгодог.',
        about_p2:       'ARGUN ХХК нь бүтээлч сэтгэлгээ, технологийн шийдэл, чанарын өндөр стандартыг нэгтгэн хэвлэлийн бүтээгдэхүүнийг шинэ түвшинд хүргэхийг зорьдог. Бид бизнес байгууллагуудын брэндийн үнэ цэнийг нэмэгдүүлэх, мэдээллийг илүү сонирхолтой, амьд хэлбэрээр хүргэх дэвшилтэт арга замыг санал болгож байна.',
        skill_1: "Инноваци", skill_2: "AR шийдэл", skill_3: "Интерактив хэвлэл",
        skill_4: "Дижитал интеграци", skill_5: "Бүтээлч сэтгэлгээ", skill_6: "Чанарын стандарт",

        products_title: "Онцлох бүтээгдэхүүн",
        prod1_title: "Урилга",
        prod1_desc:  "ARGUN LLC-ийн AR урилга нь зүгээр нэг цаасан урилга биш — скан хийхэд видео мэндчилгээ, 3D анимейшн, арга хэмжээний байршил, хөтөлбөр шууд гарч ирнэ. Таны хурим, төрсөн өдөр, албан ёсны арга хэмжээг илүү дурсамжтай, технологитой, онцгой болгоно. Дизайн, хэвлэл, AR контентыг нэг дороос шийдэж өгнө.",
        prod2_title: "Буддаг ном",
        prod2_desc:  "ARGUN LLC нь AR технологитой буддаг ном үйлдвэрлэж байна. Хүүхэд зураг будаад, гар утсаараа уншуулахад дүрүүд амилан хөдөлж, дуу авиа гаргана. Бүтээлч сэтгэлгээ, танин мэдэхүйг технологитой хослуулсан шинэ үеийн интерактив ном.",
        prod3_title: "Нэрийн хуудас",
        prod3_desc:  "AR нэрийн хуудас нь скан хийхэд танилцуулга видео, сошиал линк, холбоо барих мэдээлэл шууд гарч ирнэ. Бизнесийн дараагийн түвшин — технологитой нэрийн хуудас.",
        prod4_title: "Брошур",
        prod4_desc:  "Брошурын зураг, бүтээгдэхүүн дээр AR нэмснээр 3D загвар, видео тайлбар, хөдөлгөөнт контент гарч ирнэ. Танилцуулгыг амилуулсан орчин үеийн шийдэл.",
        prod5_title: "Шошго, стикер",
        prod5_desc:  "Бүтээгдэхүүний шошгыг скан хийхэд видео танилцуулга, хэрэглээний заавар, брэндийн түүх гарч ирнэ. Сав баглаа боодлыг технологитой холбосон ухаалаг шийдэл.",
        prod6_title: "Өдөр тутмын тэмдэглэл, дэвтэр",
        prod6_desc:  "AR функцтэй дэвтэр нь скан хийхэд урам зориг өгөх контент, видео заавар, интерактив хуудас нээгдэнэ. Бичиг хэрэгсэл ба технологийн төгс хослол.",
        prod7_title: "Цаасан уут, бэлгийн карт",
        prod7_desc:  "Бэлгийн карт эсвэл уутыг скан хийхэд мэндчилгээний видео, 3D анимейшн, тусгай контент гарч ирнэ. Бэлгийг илүү дурсамжтай, сэтгэл хөдөлгөм болгоно.",
        prod8_title: "Мини каталог, гарын авлага",
        prod8_desc:  "Каталог болон гарын авлагад AR нэмснээр бүтээгдэхүүн 3D хэлбэрээр харагдаж, видео тайлбар шууд гарч ирнэ. Мэдээллийг амьд, ойлгомжтой хэлбэрээр хүргэнэ.",

        services_title:    "Үйлчилгээ",
        services_subtitle: "Дэлхийн өндөр технологийн хэвлэлийн арга, тоног төхөөрөмжийг ашиглан таны бүтээгдэхүүнийг бэлтгэнэ",
        svc1_title: "UV Rolling",
        svc1_desc:  "Гадаргуу дээр хэсэгчлэн эсвэл бүхэлд нь UV лак түрхэж гоё гялтганасан эффект үүсгэнэ. Хэвлэмэл материалыг илүү эрхэм, тод харагдуулна.",
        svc1_f1: "Хэсэгчилсэн UV (Spot UV)", svc1_f2: "Бүрэн UV coating", svc1_f3: "Мат + глосс хослол",
        svc2_title: "Офсет хэвлэл",
        svc2_desc:  "Том тиражтай, өндөр чанарын хэвлэлд зориулсан офсет технологи. Тод өнгө, нарийн дүрслэл, тогтвортой чанар — аж ахуйн нэгжүүдэд идеал.",
        svc2_f1: "4 өнгөт CMYK хэвлэл", svc2_f2: "Том тираж, хурдан гүйцэтгэл", svc2_f3: "A5–A0 хэмжээ",
        svc3_title: "Фольго штамп",
        svc3_desc:  "Алт, мөнгө болон бусад өнгийн фольгоор загвар, үсэг шахаж хэвлэх үйлчилгээ. Бүтээгдэхүүнд тансаг, дурсамжтай харагдал өгнө.",
        svc3_f1: "Алт / Мөнгө фольго", svc3_f2: "Голографик фольго", svc3_f3: "Логотип, текст шахалт",
        svc4_title: "Embossing / Debossing",
        svc4_desc:  "Цаас, хавтас дээр гүнзгийрүүлэн эсвэл өргөн хэлбэрийг дарж гаргах арга. Хүрэхэд мэдрэгддэг өвөрмөц текстур, брэндийн онцгой дүр төрх.",
        svc4_f1: "Emboss (өргөлтөт)", svc4_f2: "Deboss (гүнзгийрүүлсэн)", svc4_f3: "Фольготой хослуулах боломж",
        svc5_title: "Лазер хайчлалт",
        svc5_desc:  "Лазер технологи ашиглан цаас, хавтас, акрил зэрэг материалыг нарийн хайчилна. Тогтмол бус хэлбэр, нарийн загварыг үнэн зөв гүйцэтгэнэ.",
        svc5_f1: "Цаас, хавтас хайчлалт", svc5_f2: "Нарийн загварын die-cut", svc5_f3: "Акрил, MDF материал",
        svc6_title: "Сав баглаа боодол",
        svc6_desc:  "Брэндийн онцлогт тохирсон хайрцаг, уут, бэлгийн сав бэлтгэнэ. Дизайнаас эхлээд хэвлэл, угсралт хүртэл бүгдийг нэг дороос шийднэ.",
        svc6_f1: "Захиалгат хайрцаг", svc6_f2: "Цаасан уут, бэлгийн сав", svc6_f3: "Брэнд тохирсон дизайн",

        contact_title: "Үнийн санал авах",
        contact_desc:  "Технологи, хэвлэлийг хослуулсан шийдлээр таны брэндийг дараагийн түвшинд хүргэнэ. Дэлгэрэнгүй мэдээлэл авах бол 7000-7333 дугаарт холбогдоно уу.",
        quote_btn:     "Дэлгэрэнгүй үнийн санал авах →",
        contact_or:    "эсвэл доорх маягтыг бөглөнө үү",
        form_name:    "Нэр",
        form_email:   "И-Мэйл",
        form_subject: "Таны санал",
        form_message: "Нэмэлт мэдээлэл",
        form_submit:  "Илгээх",

        footer_privacy: "Privacy Policy",
        footer_terms:   "Үйлчилгээний нөхцөл",
        footer_map:     "Газрын зураг дээр харах",
    },
    en: {
        nav_home:       "HOME",
        nav_about:      "ABOUT US",
        nav_products:   "PRODUCTS",
        nav_services:   "SERVICES",
        nav_contact:    "GET A QUOTE",
        settings_title: "Settings",
        settings_lang:  "Language",
        settings_theme: "Dark Mode",

        hero_subtitle: "Augmented Reality",
        hero_title:    "PRINTING SERVICES",
        hero_desc:     "TAKING PRINT TO THE NEXT LEVEL   . . .",
        hero_cta:      "EXPLORE OUR WORK",

        about_title:    "ABOUT US",
        about_headline: "Print + Technology + AR Solutions = ARGUN.",
        about_p1:       '"ARGUN" LLC is an innovative company combining printing services with digital technology. We integrate traditional printing with modern technology, embedding smart solutions such as AR (Augmented Reality) into products, advertisements, and presentations — creating more interactive and memorable experiences for our clients.',
        about_p2:       'ARGUN LLC aims to elevate print products to a new level by combining creative thinking, technological solutions, and high quality standards. We offer advanced methods to increase the brand value of businesses and deliver information in a more engaging and vibrant way.',
        skill_1: "Innovation", skill_2: "AR Solutions", skill_3: "Interactive Print",
        skill_4: "Digital Integration", skill_5: "Creative Thinking", skill_6: "Quality Standards",

        products_title: "Featured Products",
        prod1_title: "Invitations",
        prod1_desc:  "ARGUN LLC's AR invitation is more than just a paper card — scan it to instantly reveal video greetings, 3D animations, event location, and program details. Make your wedding, birthday, or official event more memorable, tech-powered, and unique. Design, print, and AR content — all in one place.",
        prod2_title: "Coloring Books",
        prod2_desc:  "ARGUN LLC produces coloring books enhanced with AR technology. When a child colors a page and scans it with their phone, the characters come alive with motion and sound. An interactive book for the new generation that combines creativity and learning with technology.",
        prod3_title: "Business Cards",
        prod3_desc:  "Scan an AR business card to instantly reveal an intro video, social links, and contact details. The next level of business networking — technology-powered business cards.",
        prod4_title: "Brochures",
        prod4_desc:  "Adding AR to brochure images and products reveals 3D models, video explanations, and animated content. A modern solution that brings your presentation to life.",
        prod5_title: "Labels & Stickers",
        prod5_desc:  "Scan a product label to reveal a video introduction, usage instructions, and brand story. A smart solution that connects packaging with technology.",
        prod6_title: "Notebooks & Journals",
        prod6_desc:  "AR-enabled notebooks open up motivational content, video guides, and interactive pages when scanned. The perfect blend of stationery and technology.",
        prod7_title: "Paper Bags & Gift Cards",
        prod7_desc:  "Scan a gift card or bag to reveal greeting videos, 3D animations, and special content. Make gifts more memorable and emotionally impactful.",
        prod8_title: "Mini Catalogs & Guides",
        prod8_desc:  "Adding AR to catalogs and guides lets products appear in 3D and video explanations play instantly. Delivers information in a vivid, easy-to-understand format.",

        services_title:    "Our Services",
        services_subtitle: "We prepare your products using world-class printing technologies and equipment",
        svc1_title: "UV Rolling",
        svc1_desc:  "Apply UV varnish partially or fully to create a beautiful glossy effect on the surface. Makes printed materials look more premium and vibrant.",
        svc1_f1: "Spot UV (partial coating)", svc1_f2: "Full UV coating", svc1_f3: "Matte + gloss combination",
        svc2_title: "Offset Printing",
        svc2_desc:  "Offset technology designed for high-volume, high-quality printing. Vibrant colors, fine detail, and consistent quality — ideal for businesses.",
        svc2_f1: "4-color CMYK printing", svc2_f2: "High volume, fast turnaround", svc2_f3: "Sizes from A5 to A0",
        svc3_title: "Foil Stamping",
        svc3_desc:  "Stamping designs and text with gold, silver, or colored foils. Gives products a luxurious, memorable appearance.",
        svc3_f1: "Gold / Silver foil", svc3_f2: "Holographic foil", svc3_f3: "Logo and text stamping",
        svc4_title: "Embossing / Debossing",
        svc4_desc:  "A technique for pressing raised or recessed shapes into paper and board. Creates a unique tactile texture and distinctive brand identity.",
        svc4_f1: "Emboss (raised)", svc4_f2: "Deboss (recessed)", svc4_f3: "Can be combined with foil",
        svc5_title: "Laser Cutting",
        svc5_desc:  "Precisely cut paper, board, acrylic, and other materials using laser technology. Accurately execute irregular shapes and intricate designs.",
        svc5_f1: "Paper & board cutting", svc5_f2: "Intricate die-cut designs", svc5_f3: "Acrylic and MDF materials",
        svc6_title: "Packaging",
        svc6_desc:  "Custom boxes, bags, and gift packaging tailored to your brand identity. From design to printing and assembly — all in one place.",
        svc6_f1: "Custom boxes", svc6_f2: "Paper bags & gift packaging", svc6_f3: "Brand-matched design",

        contact_title: "Get a Quote",
        contact_desc:  "We will take your brand to the next level with our combined technology and printing solutions. For more information call us at 7000-7333.",
        quote_btn:     "Get a Detailed Quote →",
        contact_or:    "or fill in the quick form below",
        form_name:    "Name",
        form_email:   "Email",
        form_subject: "Your Inquiry",
        form_message: "Additional Information",
        form_submit:  "Send",

        footer_privacy: "Privacy Policy",
        footer_terms:   "Terms of Service",
        footer_map:     "View on Map",
    }
};

// ============================================================
//  LANGUAGE SWITCHER
// ============================================================
let currentLang = localStorage.getItem('argun_lang') || 'mn';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('argun_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Update all [data-key] elements
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Sync all lang buttons (desktop + mobile)
    ['btnMN','mobileBtnMN'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.toggle('active', lang === 'mn');
    });
    ['btnEN','mobileBtnEN'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.toggle('active', lang === 'en');
    });
}

// ============================================================
//  DARK MODE
// ============================================================
let isDark = localStorage.getItem('argun_dark') === 'true';

function applyDark(dark) {
    isDark = dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('argun_dark', dark);

    // Sync all checkboxes
    document.querySelectorAll('#darkModeCheck, #mobileDarkCheck').forEach(cb => {
        cb.checked = dark;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Init language
    setLanguage(currentLang);

    // Init dark mode
    applyDark(isDark);

    // Dark mode checkbox listeners
    document.querySelectorAll('#darkModeCheck, #mobileDarkCheck').forEach(cb => {
        cb.addEventListener('change', (e) => {
            applyDark(e.target.checked);
            // Sync the other checkbox
            document.querySelectorAll('#darkModeCheck, #mobileDarkCheck').forEach(other => {
                other.checked = e.target.checked;
            });
        });
    });

    // ============================================================
    //  SETTINGS DROPDOWN
    // ============================================================
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsDropdown = document.getElementById('settingsDropdown');

    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = settingsPanel.classList.contains('visible');
        settingsPanel.classList.toggle('visible', !isOpen);
        settingsBtn.classList.toggle('open', !isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!settingsDropdown.contains(e.target)) {
            settingsPanel.classList.remove('visible');
            settingsBtn.classList.remove('open');
        }
    });

    // ============================================================
    //  MOBILE MENU
    // ============================================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            settingsPanel.classList.remove('visible');
            settingsBtn.classList.remove('open');
        }
    });

    // ============================================================
    //  SCROLL ANIMATIONS
    // ============================================================
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, observerOptions);

    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.portfolio-item').forEach((item, i) => {
                    setTimeout(() => item.classList.add('animate'), i * 150);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => observer.observe(el));
    document.querySelectorAll('.portfolio-grid').forEach(grid => portfolioObserver.observe(grid));

    // ============================================================
    //  NAVBAR SCROLL
    // ============================================================
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // ============================================================
    //  SMOOTH SCROLLING
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // ============================================================
    //  PARALLAX HERO
    // ============================================================
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const hero = document.querySelector('.hero');
                if (hero) hero.style.transform = `translateY(${window.pageYOffset * -0.3}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // ============================================================
    //  SKILL TAG HOVER
    // ============================================================
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => tag.style.transform = 'translateY(-2px) scale(1.05)');
        tag.addEventListener('mouseleave', () => tag.style.transform = 'translateY(0) scale(1)');
    });

    // ============================================================
    //  FLOATING CONTACT BUTTON
    // ============================================================
    const contactBtn = document.getElementById('contactBtn');
    const contactOptions = document.getElementById('contactOptions');
    contactBtn.addEventListener('click', () => contactOptions.classList.toggle('show'));

    // ============================================================
    //  CONTACT FORM
    // ============================================================
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = currentLang === 'mn' ? 'Илгээж байна...' : 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'linear-gradient(135deg, #94a3b8, #64748b)';

        const name    = document.getElementById('name').value;
        const email   = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        try {
            const res = await fetch('https://babgbxgnljvvemlgaric.supabase.co/functions/v1/arpublishing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            });

            if (res.ok) {
                submitBtn.textContent = currentLang === 'mn' ? 'Амжилттай илгээгдлээ ✓' : 'Sent Successfully ✓';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                submitBtn.style.transform = 'scale(1.05)';
                setTimeout(() => { submitBtn.style.transform = 'scale(1)'; }, 200);
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 3000);
            } else {
                throw new Error('Server error');
            }
        } catch {
            submitBtn.textContent = currentLang === 'mn' ? 'Алдаа гарлаа' : 'Error occurred';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
});


// ── VIDEO HOVER TO PLAY ──
document.querySelectorAll('.video-wrap').forEach(wrap => {
    const id = wrap.dataset.videoid;
    const url = wrap.dataset.url;
    const iframe = wrap.querySelector('.video-iframe');
    let hoverTimeout;

    // Hover = autoplay muted (like GIF)
    wrap.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=' + id;
            wrap.classList.add('playing');
        }, 150);
    });

    wrap.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        wrap.classList.remove('playing');
        iframe.src = '';
    });

    // Click = open YouTube
    wrap.addEventListener('click', () => {
        window.open(url, '_blank');
    });
});

// Animate video cards on scroll
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.video-card').forEach(card => videoObserver.observe(card));
