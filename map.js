(function() {
  var FOREST = '#1A3D2B', ACCENT = '#a8d5b5';
  var TILES  = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var ATTR   = '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>';

  /* ── custom pin icons ─────────────────────────────── */
  function pinIcon(color, size, pulse) {
    size = size || 28;
    return L.divIcon({
      className: '',
      html: '<div style="position:relative;width:' + size + 'px;height:' + size + 'px">'
          + (pulse ? '<div style="position:absolute;inset:0;border-radius:50%;background:' + color + ';opacity:.25;animation:lpulse 2s ease-out infinite"></div>' : '')
          + '<svg viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" style="width:' + size + 'px;height:' + (size*1.4) + 'px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))">'
          + '<path d="M12 0C7.6 0 4 3.6 4 8c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8z" fill="' + color + '" stroke="#fff" stroke-width="1.5"/>'
          + '<circle cx="12" cy="8" r="3" fill="#fff"/>'
          + '</svg></div>',
      iconSize:   [size, size * 1.4],
      iconAnchor: [size / 2, size * 1.4],
      popupAnchor:[0, -size * 1.4]
    });
  }

  /* inject pulse keyframe */
  var st = document.createElement('style');
  st.textContent = '@keyframes lpulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(3);opacity:0}}';
  document.head.appendChild(st);

  /* ── popup style ──────────────────────────────────── */
  var ps = document.createElement('style');
  ps.textContent = '.ocv-pop .leaflet-popup-content-wrapper{border-radius:10px;box-shadow:0 4px 18px rgba(26,61,43,.2);border:1.5px solid #c8dbb5;padding:0}.ocv-pop .leaflet-popup-content{margin:10px 14px}.ocv-pop .leaflet-popup-tip{background:#fff}.ocv-pop b{color:#1A3D2B;font-size:14px}.ocv-pop span{color:#555;font-size:12px;display:block;margin-top:2px}';
  document.head.appendChild(ps);

  function mkPopup(name, sub) {
    return '<b>' + name + '</b><span>' + sub + '</span>';
  }

  /* ══ WORLD MAP ═════════════════════════════════════ */
  var worldEl = document.getElementById('world-map');
  if (worldEl) {
    var wMap = L.map('world-map', {
      center: [22, 25], zoom: 2, minZoom: 2, maxZoom: 6,
      scrollWheelZoom: false, zoomControl: true
    });
    L.tileLayer(TILES, { attribution: ATTR, maxZoom: 19 }).addTo(wMap);

    var wCities = [
      { name:'📍 Perundurai, India',  sub:'Manufacturing Base',  lat:11.27,  lng:77.58,   home:true  },
      { name:'🇺🇸 USA',               sub:'Export Destination',  lat:38.0,   lng:-97.0,   home:false },
      { name:'🇨🇦 Canada',            sub:'Export Destination',  lat:56.1,   lng:-106.4,  home:false },
      { name:'🇬🇧 United Kingdom',    sub:'Export Destination',  lat:54.0,   lng:-2.5,    home:false },
      { name:'🇩🇪 Germany',           sub:'Export Destination',  lat:51.2,   lng:10.5,    home:false },
      { name:'🇮🇹 Italy',             sub:'Export Destination',  lat:42.5,   lng:12.5,    home:false },
      { name:'🇦🇪 UAE',               sub:'Export Destination',  lat:23.4,   lng:53.8,    home:false },
      { name:'🇸🇬 Singapore',         sub:'Export Destination',  lat:1.35,   lng:103.82,  home:false },
      { name:'🇦🇺 Australia',         sub:'Export Destination',  lat:-25.3,  lng:133.8,   home:false }
    ];

    var wMarkers = {};
    wCities.forEach(function(c, i) {
      var icon = c.home
        ? pinIcon(FOREST, 36, true)
        : pinIcon(FOREST, 28, false);
      var mk = L.marker([c.lat, c.lng], { icon: icon })
        .addTo(wMap)
        .bindPopup(mkPopup(c.name, c.sub), { className: 'ocv-pop', maxWidth: 220 });
      wMarkers['wpin-' + i] = mk;

      if (!c.home) {
        L.polyline([[11.27, 77.58], [c.lat, c.lng]], {
          color: FOREST, weight: 1.5, opacity: 0.3, dashArray: '5 7'
        }).addTo(wMap);
      }
    });

    /* left panel click */
    var wItems = document.querySelectorAll('#world-dest-list .map-dest-item');
    wItems.forEach(function(li) {
      li.addEventListener('click', function() {
        wItems.forEach(function(x) { x.classList.remove('active'); });
        li.classList.add('active');
        var mk = wMarkers[li.dataset.pin];
        if (mk) { wMap.setView(mk.getLatLng(), Math.max(wMap.getZoom(), 4)); mk.openPopup(); }
      });
    });

    /* invalidateSize after any reveal */
    setTimeout(function(){ wMap.invalidateSize(); }, 400);
  }

  /* ══ INDIA MAP ══════════════════════════════════════ */
  var indiaEl = document.getElementById('india-map');
  if (indiaEl) {
    var iMap = L.map('india-map', {
      center: [22, 80], zoom: 5, minZoom: 4, maxZoom: 9,
      scrollWheelZoom: false, zoomControl: true
    });
    L.tileLayer(TILES, { attribution: ATTR, maxZoom: 19 }).addTo(iMap);

    var iCities = [
      { name:'📍 Perundurai',  sub:'Manufacturing Base — OCV Enterprises', lat:11.27, lng:77.58, home:true  },
      { name:'🏙 Delhi',       sub:'Pan-India Delivery', lat:28.61, lng:77.20,  home:false },
      { name:'🏙 Mumbai',      sub:'Pan-India Delivery', lat:19.07, lng:72.87,  home:false },
      { name:'🏙 Bengaluru',   sub:'Pan-India Delivery', lat:12.97, lng:77.59,  home:false },
      { name:'🏙 Chennai',     sub:'Pan-India Delivery', lat:13.08, lng:80.27,  home:false },
      { name:'🏙 Hyderabad',   sub:'Pan-India Delivery', lat:17.38, lng:78.48,  home:false },
      { name:'🏙 Kolkata',     sub:'Pan-India Delivery', lat:22.57, lng:88.36,  home:false },
      { name:'🏙 Pune',        sub:'Pan-India Delivery', lat:18.52, lng:73.85,  home:false },
      { name:'🏙 Ahmedabad',   sub:'Pan-India Delivery', lat:23.02, lng:72.57,  home:false },
      { name:'🏙 Jaipur',      sub:'Pan-India Delivery', lat:26.91, lng:75.78,  home:false },
      { name:'🏙 Kochi',       sub:'Pan-India Delivery', lat:9.93,  lng:76.26,  home:false },
      { name:'🏙 Guwahati',    sub:'Pan-India Delivery', lat:26.14, lng:91.74,  home:false }
    ];

    var iMarkers = {};
    iCities.forEach(function(c, i) {
      var icon = c.home
        ? pinIcon(FOREST, 36, true)
        : pinIcon(FOREST, 28, false);
      var mk = L.marker([c.lat, c.lng], { icon: icon })
        .addTo(iMap)
        .bindPopup(mkPopup(c.name, c.sub), { className: 'ocv-pop', maxWidth: 220 });
      iMarkers['ipin-' + i] = mk;
    });

    /* left panel click */
    var iItems = document.querySelectorAll('#india-dest-list .map-dest-item');
    iItems.forEach(function(li) {
      li.addEventListener('click', function() {
        iItems.forEach(function(x) { x.classList.remove('active'); });
        li.classList.add('active');
        var mk = iMarkers[li.dataset.pin];
        if (mk) { iMap.setView(mk.getLatLng(), 8); mk.openPopup(); }
      });
    });

    setTimeout(function(){ iMap.invalidateSize(); }, 400);
  }

})();
