const songs = [
  {
    id: 'sesi-potret',
    title: 'Sesi Potret',
    artist: '\u00e9nau, Ari Lesmana',
    genre: 'pop',
    genreLabel: 'Pop',
    rating: 8.7,
    release: 'Mei 2026',
    releaseISO: '2026-05-01',
    description: 'Perpaduan vokal khas Ari Lesmana (Fourtwnty) dengan gaya penulisan \u00e9nau yang jujur dan sederhana. Lagu ini berhasil menduduki puncak klasemen Spotify Indonesia.',
    tracks: ['Zona Nyaman (Fourtwnty)', 'Kusut (\u00e9nau)', 'Lagu sendu (Fourtwnty)'],
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/e1/41/3de14120-ccc4-3cb4-0d93-541b551bd1c5/26UMGIM01710.rgb.jpg/600x600bb.jpg',
    heroImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/e1/41/3de14120-ccc4-3cb4-0d93-541b551bd1c5/26UMGIM01710.rgb.jpg/1200x1200bb.jpg',
    badge: '#1 Spotify Indonesia'
  },
  {
    id: 'astaga-bercanda',
    title: 'Astaga Bercanda',
    artist: 'Akbar Chalay feat Mingse',
    genre: 'hipdut',
    genreLabel: 'Hipdut',
    rating: 8.4,
    release: '7 Mei 2026',
    releaseISO: '2026-05-07',
    description: 'Lagu bergenre Hipdut (Hip Hop + Dangdut) yang viral di TikTok dengan lebih dari 1 juta creation. Cerita cinta segitiga dibalut dengan nada asyik dan kocak.',
    tracks: ['MMG (Naykilla)', 'CEO (Menyala Queen)', 'SO ASU E'],
    image: 'https://i2.wp.com/stafaband-76.com/storage/images/may-2026/03nbhdtrgxlm3vhkjfaisy-astaga-bercanda-300.jpg',
    heroImage: 'https://i2.wp.com/stafaband-76.com/storage/images/may-2026/03nbhdtrgxlm3vhkjfaisy-astaga-bercanda-300.jpg',
    badge: 'Viral TikTok'
  },
  {
    id: 'titik-ujung-doa',
    title: 'Ada titik-titik di ujung doa',
    artist: 'Sal Priadi',
    genre: 'indie',
    genreLabel: 'Indie',
    rating: 9.1,
    release: 'April 2026',
    releaseISO: '2026-04-15',
    description: 'Sal Priadi kembali dengan lirik puitis dan teatrikal khasnya. Lagu ini masuk Top 5 Spotify Indonesia dengan aransemen minimalis yang menyentuh.',
    tracks: ['Kita usahakan rumah itu', 'Ikan dalam kolam', 'Dari planet lain'],
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/a8/4c/faa84c4f-0f09-3730-6460-8c53e9dc159d/cover.jpg/600x600bb.jpg',
    heroImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/a8/4c/faa84c4f-0f09-3730-6460-8c53e9dc159d/cover.jpg/1200x1200bb.jpg',
    badge: 'Viral Bulan Ini'
  },
  {
    id: 'bahagia-lagi',
    title: 'Bahagia Lagi',
    artist: 'Piche Kota',
    genre: 'pop',
    genreLabel: 'Pop',
    rating: 8.0,
    release: '20 Mei 2026',
    releaseISO: '2026-05-20',
    description: 'Pendatang baru Piche Kota sukses masuk Top 10 Spotify dengan lagu pop ceria yang bikin pendengar tersenyum. Aransemen fresh dengan lirik optimis.',
    tracks: ['Sesaat Kau Hadir', 'Bersenja Gurau (Raim Laode)', 'Jangan Paksa Rindu (Ifan Seventeen)'],
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0e/85/cf/0e85cf8d-7748-9044-0e7c-ea8a88efe3e4/25UM1IM53003.rgb.jpg/600x600bb.jpg',
    heroImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0e/85/cf/0e85cf8d-7748-9044-0e7c-ea8a88efe3e4/25UM1IM53003.rgb.jpg/1200x1200bb.jpg',
    badge: 'Top 10 Spotify'
  },
  {
    id: 'mmg',
    title: 'MMG (My Mine Gueh)',
    artist: 'Naykilla',
    genre: 'hipdut',
    genreLabel: 'Hipdut',
    rating: 8.3,
    release: '13 Juni 2026',
    releaseISO: '2026-06-13',
    description: 'Lagu Hipdut yang viral berkat video klipnya yang menampilkan aktor Jefri Nichol dengan gaya nyentrik. Lirik catchy dan beat yang bikin nagih.',
    tracks: ['Astaga Bercanda (Akbar Chalay)', 'CEO (Menyala Queen)', 'SO ASU E'],
    image: 'https://cdn-images.dzcdn.net/images/cover/8ce7f646d387a6eb37da308dea16c6a2/500x500.jpg',
    heroImage: 'https://cdn-images.dzcdn.net/images/cover/8ce7f646d387a6eb37da308dea16c6a2/500x500.jpg',
    badge: 'Viral Media Sosial'
  }
];

function renderCarousel() {
  const container = document.getElementById('hero-carousel');
  const heroSongs = songs.slice(0, 3);

  let inner = document.createElement('div');
  inner.id = 'carousel-inner';
  inner.className = 'flex w-full h-full transition-transform duration-700 ease-in-out';

  heroSongs.forEach((song, i) => {
    const figure = document.createElement('figure');
    figure.className = 'w-full h-full flex-shrink-0 relative';
    figure.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
      <img src="${song.heroImage}" alt="${song.title}" class="w-full h-full object-cover" />
      <div class="absolute bottom-10 left-8 md:left-16 z-20 max-w-xl">
        <span class="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-3">${song.badge}</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-1">${song.title}</h2>
        <p class="text-lg text-gray-200 mb-1">${song.artist}</p>
        <p class="text-gray-400 text-sm">${song.genreLabel} &middot; ${song.release}</p>
      </div>
    `;
    inner.appendChild(figure);
  });

  container.appendChild(inner);

  let dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30';

  heroSongs.forEach((_, i) => {
    let btn = document.createElement('button');
    btn.className = `carousel-dot w-3 h-3 rounded-full ${i === 0 ? 'bg-white scale-110' : 'bg-white/50'} shadow-md transition-all cursor-pointer`;
    dotsWrapper.appendChild(btn);
  });

  container.appendChild(dotsWrapper);
}

function renderArticles() {
  const container = document.getElementById('album-list');

  songs.forEach((song) => {
    const article = document.createElement('article');
    article.dataset.genre = song.genre;
    article.className = 'album-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group';

    article.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${song.image}" alt="${song.title}" class="w-full aspect-square object-cover" />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <button class="w-12 h-12 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-gray-900 truncate">${song.title}</h3>
        <p class="text-sm text-gray-500 truncate mt-0.5">${song.artist}</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-xs text-gray-400">${song.rating}/10</span>
          <span class="text-xs text-gray-300">·</span>
          <time datetime="${song.releaseISO}" class="text-xs text-gray-400">${song.release}</time>
        </div>
        <p class="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2">${song.description}</p>
        <aside class="bg-gray-50 rounded-lg p-3 mt-3 border border-gray-100">
          <h4 class="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-1">&#9835; Dengarkan Juga</h4>
          <ul class="list-disc list-inside text-xs text-gray-500 space-y-0.5">
            ${song.tracks.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </aside>
      </div>
    `;

    container.appendChild(article);
  });
}

function setupCarousel() {
  const carousel = document.getElementById('hero-carousel');
  const inner = document.getElementById('carousel-inner');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentIndex = 0;
  const totalSlides = dots.length;
  let autoSlideInterval;

  function goToSlide(index) {
    currentIndex = index;
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white', i === currentIndex);
      dot.classList.toggle('scale-110', i === currentIndex);
      dot.classList.toggle('bg-white/50', i !== currentIndex);
    });
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % totalSlides);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoSlide();
    });
  });

  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

function setupFilter() {
  const navLinks = document.querySelectorAll('.nav-link');
  const albumCards = document.querySelectorAll('.album-card');

  function hideCard(card) {
    card.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      card.classList.add('hidden');
    }, 300);
  }

  function showCard(card) {
    card.classList.remove('hidden');
    requestAnimationFrame(() => {
      card.classList.remove('opacity-0', 'scale-95');
    });
  }

  function setActiveLink(active) {
    navLinks.forEach(link => {
      link.classList.remove('bg-gray-900', 'text-white');
      link.classList.add('bg-gray-100', 'text-gray-700');
    });
    active.classList.remove('bg-gray-100', 'text-gray-700');
    active.classList.add('bg-gray-900', 'text-white');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const genre = link.dataset.filter;

      albumCards.forEach(card => {
        if (genre === 'all' || card.dataset.genre === genre) {
          showCard(card);
        } else {
          hideCard(card);
        }
      });

      setActiveLink(link);
    });
  });

  const defaultActive = document.querySelector('[data-filter="all"]');
  if (defaultActive) {
    defaultActive.classList.remove('bg-gray-100', 'text-gray-700');
    defaultActive.classList.add('bg-gray-900', 'text-white');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  renderArticles();
  setupCarousel();
  setupFilter();
});
