const axios = require('axios');

const API_URL = 'http://localhost:1337/api';
const API_TOKEN = 'YOUR_API_TOKEN_HERE'; // Replace with your Strapi API token

const locales = [
  { code: 'en', home: { title: 'Welcome to AI4ALL', content: 'Empowering everyone with artificial intelligence skills. Creating a future where AI enhances education, business, and professional growth across Armenia and beyond.' }, about: { title: 'About Us', content: 'We are dedicated to making AI accessible to all.' }, contact: { address: 'Yerevan, Armenia', email: 'wave@eif.am', phone: '+374 XX XXX XXX', description: 'Contact us for more information.' } },
  { code: 'ru', home: { title: 'Добро пожаловать в AI4ALL', content: 'Даем каждому навыки искусственного интеллекта. Создаем будущее, где ИИ улучшает образование, бизнес и профессиональный рост.' }, about: { title: 'О нас', content: 'Мы стремимся сделать ИИ доступным для всех.' }, contact: { address: 'Ереван, Армения', email: 'wave@eif.am', phone: '+374 XX XXX XXX', description: 'Свяжитесь с нами для получения дополнительной информации.' } },
  { code: 'hy', home: { title: 'Բարի գալուստ AI4ALL', content: 'Մենք հնարավորություն ենք տալիս բոլորին ձեռք բերել արհեստական բանականության հմտություններ։ Ստեղծում ենք ապագա, որտեղ ԱԲ-ն զարգացնում է կրթությունը, բիզնեսը և մասնագիտական աճը Հայաստանում և նրա սահմաններից դուրս։' }, about: { title: 'Մեր մասին', content: 'Մենք ձգտում ենք ԱԲ-ն հասանելի դարձնել բոլորին։' }, contact: { address: 'Երևան, Հայաստան', email: 'wave@eif.am', phone: '+374 XX XXX XXX', description: 'Կապվեք մեզ հետ լրացուցիչ տեղեկությունների համար։' } }
];

const newsEntries = [
  {
    locale: 'en',
    title: 'AI4ALL Launches New Program',
    content: 'We are excited to announce our new AI education program.',
    publishedAt: '2024-06-01T12:00:00Z'
  },
  {
    locale: 'ru',
    title: 'AI4ALL запускает новую программу',
    content: 'Мы рады объявить о запуске новой образовательной программы по ИИ.',
    publishedAt: '2024-06-01T12:00:00Z'
  },
  {
    locale: 'hy',
    title: 'AI4ALL-ը մեկնարկում է նոր ծրագիր',
    content: 'Մենք ուրախ ենք հայտարարել ԱԲ կրթական նոր ծրագրի մեկնարկի մասին։',
    publishedAt: '2024-06-01T12:00:00Z'
  }
];

const blogEntries = [
  {
    locale: 'en',
    title: 'The Future of AI in Armenia',
    content: 'AI is transforming industries across Armenia.',
    publishedAt: '2024-06-02T12:00:00Z'
  },
  {
    locale: 'ru',
    title: 'Будущее ИИ в Армении',
    content: 'ИИ трансформирует отрасли по всей Армении.',
    publishedAt: '2024-06-02T12:00:00Z'
  },
  {
    locale: 'hy',
    title: 'ԱԲ-ի ապագան Հայաստանում',
    content: 'ԱԲ-ն փոխում է Հայաստանի տարբեր ոլորտները։',
    publishedAt: '2024-06-02T12:00:00Z'
  }
];

async function seedSingleType(type, data, locale) {
  // Try to find existing entry
  const res = await axios.get(`${API_URL}/${type}?locale=${locale}`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` }
  });
  if (res.data.data) {
    // Update
    await axios.put(`${API_URL}/${type}`, { data: { ...data, locale } }, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    console.log(`Updated ${type} (${locale})`);
  } else {
    // Create
    await axios.post(`${API_URL}/${type}`, { data: { ...data, locale } }, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    console.log(`Created ${type} (${locale})`);
  }
}

async function seedCollectionType(type, entries) {
  for (const entry of entries) {
    await axios.post(`${API_URL}/${type}`, { data: entry }, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    console.log(`Created ${type} (${entry.locale})`);
  }
}

async function main() {
  for (const l of locales) {
    await seedSingleType('home-page', l.home, l.code);
    await seedSingleType('about-us-page', l.about, l.code);
    await seedSingleType('contact', l.contact, l.code);
  }
  await seedCollectionType('news-page', newsEntries);
  await seedCollectionType('blog', blogEntries);
}

main().catch(console.error);
