const menuData = {
    "menu": [
      { "title": "Home", "link": "#" ,"submenu": [
              { "title": "iOS ", "link": "#" },
             ]},
      { "title": "Services", "link": "#", "submenu": [
          { "title": "E-commerce ", "link": "#" },
          { "title": "App Development", "link": "#", "submenu": [
              { "title": "iOS ", "link": "#" },
              { "title": "Android ", "link": "#" }
          ] },
          { "title": "SEO", "link": "#" }
        ] 
      },
      { "title": "About", "link": "#","submenu": [
          { "title": "place", "link": "#" },
          { "title": "others", "link": "#" },
       
        ] },
      { "title": "Contact", "link": "#", "submenu": [
          { "title": "Email", "link": "#" },
          { "title": "Phone", "link": "#" },
          { "title": "Location", "link": "#" }
        ]
      }
    ]
  };
  
  function createMenu(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.link;
      a.textContent = item.title;
      li.appendChild(a);
  
      if (item.submenu) {
        const submenu = createMenu(item.submenu);
        const submenuWrapper = document.createElement('div');
        submenuWrapper.classList.add('submenu');
        submenuWrapper.appendChild(submenu);
        li.appendChild(submenuWrapper);
  

        a.addEventListener('click', function(e) {
          e.preventDefault();
          submenuWrapper.classList.toggle('active'); 
        });
      }
      ul.appendChild(li);
    });
    return ul;
  }
  
  document.getElementById('menu').appendChild(createMenu(menuData.menu));
  