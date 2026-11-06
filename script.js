const scriptUrl = 'https://script.google.com/macros/s/AKfycbyruQuGc7bg2p-0jReJu_7ibFq3AsigTn5cdxvZKHq0mmpCPn9Z9nrUzrZ_zXU8SLOskA/exec';

let stimuli = [{"id": "Acorns 2.jpg", "title_ru": "Желуди"}, {"id": "Alcohol 3.jpg", "title_ru": "Алкоголь"}, {"id": "Ambulance 1.jpg", "title_ru": "Скорая помощь"}, {"id": "Angry pose 2.jpg", "title_ru": "Гневная поза"}, {"id": "Barbeque 1.jpg", "title_ru": "Закуска"}, {"id": "Bear 3.jpg", "title_ru": "Медведь"}, {"id": "Bed 1.jpg", "title_ru": "Кровать"}, {"id": "Bee 1.jpg", "title_ru": "Пчела"}, {"id": "Billiards 1.jpg", "title_ru": "Бильярд"}, {"id": "Bird 3.jpg", "title_ru": "Плывущие утята"}, {"id": "Bloody knife 1.jpg", "title_ru": "Окровавленный нож"}, {"id": "Boxing 2.jpg", "title_ru": "Бокс"}, {"id": "Bricks 1.jpg", "title_ru": "Кирпичи"}, {"id": "Bubble 2.jpg", "title_ru": "Пузырь"}, {"id": "Camping 1.jpg", "title_ru": "Кемпинг"}, {"id": "Candle 1.jpg", "title_ru": "Свеча"}, {"id": "Car race 2.jpg", "title_ru": "Автогонки"}, {"id": "Cat 5.jpg", "title_ru": "Котята"}, {"id": "Collaboration 1.jpg", "title_ru": "Сотрудничество"}, {"id": "Cotton swabs 2.jpg", "title_ru": "Ватные палочки"}, {"id": "Couple 9.jpg", "title_ru": "Влюбленная пара"}, {"id": "Crow 1.jpg", "title_ru": "Ворона"}, {"id": "Dancing 8.jpg", "title_ru": "Танцы"}, {"id": "Depressed face 1.jpg", "title_ru": "Подавленное лицо"}, {"id": "Depressed pose 1.jpg", "title_ru": "Подавленная поза"}, {"id": "Dessert 5.jpg", "title_ru": "Десерт"}, {"id": "Destruction 3.jpg", "title_ru": "Разрушение"}, {"id": "Dirt 3.jpg", "title_ru": "Грязь"}, {"id": "Dock 1.jpg", "title_ru": "Причал"}, {"id": "Dog 26.jpg", "title_ru": "Травмированная собака"}, {"id": "Drink 1.jpg", "title_ru": "Бокал"}, {"id": "Eating 1.jpg", "title_ru": "Прием пищи"}, {"id": "Fire 9.jpg", "title_ru": "Пожар"}, {"id": "Fire hydrant 3.jpg", "title_ru": "Пожарный гидрант"}, {"id": "Fireman 1.jpg", "title_ru": "Пожарный"}, {"id": "Fireworks 7.jpg", "title_ru": "Фейерверк"}, {"id": "Flowers 6.jpg", "title_ru": "Цветы"}, {"id": "Food 4.jpg", "title_ru": "Еда"}, {"id": "Gazing 4.jpg", "title_ru": "Смотрящий вдаль"}, {"id": "Gorrila 1.jpg", "title_ru": "Горилла"}, {"id": "Graveyard 2.jpg", "title_ru": "Кладбище"}, {"id": "Guitar 1.jpg", "title_ru": "Гитарист"}, {"id": "Hang gliding 3.jpg", "title_ru": "Дельтаплан"}, {"id": "Hangover 1.jpg", "title_ru": "Похмелье"}, {"id": "Heart 3.jpg", "title_ru": "Сердце"}, {"id": "Horse 1.jpg", "title_ru": "Лошади"}, {"id": "Horse racing 1.jpg", "title_ru": "Скачки"}, {"id": "Jail 1.jpg", "title_ru": "Тюрьма"}, {"id": "Lake 9.jpg", "title_ru": "Озеро"}, {"id": "Lamb 1.jpg", "title_ru": "Ягненок"}, {"id": "Lightning 1.jpg", "title_ru": "Молния"}, {"id": "Lion 1.jpg", "title_ru": "Лев"}, {"id": "Meerkat 1.jpg", "title_ru": "Сурикат"}, {"id": "Miserable face 1.jpg", "title_ru": "Несчастное лицо"}, {"id": "Miserable pose 3.jpg", "title_ru": "Страдание"}, {"id": "Moon 1.jpg", "title_ru": "Луна"}, {"id": "Motocross 1.jpg", "title_ru": "Мотокросс"}, {"id": "Nature 1.jpg", "title_ru": "Природа"}, {"id": "Neutral face 1.jpg", "title_ru": "Нейтральное лицо"}, {"id": "Neutral pose 3.jpg", "title_ru": "Шагающие люди"}, {"id": "Office supplies 1.jpg", "title_ru": "Канцелярские резинки"}, {"id": "Parachuting 1.jpg", "title_ru": "Парашют"}, {"id": "Parade 1.jpg", "title_ru": "Парад"}, {"id": "Path 1.jpg", "title_ru": "Тропинка"}, {"id": "Plane crash 4.jpg", "title_ru": "Упавший самолет"}, {"id": "Police 1.jpg", "title_ru": "Полиция"}, {"id": "Power lines 1.jpg", "title_ru": "Линии электропередач"}, {"id": "Prison 2.jpg", "title_ru": "Колючая проволка"}, {"id": "Railroad 1.jpg", "title_ru": "Железная дорога"}, {"id": "Road 1.jpg", "title_ru": "Дорога"}, {"id": "Rock climbing 1.jpg", "title_ru": "Скалолазание"}, {"id": "Rollercoaster 3.jpg", "title_ru": "Американские горки"}, {"id": "Roofing 2.jpg", "title_ru": "Крыша"}, {"id": "Rooster 1.jpg", "title_ru": "Петухи"}, {"id": "Rubber duck 1.jpg", "title_ru": "Резиновая уточка"}, {"id": "Running away 1.jpg", "title_ru": "Бегство"}, {"id": "Satellite 1.jpg", "title_ru": "Спутник"}, {"id": "School 5.jpg", "title_ru": "Школа"}, {"id": "Shark 4.jpg", "title_ru": "Акула"}, {"id": "Shooting 1.jpg", "title_ru": "Стрельба"}, {"id": "Siblings 1.jpg", "title_ru": "Брат и сестра"}, {"id": "Skier 1.jpg", "title_ru": "Лыжник"}, {"id": "Skijump 2.jpg", "title_ru": "Лыжный трамплин"}, {"id": "Sky 1.jpg", "title_ru": "Небо"}, {"id": "Socks 1.jpg", "title_ru": "Носки"}, {"id": "Spider 2.jpg", "title_ru": "Паук"}, {"id": "Statue 1.jpg", "title_ru": "Статуя"}, {"id": "Stingray 2.jpg", "title_ru": "Скат"}, {"id": "Storage 2.jpg", "title_ru": "Склад"}, {"id": "Street 4.jpg", "title_ru": "Улица"}, {"id": "Sun 1.jpg", "title_ru": "Солнце"}, {"id": "Sunflower 1.jpg", "title_ru": "Подсолнух"}, {"id": "Thunderstorm 7.jpg", "title_ru": "Гроза"}, {"id": "Tickling 1.jpg", "title_ru": "Щекотка"}, {"id": "Timber 4.jpg", "title_ru": "Дрова"}, {"id": "Tornado 1.jpg", "title_ru": "Торнадо"}, {"id": "Torture chamber 1.jpg", "title_ru": "Камера пыток"}, {"id": "Weapon 1.jpg", "title_ru": "Оружие"}, {"id": "Windmill 1.jpg", "title_ru": "Ветрогенератор"}, {"id": "Yarn 2.jpg", "title_ru": "Нитки"}];

const descriptions = {
    q1: {
        '5': "Максимально узнаваемо и универсально. Объект считывается мгновенно, без когнитивного усилия. Отсутствует какая-либо культурная дистанция.",
        '4': "Скорее узнаваемо. Объект легко распознается и понятен, не требует дополнительных размышлений о том, что именно изображено.",
        '3': "Допустимая специфика. Объект распознается, но может потребовать небольшого осмысления из-за необычного ракурса или редкой категории.",
        '2': "Скорее чужеродно. Объект малознаком, трудно идентифицируется с первого взгляда или специфичен для иной культуры (вызывает вопрос «что это?»).",
        '1': "Полная культурная чужеродность. Объект совершенно непонятен российскому зрителю либо неразрывно связан со спецификой чужой культуры."
    },
    q2: {
        '5': "Идеально чисто. Контекст универсален. Взгляду не за что зацепиться, внимание зрителя полностью сфокусировано на главном объекте.",
        '4': "Скорее чисто. Мелкие специфические маркеры могут присутствовать, но они органично сливаются с фоном и совершенно не отвлекают на себя внимание.",
        '3': "Умеренное отвлечение. Иностранный контекст или необычные детали заметны, но они остаются фоновыми и не перебивают основную эмоцию.",
        '2': "Высокий уровень отвлечения. Специфические детали заставляют переключить фокус внимания с основного стимула на разглядывание окружения.",
        '1': "Ломающий контекст. Иностранные атрибуты полностью забирают внимание на себя. Зритель начинает изучать чужой быт и контекст, а не сам стимул."
    },
    q3: {
        '5': "Абсолютная семантическая однозначность. Изображение воспринимается исключительно буквально. Риск активации побочных культурных или социальных ассоциаций отсутствует.",
        '4': "Высокая однозначность. Изображение выглядит стандартно, вероятность возникновения поп-культурных или эпизодических ассоциаций минимальна.",
        '3': "Допустимая многозначность. Композиция может вызывать индивидуальные ассоциации, но они не являются устойчивым массовым паттерном для выборки.",
        '2': "Низкая однозначность (риск искажения). Изображение структурно схоже с известным визуальным шаблоном, что может запустить побочные когнитивные процессы.",
        '1': "Наличие очевидного семантической неоднозначности. Изображение представляет собой узнаваемый культурный артефакт (мем, отсылка). Реакция будет на контекст."
    }
};

const STORAGE_KEY = 'expertEvalState';
let currentStimulusIndex = 0;
let resultsLog = [];
let userId = 'user_' + Math.random().toString(36).substring(2, 9);
let selectedRole = "";
let isEvaluating = false;

// DOM Элементы
const startScreen = document.getElementById('start-screen');
const workScreen = document.getElementById('work-screen');
const finishScreen = document.getElementById('finish-screen');
const startBtn = document.getElementById('start-btn');
const roleRadios = document.querySelectorAll('input[name="role"]');
const commentBtn = document.getElementById('add-comment-btn');
const commentText = document.getElementById('comment-text');
const rejectBtn = document.getElementById('reject-btn');
const acceptBtn = document.getElementById('accept-btn');
const allRadios = document.querySelectorAll('#work-screen input[type="radio"]');
const roleSelectionBlock = document.getElementById('role-selection-block');
const resumeBlock = document.getElementById('resume-block');
const resumeBtn = document.getElementById('resume-btn');
const resetBtn = document.getElementById('reset-btn');

// ЛОГИКА СОХРАНЕНИЯ ПРОГРЕССА
function saveState() {
    const state = {
        stimuli: stimuli,
        currentStimulusIndex: currentStimulusIndex,
        resultsLog: resultsLog,
        userId: userId,
        selectedRole: selectedRole
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const state = JSON.parse(saved);
        stimuli = state.stimuli;
        currentStimulusIndex = state.currentStimulusIndex;
        resultsLog = state.resultsLog;
        userId = state.userId;
        selectedRole = state.selectedRole;
        return true;
    }
    return false;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Инициализация при загрузке страницы
const hasSavedState = loadState();

if (hasSavedState) {
    roleSelectionBlock.style.display = 'none';
    startBtn.style.display = 'none';
    resumeBlock.style.display = 'block';
    document.getElementById('resume-counter').innerText = currentStimulusIndex + 1;
} else {
    shuffleArray(stimuli);
}

// ПРЕДУПРЕЖДЕНИЕ ПРИ ЗАКРЫТИИ ВКЛАДКИ
window.addEventListener('beforeunload', function (e) {
    if (isEvaluating) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Кнопки стартового экрана
roleRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        selectedRole = e.target.value;
        startBtn.disabled = false;
    });
});

startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    workScreen.classList.add('active');
    isEvaluating = true;
    loadStimulus();
});

// Кнопка ПРОДОЛЖИТЬ
resumeBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    workScreen.classList.add('active');
    isEvaluating = true;
    loadStimulus();
});

// Кнопка НАЧАТЬ ЗАНОВО
resetBtn.addEventListener('click', () => {
    if (confirm("Вы уверены? Это действие навсегда удалит ваш текущий прогресс, и вам придется оценивать все 100 картинок с самого начала.")) {
        localStorage.removeItem(STORAGE_KEY);
        currentStimulusIndex = 0;
        resultsLog = [];
        userId = 'user_' + Math.random().toString(36).substring(2, 9);
        selectedRole = "";
        
        shuffleArray(stimuli);
        
        // Меняем интерфейс обратно на стартовый
        resumeBlock.style.display = 'none';
        roleSelectionBlock.style.display = 'block';
        startBtn.style.display = 'block';
        startBtn.disabled = true;
        roleRadios.forEach(r => r.checked = false);
    }
});

// Загрузка стимула
function loadStimulus() {
    const current = stimuli[currentStimulusIndex];
    document.getElementById('counter').innerText = `Изображение ${currentStimulusIndex + 1} из ${stimuli.length}`;
    document.getElementById('stimulus-img').src = 'images/' + current.id; 
    document.getElementById('stimulus-title').innerText = current.title_ru;

    if (currentStimulusIndex + 1 < stimuli.length) {
        const nextImg = new Image();
        nextImg.src = 'images/' + stimuli[currentStimulusIndex + 1].id;
    }

    allRadios.forEach(r => r.checked = false);
    document.querySelectorAll('.selected-desc').forEach(el => {
        el.style.display = 'none';
        el.innerText = '';
    });
    
    commentText.value = '';
    commentText.style.display = 'none';
    rejectBtn.disabled = true;
    acceptBtn.disabled = true;
}

// Обработка клика по радиокнопкам
allRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const qName = e.target.name; 
        const value = e.target.value;
        
        if (descriptions[qName]) {
            const descBox = document.getElementById(`desc-${qName}`);
            descBox.innerText = `Выбрано ${value}: ${descriptions[qName][value]}`;
            descBox.style.display = 'block';
        }
        
        const q0 = document.querySelector('input[name="q0"]:checked');
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        
        if (q0 && q1 && q2 && q3) {
            rejectBtn.disabled = false;
            acceptBtn.disabled = false;
        }
    });
});

// Поле комментария
commentBtn.addEventListener('click', () => {
    commentText.style.display = commentText.style.display === 'none' ? 'block' : 'none';
    if(commentText.style.display === 'block') commentText.focus();
});

// Сохранение и переход
function submitTrial(verdict) {
    const trialData = {
        id: stimuli[currentStimulusIndex].id,
        роль: selectedRole,
        соответствие_описанию: document.querySelector('input[name="q0"]:checked').value,
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        комментарий: commentText.value,
        вердикт: verdict,
        user_id: userId
    };
    
    resultsLog.push(trialData);
    currentStimulusIndex++;
    
    saveState();
    
    // Отправка данных
    fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trialData)
    }).catch(error => console.error('Ошибка отправки:', error));

    if (currentStimulusIndex < stimuli.length) {
        loadStimulus();
    } else {
        finishExperiment();
    }
}

rejectBtn.addEventListener('click', () => submitTrial('Отбраковать'));
acceptBtn.addEventListener('click', () => submitTrial('В базу'));

// Завершение
function finishExperiment() {
    isEvaluating = false; 
    localStorage.removeItem(STORAGE_KEY); 
    
    workScreen.classList.remove('active');
    finishScreen.classList.add('active');
}
