async function loadContent(){
  try{
    const res = await fetch('content/site.json', {cache:'no-store'});
    const data = await res.json();

    // Hero
    document.getElementById('heroTitle').textContent = data.hero_title || 'Mon Restaurant';
    document.getElementById('heroSubtitle').textContent = data.hero_subtitle || '';
    const cta = document.getElementById('ctaBtn');
    cta.textContent = data.cta_text || 'Nous contacter';
    cta.href = data.cta_link || '#contact';

    // Logo (optional)
    if(data.logo){
      const logo = document.getElementById('logoImg');
      logo.src = data.logo;
      logo.style.display = 'inline-block';
    }

    // Menu
    const list = document.getElementById('menuList');
    list.innerHTML = '';
    (data.menu_items || []).forEach(item => {
      const li = document.createElement('li');
      li.className = 'menu-item';
      const name = document.createElement('span');
      name.textContent = item.name;
      const price = document.createElement('span');
      price.className='price';
      price.textContent = item.price ? item.price : '';
      li.appendChild(name);
      li.appendChild(price);
      list.appendChild(li);
    });

    // Horaires
    document.getElementById('hoursText').textContent = data.hours || '';

    // Contact
    document.getElementById('addressText').textContent = data.address || '';
    const phone = document.getElementById('phoneLink');
    phone.textContent = data.phone || '';
    phone.href = data.phone ? 'tel:'+data.phone.replace(/\s+/g,'') : '#';

    // Map (optional iframe)
    const map = document.getElementById('mapEmbed');
    if(data.map_iframe){
      map.innerHTML = data.map_iframe;
    }

    // Footer year
    document.getElementById('yearNow').textContent = new Date().getFullYear();
  }catch(e){
    console.error('Erreur chargement contenu', e);
  }
}

loadContent();
