/* ============================
   SANTAI KAFE — app.js
   ============================ */

// ---- DEFAULT MENU DATA ----
const DEFAULT_MENU = [
  // KOPI
  { id:1,  cat:'Kopi',     name:'Espresso',           icon:'☕', price:18000, badge:'hot',  desc:'Double shot espresso',        active:true },
  { id:2,  cat:'Kopi',     name:'Americano',          icon:'☕', price:22000, badge:'best', desc:'Espresso + air panas',         active:true },
  { id:3,  cat:'Kopi',     name:'Cappuccino',         icon:'🫖', price:28000, badge:'best', desc:'Espresso + susu busa',         active:true },
  { id:4,  cat:'Kopi',     name:'Caffe Latte',        icon:'🥛', price:30000, badge:'',     desc:'Espresso + susu cair hangat',  active:true },
  { id:5,  cat:'Kopi',     name:'Flat White',         icon:'☕', price:32000, badge:'new',  desc:'Microfoam espresso Australia', active:true },
  { id:6,  cat:'Kopi',     name:'V60 Pour Over',      icon:'🫗', price:35000, badge:'best', desc:'Manual brew single origin',    active:true },
  { id:7,  cat:'Kopi',     name:'Cold Brew',          icon:'🧊', price:33000, badge:'new',  desc:'Brew 18 jam dingin segar',     active:true },
  { id:8,  cat:'Kopi',     name:'Kopi Susu Aren',     icon:'🍵', price:28000, badge:'best', desc:'Espresso + gula aren Sulawesi', active:true },
  { id:9,  cat:'Kopi',     name:'Dalgona Coffee',     icon:'☁️', price:30000, badge:'',     desc:'Whipped foam espresso',        active:true },
  { id:10, cat:'Kopi',     name:'Vietnamese Coffee',  icon:'☕', price:26000, badge:'',     desc:'Kopi susu kental manis',       active:true },
  { id:11, cat:'Kopi',     name:'Macchiato',          icon:'🫙', price:29000, badge:'hot',  desc:'Espresso + steamed foam',      active:true },
  { id:12, cat:'Kopi',     name:'Mocha',              icon:'🍫', price:32000, badge:'',     desc:'Espresso + Belgian chocolate', active:true },
  { id:13, cat:'Kopi',     name:'Affogato',           icon:'🍨', price:35000, badge:'new',  desc:'Espresso + es krim vanilla',   active:true },
  { id:14, cat:'Kopi',     name:'Kopi Tubruk',        icon:'☕', price:15000, badge:'',     desc:'Kopi tradisional Indonesia',   active:true },

  // NON-KOPI
  { id:15, cat:'Non-Kopi', name:'Matcha Latte',       icon:'🍵', price:32000, badge:'best', desc:'Matcha premium grade A Japan', active:true },
  { id:16, cat:'Non-Kopi', name:'Teh Tarik',          icon:'🫖', price:20000, badge:'',     desc:'Teh susu tarik tradisional',   active:true },
  { id:17, cat:'Non-Kopi', name:'Lemon Tea Es',       icon:'🍋', price:22000, badge:'',     desc:'Teh + perasan lemon segar',    active:true },
  { id:18, cat:'Non-Kopi', name:'Hot Chocolate',      icon:'🍫', price:28000, badge:'',     desc:'Belgian chocolate 70% cocoa',  active:true },
  { id:19, cat:'Non-Kopi', name:'Es Teh Manis',       icon:'🧋', price:12000, badge:'',     desc:'Teh manis dingin segar',       active:true },
  { id:20, cat:'Non-Kopi', name:'Jus Jeruk Segar',    icon:'🍊', price:25000, badge:'new',  desc:'Jeruk peras fresh squeezed',   active:true },
  { id:21, cat:'Non-Kopi', name:'Smoothie Mangga',    icon:'🥭', price:30000, badge:'new',  desc:'Mangga harum manis blended',   active:true },
  { id:22, cat:'Non-Kopi', name:'Soda Gembira',       icon:'🥤', price:22000, badge:'',     desc:'Susu + soda + fanta merah',    active:true },
  { id:23, cat:'Non-Kopi', name:'Wedang Jahe',        icon:'🫚', price:18000, badge:'hot',  desc:'Jahe + sereh + kayu manis',    active:true },
  { id:24, cat:'Non-Kopi', name:'Blue Lemonade',      icon:'🫐', price:28000, badge:'new',  desc:'Lemon + butterfly pea flower', active:true },

  // ROTI & PASTRY
  { id:25, cat:'Roti',     name:'Croissant Butter',   icon:'🥐', price:22000, badge:'best', desc:'Lapis mentega Perancis',       active:true },
  { id:26, cat:'Roti',     name:'Roti Bakar Milo',    icon:'🍞', price:18000, badge:'',     desc:'Roti panggang selai Milo',     active:true },
  { id:27, cat:'Roti',     name:'Banana Bread',       icon:'🍌', price:25000, badge:'new',  desc:'Roti pisang homemade moist',   active:true },
  { id:28, cat:'Roti',     name:'Cinnamon Roll',      icon:'🌀', price:28000, badge:'best', desc:'Gulung kayu manis + cream',    active:true },
  { id:29, cat:'Roti',     name:'Pain au Chocolat',   icon:'🍫', price:30000, badge:'hot',  desc:'Croissant lapis dark chocolate',active:true },
  { id:30, cat:'Roti',     name:'Roti Sobek Keju',    icon:'🧀', price:22000, badge:'',     desc:'Roti fluffy mozzarella keju',  active:true },
  { id:31, cat:'Roti',     name:'Bagel Cream Cheese', icon:'🥯', price:32000, badge:'new',  desc:'Bagel + cream cheese + smoked',active:true },
  { id:32, cat:'Roti',     name:'Garlic Bread',       icon:'🧄', price:20000, badge:'',     desc:'Roti panggang bawang + herbs', active:true },
  { id:33, cat:'Roti',     name:'Sourdough Toast',    icon:'🍞', price:26000, badge:'new',  desc:'Sourdough + avocado + telur',  active:true },

  // MAKANAN BERAT
  { id:34, cat:'Makanan',  name:'Nasi Goreng Kafe',   icon:'🍳', price:38000, badge:'best', desc:'Nasi goreng + telur + ayam',   active:true },
  { id:35, cat:'Makanan',  name:'Pasta Aglio Olio',   icon:'🍝', price:42000, badge:'',     desc:'Spaghetti bawang putih + EVO', active:true },
  { id:36, cat:'Makanan',  name:'Club Sandwich',      icon:'🥪', price:38000, badge:'best', desc:'3 lapis ayam + telur + sayur', active:true },
  { id:37, cat:'Makanan',  name:'Salad Caesar',       icon:'🥗', price:32000, badge:'new',  desc:'Romaine + parmesan + crouton', active:true },
  { id:38, cat:'Makanan',  name:'Waffle + Maple',     icon:'🧇', price:35000, badge:'',     desc:'Waffle crispy + maple syrup',  active:true },
  { id:39, cat:'Makanan',  name:'Omelet Keju',        icon:'🍳', price:28000, badge:'',     desc:'Telur dadar keju mozzarella',  active:true },
  { id:40, cat:'Makanan',  name:'Pancake Stack',      icon:'🥞', price:32000, badge:'best', desc:'3 lapis fluffy + whipped cream',active:true },
  { id:41, cat:'Makanan',  name:'Bruschetta',         icon:'🍅', price:30000, badge:'new',  desc:'Sourdough + tomat + basil',    active:true },
  { id:42, cat:'Makanan',  name:'Indomie Telur',      icon:'🍜', price:22000, badge:'best', desc:'Indomie goreng + telur mata',  active:true },

  // CAMILAN
  { id:43, cat:'Camilan',  name:'Cookies Choc Chip',  icon:'🍪', price:20000, badge:'best', desc:'3 pcs cookies renyah coklat',  active:true },
  { id:44, cat:'Camilan',  name:'Scone + Cream',      icon:'🫓', price:25000, badge:'',     desc:'Scone tradisional + clotted',  active:true },
  { id:45, cat:'Camilan',  name:'Churros + Karamel',  icon:'🍡', price:28000, badge:'new',  desc:'Churros renyah + salted caramel',active:true },
  { id:46, cat:'Camilan',  name:'Muffin Blueberry',   icon:'🫐', price:22000, badge:'',     desc:'Muffin lembut blueberry fresh',active:true },
  { id:47, cat:'Camilan',  name:'Pisang Goreng Keju', icon:'🍌', price:18000, badge:'best', desc:'Pisang goreng + keju mozarela', active:true },
  { id:48, cat:'Camilan',  name:'Roti Goreng Isi',    icon:'🍩', price:15000, badge:'',     desc:'Pilih isi: coklat/keju/ayam',  active:true },
  { id:49, cat:'Camilan',  name:'Nachos + Salsa',     icon:'🌮', price:30000, badge:'new',  desc:'Tortilla chips + salsa segar', active:true },

  // PAKET HEMAT
  { id:50, cat:'Paket',    name:'Paket Pagi A',       icon:'🌅', price:45000, badge:'best', desc:'Americano + Roti Bakar + Telur',active:true },
  { id:51, cat:'Paket',    name:'Paket Siang B',      icon:'☀️', price:65000, badge:'',     desc:'Makanan + Minuman pilihan',    active:true },
  { id:52, cat:'Paket',    name:'Paket Santai C',     icon:'🌙', price:55000, badge:'new',  desc:'Latte/Matcha + Pastry pilihan',active:true },
  { id:53, cat:'Paket',    name:'Paket Berdua',       icon:'💑', price:95000, badge:'best', desc:'2 kopi + 2 makanan ringan',    active:true },
  { id:54, cat:'Paket',    name:'Paket Kerja Keras',  icon:'💻', price:50000, badge:'',     desc:'Cold brew + snack untuk kerja',active:true },
];

// ---- APP STATE ----
let MENU = loadData('menu') || JSON.parse(JSON.stringify(DEFAULT_MENU));
let cart = [];
let orderNum = loadData('orderNum') || 1;
let transactions = loadData('transactions') || [];
let settings = loadData('settings') || {
  nama: 'Santai Kafe',
  alamat: 'Jl. Santai No. 17, Medan',
  telp: '(061) 555-1234',
  ig: '@santaikafe',
  wa: '0812-3456-7890',
  footer: 'Terima kasih telah berkunjung! Datang lagi ya 😊',
  kasir: 'Admin',
  ppn: 11,
  theme: 'warm'
};
let activeCat = 'Semua';
let searchQ = '';
let editMenuId = null;

// ---- HELPERS ----
function fmt(n) { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); }
function saveData(key, val) { try { localStorage.setItem('sk_'+key, JSON.stringify(val)); } catch(e){} }
function loadData(key) { try { const d = localStorage.getItem('sk_'+key); return d ? JSON.parse(d) : null; } catch(e){ return null; } }
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2000);
}

// ---- NAVIGATION ----
function showPage(page, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (el) el.classList.add('active');

  if (page === 'riwayat') renderHistory();
  if (page === 'laporan') renderReport();
  if (page === 'menu-mgr') renderMenuMgr();
  if (page === 'pengaturan') loadSettings();
}

// ---- CATEGORY TABS ----
function getCats() {
  const cats = [...new Set(MENU.map(m => m.cat))];
  return ['Semua', ...cats];
}

function renderTabs() {
  const cats = getCats();
  document.getElementById('cat-tabs').innerHTML = cats.map(c =>
    `<div class="cat-tab${c===activeCat?' active':''}" onclick="setCategory('${c}')">${c}</div>`
  ).join('');
}

function setCategory(c) { activeCat = c; renderTabs(); renderMenu(); }

// ---- MENU GRID ----
function renderMenu() {
  const q = searchQ.toLowerCase();
  const items = MENU.filter(m =>
    m.active &&
    (activeCat === 'Semua' || m.cat === activeCat) &&
    (!q || m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q))
  );

  const grid = document.getElementById('menu-grid');
  if (!items.length) {
    grid.innerHTML = `<div class="menu-empty"><span class="me-icon">☕</span><div>Menu tidak ditemukan</div></div>`;
    return;
  }
  grid.innerHTML = items.map(m => `
    <div class="menu-card" onclick="addToCart(${m.id})">
      ${m.badge ? `<span class="mc-badge ${m.badge}">${m.badge.toUpperCase()}</span>` : ''}
      <span class="mc-icon">${m.icon}</span>
      <div class="mc-name">${m.name}</div>
      <div class="mc-desc">${m.desc}</div>
      <div class="mc-price">${fmt(m.price)}</div>
    </div>
  `).join('');
}

// ---- CART ----
function addToCart(id) {
  const m = MENU.find(x => x.id === id);
  if (!m) return;
  const ex = cart.find(x => x.id === id);
  if (ex) { ex.qty++; } else { cart.push({ ...m, qty: 1, note: '' }); }
  renderCart();
  showToast(`${m.icon} ${m.name} ditambahkan`);
}

function changeQty(id, delta) {
  const idx = cart.findIndex(x => x.id === id);
  if (idx < 0) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  renderCart();
}

function removeItem(id) { cart = cart.filter(x => x.id !== id); renderCart(); }
function updateNote(id, val) { const it = cart.find(x => x.id === id); if (it) it.note = val; }

function clearCart() {
  if (!cart.length) return;
  if (confirm('Hapus semua pesanan?')) {
    cart = [];
    document.getElementById('cust-name').value = '';
    document.getElementById('uang-diterima').value = '';
    document.getElementById('disc-pct').value = '0';
    renderCart();
  }
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const badge = document.getElementById('cart-badge');
  const totalItems = cart.reduce((a, b) => a + b.qty, 0);
  badge.textContent = totalItems;

  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><span class="ce-icon">🛒</span><div>Belum ada pesanan</div><div style="font-size:11px;margin-top:4px;color:var(--text-muted)">Pilih menu di kiri</div></div>`;
    updateSummary(); return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-row">
      <span class="cr-icon">${item.icon}</span>
      <div class="cr-info">
        <div class="cr-name">${item.name}</div>
        <input class="cr-note-input" type="text" value="${item.note||''}" placeholder="Catatan: tanpa gula, dll..."
          onchange="updateNote(${item.id}, this.value)">
      </div>
      <div class="cr-qty">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
      <span class="cr-total">${fmt(item.price * item.qty)}</span>
      <span class="cr-del" onclick="removeItem(${item.id})">✕</span>
    </div>
  `).join('');

  updateSummary();
}

function getNumbers() {
  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const discPct = parseFloat(document.getElementById('disc-pct').value) || 0;
  const disc = Math.round(subtotal * discPct / 100);
  const ppnRate = settings.ppn || 11;
  const tax = Math.round((subtotal - disc) * ppnRate / 100);
  const total = subtotal - disc + tax;
  const diterima = parseFloat(document.getElementById('uang-diterima').value) || 0;
  const kembalian = diterima - total;
  return { subtotal, disc, discPct, tax, total, diterima, kembalian };
}

function updateSummary() {
  const { subtotal, disc, tax, total, kembalian, diterima } = getNumbers();
  document.getElementById('s-sub').textContent = fmt(subtotal);
  document.getElementById('s-disc').textContent = '- ' + fmt(disc);
  document.getElementById('s-tax').textContent = fmt(tax);
  document.getElementById('s-total').textContent = fmt(total);
  const kEl = document.getElementById('kembalian-display');
  if (diterima > 0) {
    if (kembalian < 0) {
      kEl.textContent = '⚠ Kurang: ' + fmt(Math.abs(kembalian));
      kEl.className = 'warn';
    } else {
      kEl.textContent = 'Kembalian: ' + fmt(kembalian);
      kEl.className = '';
    }
  } else {
    kEl.textContent = 'Total: ' + fmt(total);
    kEl.className = '';
  }
}

// ---- ORDER PROCESSING ----
function processOrder() {
  if (!cart.length) { showToast('⚠ Keranjang masih kosong!'); return; }
  const { total, diterima, kembalian } = getNumbers();
  const payMethod = document.getElementById('pay-method').value;
  if (payMethod === 'Tunai' && diterima > 0 && diterima < total) {
    showToast('⚠ Uang diterima kurang dari total!'); return;
  }

  const now = new Date();
  const trx = {
    id: orderNum,
    timestamp: now.toISOString(),
    custName: document.getElementById('cust-name').value || 'Umum',
    orderType: document.getElementById('order-type').value,
    payMethod,
    items: cart.map(i => ({ ...i })),
    subtotal: getNumbers().subtotal,
    disc: getNumbers().disc,
    discPct: getNumbers().discPct,
    tax: getNumbers().tax,
    total,
    diterima,
    kembalian,
    cashier: settings.kasir || 'Admin'
  };

  transactions.unshift(trx);
  saveData('transactions', transactions);

  openReceipt(true, trx);

  const nextNum = orderNum + 1;
  orderNum = nextNum;
  saveData('orderNum', orderNum);
  updateOrderNum();

  cart = [];
  document.getElementById('cust-name').value = '';
  document.getElementById('uang-diterima').value = '';
  document.getElementById('disc-pct').value = '0';
  renderCart();
}

function updateOrderNum() {
  document.getElementById('current-order-num').textContent = '#' + String(orderNum).padStart(3, '0');
}

// ---- RECEIPT ----
function buildReceiptHTML(isPaid, trxData) {
  const d = trxData || null;
  const nums = d ? { subtotal: d.subtotal, disc: d.disc, discPct: d.discPct, tax: d.tax, total: d.total, diterima: d.diterima, kembalian: d.kembalian } : getNumbers();
  const now = d ? new Date(d.timestamp) : new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  const name = d ? d.custName : (document.getElementById('cust-name').value || 'Umum');
  const type = d ? d.orderType : document.getElementById('order-type').value;
  const payMethod = d ? d.payMethod : document.getElementById('pay-method').value;
  const items = d ? d.items : cart;
  const num = String(d ? d.id : orderNum).padStart(3, '0');
  const cashier = d ? d.cashier : (settings.kasir || 'Admin');

  const itemRows = items.map(item =>
    `<div class="rcpt-row"><span>${item.icon} ${item.name}</span><span>${item.qty}x</span></div>
     <div class="rcpt-row"><span style="padding-left:18px;color:#888">${fmt(item.price)}</span><span>${fmt(item.price * item.qty)}</span></div>
     ${item.note ? `<div style="padding-left:18px;font-size:10px;color:#aaa;padding-bottom:2px">* ${item.note}</div>` : ''}`
  ).join('');

  return `
    <div style="text-align:center;margin-bottom:14px">
      <div class="rcpt-shop-name">${settings.nama || 'Santai Kafe'}</div>
      <div class="rcpt-shop-sub">Kopi Nikmat • Roti Hangat • Suasana Santai</div>
      <div class="rcpt-shop-sub">${settings.alamat || ''}</div>
      <div class="rcpt-shop-sub">Tel: ${settings.telp || ''}</div>
    </div>
    <div class="rcpt-order-badge">ORDER #${num}</div>
    <hr class="rcpt-divider">
    <div class="rcpt-row"><span>Tanggal</span><span>${dateStr}</span></div>
    <div class="rcpt-row"><span>Jam</span><span>${timeStr}</span></div>
    <div class="rcpt-row"><span>Pelanggan</span><span>${name}</span></div>
    <div class="rcpt-row"><span>Tipe</span><span>${type}</span></div>
    <div class="rcpt-row"><span>Kasir</span><span>${cashier}</span></div>
    <hr class="rcpt-divider">
    ${itemRows}
    <hr class="rcpt-divider">
    <div class="rcpt-row"><span>Subtotal</span><span>${fmt(nums.subtotal)}</span></div>
    ${nums.disc > 0 ? `<div class="rcpt-row"><span>Diskon (${nums.discPct}%)</span><span>- ${fmt(nums.disc)}</span></div>` : ''}
    <div class="rcpt-row"><span>PPN ${settings.ppn || 11}%</span><span>${fmt(nums.tax)}</span></div>
    <div class="rcpt-row total bold"><span>TOTAL</span><span>${fmt(nums.total)}</span></div>
    <hr class="rcpt-divider">
    <div class="rcpt-row"><span>Metode</span><span>${payMethod}</span></div>
    ${isPaid && nums.diterima > 0 ? `<div class="rcpt-row"><span>Diterima</span><span>${fmt(nums.diterima)}</span></div><div class="rcpt-row bold"><span>Kembalian</span><span>${fmt(nums.kembalian)}</span></div>` : ''}
    <hr class="rcpt-divider">
    <div class="rcpt-footer">
      <div>★ ${settings.footer || 'Terima kasih!'} ★</div>
      <div style="margin-top:6px">IG: ${settings.ig || '@santaikafe'} | WA: ${settings.wa || ''}</div>
    </div>
  `;
}

function openReceipt(isPaid, trxData) {
  if (!cart.length && !trxData) { showToast('⚠ Keranjang masih kosong!'); return; }
  document.getElementById('receipt-content').innerHTML = buildReceiptHTML(isPaid, trxData || null);
  document.getElementById('modal-overlay').classList.add('show');
}

function closeReceipt() { document.getElementById('modal-overlay').classList.remove('show'); }

function printReceipt() {
  const c = document.getElementById('receipt-content').innerHTML;
  const w = window.open('', '_blank', 'width=400,height=720');
  w.document.write(`<!DOCTYPE html><html><head><title>Struk - ${settings.nama}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Courier New',monospace;font-size:12px;color:#111;padding:18px;max-width:320px;margin:0 auto}
    .rcpt-shop-name{font-size:16px;font-weight:700;letter-spacing:2px;text-align:center;margin-bottom:2px}
    .rcpt-shop-sub{font-size:10px;color:#666;text-align:center;margin-bottom:1px}
    hr,.rcpt-divider{border:none;border-top:1px dashed #aaa;margin:8px 0}
    .rcpt-row{display:flex;justify-content:space-between;padding:2px 0;font-size:12px}
    .rcpt-row.bold{font-weight:700}
    .rcpt-row.total{border-top:1px solid #888;padding-top:5px;margin-top:3px;font-size:13px}
    .rcpt-order-badge{background:#333;color:#fff;font-size:20px;font-weight:700;text-align:center;padding:8px;border-radius:6px;margin:10px 0;letter-spacing:3px}
    .rcpt-footer{text-align:center;margin-top:12px;font-size:10px;color:#777;line-height:1.7}
    @media print{body{padding:0}}
  </style></head><body>${c}</body></html>`);
  w.document.close(); w.focus();
  setTimeout(() => { w.print(); }, 500);
}

// ---- HISTORY PAGE ----
function renderHistory() {
  const dateFilter = document.getElementById('filter-date').value;
  let list = [...transactions];
  if (dateFilter) {
    list = list.filter(t => t.timestamp.startsWith(dateFilter));
  }

  const stats = document.getElementById('history-stats');
  const totalPend = list.reduce((a, b) => a + b.total, 0);
  const totalTrx = list.length;
  const avgOrder = totalTrx ? Math.round(totalPend / totalTrx) : 0;
  stats.innerHTML = `
    <div class="stat-card"><div class="stat-label">Total Transaksi</div><div class="stat-val">${totalTrx}</div><div class="stat-sub">transaksi</div></div>
    <div class="stat-card"><div class="stat-label">Total Pendapatan</div><div class="stat-val" style="font-size:16px">${fmt(totalPend)}</div><div class="stat-sub">setelah pajak</div></div>
    <div class="stat-card"><div class="stat-label">Rata-rata Order</div><div class="stat-val" style="font-size:16px">${fmt(avgOrder)}</div><div class="stat-sub">per transaksi</div></div>
  `;

  const tbody = document.getElementById('history-tbody');
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-muted)">Belum ada transaksi${dateFilter?' pada tanggal ini':''}</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(t => {
    const d = new Date(t.timestamp);
    const timeStr = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const dateStr = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
    const typeClass = t.orderType === 'Dine In' ? 'pill-dinein' : (t.orderType === 'Take Away' ? 'pill-takeaway' : 'pill-online');
    const payClass = t.payMethod === 'Tunai' ? 'pill-tunai' : (t.payMethod === 'QRIS' ? 'pill-qris' : 'pill-paid');
    const itemSummary = t.items.map(i => `${i.qty}x ${i.name}`).join(', ');
    return `<tr>
      <td style="font-weight:700;color:var(--accent)">#${String(t.id).padStart(3,'0')}</td>
      <td>${dateStr} ${timeStr}</td>
      <td>${t.custName}</td>
      <td><span class="badge-pill ${typeClass}">${t.orderType}</span></td>
      <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--text-muted)">${itemSummary}</td>
      <td style="font-weight:700">${fmt(t.total)}</td>
      <td><span class="badge-pill ${payClass}">${t.payMethod}</span></td>
      <td>${t.cashier}</td>
      <td>
        <button class="action-link" onclick="viewReceipt(${t.id})">🖨 Struk</button>
      </td>
    </tr>`;
  }).join('');
}

function viewReceipt(id) {
  const trx = transactions.find(t => t.id === id);
  if (!trx) return;
  document.getElementById('receipt-content').innerHTML = buildReceiptHTML(true, trx);
  document.getElementById('modal-overlay').classList.add('show');
}

function exportCSV() {
  const dateFilter = document.getElementById('filter-date').value;
  let list = [...transactions];
  if (dateFilter) list = list.filter(t => t.timestamp.startsWith(dateFilter));
  if (!list.length) { showToast('Tidak ada data untuk diekspor'); return; }

  const rows = [['No Order','Tanggal','Waktu','Pelanggan','Tipe','Item','Subtotal','Diskon','PPN','Total','Metode Bayar','Kasir']];
  list.forEach(t => {
    const d = new Date(t.timestamp);
    rows.push([
      '#'+String(t.id).padStart(3,'0'),
      d.toLocaleDateString('id-ID'),
      d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}),
      t.custName, t.orderType,
      t.items.map(i=>`${i.qty}x ${i.name}`).join(' | '),
      t.subtotal, t.disc, t.tax, t.total, t.payMethod, t.cashier
    ]);
  });

  const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url;
  a.download = `santai-kafe-${dateFilter||'semua'}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast('✅ CSV berhasil diunduh');
}

// ---- REPORT PAGE ----
function renderReport() {
  const period = document.getElementById('report-period').value;
  const now = new Date();
  let list = [...transactions];

  if (period === 'today') {
    const today = now.toISOString().split('T')[0];
    list = list.filter(t => t.timestamp.startsWith(today));
  } else if (period === 'week') {
    const week = new Date(now.getTime() - 7*24*60*60*1000);
    list = list.filter(t => new Date(t.timestamp) >= week);
  } else if (period === 'month') {
    const month = new Date(now.getTime() - 30*24*60*60*1000);
    list = list.filter(t => new Date(t.timestamp) >= month);
  }

  const totalPend = list.reduce((a, b) => a + b.total, 0);
  const totalTrx = list.length;
  const avgOrder = totalTrx ? Math.round(totalPend / totalTrx) : 0;
  const totalItem = list.reduce((a, b) => a + b.items.reduce((x, y) => x + y.qty, 0), 0);

  document.getElementById('report-cards').innerHTML = `
    <div class="stat-card"><div class="stat-label">Pendapatan</div><div class="stat-val" style="font-size:17px">${fmt(totalPend)}</div></div>
    <div class="stat-card"><div class="stat-label">Transaksi</div><div class="stat-val">${totalTrx}</div></div>
    <div class="stat-card"><div class="stat-label">Rata-rata</div><div class="stat-val" style="font-size:17px">${fmt(avgOrder)}</div></div>
    <div class="stat-card"><div class="stat-label">Item Terjual</div><div class="stat-val">${totalItem}</div></div>
  `;

  // Top menu
  const menuCount = {};
  list.forEach(t => t.items.forEach(i => {
    menuCount[i.name] = (menuCount[i.name] || 0) + i.qty;
  }));
  const topMenu = Object.entries(menuCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxCount = topMenu[0] ? topMenu[0][1] : 1;
  const rankClass = ['gold','silver','bronze'];
  document.getElementById('top-menu-list').innerHTML = topMenu.length
    ? topMenu.map(([name, count], i) => `
        <div class="top-item">
          <div class="top-rank ${rankClass[i]||''}">${i+1}</div>
          <div class="top-name">${name}</div>
          <div class="top-bar-wrap"><div class="top-bar" style="width:${Math.round(count/maxCount*100)}%"></div></div>
          <div class="top-count">${count}x</div>
        </div>`)
      .join('')
    : '<div style="color:var(--text-muted);font-size:13px;padding:16px 0">Belum ada data</div>';

  // Payment methods
  const payCount = {};
  list.forEach(t => { payCount[t.payMethod] = (payCount[t.payMethod] || 0) + t.total; });
  const payEntries = Object.entries(payCount).sort((a, b) => b[1] - a[1]);
  const totalPay = payEntries.reduce((a, b) => a + b[1], 0) || 1;
  document.getElementById('pay-method-list').innerHTML = payEntries.length
    ? payEntries.map(([m, v]) => `
        <div class="pay-method-item">
          <div class="pm-name">${m}</div>
          <div class="pm-val">${fmt(v)}</div>
          <div class="pm-pct">${Math.round(v/totalPay*100)}%</div>
        </div>`)
      .join('')
    : '<div style="color:var(--text-muted);font-size:13px;padding:16px 0">Belum ada data</div>';

  // Hourly chart
  const today = now.toISOString().split('T')[0];
  const hourly = Array(24).fill(0);
  transactions.filter(t => t.timestamp.startsWith(today))
    .forEach(t => { const h = new Date(t.timestamp).getHours(); hourly[h]++; });
  const maxH = Math.max(...hourly, 1);
  const chart = document.getElementById('hourly-chart');
  chart.innerHTML = hourly.map((h, i) => `
    <div class="hour-bar-wrap" title="${i}:00 — ${h} transaksi">
      <div class="hour-bar" style="height:${Math.round(h/maxH*90)+10}px;opacity:${h>0?1:0.2}"></div>
      <div class="hour-label">${i%3===0?i:''}</div>
    </div>
  `).join('');
}

// ---- MENU MANAGER ----
function renderMenuMgr() {
  const tbody = document.getElementById('menu-mgr-tbody');
  tbody.innerHTML = MENU.map(m => `
    <tr>
      <td style="font-size:20px">${m.icon}</td>
      <td style="font-weight:600">${m.name}</td>
      <td>${m.cat}</td>
      <td style="font-weight:700;color:var(--accent)">${fmt(m.price)}</td>
      <td>${m.badge ? `<span class="mc-badge ${m.badge}" style="position:relative;top:0;right:0">${m.badge.toUpperCase()}</span>` : '-'}</td>
      <td>
        <button class="menu-status-toggle ${m.active?'ms-active':'ms-inactive'}" onclick="toggleMenuStatus(${m.id})">
          ${m.active ? '✓ Aktif' : '✗ Nonaktif'}
        </button>
      </td>
      <td style="display:flex;gap:6px;align-items:center">
        <button class="action-link" onclick="openMenuForm(${m.id})">✏ Edit</button>
        <button class="action-link" style="color:var(--danger)" onclick="deleteMenu(${m.id})">🗑</button>
      </td>
    </tr>
  `).join('');
}

function toggleMenuStatus(id) {
  const m = MENU.find(x => x.id === id);
  if (m) { m.active = !m.active; saveData('menu', MENU); renderMenuMgr(); renderMenu(); }
}

function deleteMenu(id) {
  if (!confirm('Hapus menu ini?')) return;
  MENU = MENU.filter(x => x.id !== id);
  saveData('menu', MENU);
  renderMenuMgr(); renderTabs(); renderMenu();
  showToast('🗑 Menu dihapus');
}

function openMenuForm(id) {
  editMenuId = id || null;
  document.getElementById('menu-form-title').textContent = id ? 'Edit Menu' : 'Tambah Menu Baru';
  if (id) {
    const m = MENU.find(x => x.id === id);
    document.getElementById('fm-icon').value = m.icon;
    document.getElementById('fm-name').value = m.name;
    document.getElementById('fm-cat').value = m.cat;
    document.getElementById('fm-price').value = m.price;
    document.getElementById('fm-desc').value = m.desc;
    document.getElementById('fm-badge').value = m.badge || '';
  } else {
    document.getElementById('fm-icon').value = '☕';
    document.getElementById('fm-name').value = '';
    document.getElementById('fm-price').value = '';
    document.getElementById('fm-desc').value = '';
    document.getElementById('fm-badge').value = '';
  }
  document.getElementById('menu-modal-overlay').classList.add('show');
}

function closeMenuForm() { document.getElementById('menu-modal-overlay').classList.remove('show'); }

function saveMenuForm() {
  const name = document.getElementById('fm-name').value.trim();
  const price = parseFloat(document.getElementById('fm-price').value);
  if (!name) { showToast('⚠ Nama menu wajib diisi'); return; }
  if (!price || price <= 0) { showToast('⚠ Harga harus lebih dari 0'); return; }

  if (editMenuId) {
    const m = MENU.find(x => x.id === editMenuId);
    if (m) {
      m.icon = document.getElementById('fm-icon').value || '☕';
      m.name = name; m.cat = document.getElementById('fm-cat').value;
      m.price = price; m.desc = document.getElementById('fm-desc').value;
      m.badge = document.getElementById('fm-badge').value;
    }
    showToast('✅ Menu diperbarui');
  } else {
    const newId = Math.max(...MENU.map(m => m.id), 0) + 1;
    MENU.push({
      id: newId,
      icon: document.getElementById('fm-icon').value || '☕',
      name, cat: document.getElementById('fm-cat').value,
      price, desc: document.getElementById('fm-desc').value,
      badge: document.getElementById('fm-badge').value,
      active: true
    });
    showToast('✅ Menu baru ditambahkan');
  }

  saveData('menu', MENU);
  closeMenuForm();
  renderMenuMgr(); renderTabs(); renderMenu();
}

// ---- SETTINGS ----
function loadSettings() {
  document.getElementById('set-nama').value = settings.nama || '';
  document.getElementById('set-alamat').value = settings.alamat || '';
  document.getElementById('set-telp').value = settings.telp || '';
  document.getElementById('set-ig').value = settings.ig || '';
  document.getElementById('set-wa').value = settings.wa || '';
  document.getElementById('set-footer').value = settings.footer || '';
  document.getElementById('set-kasir').value = settings.kasir || 'Admin';
  document.getElementById('set-ppn').value = settings.ppn || 11;

  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  const themeMap = { warm: 0, dark: 1, sage: 2 };
  const btns = document.querySelectorAll('.theme-btn');
  if (btns[themeMap[settings.theme]]) btns[themeMap[settings.theme]].classList.add('active');
}

function saveSettings() {
  settings.nama = document.getElementById('set-nama').value;
  settings.alamat = document.getElementById('set-alamat').value;
  settings.telp = document.getElementById('set-telp').value;
  settings.ig = document.getElementById('set-ig').value;
  settings.wa = document.getElementById('set-wa').value;
  settings.footer = document.getElementById('set-footer').value;
  settings.kasir = document.getElementById('set-kasir').value;
  settings.ppn = parseFloat(document.getElementById('set-ppn').value) || 11;
  saveData('settings', settings);
  updateCashier();
  showToast('✅ Pengaturan disimpan');
}

function updateCashier() {
  const name = document.getElementById('set-kasir')?.value || settings.kasir || 'Admin';
  settings.kasir = name;
  document.getElementById('cashier-display').textContent = name;
  document.getElementById('cashier-avatar').textContent = name.charAt(0).toUpperCase();
}

function setTheme(theme, btn) {
  settings.theme = theme;
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyTheme(theme);
  saveData('settings', settings);
}

function applyTheme(theme) {
  document.body.classList.remove('theme-dark', 'theme-sage');
  if (theme === 'dark') document.body.classList.add('theme-dark');
  if (theme === 'sage') document.body.classList.add('theme-sage');
}

function clearHistory() {
  if (!confirm('Hapus SEMUA riwayat transaksi? Aksi ini tidak bisa dibatalkan.')) return;
  transactions = [];
  orderNum = 1;
  saveData('transactions', transactions);
  saveData('orderNum', orderNum);
  updateOrderNum();
  showToast('🗑 Riwayat dihapus');
}

function resetMenus() {
  if (!confirm('Reset menu ke data default? Semua perubahan akan hilang.')) return;
  MENU = JSON.parse(JSON.stringify(DEFAULT_MENU));
  saveData('menu', MENU);
  renderTabs(); renderMenu(); renderMenuMgr();
  showToast('🔄 Menu direset ke default');
}

// ---- INIT ----
function init() {
  // Apply saved theme
  applyTheme(settings.theme || 'warm');

  // Update cashier
  updateCashier();

  // Update order num
  updateOrderNum();

  // Set today as default date filter
  const today = new Date().toISOString().split('T')[0];
  const df = document.getElementById('filter-date');
  if (df) df.value = today;

  // Render menu
  renderTabs();
  renderMenu();
  renderCart();

  // Search listener
  document.getElementById('search-input').addEventListener('input', function() {
    searchQ = this.value;
    renderMenu();
  });

  // Payment listeners
  document.getElementById('disc-pct').addEventListener('input', updateSummary);
  document.getElementById('uang-diterima').addEventListener('input', updateSummary);
}

document.addEventListener('DOMContentLoaded', init);
