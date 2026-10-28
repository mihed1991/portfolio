'use strict';

const projects = {
  byvit: {
    title: 'BYVIT', type: 'ИНТЕРНЕТ-МАГАЗИН / КОММЕРЧЕСКИЙ ПРОЕКТ',
    lead: 'Опыт в продажах — в основе логики интернет-магазина спортивного питания.',
    description: ['Бизнес-логика проекта сформирована на основе моего опыта в продажах и понимания потребностей покупателей. Часть компонентов сначала проектировалась в Figma, затем переносилась в код.', 'Интерфейс адаптирован под разные размеры экранов. Все основные сценарии проверялись вручную. Проект развёрнут на VPS с Docker, собственным доменом и HTTPS; подготовлены резервное копирование и безопасное обновление с возможностью отката.'],
    done: ['Адаптивный каталог, поиск и фильтры', 'Корзина, акции, промокоды и блог', 'Собственная административная панель', 'МойСклад: синхронизация цен и остатков', 'Передача заказов и комментариев с защитой от дублирования', 'Развёртывание на VPS, Docker и HTTPS'],
    tech: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'REST API', 'Docker', 'VPS', 'МойСклад'],
    url: 'https://byvit.by/',
    images: [['byvit-hero', 'Главная страница / Desktop', 'wide'], ['byvit-catalog', 'Каталог товаров / Desktop', 'wide'], ['byvit-mobile', 'Главная страница / Mobile', 'mobile'], ['byvit-catalog-mobile', 'Каталог / Mobile', 'mobile'], ['byvit-admin', 'Вход в собственную административную панель', 'wide']]
  },
  steel: {
    title: 'Эра Стали', type: 'САЙТ ДЛЯ ПРОИЗВОДСТВА / КОММЕРЧЕСКИЙ ПРОЕКТ',
    lead: '«Нужен сайт для производства» — от первого запроса до запуска.',
    description: ['Проект реализован с нуля: от идеи и анализа рынка до готового сайта. Я изучил, какую информацию ищут клиенты в этой сфере, и на основе этого выстроил структуру и подачу.', 'Разработка и визуальные материалы создавались с помощью Codex и Google Flow. Подключены заявки через Telegram-бота, выполнены размещение на хостинге, базовая SEO-подготовка и индексация в Google и Яндексе.'],
    done: ['Аналитика рынка и структура сайта', 'Концепция и визуальная подача производства', 'Разработка адаптивного сайта с нуля', 'Подключение Telegram-бота для заявок', 'Запуск на хостинге', 'Базовое SEO и индексация'],
    tech: ['Codex AI', 'Google Flow', 'Адаптивная вёрстка', 'Telegram', 'SEO'], url: 'https://erastali.by/',
    images: [['steel-hero', 'Первый экран / Desktop', 'wide'], ['steel-services', 'Производственные возможности', 'wide'], ['steel-pricing', 'Материалы и стоимость обработки', 'wide'], ['steel-result', 'Подача результата производства / Desktop', 'wide'], ['steel-mobile', 'Адаптивная версия / Mobile', 'mobile'], ['steel-contacts-mobile', 'Контакты и информация о производстве / Mobile', 'mobile']]
  },
  guitar: {
    title: 'Guitar Vibe', type: 'САЙТ ГИТАРНОЙ СТУДИИ / КОММЕРЧЕСКИЙ ПРОЕКТ',
    lead: 'Готовый дизайн в Figma — в работающий инструмент для записи на занятия.',
    description: ['Моя роль — вёрстка по предоставленному макету Figma, реализация работы кнопок и подключение Telegram-бота для получения заявок.', 'Я запустил сайт на хостинге, выполнил базовую SEO-подготовку и индексацию в Google и Яндексе. Дизайн проекта был предоставлен в готовом виде.'],
    done: ['Вёрстка по готовому макету Figma', 'Адаптация интерфейса для мобильных экранов', 'Подключение работы кнопок', 'Telegram-бот для заявок', 'Размещение на хостинге', 'Базовое SEO и индексация'],
    tech: ['Figma / Код', 'Адаптивная вёрстка', 'Telegram', 'SEO'], url: 'https://guitarvibe.by/',
    images: [['guitar-desktop', 'Главная страница / Desktop', 'wide'], ['guitar-mobile', 'Первый экран и форматы занятий / Mobile', 'mobile'], ['guitar-about-mobile', 'О студии и этапы обучения / Mobile', 'mobile']]
  },
  math: {
    title: 'Математика', type: 'ОБРАЗОВАНИЕ / PET-ПРОЕКТ',
    lead: 'Личный эксперимент: сайт о математике с атмосферой анимационного фильма.',
    description: ['Идея — создать сайт в визуальном стиле студии Pixar: с выразительным 3D-персонажем, тёплым светом и дружелюбной подачей сложного предмета.', 'Проект реализован с помощью Codex и Google Flow. Это pet-проект для практики разработки и исследования возможностей AI в создании визуальных материалов.'],
    done: ['Идея и визуальная концепция', 'Работа с AI-визуалами в Google Flow', 'Реализация сайта с помощью Codex', 'Адаптивная версия', 'Размещение на GitHub Pages'],
    tech: ['Codex AI', 'Google Flow', 'Адаптивная вёрстка', 'GitHub Pages'], url: 'https://mihed1991.github.io/math/',
    images: [['math-hero', 'Первый экран / Desktop', 'wide'], ['math-approach', 'Раздел о подходе к обучению', 'wide'], ['math-mobile', 'Частые вопросы / Mobile', 'mobile'], ['math-admin-mobile', 'Вход в панель управления / Mobile', 'mobile']]
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 760px)').addEventListener('change', closeMenu);

const dialog = document.querySelector('.case-dialog');
const content = document.querySelector('#case-content');
let lastProjectButton;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function externalLink(label, url, className) {
  const link = element('a', className, label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `${label} — откроется в новой вкладке`);
  return link;
}
function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  lastProjectButton = trigger;
  content.replaceChildren();
  content.append(element('p', 'case-eyebrow', project.type));
  const title = element('h2', '', project.title);
  title.id = 'case-title';
  content.append(title, element('p', 'case-lead', project.lead));
  const actions = element('div', 'case-actions');
  actions.append(externalLink('Открыть сайт', project.url, 'button button-light'));
  content.append(actions);
  const description = element('div', 'case-description');
  const story = element('div');
  story.append(element('h3', '', 'О проекте и моей роли'));
  project.description.forEach(text => story.append(element('p', '', text)));
  const done = element('div');
  done.append(element('h3', '', 'Что реализовано'));
  const list = element('ul');
  project.done.forEach(text => list.append(element('li', '', text)));
  done.append(list);
  description.append(story, done);
  content.append(description);
  const tech = element('div', 'tags case-tech');
  project.tech.forEach(text => tech.append(element('span', '', text)));
  content.append(tech);
  const gallery = element('div', 'case-gallery');
  project.images.forEach(([name, caption, layout], index) => {
    const figure = element('figure', layout);
    const img = element('img');
    img.src = `assets/${name}.webp`;
    img.alt = `${project.title}: ${caption}`;
    img.loading = index === 0 ? 'eager' : 'lazy';
    figure.append(img, element('figcaption', '', caption));
    gallery.append(figure);
  });
  content.append(gallery);
  const end = element('div', 'case-end');
  end.append(element('p', '', 'Обсудим вашу задачу?'), externalLink('Написать в Telegram', 'https://t.me/mihed_1991', 'button button-light'));
  content.append(end);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.project, button));
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastProjectButton?.focus({ preventScroll: true });
});
