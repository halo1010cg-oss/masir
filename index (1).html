<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Santai Kafe — Sistem Kasir</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- SIDEBAR NAV -->
<nav id="sidebar">
  <div class="brand">
    <div class="brand-icon">☕</div>
    <div class="brand-text">
      <span class="brand-name">Santai</span>
      <span class="brand-sub">Kafe</span>
    </div>
  </div>
  <ul class="nav-links">
    <li class="nav-item active" data-page="kasir" onclick="showPage('kasir',this)">
      <span class="nav-icon">🛒</span><span class="nav-label">Kasir</span>
    </li>
    <li class="nav-item" data-page="riwayat" onclick="showPage('riwayat',this)">
      <span class="nav-icon">📋</span><span class="nav-label">Riwayat</span>
    </li>
    <li class="nav-item" data-page="laporan" onclick="showPage('laporan',this)">
      <span class="nav-icon">📊</span><span class="nav-label">Laporan</span>
    </li>
    <li class="nav-item" data-page="menu-mgr" onclick="showPage('menu-mgr',this)">
      <span class="nav-icon">📝</span><span class="nav-label">Kelola Menu</span>
    </li>
    <li class="nav-item" data-page="pengaturan" onclick="showPage('pengaturan',this)">
      <span class="nav-icon">⚙️</span><span class="nav-label">Pengaturan</span>
    </li>
  </ul>
  <div class="sidebar-footer">
    <div class="cashier-info">
      <div class="cashier-avatar" id="cashier-avatar">A</div>
      <div>
        <div class="cashier-name" id="cashier-display">Admin</div>
        <div class="cashier-role">Kasir</div>
      </div>
    </div>
  </div>
</nav>

<!-- MAIN CONTENT -->
<main id="main">

  <!-- ===== PAGE: KASIR ===== -->
  <div class="page active" id="page-kasir">
    <div class="kasir-layout">

      <!-- LEFT: Menu -->
      <div class="menu-side">
        <div class="menu-topbar">
          <div class="topbar-left">
            <h2 class="page-title">Menu</h2>
            <div class="order-chip">Order <span id="current-order-num">#001</span></div>
          </div>
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" id="search-input" placeholder="Cari menu..." autocomplete="off">
          </div>
        </div>

        <div class="cat-scroll">
          <div class="cat-tabs" id="cat-tabs"></div>
        </div>

        <div class="menu-grid" id="menu-grid"></div>
      </div>

      <!-- RIGHT: Cart -->
      <div class="cart-side">
        <div class="cart-topbar">
          <h2 class="page-title">Pesanan</h2>
          <div class="cart-badge" id="cart-badge">0</div>
        </div>

        <!-- Customer -->
        <div class="cust-section">
          <div class="field-row">
            <div class="field">
              <label>Pelanggan / Meja</label>
              <input type="text" id="cust-name" placeholder="Nama atau nomor meja...">
            </div>
            <div class="field">
              <label>Tipe</label>
              <select id="order-type">
                <option>Dine In</option>
                <option>Take Away</option>
                <option>Go-Food</option>
                <option>GrabFood</option>
                <option>ShopeeFood</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Cart Items -->
        <div class="cart-body" id="cart-body"></div>

        <!-- Summary -->
        <div class="cart-summary">
          <div class="sum-line"><span>Subtotal</span><span id="s-sub">Rp 0</span></div>
          <div class="sum-line"><span>Diskon</span><span id="s-disc" style="color:#3a7a3a">- Rp 0</span></div>
          <div class="sum-line"><span>PPN 11%</span><span id="s-tax">Rp 0</span></div>
          <div class="sum-line total"><span>TOTAL</span><span id="s-total">Rp 0</span></div>
        </div>

        <!-- Payment -->
        <div class="payment-section">
          <div class="pay-row">
            <div class="field small">
              <label>Diskon %</label>
              <input type="number" id="disc-pct" min="0" max="100" value="0">
            </div>
            <div class="field">
              <label>Metode Bayar</label>
              <select id="pay-method">
                <option>Tunai</option>
                <option>QRIS</option>
                <option>Debit BCA</option>
                <option>Debit Mandiri</option>
                <option>Kredit</option>
                <option>Transfer Bank</option>
                <option>OVO</option>
                <option>Dana</option>
                <option>GoPay</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>Uang Diterima</label>
            <input type="number" id="uang-diterima" placeholder="0" min="0">
          </div>
          <div id="kembalian-display">Kembalian: Rp 0</div>
        </div>

        <!-- Buttons -->
        <div class="cart-actions">
          <button class="btn-ghost" onclick="clearCart()">🗑 Hapus</button>
          <button class="btn-outline" onclick="openReceipt(false)">🖨 Preview</button>
          <button class="btn-primary" onclick="processOrder()">✅ Bayar &amp; Cetak</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== PAGE: RIWAYAT ===== -->
  <div class="page" id="page-riwayat">
    <div class="inner-page">
      <div class="page-header">
        <h2 class="page-title">Riwayat Transaksi</h2>
        <div class="header-actions">
          <input type="date" id="filter-date" onchange="renderHistory()">
          <button class="btn-outline-sm" onclick="exportCSV()">⬇ Export CSV</button>
        </div>
      </div>
      <div class="stats-row" id="history-stats"></div>
      <div class="table-wrap">
        <table class="data-table" id="history-table">
          <thead>
            <tr>
              <th>No. Order</th><th>Waktu</th><th>Pelanggan</th><th>Tipe</th>
              <th>Item</th><th>Total</th><th>Bayar</th><th>Kasir</th><th>Aksi</th>
            </tr>
          </thead>
          <tbody id="history-tbody"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ===== PAGE: LAPORAN ===== -->
  <div class="page" id="page-laporan">
    <div class="inner-page">
      <div class="page-header">
        <h2 class="page-title">Laporan Penjualan</h2>
        <div class="header-actions">
          <select id="report-period" onchange="renderReport()">
            <option value="today">Hari Ini</option>
            <option value="week">7 Hari Terakhir</option>
            <option value="month">30 Hari Terakhir</option>
            <option value="all">Semua</option>
          </select>
        </div>
      </div>
      <div class="report-grid" id="report-cards"></div>
      <div class="two-col">
        <div class="card-box">
          <h3 class="box-title">🏆 Menu Terlaris</h3>
          <div id="top-menu-list"></div>
        </div>
        <div class="card-box">
          <h3 class="box-title">💳 Metode Pembayaran</h3>
          <div id="pay-method-list"></div>
        </div>
      </div>
      <div class="card-box" style="margin-top:16px">
        <h3 class="box-title">📈 Transaksi Per Jam (Hari Ini)</h3>
        <div id="hourly-chart" style="height:120px;display:flex;align-items:flex-end;gap:4px;padding:8px 0"></div>
      </div>
    </div>
  </div>

  <!-- ===== PAGE: KELOLA MENU ===== -->
  <div class="page" id="page-menu-mgr">
    <div class="inner-page">
      <div class="page-header">
        <h2 class="page-title">Kelola Menu</h2>
        <button class="btn-primary-sm" onclick="openMenuForm()">+ Tambah Menu</button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Icon</th><th>Nama</th><th>Kategori</th><th>Harga</th><th>Label</th><th>Status</th><th>Aksi</th></tr>
          </thead>
          <tbody id="menu-mgr-tbody"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ===== PAGE: PENGATURAN ===== -->
  <div class="page" id="page-pengaturan">
    <div class="inner-page">
      <div class="page-header">
        <h2 class="page-title">Pengaturan</h2>
      </div>
      <div class="settings-grid">
        <div class="card-box">
          <h3 class="box-title">🏪 Informasi Toko</h3>
          <div class="settings-form">
            <div class="field"><label>Nama Toko</label><input type="text" id="set-nama" value="Santai Kafe"></div>
            <div class="field"><label>Alamat</label><input type="text" id="set-alamat" value="Jl. Santai No. 17, Medan"></div>
            <div class="field"><label>Telepon</label><input type="text" id="set-telp" value="(061) 555-1234"></div>
            <div class="field"><label>Instagram</label><input type="text" id="set-ig" value="@santaikafe"></div>
            <div class="field"><label>WhatsApp</label><input type="text" id="set-wa" value="0812-3456-7890"></div>
            <div class="field"><label>Pesan Footer Struk</label><input type="text" id="set-footer" value="Terima kasih telah berkunjung! Datang lagi ya 😊"></div>
          </div>
        </div>
        <div class="card-box">
          <h3 class="box-title">💼 Kasir Aktif</h3>
          <div class="settings-form">
            <div class="field"><label>Nama Kasir</label><input type="text" id="set-kasir" value="Admin" oninput="updateCashier()"></div>
            <div class="field"><label>PPN (%)</label><input type="number" id="set-ppn" value="11" min="0" max="100"></div>
          </div>
          <h3 class="box-title" style="margin-top:20px">🎨 Tema</h3>
          <div class="theme-btns">
            <button class="theme-btn active" onclick="setTheme('warm',this)">☕ Warm Brown</button>
            <button class="theme-btn" onclick="setTheme('dark',this)">🌙 Dark Mode</button>
            <button class="theme-btn" onclick="setTheme('sage',this)">🌿 Sage Green</button>
          </div>
        </div>
      </div>
      <div style="text-align:right;margin-top:16px">
        <button class="btn-primary" onclick="saveSettings()">💾 Simpan Pengaturan</button>
      </div>
      <div class="card-box" style="margin-top:16px">
        <h3 class="box-title" style="color:#c0392b">⚠ Zona Bahaya</h3>
        <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
          <button class="btn-danger" onclick="clearHistory()">🗑 Hapus Semua Riwayat</button>
          <button class="btn-danger" onclick="resetMenus()">🔄 Reset Menu ke Default</button>
        </div>
      </div>
    </div>
  </div>

</main>

<!-- MODAL RECEIPT -->
<div id="modal-overlay" onclick="if(event.target===this)closeReceipt()">
  <div id="receipt-modal">
    <div id="receipt-content"></div>
    <div class="rcpt-actions">
      <button class="btn-ghost" onclick="closeReceipt()">✕ Tutup</button>
      <button class="btn-primary" onclick="printReceipt()">🖨 Print Struk</button>
    </div>
  </div>
</div>

<!-- MODAL MENU FORM -->
<div id="menu-modal-overlay" onclick="if(event.target===this)closeMenuForm()">
  <div id="menu-modal">
    <h3 id="menu-form-title">Tambah Menu Baru</h3>
    <div class="settings-form">
      <div class="field-row">
        <div class="field small"><label>Icon (emoji)</label><input type="text" id="fm-icon" value="☕" maxlength="4"></div>
        <div class="field"><label>Nama Menu</label><input type="text" id="fm-name" placeholder="Nama menu..."></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Kategori</label>
          <select id="fm-cat">
            <option>Kopi</option><option>Non-Kopi</option><option>Roti</option>
            <option>Makanan</option><option>Camilan</option><option>Paket</option>
          </select>
        </div>
        <div class="field"><label>Harga (Rp)</label><input type="number" id="fm-price" placeholder="25000" min="0"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Deskripsi</label><input type="text" id="fm-desc" placeholder="Deskripsi singkat..."></div>
        <div class="field small"><label>Label</label>
          <select id="fm-badge"><option value="">-</option><option value="hot">HOT</option><option value="new">NEW</option><option value="best">BEST</option></select>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">
      <button class="btn-ghost" onclick="closeMenuForm()">Batal</button>
      <button class="btn-primary" onclick="saveMenuForm()">Simpan</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<script src="app.js"></script>
</body>
</html>
