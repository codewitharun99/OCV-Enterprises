// Inject logo base64
  const LOGO_DATA = 'data:image/webp;base64,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';
  document.querySelectorAll('img[src="LOGO_PLACEHOLDER"]').forEach(img => img.src = LOGO_DATA);

  // Navbar scroll
  window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', scrollY > 40));

  // Mobile menu
  document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('open'));
  function closeMobile() { document.getElementById('mobile-menu').classList.remove('open'); }

  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal,.rl,.rr,.stagger').forEach(el => obs.observe(el));


  // ── SCROLL TO TOP ── 
  const scrollBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => scrollBtn.classList.toggle('show', scrollY > 400));
  scrollBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // ── LANGUAGE TOGGLE ──
  const translations = {
    en: {
      'hero-title': 'Sustainable <em>Coconut Shell</em> Products for Global Buyers',
      'hero-sub': 'Premium handcrafted coconut shell bowls, cups, candles, coir products & eco-friendly home décor — export-quality from Perundurai, Tamil Nadu. Trusted by wholesalers, hotels, cafés, gift brands & importers worldwide.',
      'nav-home':'Home','nav-products':'Products','nav-about':'About','nav-export':'Export','nav-contact':'Contact',
      'about-title':'A Family Farm Business<br/>Rooted in Coconuts',
      'about-p1':'OCV Enterprises is a family-owned business with a deep connection to agriculture. Our story began on a farm, and that heritage fuels our passion for creating high-quality, value-added products from a sustainable source — the coconut.',
      'hero-cta1':'Request a Quote','hero-cta2':'Browse Products','hero-cta3':'WhatsApp Us',
      'section-about-tag':'About Us','section-product-tag':'Our Products','section-why-tag':'Why Choose Us',
    },
    ta: {
      'hero-title': '<em>தேங்காய் ஓடு</em> தயாரிப்புகள் — உலகளாவிய வாங்குனர்களுக்கு',
      'hero-sub': 'பெருந்துறை, தமிழ்நாட்டில் இருந்து ஏற்றுமதி தரம் வாய்ந்த கைவினை தேங்காய் ஓடு கிண்ணங்கள், கோப்பைகள், மெழுகுவர்த்திகள் மற்றும் சுற்றுச்சூழல் நட்பு வீட்டு அலங்காரம். மொத்த வியாபாரிகள், ஹோட்டல்கள், கஃபேக்கள் & இறக்குமதியாளர்கள் நம்பும் பிராண்ட்.',
      'nav-home':'முகப்பு','nav-products':'தயாரிப்புகள்','nav-about':'நம்மை பற்றி','nav-export':'ஏற்றுமதி','nav-contact':'தொடர்பு',
      'about-title':'தேங்காய் பண்ணையில் தொடங்கிய<br/>குடும்ப வணிகம்',
      'about-p1':'OCV Enterprises என்பது விவசாயத்துடன் ஆழமான தொடர்புடைய குடும்ப வணிகம். எங்கள் கதை ஒரு பண்ணையில் தொடங்கியது — அந்த மரபுரிமை தேங்காயிலிருந்து உயர்தர, மதிப்பு கூட்டப்பட்ட தயாரிப்புகளை உருவாக்க எங்களை ஊக்குவிக்கிறது.',
      'hero-cta1':'விலை கேளுங்கள்','hero-cta2':'தயாரிப்புகள் காண்க','hero-cta3':'வாட்ஸ்அப் செய்யுங்கள்',
      'section-about-tag':'நம்மை பற்றி','section-product-tag':'எங்கள் தயாரிப்புகள்','section-why-tag':'நம்மை ஏன் தேர்வு செய்ய வேண்டும்',
    }
  };
  let currentLang = 'en';
  function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    // Nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    const keys = ['nav-home','nav-products','nav-about','nav-export','nav-contact'];
    navLinks.forEach((a,i) => { if(keys[i] && t[keys[i]]) a.textContent = t[keys[i]]; });
    mobileLinks.forEach((a,i) => { if(keys[i] && t[keys[i]]) a.textContent = t[keys[i]]; });
    // Hero
    const ht = document.querySelector('.hero-title');
    if(ht) ht.innerHTML = t['hero-title'];
    const hs = document.querySelector('.hero-sub');
    if(hs) hs.innerHTML = t['hero-sub'];
    // CTAs
    const ctas = document.querySelectorAll('.hero-ctas a');
    if(ctas[0]) ctas[0].childNodes[ctas[0].childNodes.length-1].textContent = ' '+t['hero-cta1'];
    if(ctas[1]) ctas[1].childNodes[ctas[1].childNodes.length-1].textContent = ' '+t['hero-cta2'];
    if(ctas[2]) ctas[2].childNodes[ctas[2].childNodes.length-1].textContent = ' '+t['hero-cta3'];

    // About section copy
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle && t['about-title']) aboutTitle.innerHTML = t['about-title'];
    const aboutLead = document.querySelector('#about .about-content p');
    if (aboutLead && t['about-p1']) aboutLead.textContent = t['about-p1'];

    // Key section tags
    const productTag = document.querySelector('#products .section-tag');
    if (productTag && t['section-product-tag']) productTag.textContent = t['section-product-tag'];
    const aboutTag = document.querySelector('#about .section-tag');
    if (aboutTag && t['section-about-tag']) aboutTag.textContent = t['section-about-tag'];
    const whyTag = document.querySelector('.why .section-tag');
    if (whyTag && t['section-why-tag']) whyTag.textContent = t['section-why-tag'];
  }

  // ── REVIEW CAROUSEL ──
  let carIdx = 0;
  const slidesPerView = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  function updateCarousel() {
    const track = document.getElementById('review-track');
    if(!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    const spv = slidesPerView();
    const totalSlides = slides.length;
    const maxIdx = totalSlides - spv;
    if(carIdx > maxIdx) carIdx = maxIdx;
    if(carIdx < 0) carIdx = 0;
    const w = 100 / spv;
    slides.forEach(s => { s.style.minWidth = `calc(${w}% - ${(spv-1)*24/spv}px)`; });
    track.style.transform = `translateX(calc(-${carIdx} * (${w}% + ${24/spv}px)))`;
    const dots = document.getElementById('review-dots');
    if(dots) {
      dots.innerHTML = '';
      for(let i=0;i<=maxIdx;i++){
        const d=document.createElement('button');
        d.className='carousel-dot'+(i===carIdx?' active':'');
        d.onclick=()=>{carIdx=i;updateCarousel();};
        dots.appendChild(d);
      }
    }
  }
  function moveCarousel(dir) { carIdx+=dir; updateCarousel(); }
  window.addEventListener('resize', updateCarousel);
  setTimeout(updateCarousel, 100);
  setInterval(() => {
    const totalSlides = document.querySelectorAll('#review-track .carousel-slide').length;
    const maxIdx = Math.max(0, totalSlides - slidesPerView());
    carIdx = carIdx >= maxIdx ? 0 : carIdx + 1;
    updateCarousel();
  }, 4000);

  // ── PRODUCT COMPARISON ──
  const prodData = [
    { name:'Coconut Shell Bowl', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/478882389/VC/ET/JD/107095812/2002-250x250.jpg', price:'₹31/pc', capacity:'200ml', material:'Coconut Shell', finish:'Glossy Polished', use:'Hotels, Gifting, Ice Cream, Salads', eco:'✓', export:'✓', custom:'✓', moq:'50 pcs' },
    { name:'Soy Wax Candle', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/479004984/YF/OD/GN/107095812/300ml-wavy-coconut-shell-bowl-250x250.jpg', price:'₹99/pc', capacity:'100g wax', material:'Soy Wax + Coconut Shell', finish:'Natural', use:'Home Décor, Gifting, Spa, Aromatherapy', eco:'✓', export:'✓', custom:'✓', moq:'20 pcs' },
    { name:'Coffee Cup', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/479100545/AC/RL/QC/107095812/300ml-coconut-shell-coffee-cup-250x250.jpg', price:'₹75/pc', capacity:'150ml', material:'Coconut Shell', finish:'Polished Round Base', use:'Cafés, Restaurants, Events', eco:'✓', export:'✓', custom:'✓', moq:'30 pcs' },
    { name:'T-Light Holder', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/479287362/LI/TP/GH/107095812/ci2-250x250.jpg', price:'₹159/pc', capacity:'500ml', material:'Coconut Shell', finish:'Natural', use:'Kitchen, Dining, Garden Décor', eco:'✓', export:'✓', custom:'✗', moq:'20 pcs' },
    { name:'Hanging Planter', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/479148135/WR/ZL/RB/107095812/5-inch-coconut-shell-hanging-flower-planter-250x250.jpg', price:'₹88/pc', capacity:'250ml', material:'Coconut Shell', finish:'Polished', use:'Indoor Plants, Balcony, Home Décor', eco:'✓', export:'✓', custom:'✓', moq:'25 pcs' },
    { name:'Incense Holder', img:'https://5.imimg.com/data5/SELLER/Default/2025/1/479296527/DR/TJ/LC/107095812/coconut-shell-incense-stick-stand-250x250.jpg', price:'₹69/pc', capacity:'150ml', material:'Coconut Shell', finish:'Round Polished', use:'Pooja Room, Yoga, Aromatherapy', eco:'✓', export:'✓', custom:'✗', moq:'50 pcs' },
    { name:'Coconut Oil', img:'https://5.imimg.com/data5/SELLER/Default/2025/5/510230567/EH/FE/MJ/107095812/cold-pressed-coconut-oil-250x250.jpeg', price:'₹270/L', capacity:'15L container', material:'Pure Coconut', finish:'N/A', use:'Cooking, Edible, Health', eco:'✓', export:'✓', custom:'✗', moq:'15 L' },
    { name:'Shell Purse', img:'https://5.imimg.com/data5/SELLER/Default/2026/3/594346792/FW/RV/JR/107095812/whatsapp-image-2025-10-22-at-7-11-08-pm-1-250x250.jpeg', price:'₹159/pc', capacity:'200ml', material:'Coconut Shell', finish:'Natural Polished', use:'Corporate Gift, Fashion Accessory', eco:'✓', export:'✓', custom:'✓', moq:'10 pcs' },
  ];
  let selectedProds = [];
  function toggleCompare(id) {
    const btn = document.querySelector(`[data-id="${id}"]`);
    if(selectedProds.includes(id)) {
      selectedProds = selectedProds.filter(x=>x!==id);
      btn.classList.remove('selected');
    } else {
      if(selectedProds.length >= 3) { alert('You can compare up to 3 products at a time.'); return; }
      selectedProds.push(id);
      btn.classList.add('selected');
    }
    renderCompareTable();
  }
  function renderCompareTable() {
    const wrap = document.getElementById('compare-table-wrap');
    if(selectedProds.length < 2) {
      wrap.innerHTML = '<p class="compare-empty">Select at least 2 products to compare</p>';
      return;
    }
    const prods = selectedProds.map(i => prodData[i]);
    const rows = [
      ['Product Image', p => `<img src="${p.img}" alt="${p.name}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;">`],
      ['Price', p => `<strong>${p.price}</strong>`],
      ['Capacity', p => p.capacity],
      ['Material', p => p.material],
      ['Finish', p => p.finish],
      ['Best For', p => p.use],
      ['Eco-Friendly', p => `<span class="${p.eco==='✓'?'compare-yes':'compare-no'}">${p.eco}</span>`],
      ['Export Ready', p => `<span class="${p.export==='✓'?'compare-yes':'compare-no'}">${p.export}</span>`],
      ['Custom Options', p => `<span class="${p.custom==='✓'?'compare-yes':'compare-no'}">${p.custom}</span>`],
      ['Min. Order Qty', p => p.moq],
    ];
    let html = '<table class="compare-table"><thead><tr><th>Feature</th>';
    prods.forEach(p => { html += `<th>${p.name}</th>`; });
    html += '</tr></thead><tbody>';
    rows.forEach(([label, fn]) => {
      html += `<tr><td>${label}</td>`;
      prods.forEach(p => { html += `<td>${fn(p)}</td>`; });
      html += '</tr>';
    });
    html += '<tr><td>Get Quote</td>';
    prods.forEach(() => { html += `<td><a href="#contact" class="product-link" style="display:inline-block;padding:7px 16px;background:var(--sage);color:var(--forest);border-radius:8px;font-size:.8rem;font-weight:600;text-decoration:none;">Get Quote</a></td>`; });
    html += '</tr></tbody></table>';
    wrap.innerHTML = html;
  }

  // ── GIFT BUNDLE BUILDER ──
  let bundleSelected = {};
  function toggleBundle(el, id) {
    el.classList.toggle('selected');
    if(el.classList.contains('selected')) {
      bundleSelected[id] = { name: el.dataset.name, price: parseInt(el.dataset.price) };
    } else {
      delete bundleSelected[id];
    }
    updateBundle();
  }
  function updateBundle() {
    const qty = parseInt(document.getElementById('bundle-qty').value) || 1;
    const list = document.getElementById('bundle-list');
    const totalEl = document.getElementById('bundle-total');
    const ids = Object.keys(bundleSelected);
    if(ids.length === 0) {
      list.innerHTML = '<p class="bundle-empty-msg">Click products on the left<br/>to add them to your bundle</p>';
      totalEl.textContent = '₹0';
      return;
    }
    let total = 0;
    list.innerHTML = '';
    ids.forEach(id => {
      const item = bundleSelected[id];
      const lineTotal = item.price * qty;
      total += lineTotal;
      const div = document.createElement('div');
      div.className = 'bundle-line';
      div.innerHTML = `<span class="b-item-name">${item.name}</span><span>₹${item.price} × ${qty} = <strong style="color:#a8d5b5">₹${lineTotal.toLocaleString()}</strong></span>`;
      list.appendChild(div);
    });
    totalEl.textContent = '₹' + (total > 0 ? total.toLocaleString() : 0);
  }
  function requestBundleQuote() {
    const ids = Object.keys(bundleSelected);
    if(ids.length === 0) { alert('Please select at least one product for your bundle.'); return; }
    const qty = document.getElementById('bundle-qty').value;
    const items = ids.map(id => bundleSelected[id].name + ' (₹' + bundleSelected[id].price + ')').join(', ');
    const total = ids.reduce((s,id) => s + bundleSelected[id].price * parseInt(qty), 0);
    const msg = encodeURIComponent(`Hi OCV Enterprises! I want to build a custom eco gift bundle:\n\nProducts: ${items}\nQuantity: ${qty} pieces each\nEstimated Total: ₹${total.toLocaleString()}\n\nPlease send me a final quote with bulk discount.`);
    window.open(`https://wa.me/918047522509?text=${msg}`, '_blank');
  }

  // ── NEWSLETTER ──
  function subscribeNewsletter() {
    const email = document.getElementById('nl-email').value.trim();
    if(!email || !email.includes('@')) { alert('Please enter a valid email address.'); return; }
    document.getElementById('nl-success').style.display = 'block';
    document.getElementById('nl-email').value = '';
    document.querySelector('.nl-form button').textContent = '✅ Subscribed!';
    document.querySelector('.nl-form button').disabled = true;
    document.querySelector('.nl-form button').style.background = '#4caf50';
  }

  // Form submit
  function submitForm() {
    const n = document.getElementById('fname').value.trim();
    const e = document.getElementById('femail').value.trim();
    if (!n || !e) { alert('Please enter your name and email.'); return; }
    const ok = document.getElementById('form-ok');
    ok.style.display = 'block';
    const btn = document.querySelector('.form-btn');
    btn.textContent = '✅ Enquiry Sent!';
    btn.disabled = true;
    btn.style.background = '#4caf50';
  }

  // Security hardening for external links.
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    const rel = (a.getAttribute('rel') || '').trim();
    if (!rel.includes('noopener') || !rel.includes('noreferrer')) {
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });