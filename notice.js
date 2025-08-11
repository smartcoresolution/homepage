const PAGE_SIZE = 5;
const DATA_URL = "./notices.json"; // GitHub Pages에서도 동작하도록 상대경로

const els = {
  list: document.getElementById("noticeList"),
  pagination: document.getElementById("noticePagination"),
  search: document.getElementById("noticeSearch"),
  category: document.getElementById("noticeCategory"),
};

let notices = [];
let state = { page: 1, q: "", cat: "" };

init();

async function init(){
  notices = await fetch(DATA_URL).then(r => r.json());
  notices.sort((a,b) => (b.pin?1:0) - (a.pin?1:0) || new Date(b.date) - new Date(a.date));
  bindEvents();
  render();
}

function bindEvents(){
  els.search.addEventListener("input", (e)=>{ state.q = e.target.value.trim(); state.page=1; render(); });
  els.category.addEventListener("change", (e)=>{ state.cat = e.target.value; state.page=1; render(); });
}

function render(){
  const filtered = filterNotices(notices, state.q, state.cat);
  const paged = paginate(filtered, state.page, PAGE_SIZE);
  renderList(paged.items);
  renderPagination(paged.totalPages, state.page);
}

function filterNotices(items, q, cat){
  const query = (q||"").toLowerCase();
  return items.filter(n=>{
    const okQ = !query || n.title.toLowerCase().includes(query);
    const okC = !cat || n.category === cat;
    return okQ && okC;
  });
}

function paginate(items, page, size){
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total/size));
  const cur = Math.min(Math.max(1, page), totalPages);
  const start = (cur-1)*size;
  return { items: items.slice(start, start+size), total, totalPages, page: cur };
}

function renderList(items){
  els.list.innerHTML = items.map(renderItem).join("") || `<li class="notice__item"><p class="notice__title">검색 결과가 없습니다.</p></li>`;
}

function isNew(dateStr){
  const days = 7;
  const d = new Date(dateStr);
  const diff = (Date.now() - d.getTime()) / (1000*60*60*24);
  return diff <= days;
}

function renderItem(n){
  const newMark = isNew(n.date) ? `<span class="notice__new">NEW</span>` : "";
  const badge = n.pin ? "공지" : n.category;
  const badgeClass = "notice__badge";
  return `
    <li class="notice__item">
      <span class="${badgeClass}">${badge}</span>
      <p class="notice__title">${escapeHtml(n.title)} ${newMark}</p>
      <div class="notice__meta">
        <time datetime="${n.date}">${formatDate(n.date)}</time>
      </div>
    </li>`;
}

function renderPagination(totalPages, current){
  const btn = (p, label=String(p), aria="페이지 "+p) =>
    `<button class="notice__page" ${p===current?'aria-current="page"':''} data-page="${p}" aria-label="${aria}">${label}</button>`;
  let html = "";
  if(totalPages>1){
    const prev = Math.max(1, current-1);
    const next = Math.min(totalPages, current+1);
    html += btn(prev, "‹", "이전 페이지");
    const range = rangePages(current, totalPages);
    range.forEach(p => html += btn(p));
    html += btn(next, "›", "다음 페이지");
  }
  els.pagination.innerHTML = html;
  els.pagination.querySelectorAll("button[data-page]").forEach(b=>{
    b.addEventListener("click", ()=>{ state.page = Number(b.dataset.page); render(); });
  });
}

function rangePages(cur, total){
  const pages = new Set([1,total,cur,cur-1,cur+1]);
  return [...pages].filter(p=>p>=1 && p<=total).sort((a,b)=>a-b);
}

function formatDate(s){
  const d = new Date(s);
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const day = String(d.getDate()).padStart(2,"0");
  return `${y}.${m}.${day}`;
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
