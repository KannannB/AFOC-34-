# 📐 Layouts Snippets - Prêts à l'emploi

Guide de référence rapide pour copier-coller des layouts dans vos projets Astro + Tailwind.

---

## 🎯 HERO SECTIONS

### Hero Centré (Classique)
```astro
<section class="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">
      {hero.title}
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-gray-100">
      {hero.subtitle}
    </p>
    <a 
      href={hero.cta.url} 
      class="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      {hero.cta.label}
    </a>
  </div>
</section>
```

### Hero Split (Texte gauche / Image droite)
```astro
<section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Texte -->
      <div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          {hero.title}
        </h1>
        <p class="text-xl mb-8 text-gray-100">
          {hero.subtitle}
        </p>
        <a 
          href={hero.cta.url} 
          class="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          {hero.cta.label}
        </a>
      </div>
      <!-- Image -->
      <div>
        <img 
          src="/hero-image.jpg" 
          alt={hero.title}
          class="rounded-lg shadow-2xl w-full"
        />
      </div>
    </div>
  </div>
</section>
```

### Hero Plein écran avec overlay
```astro
<section 
  class="relative h-screen bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/hero-bg.jpg')"
>
  <!-- Overlay sombre -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
  <!-- Contenu -->
  <div class="relative z-10 text-center text-white px-6">
    <h1 class="text-6xl md:text-7xl font-bold mb-6">
      {hero.title}
    </h1>
    <p class="text-2xl mb-10">
      {hero.subtitle}
    </p>
    <a 
      href={hero.cta.url}
      class="inline-block bg-accent text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all"
    >
      {hero.cta.label}
    </a>
  </div>
</section>
```

### Hero avec vidéo en arrière-plan
```astro
<section class="relative h-screen overflow-hidden">
  <!-- Vidéo background -->
  <video 
    autoplay 
    loop 
    muted 
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero-video.mp4" type="video/mp4">
  </video>
  
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  
  <!-- Contenu -->
  <div class="relative z-10 h-full flex items-center justify-center text-white text-center px-6">
    <div>
      <h1 class="text-6xl font-bold mb-6">{hero.title}</h1>
      <p class="text-2xl mb-8">{hero.subtitle}</p>
      <a href={hero.cta.url} class="bg-accent px-8 py-4 rounded-lg inline-block">
        {hero.cta.label}
      </a>
    </div>
  </div>
</section>
```

---

## 📦 SERVICES / FEATURES

### Grille 3 colonnes (Standard)
```astro
<section class="container mx-auto py-20 px-6">
  <h2 class="text-4xl font-bold text-center mb-12 text-primary">
    Nos Services
  </h2>
  <div class="grid gap-8 md:grid-cols-3">
    {services.map(service => (
      <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-accent">
        <h3 class="text-2xl font-semibold mb-4 text-secondary">
          {service.title}
        </h3>
        <p class="text-text">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>
```

### Grille 2 colonnes avec icônes
```astro
<section class="container mx-auto py-20 px-6">
  <h2 class="text-4xl font-bold text-center mb-12 text-primary">
    Nos Services
  </h2>
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
    {services.map(service => (
      <div class="bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all flex gap-6">
        <!-- Icône -->
        <div class="flex-shrink-0">
          <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl">
            🚀
          </div>
        </div>
        <!-- Contenu -->
        <div>
          <h3 class="text-2xl font-semibold mb-3 text-secondary">
            {service.title}
          </h3>
          <p class="text-text">
            {service.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
```

### Liste alternée (Image gauche/droite)
```astro
<section class="container mx-auto py-20 px-6">
  <h2 class="text-4xl font-bold text-center mb-16 text-primary">
    Nos Services
  </h2>
  <div class="space-y-20">
    {services.map((service, index) => (
      <div class={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        <!-- Image -->
        <div class={index % 2 === 1 ? 'md:order-2' : ''}>
          <img 
            src={service.image || '/placeholder.jpg'} 
            alt={service.title}
            class="rounded-lg shadow-xl w-full"
          />
        </div>
        <!-- Texte -->
        <div class={index % 2 === 1 ? 'md:order-1' : ''}>
          <h3 class="text-3xl font-bold mb-4 text-secondary">
            {service.title}
          </h3>
          <p class="text-lg text-text leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
```

### Cards avec hover effet 3D
```astro
<section class="container mx-auto py-20 px-6">
  <h2 class="text-4xl font-bold text-center mb-12 text-primary">
    Nos Services
  </h2>
  <div class="grid gap-8 md:grid-cols-3">
    {services.map(service => (
      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
        <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mb-6"></div>
        <h3 class="text-2xl font-semibold mb-4 text-secondary">
          {service.title}
        </h3>
        <p class="text-text mb-6">
          {service.desc}
        </p>
        <a href="#" class="text-accent font-semibold hover:underline">
          En savoir plus →
        </a>
      </div>
    ))}
  </div>
</section>
```

---

## 📝 ABOUT / CONTENT SECTIONS

### Section About Simple
```astro
<section class="container mx-auto py-20 px-6">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold text-primary mb-8">
      {about.title}
    </h1>
    <p class="text-xl text-text-light mb-12">
      {about.description}
    </p>
    
    <div class="space-y-10">
      {about.content.map(section => (
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-secondary mb-4">
            {section.sectionTitle}
          </h2>
          <p class="text-text leading-relaxed text-lg">
            {section.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Section About avec Timeline
```astro
<section class="container mx-auto py-20 px-6">
  <h1 class="text-5xl font-bold text-center text-primary mb-16">
    Notre Histoire
  </h1>
  
  <div class="max-w-3xl mx-auto">
    {about.content.map((section, index) => (
      <div class="flex gap-8 mb-12">
        <!-- Timeline dot -->
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          {index < about.content.length - 1 && (
            <div class="w-1 h-full bg-accent opacity-30"></div>
          )}
        </div>
        <!-- Contenu -->
        <div class="flex-1 pb-8">
          <h2 class="text-2xl font-semibold text-secondary mb-3">
            {section.sectionTitle}
          </h2>
          <p class="text-text leading-relaxed">
            {section.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
```

### Section avec image et texte côte à côte
```astro
<section class="bg-gray-50 py-20">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div>
        <img 
          src="/about-image.jpg" 
          alt="À propos"
          class="rounded-lg shadow-xl w-full"
        />
      </div>
      <!-- Texte -->
      <div>
        <h2 class="text-4xl font-bold text-primary mb-6">
          {about.title}
        </h2>
        <p class="text-lg text-text leading-relaxed mb-8">
          {about.description}
        </p>
        <div class="space-y-4">
          {about.content.map(section => (
            <div class="flex gap-4">
              <div class="text-accent text-2xl">✓</div>
              <div>
                <h3 class="font-semibold text-secondary mb-1">
                  {section.sectionTitle}
                </h3>
                <p class="text-text">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📞 CONTACT SECTIONS

### Formulaire Centré Simple
```astro
<section class="container mx-auto py-20 px-6">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold text-center text-primary mb-8">
      Contactez-nous
    </h1>
    <p class="text-center text-text-light mb-12 text-lg">
      Remplissez le formulaire ci-dessous
    </p>
    
    <form class="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div>
        <label class="block text-sm font-semibold mb-2">Nom</label>
        <input 
          type="text" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input 
          type="email" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Message</label>
        <textarea 
          rows="5"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Votre message"
        ></textarea>
      </div>
      <button 
        type="submit"
        class="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
      >
        Envoyer
      </button>
    </form>
  </div>
</section>
```

### Contact avec infos + formulaire (2 colonnes)
```astro
<section class="container mx-auto py-20 px-6">
  <h1 class="text-4xl font-bold text-center text-primary mb-16">
    Contactez-nous
  </h1>
  
  <div class="grid md:grid-cols-2 gap-12">
    <!-- Infos de contact -->
    <div class="space-y-8">
      <div>
        <h3 class="text-2xl font-semibold text-secondary mb-6">
          Nos coordonnées
        </h3>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="text-accent text-2xl">📍</div>
            <div>
              <p class="font-semibold">Adresse</p>
              <p class="text-text-light">123 rue Exemple, 75000 Paris</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="text-accent text-2xl">📧</div>
            <div>
              <p class="font-semibold">Email</p>
              <p class="text-text-light">contact@exemple.com</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="text-accent text-2xl">📞</div>
            <div>
              <p class="font-semibold">Téléphone</p>
              <p class="text-text-light">01 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Formulaire -->
    <div>
      <form class="bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <input 
            type="text" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Nom"
          />
        </div>
        <div>
          <input 
            type="email" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea 
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Message"
          ></textarea>
        </div>
        <button 
          type="submit"
          class="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</section>
```

---

## 🦶 FOOTER LAYOUTS

### Footer 3 colonnes
```astro
<footer class="bg-primary text-white py-12">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-3 gap-12 mb-8">
      <!-- Colonne 1 -->
      <div>
        <h3 class="text-2xl font-bold mb-4">MonSite</h3>
        <p class="text-gray-300">
          Description courte de votre entreprise.
        </p>
      </div>
      
      <!-- Colonne 2 -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Liens rapides</h4>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-300 hover:text-accent transition">Accueil</a></li>
          <li><a href="/services" class="text-gray-300 hover:text-accent transition">Services</a></li>
          <li><a href="/contact" class="text-gray-300 hover:text-accent transition">Contact</a></li>
        </ul>
      </div>
      
      <!-- Colonne 3 -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Légal</h4>
        <ul class="space-y-2">
          <li><a href="/mentionsLegales" class="text-gray-300 hover:text-accent transition">Mentions légales</a></li>
          <li><a href="/cgv" class="text-gray-300 hover:text-accent transition">CGV</a></li>
          <li><a href="/cookies" class="text-gray-300 hover:text-accent transition">Cookies</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-700 pt-8 text-center text-gray-300">
      <p>&copy; 2026 MonSite - Tous droits réservés</p>
    </div>
  </div>
</footer>
```

### Footer Minimaliste (1 ligne)
```astro
<footer class="bg-primary text-white py-6">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-gray-300">© 2026 MonSite - Tous droits réservés</p>
      <div class="flex gap-6">
        <a href="/mentionsLegales" class="text-gray-300 hover:text-accent transition">Mentions légales</a>
        <a href="/cgv" class="text-gray-300 hover:text-accent transition">CGV</a>
        <a href="/contact" class="text-gray-300 hover:text-accent transition">Contact</a>
      </div>
    </div>
  </div>
</footer>
```

### Footer avec réseaux sociaux
```astro
<footer class="bg-primary text-white py-12">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">MonSite</h3>
        <p class="text-gray-300 mb-6">
          Votre partenaire pour développer votre activité en ligne.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
            <span>f</span>
          </a>
          <a href="#" class="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
            <span>in</span>
          </a>
          <a href="#" class="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
            <span>@</span>
          </a>
        </div>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Navigation</h4>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-300 hover:text-accent">Accueil</a></li>
          <li><a href="/services" class="text-gray-300 hover:text-accent">Services</a></li>
          <li><a href="/about" class="text-gray-300 hover:text-accent">À propos</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Légal</h4>
        <ul class="space-y-2">
          <li><a href="/mentionsLegales" class="text-gray-300 hover:text-accent">Mentions légales</a></li>
          <li><a href="/cgv" class="text-gray-300 hover:text-accent">CGV</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-700 pt-6 text-center text-gray-300 text-sm">
      © 2026 MonSite - Tous droits réservés
    </div>
  </div>
</footer>
```

---

## 🎨 CTA (Call-to-Action) SECTIONS

### CTA Simple centré
```astro
<section class="bg-gradient-to-r from-primary to-secondary text-white py-16">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-4">
      Prêt à commencer ?
    </h2>
    <p class="text-xl mb-8 text-gray-100">
      Contactez-nous dès aujourd'hui pour un devis gratuit
    </p>
    <a 
      href="/contact" 
      class="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
    >
      Demander un devis
    </a>
  </div>
</section>
```

### CTA avec 2 boutons
```astro
<section class="bg-gray-900 text-white py-20">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-5xl font-bold mb-6">
      Développez votre activité
    </h2>
    <p class="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
      Rejoignez des centaines d'entreprises qui nous font confiance
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/contact" 
        class="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
      >
        Commencer maintenant
      </a>
      <a 
        href="/services" 
        class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
      >
        En savoir plus
      </a>
    </div>
  </div>
</section>
```

---

## 💡 CONSEILS D'UTILISATION

### Comment utiliser ces snippets :

1. **Copiez le code** du layout qui vous intéresse
2. **Collez-le** dans votre fichier `.astro`
3. **Adaptez** les données (remplacez `{hero.title}` par vos props)
4. **Personnalisez** les couleurs (elles utilisent déjà vos variables `primary`, `secondary`, `accent`)

### Variables disponibles dans tous les snippets :

- `bg-primary` / `text-primary` → Couleur principale
- `bg-secondary` / `text-secondary` → Couleur secondaire
- `bg-accent` / `text-accent` → Couleur d'accent
- `text-text` → Couleur de texte principale
- `text-text-light` → Couleur de texte secondaire

### Pour changer rapidement un layout :

1. Trouvez la section dans votre page
2. Supprimez l'ancien code
3. Collez le nouveau snippet
4. Ajustez les données

---

## 🚀 WORKFLOW RAPIDE

**Pour un nouveau client :**

1. Dupliquez le projet
2. Changez les 3 couleurs dans `global.css` (30 sec)
3. Choisissez vos layouts dans ce fichier (2 min)
4. Copiez-collez dans vos pages (5 min)
5. Ajustez `site.json` (2 min)

**Total : ~10 minutes** ⚡

---

**Créé pour accélérer le développement de sites vitrines avec Astro + Tailwind v4**
