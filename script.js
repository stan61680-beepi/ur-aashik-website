// Generate 10 cards dynamically
const grid = document.getElementById('grid');
const files = [];
for(let i=1;i<=10;i++){
  files.push({
    id:i,
    img:`assets/img${i}.jpg`,
    name:`Image ${i} Name`,
    url:`#` // replace with real download link (mediafire or direct link)
  });
}

files.forEach(f=>{
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${f.img}" alt="Image ${f.id}" />
    <div class="name">${f.name}</div>
    <a class="btn" href="${f.url}" target="_blank" rel="noreferrer">DOWNLOAD NOW</a>
  `;
  grid.appendChild(card);
});

// logout behavior
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  localStorage.removeItem('auth');
  location.href='login.html';
});

// play audio on first touch anywhere
const bgMusic = document.getElementById('bgMusic');
document.addEventListener('click', function playOnce(){
  if(bgMusic && typeof bgMusic.play === 'function'){
    bgMusic.play().catch(()=>{});
  }
  document.removeEventListener('click', playOnce);
}, {once:true});

// add small click sound when pressing DOWNLOAD NOW
document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    const s = document.getElementById('clickSound');
    if(s && typeof s.play==='function') s.play().catch(()=>{});
  });
});
