# 🎨 UI Components Snippets - Bibliothèque Complète

Guide de référence pour tous vos composants d'interface utilisateur.
Tous les styles utilisent Tailwind + vos variables personnalisées (primary, secondary, accent).

---

## 🔘 BUTTONS (Boutons)

### Bouton Primary (Principal)

```astro
<button class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
  Cliquez ici
</button>
```

### Bouton Secondary

```astro
<button class="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
  Action secondaire
</button>
```

### Bouton Accent

```astro
<button class="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
  Action importante
</button>
```

### Bouton Outline (Contour)

```astro
<button class="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
  En savoir plus
</button>
```

### Bouton Ghost (Transparent)

```astro
<button class="text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:bg-opacity-10 transition-all duration-300">
  Lien simple
</button>
```

### Bouton avec icône

```astro
<button class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  Continuer
</button>
```

### Bouton Disabled (Désactivé)

```astro
<button disabled class="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60">
  Non disponible
</button>
```

### Bouton Loading (Chargement)

```astro
<button class="bg-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-3">
  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Chargement...
</button>
```

### Tailles de boutons

```astro
<!-- Small -->
<button class="bg-primary text-white px-4 py-2 text-sm rounded-lg">Small</button>

<!-- Medium (par défaut) -->
<button class="bg-primary text-white px-6 py-3 text-base rounded-lg">Medium</button>

<!-- Large -->
<button class="bg-primary text-white px-8 py-4 text-lg rounded-lg">Large</button>
```

---

## 🃏 CARDS (Cartes)

### Card Simple

```astro
<div class="bg-white p-6 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold text-secondary mb-3">Titre de la carte</h3>
  <p class="text-text">Description de la carte avec du contenu intéressant.</p>
</div>
```

### Card avec image

```astro
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="/image.jpg" alt="Card image" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-secondary mb-3">Titre avec image</h3>
    <p class="text-text mb-4">Description de la carte.</p>
    <a href="#" class="text-accent font-semibold hover:underline">En savoir plus →</a>
  </div>
</div>
```

### Card avec hover effet

```astro
<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
  <h3 class="text-xl font-semibold text-secondary mb-3">Hover Effect</h3>
  <p class="text-text">Passez la souris pour voir l'effet.</p>
</div>
```

### Card avec bordure colorée

```astro
<div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
  <h3 class="text-xl font-semibold text-secondary mb-3">Bordure Accent</h3>
  <p class="text-text">Carte avec une bordure colorée en haut.</p>
</div>
```

### Card avec badge

```astro
<div class="bg-white p-6 rounded-lg shadow-md relative">
  <span class="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
    Nouveau
  </span>
  <h3 class="text-xl font-semibold text-secondary mb-3">Avec Badge</h3>
  <p class="text-text">Carte avec un badge "Nouveau".</p>
</div>
```

### Card pricing (tarification)

```astro
<div class="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-primary">
  <h3 class="text-2xl font-bold text-secondary mb-2">Pro</h3>
  <div class="text-5xl font-bold text-primary mb-4">49€<span class="text-lg text-gray-500">/mois</span></div>
  <ul class="text-left space-y-3 mb-8">
    <li class="flex items-center gap-2">
      <span class="text-accent">✓</span> Fonctionnalité 1
    </li>
    <li class="flex items-center gap-2">
      <span class="text-accent">✓</span> Fonctionnalité 2
    </li>
    <li class="flex items-center gap-2">
      <span class="text-accent">✓</span> Fonctionnalité 3
    </li>
  </ul>
  <button class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90">
    Choisir ce plan
  </button>
</div>
```

---

## 📝 FORMS (Formulaires)

### Input Text

```astro
<div class="mb-4">
  <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
  <input
    type="text"
    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    placeholder="Votre nom"
  />
</div>
```

### Input avec icône

```astro
<div class="mb-4">
  <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
      </svg>
    </div>
    <input
      type="email"
      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="votre@email.com"
    />
  </div>
</div>
```

### Textarea

```astro
<div class="mb-4">
  <label class="block text-sm font-semibold text-gray-700 mb-2">Message</label>
  <textarea
    rows="5"
    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    placeholder="Votre message"
  ></textarea>
</div>
```

### Select

```astro
<div class="mb-4">
  <label class="block text-sm font-semibold text-gray-700 mb-2">Pays</label>
  <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
    <option>France</option>
    <option>Belgique</option>
    <option>Suisse</option>
    <option>Canada</option>
  </select>
</div>
```

### Checkbox

```astro
<div class="flex items-center mb-4">
  <input
    type="checkbox"
    id="terms"
    class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
  />
  <label for="terms" class="ml-2 text-sm text-gray-700">
    J'accepte les <a href="#" class="text-primary hover:underline">conditions d'utilisation</a>
  </label>
</div>
```

### Radio buttons

```astro
<div class="mb-4">
  <label class="block text-sm font-semibold text-gray-700 mb-3">Choisissez une option</label>
  <div class="space-y-2">
    <div class="flex items-center">
      <input type="radio" name="option" id="option1" class="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary">
      <label for="option1" class="ml-2 text-sm text-gray-700">Option 1</label>
    </div>
    <div class="flex items-center">
      <input type="radio" name="option" id="option2" class="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary">
      <label for="option2" class="ml-2 text-sm text-gray-700">Option 2</label>
    </div>
  </div>
</div>
```

### Formulaire complet

```astro
<form class="bg-white p-8 rounded-lg shadow-lg space-y-6">
  <h2 class="text-2xl font-bold text-secondary mb-6">Contactez-nous</h2>

  <div>
    <label class="block text-sm font-semibold text-gray-700 mb-2">Nom complet</label>
    <input
      type="text"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Jean Dupont"
      required
    />
  </div>

  <div>
    <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
    <input
      type="email"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="jean@exemple.com"
      required
    />
  </div>

  <div>
    <label class="block text-sm font-semibold text-gray-700 mb-2">Message</label>
    <textarea
      rows="5"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Votre message..."
      required
    ></textarea>
  </div>

  <div class="flex items-center">
    <input type="checkbox" id="consent" class="w-4 h-4 text-primary border-gray-300 rounded" required>
    <label for="consent" class="ml-2 text-sm text-gray-700">
      J'accepte la politique de confidentialité
    </label>
  </div>

  <button type="submit" class="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
    Envoyer le message
  </button>
</form>
```

---

## 🪟 MODALS (Fenêtres modales)

### Modal Simple

```astro
<!-- Trigger button -->
<button
  onclick="document.getElementById('modal').classList.remove('hidden')"
  class="bg-primary text-white px-6 py-3 rounded-lg"
>
  Ouvrir Modal
</button>

<!-- Modal -->
<div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-2xl font-bold text-secondary">Titre du Modal</h3>
      <button
        onclick="document.getElementById('modal').classList.add('hidden')"
        class="text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
    <p class="text-text mb-6">
      Contenu du modal avec des informations importantes.
    </p>
    <div class="flex gap-4">
      <button
        onclick="document.getElementById('modal').classList.add('hidden')"
        class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300"
      >
        Annuler
      </button>
      <button class="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90">
        Confirmer
      </button>
    </div>
  </div>
</div>
```

### Modal avec formulaire

```astro
<!-- Trigger -->
<button
  onclick="document.getElementById('form-modal').classList.remove('hidden')"
  class="bg-primary text-white px-6 py-3 rounded-lg"
>
  S'inscrire
</button>

<!-- Modal -->
<div id="form-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-2xl font-bold text-secondary">Inscription</h3>
      <button
        onclick="document.getElementById('form-modal').classList.add('hidden')"
        class="text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>

    <form class="space-y-4">
      <div>
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-2">Mot de passe</label>
        <input
          type="password"
          class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
        />
      </div>
      <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90">
        S'inscrire
      </button>
    </form>
  </div>
</div>
```

---

## 🎠 CAROUSEL (Diaporama)

### Carousel Simple

```astro
<div class="relative max-w-4xl mx-auto">
  <!-- Slides -->
  <div id="carousel" class="overflow-hidden rounded-lg">
    <div class="flex transition-transform duration-500" id="carousel-track">
      <div class="w-full flex-shrink-0">
        <img src="/slide1.jpg" alt="Slide 1" class="w-full h-96 object-cover">
      </div>
      <div class="w-full flex-shrink-0">
        <img src="/slide2.jpg" alt="Slide 2" class="w-full h-96 object-cover">
      </div>
      <div class="w-full flex-shrink-0">
        <img src="/slide3.jpg" alt="Slide 3" class="w-full h-96 object-cover">
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <button
    onclick="prevSlide()"
    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100"
  >
    ←
  </button>
  <button
    onclick="nextSlide()"
    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100"
  >
    →
  </button>

  <!-- Dots -->
  <div class="flex justify-center gap-2 mt-4">
    <button class="w-3 h-3 rounded-full bg-primary"></button>
    <button class="w-3 h-3 rounded-full bg-gray-300"></button>
    <button class="w-3 h-3 rounded-full bg-gray-300"></button>
  </div>
</div>

<script>
  let currentSlide = 0;
  const track = document.getElementById('carousel-track');
  const totalSlides = 3;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Auto-play (optionnel)
  setInterval(nextSlide, 5000);
</script>
```

---

## 📋 ACCORDION (Accordéon)

### Accordion Simple

```astro
<div class="max-w-2xl mx-auto space-y-4">
  <!-- Item 1 -->
  <div class="border border-gray-200 rounded-lg">
    <button
      onclick="toggleAccordion('acc1')"
      class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
    >
      <span class="text-lg font-semibold text-secondary">Question 1 ?</span>
      <svg class="w-5 h-5 transition-transform" id="acc1-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div id="acc1" class="hidden px-6 pb-6">
      <p class="text-text">Réponse à la question 1 avec des détails importants.</p>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="border border-gray-200 rounded-lg">
    <button
      onclick="toggleAccordion('acc2')"
      class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
    >
      <span class="text-lg font-semibold text-secondary">Question 2 ?</span>
      <svg class="w-5 h-5 transition-transform" id="acc2-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div id="acc2" class="hidden px-6 pb-6">
      <p class="text-text">Réponse à la question 2.</p>
    </div>
  </div>

  <!-- Item 3 -->
  <div class="border border-gray-200 rounded-lg">
    <button
      onclick="toggleAccordion('acc3')"
      class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
    >
      <span class="text-lg font-semibold text-secondary">Question 3 ?</span>
      <svg class="w-5 h-5 transition-transform" id="acc3-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div id="acc3" class="hidden px-6 pb-6">
      <p class="text-text">Réponse à la question 3.</p>
    </div>
  </div>
</div>

<script>
  function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    } else {
      content.classList.add('hidden');
      icon.style.transform = 'rotate(0deg)';
    }
  }
</script>
```

---

## 🍞 TOASTS (Messages temporaires)

### Toast Success

```astro
<!-- Toast container (placer en bas de page) -->
<div id="toast" class="hidden fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
  <span id="toast-message">Opération réussie !</span>
</div>

<!-- Trigger -->
<button
  onclick="showToast('Votre message a été envoyé !', 'success')"
  class="bg-primary text-white px-6 py-3 rounded-lg"
>
  Afficher Toast
</button>

<script>
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toast-message');

    messageEl.textContent = message;

    // Couleurs selon le type
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500'
    };

    toast.className = `fixed bottom-8 right-8 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50`;
    toast.classList.remove('hidden');

    // Cacher après 3 secondes
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
</script>
```

### Toast avec fermeture manuelle

```astro
<div id="toast-closable" class="hidden fixed bottom-8 right-8 bg-primary text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50">
  <span id="toast-closable-message">Message</span>
  <button onclick="closeToast()" class="ml-4 text-white hover:text-gray-200">
    ✕
  </button>
</div>

<script>
  function showToastClosable(message) {
    const toast = document.getElementById('toast-closable');
    const messageEl = document.getElementById('toast-closable-message');
    messageEl.textContent = message;
    toast.classList.remove('hidden');
  }

  function closeToast() {
    document.getElementById('toast-closable').classList.add('hidden');
  }
</script>
```

---

## 💬 TOOLTIPS (Infobulles)

### Tooltip Simple (CSS pur)

```astro
<div class="relative inline-block group">
  <button class="bg-primary text-white px-6 py-3 rounded-lg">
    Survolez-moi
  </button>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
    Ceci est un tooltip
    <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
  </div>
</div>
```

### Tooltip positions différentes

```astro
<!-- Top -->
<div class="relative inline-block group">
  <button class="bg-primary text-white px-4 py-2 rounded-lg">Top</button>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    Tooltip en haut
  </div>
</div>

<!-- Bottom -->
<div class="relative inline-block group">
  <button class="bg-primary text-white px-4 py-2 rounded-lg">Bottom</button>
  <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    Tooltip en bas
  </div>
</div>

<!-- Left -->
<div class="relative inline-block group">
  <button class="bg-primary text-white px-4 py-2 rounded-lg">Left</button>
  <div class="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    À gauche
  </div>
</div>

<!-- Right -->
<div class="relative inline-block group">
  <button class="bg-primary text-white px-4 py-2 rounded-lg">Right</button>
  <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    À droite
  </div>
</div>
```

---

## 🔔 ALERTS / NOTIFICATIONS

### Alert Success

```astro
<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
  <p class="font-bold">Succès</p>
  <p>Votre action a été effectuée avec succès.</p>
</div>
```

### Alert Error

```astro
<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
  <p class="font-bold">Erreur</p>
  <p>Une erreur s'est produite. Veuillez réessayer.</p>
</div>
```

### Alert Warning

```astro
<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded" role="alert">
  <p class="font-bold">Attention</p>
  <p>Cette action nécessite votre attention.</p>
</div>
```

### Alert Info

```astro
<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded" role="alert">
  <p class="font-bold">Information</p>
  <p>Voici une information utile pour vous.</p>
</div>
```

### Alert avec icône et fermeture

```astro
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-start gap-3" role="alert">
  <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  <div class="flex-1">
    <p class="font-bold">Succès !</p>
    <p>Votre action a été effectuée.</p>
  </div>
  <button class="text-green-700 hover:text-green-900">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>
</div>
```

---

## 🎚️ SLIDERS / RANGE

### Range Slider Simple

```astro
<div class="max-w-md">
  <label class="block text-sm font-semibold mb-2">Volume: <span id="volume-value">50</span>%</label>
  <input
    type="range"
    min="0"
    max="100"
    value="50"
    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
    oninput="document.getElementById('volume-value').textContent = this.value"
  />
</div>
```

### Range avec labels

```astro
<div class="max-w-md">
  <label class="block text-sm font-semibold mb-2">Prix: <span id="price-value">500</span>€</label>
  <input
    type="range"
    min="0"
    max="1000"
    value="500"
    step="50"
    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
    oninput="document.getElementById('price-value').textContent = this.value"
  />
  <div class="flex justify-between text-xs text-gray-500 mt-1">
    <span>0€</span>
    <span>500€</span>
    <span>1000€</span>
  </div>
</div>
```

---

## 🍔 NAVIGATION (Menus)

### Navigation Desktop

```astro
<nav class="bg-primary text-white">
  <div class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl font-bold">Logo</a>
      <div class="flex gap-6">
        <a href="/" class="hover:text-accent transition">Accueil</a>
        <a href="/services" class="hover:text-accent transition">Services</a>
        <a href="/about" class="hover:text-accent transition">À propos</a>
        <a href="/contact" class="hover:text-accent transition">Contact</a>
      </div>
    </div>
  </div>
</nav>
```

### Navigation avec dropdown

```astro
<nav class="bg-primary text-white">
  <div class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl font-bold">Logo</a>
      <div class="flex gap-6">
        <a href="/" class="hover:text-accent transition">Accueil</a>

        <!-- Dropdown -->
        <div class="relative group">
          <button class="hover:text-accent transition flex items-center gap-1">
            Services
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <a href="/service1" class="block px-4 py-3 hover:bg-gray-100">Service 1</a>
            <a href="/service2" class="block px-4 py-3 hover:bg-gray-100">Service 2</a>
            <a href="/service3" class="block px-4 py-3 hover:bg-gray-100">Service 3</a>
          </div>
        </div>

        <a href="/contact" class="hover:text-accent transition">Contact</a>
      </div>
    </div>
  </div>
</nav>
```

### Mobile Menu (Hamburger)

```astro
<nav class="bg-primary text-white">
  <div class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl font-bold">Logo</a>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-6">
        <a href="/" class="hover:text-accent transition">Accueil</a>
        <a href="/services" class="hover:text-accent transition">Services</a>
        <a href="/contact" class="hover:text-accent transition">Contact</a>
      </div>

      <!-- Mobile hamburger -->
      <button
        onclick="toggleMenu()"
        class="md:hidden text-2xl"
      >
        ☰
      </button>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-2">
      <a href="/" class="block py-2 hover:text-accent transition">Accueil</a>
      <a href="/services" class="block py-2 hover:text-accent transition">Services</a>
      <a href="/contact" class="block py-2 hover:text-accent transition">Contact</a>
    </div>
  </div>
</nav>

<script>
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }
</script>
```

---

## 🏷️ BADGES / TAGS

### Badge Simple

```astro
<span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
  Nouveau
</span>
```

### Badges colorés

```astro
<span class="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Success</span>
<span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Error</span>
<span class="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">Warning</span>
<span class="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Info</span>
```

### Badge avec icône

```astro
<span class="bg-accent text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 w-fit">
  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  Vérifié
</span>
```

---

## 📊 PROGRESS BARS

### Progress Bar Simple

```astro
<div class="w-full bg-gray-200 rounded-full h-2">
  <div class="bg-primary h-2 rounded-full" style="width: 70%"></div>
</div>
```

### Progress Bar avec label

```astro
<div class="mb-2 flex justify-between">
  <span class="text-sm font-semibold">Progression</span>
  <span class="text-sm text-gray-600">75%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-3">
  <div class="bg-primary h-3 rounded-full transition-all duration-500" style="width: 75%"></div>
</div>
```

### Progress Bars multiples

```astro
<div class="space-y-4">
  <div>
    <div class="flex justify-between mb-1">
      <span class="text-sm font-semibold">HTML</span>
      <span class="text-sm text-gray-600">90%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
    </div>
  </div>

  <div>
    <div class="flex justify-between mb-1">
      <span class="text-sm font-semibold">CSS</span>
      <span class="text-sm text-gray-600">85%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-secondary h-2 rounded-full" style="width: 85%"></div>
    </div>
  </div>

  <div>
    <div class="flex justify-between mb-1">
      <span class="text-sm font-semibold">JavaScript</span>
      <span class="text-sm text-gray-600">75%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-accent h-2 rounded-full" style="width: 75%"></div>
    </div>
  </div>
</div>
```

---

## 🎯 TABS (Onglets)

### Tabs Simple

```astro
<div class="max-w-2xl">
  <!-- Tab Headers -->
  <div class="flex border-b border-gray-200">
    <button
      onclick="showTab('tab1')"
      class="px-6 py-3 font-semibold text-primary border-b-2 border-primary"
      id="tab1-btn"
    >
      Onglet 1
    </button>
    <button
      onclick="showTab('tab2')"
      class="px-6 py-3 font-semibold text-gray-500 hover:text-primary"
      id="tab2-btn"
    >
      Onglet 2
    </button>
    <button
      onclick="showTab('tab3')"
      class="px-6 py-3 font-semibold text-gray-500 hover:text-primary"
      id="tab3-btn"
    >
      Onglet 3
    </button>
  </div>

  <!-- Tab Content -->
  <div class="p-6">
    <div id="tab1" class="tab-content">
      <h3 class="text-xl font-bold mb-3">Contenu Onglet 1</h3>
      <p class="text-text">Ceci est le contenu du premier onglet.</p>
    </div>
    <div id="tab2" class="tab-content hidden">
      <h3 class="text-xl font-bold mb-3">Contenu Onglet 2</h3>
      <p class="text-text">Ceci est le contenu du deuxième onglet.</p>
    </div>
    <div id="tab3" class="tab-content hidden">
      <h3 class="text-xl font-bold mb-3">Contenu Onglet 3</h3>
      <p class="text-text">Ceci est le contenu du troisième onglet.</p>
    </div>
  </div>
</div>

<script>
  function showTab(tabId) {
    // Cacher tous les onglets
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });

    // Reset tous les boutons
    document.querySelectorAll('[id$="-btn"]').forEach(btn => {
      btn.className = 'px-6 py-3 font-semibold text-gray-500 hover:text-primary';
    });

    // Afficher l'onglet sélectionné
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId + '-btn').className = 'px-6 py-3 font-semibold text-primary border-b-2 border-primary';
  }
</script>
```

---

## 💡 CONSEILS D'UTILISATION

### Variables disponibles partout :

- `bg-primary` / `text-primary`
- `bg-secondary` / `text-secondary`
- `bg-accent` / `text-accent`
- `text-text` / `text-text-light`

### Workflow :

1. Trouvez le composant dont vous avez besoin
2. Copiez le code
3. Collez dans votre page .astro
4. Adaptez les textes et données
5. Les couleurs s'adaptent automatiquement !

### Pour du JavaScript plus complexe :

Si un composant nécessite du JS avancé (carousel auto, animations), créez un composant Astro dédié avec le script inclus.

---

**Tous ces composants sont prêts à l'emploi et s'adaptent à votre thème !** 🎨
