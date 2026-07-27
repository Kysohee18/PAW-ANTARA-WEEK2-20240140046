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

const genreConfig = {
  pop: { border: 'border-l-blue-500', mark: 'bg-blue-500', dot: 'bg-blue-500', textHover: 'hover:text-blue-600' },
  hipdut: { border: 'border-l-pink-500', mark: 'bg-pink-500', dot: 'bg-pink-500', textHover: 'hover:text-pink-500' },
  indie: { border: 'border-l-green-500', mark: 'bg-green-500', dot: 'bg-green-500', textHover: 'hover:text-green-500' }
};

function renderCarousel() {
  const container = document.getElementById('hero-carousel');
  const heroSongs = songs.slice(0, 3);

  let inner = document.createElement('div');
  inner.id = 'carousel-inner';
  inner.className = 'flex w-full h-full transition-transform duration-700 ease-in-out';

  heroSongs.forEach((song, i) => {
    const gc = genreConfig[song.genre];
    const figure = document.createElement('figure');
    figure.className = 'w-full h-full flex-shrink-0 relative';
    figure.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
      <img src="${song.heroImage}" alt="${song.title}" class="w-full h-full object-cover" />
      <div class="absolute bottom-10 left-8 md:left-16 z-20 max-w-xl">
        <span class="inline-block ${gc.dot} text-white text-xs font-bold px-3 py-1 rounded-full mb-3">${song.badge}</span>
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
    const gc = genreConfig[song.genre];
    const article = document.createElement('article');
    article.dataset.genre = song.genre;
    article.className = `album-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out ${gc.border} border-l-4 overflow-hidden`;

    article.innerHTML = `
      <figure class="w-full">
        <img src="${song.image}" alt="${song.title}" class="w-full h-52 object-cover" />
        <figcaption class="text-xs text-gray-400 px-4 pt-2 pb-1">
          <span class="font-semibold text-gray-700">${song.title}</span> &mdash; ${song.artist}
        </figcaption>
      </figure>
      <div class="px-4 pb-4">
        <header class="mb-2">
          <h3 class="text-lg font-bold text-gray-900 leading-tight">${song.title}</h3>
          <p class="text-sm text-gray-500">${song.artist}</p>
        </header>
        <div class="flex items-center gap-2 mb-2">
          <mark class="${gc.mark} text-white text-xs font-bold px-2.5 py-0.5 rounded-full">${song.rating}/10</mark>
          <time datetime="${song.releaseISO}" class="text-xs text-gray-400">${song.release}</time>
        </div>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">${song.description}</p>
        <aside class="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-3">
          <h4 class="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-1.5">&#9835; Dengarkan Juga</h4>
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
      link.classList.remove('text-gray-900', 'font-semibold');
      link.classList.add('text-gray-500');
    });
    active.classList.remove('text-gray-500');
    active.classList.add('text-gray-900', 'font-semibold');
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
    defaultActive.classList.remove('text-gray-500');
    defaultActive.classList.add('text-gray-900', 'font-semibold');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  renderArticles();
  setupCarousel();
  setupFilter();
});
