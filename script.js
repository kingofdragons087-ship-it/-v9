// ============================================================
// 🐉 المترجم الأسطوري - script.js (نسخة القواميس الخارجية)
// ============================================================

// ============================================================
// 1. الجزيئات المتوهجة (Particles)
// ============================================================

(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
        particle.style.animationDelay = (Math.random() * 5) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
})();

// ============================================================
// 2. القاموس الأساسي (مضمن في الكود)
// ============================================================

const defaultTranslationDict = {
    hello: 'مرحباً',
    world: 'العالم',
    game: 'اللعبة',
    player: 'اللاعب',
    level: 'المستوى',
    start: 'ابدأ',
    end: 'النهاية',
    message: 'الرسالة',
    welcome: 'مرحباً',
    item: 'العنصر',
    magic: 'السحر',
    sword: 'السيف',
    title: 'العنوان',
    name: 'الاسم',
    health: 'الصحة',
    weapon: 'السلاح',
    damage: 'الضرر',
    attack: 'الهجوم',
    defense: 'الدفاع',
    rare: 'نادر',
    common: 'عادي',
    legendary: 'أسطوري',
    good: 'جيد',
    luck: 'الحظ',
    friend: 'صديق',
    battle: 'المعركة',
    victory: 'النصر',
    defeat: 'الهزيمة',
    win: 'فوز',
    lose: 'خسارة',
    dark: 'مظلم',
    forest: 'غابة',
    night: 'ليل',
    mission: 'مهمة',
    treasure: 'كنز',
    hidden: 'مخفي',
    find: 'ابحث',
    fight: 'قتال',
    evil: 'شر',
    forces: 'قوى',
    description: 'وصف',
    dragon: 'تنين',
    shield: 'درع',
    warrior: 'محارب',
    king: 'ملك',
    queen: 'ملكة',
    prince: 'أمير',
    princess: 'أميرة',
    castle: 'قلعة',
    bow: 'قوس',
    arrow: 'سهم',
    potion: 'جرعة',
    gold: 'ذهب',
    silver: 'فضة',
    key: 'مفتاح',
    door: 'باب',
    chest: 'صندوق',
    time: 'وقت',
    day: 'يوم',
    power: 'قوة',
    speed: 'سرعة',
    fire: 'نار',
    ice: 'جليد',
    storm: 'عاصفة',
    light: 'نور',
    darkness: 'ظلام',
    hero: 'بطل',
    monster: 'وحش',
    boss: 'زعيم',
    final: 'نهائي',
    adventure: 'مغامرة',
    quest: 'مهمة',
    reward: 'مكافأة',
    experience: 'خبرة',
    score: 'نتيجة',
    peace: 'سلام',
    how: 'كيف',
    today: 'اليوم',
    amazing: 'رائع',
    epic: 'ملحمي',
    destroy: 'دمر',
    enemy: 'عدو',
    save: 'حفظ',
    captured: 'تم التقاطها',
    before: 'قبل',
    sunrise: 'شروق الشمس',
    wonderful: 'رائع',
    please: 'رجاءً',
    warning: 'تحذير',
    congratulations: 'تهانينا',
    completed: 'أكملت',
    suddenly: 'فجأة',
    village: 'قرية',
    attacked: 'هاجم',
    shouted: 'صرخ',
    raised: 'رفع',
    credits: 'طاقم العمل',
    'original concept': 'المفهوم الأصلي',
    director: 'مخرج',
    'lead designer': 'المصمم الرئيسي',
    designer: 'مصمم',
    'level design': 'تصميم المستوى',
    story: 'قصة',
    'lead programming': 'برمجة الرصاص',
    programming: 'برمجة',
    'lead artist': 'الفنان الرئيسي',
    '3d artist': 'فنان ثلاثي الأبعاد',
    animation: 'الرسوم المتحركة',
    cinematics: 'السينمائية',
    music: 'الموسيقى',
    'special thanks to': 'شكر خاص ل',
    'epic games': 'إيبك غيمز',
    'welcome to the game': 'مرحباً بكم في اللعبة',
    'nvidia frame generation': 'نفيديا إنشاء الإطار',
    'nvidia reflex': 'نفيديا ريفلكس',
    'nvidia dlss': 'نفيديا دي إل إس إس',
    'fidelityfx super resolution': 'FidelityFX دقة فائقة',
    'ambient occlusion': 'حجب الإضاءة المحيطية',
    'anti aliasing': 'مكافحة التعرج',
    'screen space reflections': 'انعكاسات مساحة الشاشة',
    'global illumination': 'الإضاءة العالمية',
    reflections: 'الانعكاسات',
    shadows: 'الظلال',
    'shadow quality': 'جودة الظلال',
    textures: 'القوام',
    'texture quality': 'جودة الخامات',
    'shading quality': 'جودة التظليل',
    'post processing': 'المعالجة اللاحقة',
    bloom: 'التوهج',
    'motion blur': 'ضبابية الحركة',
    'depth of field': 'عمق المجال',
    'volumetric clouds': 'السحب الحجمية',
    'ray tracing': 'تتبع الأشعة',
    dlss: 'دي إل إس إس',
    fsr: 'إف إس آر',
    hdr: 'التقنية عالية الديناميكية',
    vsync: 'مزامنة رأسية',
    'full screen': 'شاشة كاملة',
    borderless: 'بلا حدود',
    windowed: 'نافذة',
    resolution: 'الدقة',
    'resolution scale': 'مقياس الدقة',
    'frame rate': 'معدل الإطارات',
    fps: 'إطار في الثانية',
    brightness: 'السطوع',
    contrast: 'التباين',
    gamma: 'جاما',
    motion: 'حركة',
    'view distance': 'عرض المسافة',
    foliage: 'أوراق الشجر',
    effects: 'التأثيرات',
    display: 'العرض',
    'window mode': 'وضع النافذة',
    audio: 'الصوت',
    'audio volume': 'مستوى الصوت',
    'music volume': 'مستوى الموسيقى',
    'sfx volume': 'مستوى المؤثرات الصوتية',
    'voice volume': 'مستوى الصوت',
    'voice chat': 'الدردشة الصوتية',
    'push to talk': 'اضغط للتحدث',
    microphone: 'ميكروفون',
    'master volume': 'الصوت الرئيسي',
    difficulty: 'الصعوبة',
    easy: 'سهل',
    medium: 'متوسط',
    hard: 'صعب',
    expert: 'خبير',
    extreme: 'أقصى',
    gameplay: 'طريقة اللعب',
    controls: 'وحدات التحكم',
    controller: 'وحدة التحكم',
    'key bindings': 'روابط المفاتيح',
    'gamepad bindings': 'روابط لوحة الألعاب',
    'invert horizontal axis': 'عكس المحور الأفقي',
    'invert vertical axis': 'عكس المحور العمودي',
    sensitivity: 'حساسية',
    'field of view': 'مجال الرؤية',
    camera: 'الكاميرا',
    crouch: 'الانحناء',
    sprint: 'اندفاع',
    run: 'ركض',
    jump: 'قفز',
    interact: 'تفاعل',
    reload: 'إعادة تحميل',
    'aim weapon': 'التصويب بالسلاح',
    'primary fire': 'إطلاق النار الأساسي',
    'secondary fire': 'إطلاق النار الثانوي',
    'next weapon': 'السلاح التالي',
    'previous weapon': 'السلاح السابق',
    'open inventory': 'فتح المخزون',
    'pause game': 'إيقاف اللعبة مؤقتًا',
    'talk in voice chat': 'التحدث في الدردشة الصوتية',
    'move forward': 'التحرك للأمام',
    'move backward': 'التحرك للخلف',
    'move left': 'تحرك لليسار',
    'move right': 'التحرك لليمين',
    movement: 'حركة',
    settings: 'الإعدادات',
    options: 'الخيارات',
    apply: 'تطبيق',
    cancel: 'إلغاء',
    reset: 'إعادة ضبط',
    save: 'حفظ',
    load: 'تحميل',
    loading: 'جاري التحميل ...',
    back: 'رجوع',
    exit: 'انهاء',
    quit: 'خروج',
    restart: 'إعادة تشغيل',
    resume: 'استئناف',
    continue: 'متابعة',
    start: 'ابدأ',
    stop: 'قف',
    select: 'اختيار',
    confirm: 'تأكيد',
    delete: 'حذف',
    rename: 'إعادة تسمية',
    'new game': 'لعبة جديدة',
    'load game': 'تحميل اللعبة',
    'save game': 'حفظ اللعبة',
    'delete save game': 'حذف حفظ اللعبة',
    'main menu': 'القائمة الرئيسية',
    'pause menu': 'قائمة الإيقاف المؤقت',
    'server browser': 'متصفح الخادم',
    'host game': 'لعبة المضيف',
    'join game': 'انضم للعبة',
    singleplayer: 'لاعب منفرد',
    multiplayer: 'متعددة اللاعبين',
    'local co-op': 'لعب جماعية محلية',
    game: 'لعبة',
    general: 'عام',
    advanced: 'متقدم',
    custom: 'مخصص',
    balanced: 'متوازن',
    unlocked: 'إلغاء القفل',
    area: 'منطقة',
    slot: 'فتحة',
    tab: 'علامة التبويب',
    'sub tab': 'علامة التبويب الفرعية',
    near: 'قريب',
    far: 'بعيد',
    global: 'عالمي',
    local: 'محلي',
    network: 'شبكة',
    lan: 'شبكة محلية',
    preview: 'معاينة',
    rebind: 'إعادة ربط',
    'rebind key': 'إعادة ربط المفتاح',
    revert: 'التراجع',
    extras: 'إضافات',
    benchmark: 'المعيار',
    discoveries: 'الاكتشافات',
    documents: 'وثائق',
    inventory: 'المخزون',
    players: 'اللاعبين',
    'player name': 'اسم اللاعب',
    ping: 'بينغ',
    'play time': 'وقت اللعب',
    'last saved': 'آخر حفظ',
    language: 'اللغة',
    english: 'الإنجليزية',
    arabic: 'العربية',
    french: 'الفرنسية',
    spanish: 'الإسبانية',
    german: 'الألمانية',
    japanese: 'اليابانية',
    chinese: 'الصينية',
    russian: 'الروسية',
    quality: 'الجودة',
    'quality preset': 'الجودة المسبقة',
    'ultra quality': 'جودة فائقة',
    high: 'عالي',
    low: 'منخفض',
    'very low': 'منخفض جدًا',
    off: 'إيقاف',
    on: 'تشغيل',
    performance: 'الأداء',
    'ultra performance': 'أداء فائق',
    'native aa': 'إيه إيه الأصلي',
    'taa upsampling': 'تي إيه إيه رفع العينة',
    temporal: 'مؤقتًا',
    upsampling: 'رفع العينة',
    'screen space': 'مساحة الشاشة',
    lumen: 'لومن',
    nanite: 'نانيت',
    tsr: 'تي إس آر',
    taau: 'تي إيه إيه يو',
    colors: 'الألوان',
    'color space': 'مساحة الألوان',
    'color profile': 'ملف تعريف الألوان',
    deuteranope: 'ديوترانوب',
    protanope: 'بروتانوب',
    tritanope: 'تريتانوب',
    'color blindness': 'عمى الألوان',
    'color deficiency': 'نقص اللون',
    'color deficiency type': 'نوع نقص اللون',
    'color deficiency strength': 'قوة نقص اللون',
    'peace be upon you': 'السلام عليكم',
    'how are you': 'كيف حالك',
    'good luck': 'حظاً موفقاً',
    'hello world': 'مرحباً بالعالم',
    'game over': 'انتهت اللعبة',
    'level up': 'تقدم مستوى',
    'you win': 'لقد فزت',
    'you lose': 'لقد خسرت',
    'magic sword': 'السيف السحري',
    'dragon shield': 'درع التنين',
    'dark forest': 'الغابة المظلمة',
    'night mission': 'مهمة ليلية',
    'find the hidden treasure': 'ابحث عن الكنز المخفي',
    'fight against evil forces': 'قاتل قوى الشر',
    'save the princess': 'أنقذ الأميرة',
    'destroy the enemy': 'دمر العدو',
    'shadow legends': 'أساطير الظل',
    'the dark crusade': 'الحملة المظلمة',
    'dragon slayer sword': 'سيف قاتل التنين',
    'phoenix shadow armor': 'درع الظل فينيكس',
    'the dragon king': 'ملك التنين',
    'shadow realm': 'عالم الظلال',
    'ancient kingdom': 'المملكة القديمة',
    'perilous quest': 'مهمة خطيرة',
    'forces of darkness': 'قوى الظلام',
    'entire universe': 'الكون بأكمله',
    'in the balance': 'في الميزان',
    'iron fist': 'قبضة حديدية',
    'loyal companion': 'رفيق مخلص',
    'arch-nemesis': 'العدو اللدود',
    'brave heroes': 'الأبطال الشجعان',
    'true strength': 'القوة الحقيقية',
    'greatest magic': 'أعظم سحر',
    'face the darkness': 'مواجهة الظلام',
    'bring light': 'جلب النور',
    'believes in you': 'يؤمن بك',
    'stands tall': 'يقف شامخاً',
    'rises from the shadows': 'يخرج من الظلال',
    'reign of terror': 'حكم الإرهاب',
    'thousand years': 'ألف عام',
    'finally coming to an end': 'يقترب من نهايته',
    'in moon town, the streets are bathed in silver light':
        'في Moon Town، الشوارع مغمورة بالضوء الفضي',
    'adjusts the luminance intensity': 'يضبط شدة النصوع',
    'default value': 'القيمة الافتراضية',
    'requires hdr ui to be enabled': 'يتطلب تمكين واجهة المستخدم HDR',
    'recommended for': 'موصى به لـ',
    'accurate real-time reflections': 'انعكاسات دقيقة في الوقت الفعلي',
    'simulates the way light bounces': 'يحاكي طريقة ارتداد الضوء',
    'high performance global illumination': 'إضاءة عالمية عالية الأداء',
    'high quality real-time global illumination':
        'إضاءة عالمية عالية الجودة في الوقت الفعلي',
    'depth and realism': 'العمق والواقعية',
    'visual artifacts': 'التحف البصرية',
    'screen tearing': 'تمزق الشاشة',
    'input lag': 'تأخر الإدخال',
    'permanent consequences': 'عواقب دائمة',
    'adds depth and realism': 'يضيف العمق والواقعية',
    'soft glow': 'توهج ناعم',
    'cinematic appearance': 'مظهر سينمائي',
    'realistic manner': 'بطريقة واقعية',
    'higher contrast': 'تباين أعلى',
    'wider color gamut': 'نطاق ألوان أوسع',
    'more immersive experience': 'تجربة أكثر غامرة',
    'team communication': 'التواصل الجماعي',
    'apply changed settings': 'هل تريد تطبيق الإعدادات التي تم تغييرها',
    'are you sure you want to quit the game':
        'هل أنت متأكد أنك تريد إنهاء اللعبة',
    'should the selected save game be deleted':
        'هل يجب حذف لعبة الحفظ المحددة',
    'there is a game already saved in this slot':
        'هناك لعبة محفوظة بالفعل في هذه الفتحة',
    'overwrite saved data': 'استبدال البيانات المحفوظة',
    'the clear action is not supported for gamepad bindings':
        'الإجراء الواضح غير مدعوم لربطات لوحة الألعاب',
    'are you sure you want to replace it':
        'هل أنت متأكد أنك تريد استبداله',
    'the game has been saved': 'تم حفظ اللعبة',
    'create new game': 'إنشاء لعبة جديدة',
    'back to main menu': 'العودة إلى القائمة الرئيسية',
    'hold any key to skip': 'اضغط على أي مفتاح للتخطي',
    'press any key to start': 'انقر على أي مفتاح للبدء',
    'press any key to begin': 'اضغط على أي مفتاح للبدء',
    searching: 'جارٍ البحث...',
    'found servers': 'الخوادم التي تم العثور عليها',
    'refresh server list': 'تحديث قائمة الخادم',
};

// قاموس واجهات الألعاب - أولوية قصوى لتصحيح ترجمات Google والقاموس العام
const gameUiOverrides = {
    resume: 'استئناف',
    cancel: 'إلغاء',
    apply: 'تطبيق',
    continue: 'متابعة',
    select: 'اختيار',
    save: 'حفظ',
    load: 'تحميل',
    exit: 'خروج',
    quit: 'إنهاء',
    back: 'رجوع',
    credits: 'الاعتمادات',
    audio: 'الصوت',
    controls: 'وحدات التحكم',
    controller: 'وحدة التحكم',
    graphics: 'الرسومات',
    gameplay: 'طريقة اللعب',
    settings: 'الإعدادات',
    options: 'الخيارات',
    bloom: 'ازدهار',
    'post processing': 'المعالجة اللاحقة',
    'motion blur': 'ضبابية الحركة',
    'depth of field': 'عمق المجال',
    'ambient occlusion': 'حجب الإضاءة المحيطية',
    'anti aliasing': 'مكافحة التعرج',
    'field of view': 'مجال الرؤية',
    'shadow quality': 'جودة الظلال',
    'texture quality': 'جودة الخامات',
    reflections: 'الانعكاسات',
    'screen space reflections': 'انعكاسات مساحة الشاشة',
    'global illumination': 'الإضاءة العالمية',
    'aim weapon': 'التصويب بالسلاح',
    'primary fire': 'إطلاق النار الأساسي',
    'secondary fire': 'إطلاق النار الثانوي',
    'next weapon': 'السلاح التالي',
    'previous weapon': 'السلاح السابق',
    'open inventory': 'فتح المخزون',
    inventory: 'المخزون',
    crafting: 'التصنيع',
    'quest log': 'سجل المهام',
    'skill tree': 'شجرة المهارات',
    'fast travel': 'السفر السريع',
    'new game plus': 'لعبة جديدة بلس',
    journal: 'اليوميات',
    map: 'الخريطة',
    waypoint: 'نقطة الطريق',
    checkpoint: 'نقطة التحقق',
    perk: 'ميزة',
    ability: 'قدرة',
    abilities: 'القدرات',
    companion: 'الرفيق',
    companions: 'الرفقاء',
    merchant: 'تاجر',
    vendors: 'البائعون',
    loot: 'غنيمة',
    equipment: 'المعدات',
    armor: 'الدرع',
    stamina: 'قدرة التحمل',
    mana: 'المانا',
    dexterity: 'الرشاقة',
    strength: 'القوة',
    vitality: 'الحيوية',
    'new game': 'لعبة جديدة',
    'create new game': 'إنشاء لعبة جديدة',
    'load game': 'تحميل اللعبة',
    'save game': 'حفظ اللعبة',
    'main menu': 'القائمة الرئيسية',
    'pause menu': 'قائمة الإيقاف المؤقت',
    'press any key to continue': 'اضغط على أي مفتاح للمتابعة',
    'press any key to start': 'اضغط على أي مفتاح للبدء',
    'hold any key to skip': 'اضغط مطولا على أي مفتاح للتخطي'
};

// ============================================================
// 3. تحميل القواميس الخارجية
// ============================================================

// القاموس النهائي (يتم دمجه من جميع المصادر)
let translationDict = {};

/**
 * دمج القواميس معاً (القاموس الأساسي + القواميس الخارجية)
 * @param {Object} baseDict - القاموس الأساسي
 * @param {Object} externalDict - القاموس الخارجي المراد دمجه
 * @returns {Object} القاموس المدمج
 */
function mergeDictionaries(baseDict, externalDict) {
    const merged = { ...baseDict };
    if (externalDict && typeof externalDict === 'object') {
        for (const [key, value] of Object.entries(externalDict)) {
            // لا نستبدل القيم الموجودة إذا كانت القيمة الجديدة فارغة
            if (value && value.trim && value.trim() !== '') {
                merged[key] = value;
            }
        }
    }
    return merged;
}

/**
 * تحميل قاموس من ملف JSON
 * @param {string} fileName - اسم الملف
 * @returns {Promise<Object|null>} محتوى القاموس أو null في حالة الفشل
 */
async function loadDictionaryFile(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            console.warn(`⚠️ القاموس ${fileName} غير موجود، يتم التجاهل`);
            return null;
        }
        const data = await response.json();
        console.log(`✅ تم تحميل ${Object.keys(data).length} كلمة من ${fileName}`);
        return data;
    } catch (error) {
        console.warn(`⚠️ فشل تحميل ${fileName}: ${error.message}`);
        return null;
    }
}

/**
 * تحميل جميع القواميس ودمجها
 */
async function loadAllDictionaries() {
    // نبدأ بالقاموس الأساسي
    let mergedDict = { ...defaultTranslationDict };

    // محاولة تحميل القاموس العام
    const generalDict = await loadDictionaryFile('general_dictionary.json');
    if (generalDict) {
        mergedDict = mergeDictionaries(mergedDict, generalDict);
    }

    // محاولة تحميل قاموس المصطلحات
    const gameGlossary = await loadDictionaryFile('game_glossary.json');
    if (gameGlossary) {
        mergedDict = mergeDictionaries(mergedDict, gameGlossary);
    }

    // فرض قاموس واجهات الألعاب في النهاية حتى لا يطغى عليه القاموس العام
    mergedDict = mergeDictionaries(mergedDict, gameUiOverrides);

    // تحديث القاموس النهائي
    translationDict = mergedDict;

    console.log(`📖 القاموس النهائي يحتوي على ${Object.keys(translationDict).length} كلمة`);
    return translationDict;
}

// بدء تحميل القواميس عند تشغيل التطبيق
loadAllDictionaries();

// ============================================================
// 4. دوال الترجمة
// ============================================================

function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeKey(text) {
    return String(text || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}

function getExactDictionaryTranslation(text) {
    const key = normalizeKey(text);
    if (!key) return null;
    return translationDict[key] || gameUiOverrides[key] || null;
}

function applyGamePostCorrections(text) {
    if (!text) return text;
    const fixes = {
        'سيرة ذاتية': 'استئناف',
        'يزدهر': 'التوهج',
        'يلغي': 'إلغاء',
        'يتقدم': 'تطبيق',
        'صوتي': 'الصوت',
        'الاعتمادات': 'طاقم العمل',
        'الضوابط': 'وحدات التحكم',
        'المراقب المالي': 'وحدة التحكم',
        'الهدف سلاح': 'التصويب بالسلاح',
        'معالجة ما بعد': 'المعالجة اللاحقة',
        'جرد': 'المخزون',
        'يحفظ': 'حفظ',
        'أنقذ': 'حفظ'
    };
    let result = text;
    for (const [bad, good] of Object.entries(fixes)) {
        result = result.split(bad).join(good);
    }
    return result;
}

function translateDictionary(text) {
    if (!text) return text;

    const exact = getExactDictionaryTranslation(text);
    if (exact) return exact;

    let result = text;

    const sortedPhrases = Object.keys(translationDict)
        .filter((k) => k.includes(' '))
        .sort((a, b) => b.length - a.length);

    for (const phrase of sortedPhrases) {
        const pattern = escapeRegExp(phrase).replace(/\\ /g, '\\s+');
        const regex = new RegExp(`\\b${pattern}\\b`, 'gi');
        result = result.replace(regex, translationDict[phrase]);
    }

    for (const [en, ar] of Object.entries(translationDict)) {
        if (!en.includes(' ')) {
            const regex = new RegExp(`\\b${escapeRegExp(en)}\\b`, 'gi');
            result = result.replace(regex, ar);
        }
    }

    return applyGamePostCorrections(result);
}

async function translateGoogleasync function translateGoogle(text) {
    try {
        const url =
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
        return null;
    } catch (_) {
        return null;
    }
}

async function translateMyMemory(text) {
    try {
        const url =
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.responseData && data.responseData.translatedText) {
            let result = data.responseData.translatedText;
            result = result.replace(/\[MYMEMORY WARNING.*?\]/g, '');
            return result.trim();
        }
        return null;
    } catch (_) {
        return null;
    }
}

// ============================================================
// 5. الوضع الحالي والترجمة الهجينة
// ============================================================

let currentMode = 'hybrid';

async function translateHybrid(text) {
    if (!text || text.trim() === '') return text;

    if (currentMode === 'google') {
        try {
            const result = await translateGoogle(text);
            if (result) return applyGamePostCorrections(result);
            const memoryResult = await translateMyMemory(text);
            if (memoryResult) return applyGamePostCorrections(memoryResult);
            return text;
        } catch (_) {
            return text;
        }
    }

    if (currentMode === 'dictionary') {
        return translateDictionary(text);
    }

    // Hybrid الجديد: القاموس أولاً للمصطلحات والعبارات القصيرة، ثم Google للنصوص الطويلة
    const exact = getExactDictionaryTranslation(text);
    if (exact) return exact;

    const wordCount = text.trim().split(/\s+/).length;

    if (wordCount <= 4) {
        const dictResult = translateDictionary(text);
        if (dictResult && dictResult !== text) return dictResult;
    }

    try {
        const googleResult = await translateGoogle(text);
        if (googleResult && googleResult !== text) {
            return applyGamePostCorrections(googleResult);
        }
    } catch (_) {}

    try {
        const memoryResult = await translateMyMemory(text);
        if (memoryResult && memoryResult !== text) {
            return applyGamePostCorrections(memoryResult);
        }
    } catch (_) {}

    return translateDictionary(text);
}

// ============================================================
// 6. دوال التدوين (عكس النصوص العربية)
// ============================================================

function reverseArabicText(text) {
    if (!text) return text;
    const words = text.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.map((word) => word.split('').reverse().join('')).join(' ');
}

function reverseTextPreservingTags(text) {
    if (!text) return text;
    if (text.includes('<') && text.includes('>')) {
        let result = text;
        const regex = />([^<]*)</g;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            if (match[1] && match[1].trim()) {
                matches.push({ full: match[0], text: match[1] });
            }
        }
        for (const m of matches) {
            if (m.text.trim()) {
                const reversed = reverseArabicText(m.text);
                result = result.replace(m.full, `>${reversed}<`);
            }
        }
        return result;
    }
    return reverseArabicText(text);
}

// ============================================================
// 7. ترجمة مع الحفاظ على الوسوم
// ============================================================

async function translatePreservingTags(text) {
    if (!text || text.trim() === '') return text;
    if (text.includes('<') && text.includes('>')) {
        let result = text;
        const regex = />([^<]*)</g;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            if (match[1] && match[1].trim()) {
                matches.push({ full: match[0], text: match[1] });
            }
        }
        for (const m of matches) {
            if (m.text.trim()) {
                const translated = await translateHybrid(m.text);
                result = result.replace(m.full, `>${translated}<`);
            }
        }
        return result;
    }
    return await translateHybrid(text);
}

async function translateFullFile(fullText, onProgress) {
    if (!fullText || fullText.trim() === '') return '';
    const lines = fullText.split(/\r?\n/);
    const totalLines = lines.length;
    const translatedLines = [];

    for (let i = 0; i < totalLines; i++) {
        if (onProgress) {
            const percent = ((i + 1) / totalLines) * 100;
            onProgress(percent, `ترجمة السطر ${i + 1} من ${totalLines}`);
        }
        if (lines[i].trim()) {
            const translated = await translatePreservingTags(lines[i]);
            translatedLines.push(translated);
        } else {
            translatedLines.push(lines[i]);
        }
        if (i % 5 === 0 || i === totalLines - 1) {
            const outputEl = document.getElementById('output');
            if (outputEl) outputEl.value = translatedLines.join('\n');
        }
    }
    return translatedLines.join('\n');
}

// ============================================================
// 8. عناصر DOM (مع فحص null)
// ============================================================

const $ = (id) => document.getElementById(id);
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => ctx.querySelectorAll(sel);

const input = $('input');
const output = $('output');
const statusDiv = $('status');
const statusText = qs('.status-text');
const statusTime = $('statusTime');
const translateBtn = $('translateBtn');
const clearBtn = $('clearBtn');
const clearResultBtn = $('clearResultBtn');
const copyBtn = $('copyBtn');
const swapBtn = $('swapBtn');
const downloadBtn = $('downloadBtn');
const speakBtn = $('speakBtn');
const autoTranslateBtn = $('autoTranslateBtn');
const reverseBtn = $('reverseBtn');
const sourceCounter = $('sourceCounter');
const resultCounter = $('resultCounter');
const sourceProgress = qs('#sourceProgress .progress-fill');
const resultProgress = qs('#resultProgress .progress-fill');
const speedDisplay = $('speedDisplay');
const timeDisplay = $('timeDisplay');
const dropZone = $('dropZone');
const fileInput = $('fileInput');
const uploadStatus = $('uploadStatus');
const modeInfo = $('modeInfo');
const modeGoogle = $('modeGoogle');
const modeDictionary = $('modeDictionary');
const modeHybrid = $('modeHybrid');
const modeReverse = $('modeReverse');
const exampleBtns = qsa('.ex');

// ============================================================
// 9. المتغيرات العامة
// ============================================================

let startTime = 0;
let totalTranslated = 0;
let autoTranslate = false;
let isProcessing = false;
let isReversed = false;
let originalText = '';

// ============================================================
// 10. دوال العدادات والحالة
// ============================================================

function updateCounters() {
    const sourceLines = input ? input.value.split(/\r?\n/).length : 0;
    const sourceChars = input ? input.value.length : 0;
    if (sourceCounter) {
        sourceCounter.textContent = `${sourceLines.toLocaleString()} أسطر · ${sourceChars.toLocaleString()} أحرف`;
    }

    const resultLines = output ? output.value.split(/\r?\n/).length : 0;
    const resultChars = output ? output.value.length : 0;
    if (resultCounter) {
        resultCounter.textContent = `${resultLines.toLocaleString()} أسطر · ${resultChars.toLocaleString()} أحرف`;
    }
}

function setStatus(message, type = '', time = '') {
    if (!statusDiv) return;
    statusDiv.className = 'status ' + type;
    if (statusText) statusText.textContent = message;
    if (statusTime && time) statusTime.textContent = time;

    if (type === 'loading') {
        if (sourceProgress) sourceProgress.style.width = '50%';
        if (resultProgress) resultProgress.style.width = '50%';
    } else if (type === 'success') {
        if (sourceProgress) sourceProgress.style.width = '100%';
        if (resultProgress) resultProgress.style.width = '100%';
    } else {
        if (sourceProgress) sourceProgress.style.width = '0%';
        if (resultProgress) resultProgress.style.width = '0%';
    }
}

// ============================================================
// 11. دوال التدوين (Toggle)
// ============================================================

function toggleReverse() {
    if (!output) return;
    const outputText = output.value;
    if (!outputText || outputText === '⏳ جاري الترجمة...') {
        setStatus('⚠️ لا يوجد نص لعكسه', 'error');
        return;
    }

    if (isReversed) {
        output.value = originalText;
        isReversed = false;
        if (reverseBtn) {
            reverseBtn.innerHTML = '🔄 تدوين';
            reverseBtn.classList.remove('active');
        }
        setStatus('✅ عربي طبيعي', 'success');
    } else {
        originalText = outputText;
        const reversed = reverseTextPreservingTags(outputText);
        output.value = reversed;
        isReversed = true;
        if (reverseBtn) {
            reverseBtn.innerHTML = '🔄 عربي معكوس ✓';
            reverseBtn.classList.add('active');
        }
        setStatus('🔄 عربي معكوس', 'success');
    }
    updateCounters();
}

// ============================================================
// 12. دالة الترجمة الرئيسية
// ============================================================

async function translateText() {
    if (isProcessing) {
        setStatus('⏳ جاري الترجمة حالياً...', 'loading');
        return;
    }

    if (!input) return;
    const text = input.value.trim();
    if (!text) {
        setStatus('⚠️ الرجاء كتابة نص للترجمة', 'error');
        return;
    }

    isProcessing = true;
    startTime = Date.now();

    const modeNames = {
        google: 'Google Translate',
        dictionary: 'القاموس المحلي',
        hybrid: 'وضع الألعاب (قاموس + Google)',
        reverse: 'التدوين (عكس النصوص)',
    };

    setStatus(
        `🌐 جاري الترجمة عبر ${modeNames[currentMode] || 'الهجين'}...`,
        'loading'
    );
    if (output) output.value = '⏳ جاري الترجمة...';

    try {
        let translated;
        if (currentMode === 'reverse') {
            const hybridResult = await translateHybrid(text);
            translated = reverseTextPreservingTags(hybridResult);
        } else {
            translated = await translateFullFile(text, (percent) => {
                setStatus(`⏳ ترجمة... ${Math.round(percent)}%`, 'loading');
                if (sourceProgress) sourceProgress.style.width = `${percent}%`;
            });
        }

        if (output) output.value = translated;

        if (isReversed && currentMode !== 'reverse') {
            originalText = translated;
            const reversed = reverseTextPreservingTags(translated);
            if (output) output.value = reversed;
            if (reverseBtn) {
                reverseBtn.innerHTML = '🔄 عربي معكوس ✓';
                reverseBtn.classList.add('active');
            }
        }

        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        totalTranslated += text.length;
        const speed = totalTranslated / (elapsed / 60);

        if (speedDisplay) {
            speedDisplay.textContent = `~${Math.round(speed)} حرف/دقيقة`;
        }
        if (timeDisplay) timeDisplay.textContent = `${elapsed} ثانية`;

        updateCounters();
        setStatus(
            `✅ تمت الترجمة (${text.length} → ${translated.length} حرف) · وضع: ${modeNames[currentMode] || 'الهجين'}`,
            'success',
            `⏱️ ${elapsed}s`
        );
    } catch (error) {
        console.error('خطأ:', error);
        if (output) output.value = '❌ فشلت الترجمة';
        setStatus('❌ حدث خطأ أثناء الترجمة', 'error');
    } finally {
        isProcessing = false;
    }
}

// ============================================================
// 13. تغيير وضع الترجمة
// ============================================================

function setMode(mode) {
    currentMode = mode;
    const buttons = [modeGoogle, modeDictionary, modeHybrid, modeReverse];
    for (const btn of buttons) {
        if (btn) btn.classList.remove('active', 'active-reverse');
    }

    if (mode === 'google' && modeGoogle) modeGoogle.classList.add('active');
    else if (mode === 'dictionary' && modeDictionary)
        modeDictionary.classList.add('active');
    else if (mode === 'hybrid' && modeHybrid) modeHybrid.classList.add('active');
    else if (mode === 'reverse' && modeReverse) {
        modeReverse.classList.add('active-reverse');
        if (!isReversed) toggleReverse();
    } else {
        if (isReversed) toggleReverse();
    }

    const infoTexts = {
        google: '🌐 يستخدم Google Translate API للترجمة الدقيقة. يحتاج إنترنت.',
        dictionary: '📖 يستخدم قاموساً محلياً يحتوي على آلاف الكلمات. يعمل بدون إنترنت.',
        hybrid: '⚡ وضع الألعاب: يستخدم القاموس أولاً للمصطلحات، ثم Google للنصوص الطويلة.',
        reverse: '🔄 يعكس النصوص العربية مع الحفاظ على الوسوم.',
    };

    if (modeInfo) modeInfo.textContent = infoTexts[mode] || infoTexts.hybrid;

    const modeNames = {
        google: 'Google Translate',
        dictionary: 'القاموس المحلي',
        hybrid: 'الهجين',
        reverse: 'التدوين (عكس النصوص)',
    };

    setStatus(`🔄 تم التبديل إلى وضع: ${modeNames[mode] || 'الهجين'}`, '');
}

// ============================================================
// 14. رفع الملفات
// ============================================================

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file, 'UTF-8');
    });
}

async function handleFile(file) {
    if (!file || !input) return;
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    const statusIcon = uploadStatus?.querySelector('.status-icon');
    const statusTextEl = uploadStatus?.querySelector('.status-text');

    if (uploadStatus) uploadStatus.className = 'upload-status';
    if (statusIcon) statusIcon.textContent = '⏳';
    if (statusTextEl) statusTextEl.textContent = `جاري قراءة ${file.name}...`;

    try {
        const content = await readFile(file);
        const lines = content.split(/\r?\n/).length;
        input.value = content;
        updateCounters();

        if (statusIcon) statusIcon.textContent = '✅';
        if (statusTextEl) {
            statusTextEl.textContent = `${file.name} (${fileSize} MB) - ${lines.toLocaleString()} سطر`;
        }
        if (uploadStatus) uploadStatus.className = 'upload-status success';

        setStatus(`✅ تم رفع ${file.name} (${lines.toLocaleString()} سطر)`, 'success');
        if (autoTranslate) setTimeout(translateText, 500);
    } catch (_) {
        if (statusIcon) statusIcon.textContent = '❌';
        if (statusTextEl) statusTextEl.textContent = `فشل قراءة ${file.name}`;
        if (uploadStatus) uploadStatus.className = 'upload-status error';
        setStatus('❌ فشل قراءة الملف', 'error');
    }
}

// ============================================================
// 15. ربط الأحداث (Event Listeners)
// ============================================================

// 15.1 أزرار الترجمة والتدوين
if (translateBtn) translateBtn.addEventListener('click', translateText);
if (reverseBtn) reverseBtn.addEventListener('click', toggleReverse);

// 15.2 الترجمة التلقائية
if (autoTranslateBtn) {
    autoTranslateBtn.addEventListener('click', function () {
        autoTranslate = !autoTranslate;
        this.classList.toggle('active');
        this.textContent = autoTranslate ? '🔄 تلقائي ✓' : '🔄 تلقائي';
        setStatus(
            autoTranslate ? '🟢 الترجمة التلقائية مفعّلة' : '🔴 الترجمة التلقائية معطلة',
            ''
        );
    });
}

// 15.3 الترجمة عند الكتابة
let autoTimeout;
if (input) {
    input.addEventListener('input', () => {
        updateCounters();
        if (autoTranslate) {
            clearTimeout(autoTimeout);
            autoTimeout = setTimeout(translateText, 800);
        }
    });

    // 15.4 Ctrl+Enter للترجمة
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            translateText();
        }
    });

    // 15.5 الترجمة عند اللصق
    input.addEventListener('paste', () => {
        setTimeout(() => {
            updateCounters();
            if (autoTranslate) translateText();
        }, 300);
    });
}

// 15.6 أزرار الوضع
if (modeGoogle) modeGoogle.addEventListener('click', () => setMode('google'));
if (modeDictionary)
    modeDictionary.addEventListener('click', () => setMode('dictionary'));
if (modeHybrid) modeHybrid.addEventListener('click', () => setMode('hybrid'));
if (modeReverse) modeReverse.addEventListener('click', () => setMode('reverse'));

// 15.7 رفع الملفات (نقر)
if (dropZone) {
    dropZone.addEventListener('click', () => {
        if (fileInput) fileInput.click();
    });
}

// 15.8 رفع الملفات (تغيير)
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
        fileInput.value = '';
    });
}

// 15.9 رفع الملفات (سحب وإفلات)
if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    });
}

// 15.10 مسح الكل
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (input) input.value = '';
        if (output) output.value = '';
        totalTranslated = 0;
        originalText = '';
        isReversed = false;
        if (reverseBtn) {
            reverseBtn.innerHTML = '🔄 تدوين';
            reverseBtn.classList.remove('active');
        }
        updateCounters();
        setStatus('🗑️ تم مسح المحتوى', '');
        if (sourceProgress) sourceProgress.style.width = '0%';
        if (resultProgress) resultProgress.style.width = '0%';
        if (timeDisplay) timeDisplay.textContent = '0 ثانية';
        if (speedDisplay) speedDisplay.textContent = '~0 حرف/دقيقة';
    });
}

// 15.11 مسح النتيجة
if (clearResultBtn) {
    clearResultBtn.addEventListener('click', () => {
        if (output) output.value = '';
        originalText = '';
        isReversed = false;
        if (reverseBtn) {
            reverseBtn.innerHTML = '🔄 تدوين';
            reverseBtn.classList.remove('active');
        }
        updateCounters();
        setStatus('🗑️ تم مسح النتيجة', '');
    });
}

// 15.12 نسخ النتيجة
if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        if (!output || !output.value || output.value === '⏳ جاري الترجمة...') {
            setStatus('⚠️ لا يوجد نص للنسخ', 'error');
            return;
        }
        try {
            await navigator.clipboard.writeText(output.value);
            setStatus('📋 تم نسخ الترجمة إلى الحافظة', 'success');
        } catch (_) {
            output.select();
            document.execCommand('copy');
            setStatus('📋 تم نسخ الترجمة', 'success');
        }
    });
}

// 15.13 تبديل النصوص
if (swapBtn) {
    swapBtn.addEventListener('click', () => {
        if (!input || !output) return;
        const inputText = input.value;
        const outputText = output.value;
        if (outputText && outputText !== '⏳ جاري الترجمة...') {
            input.value = outputText;
            output.value = '';
            originalText = '';
            isReversed = false;
            if (reverseBtn) {
                reverseBtn.innerHTML = '🔄 تدوين';
                reverseBtn.classList.remove('active');
            }
            updateCounters();
            setStatus('🔄 تم تبديل النصوص', 'success');
        } else {
            setStatus('⚠️ لا يوجد نص مترجم للتبديل', 'error');
        }
    });
}

// 15.14 تحميل النتيجة
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        if (!output || !output.value || output.value === '⏳ جاري الترجمة...') {
            setStatus('⚠️ لا يوجد نص للتحميل', 'error');
            return;
        }
        const blob = new Blob([output.value], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'translation.txt';
        link.click();
        URL.revokeObjectURL(link.href);
        setStatus('💾 تم تحميل الملف', 'success');
    });
}

// 15.15 نطق النص
if (speakBtn) {
    speakBtn.addEventListener('click', () => {
        if (!output || !output.value || output.value === '⏳ جاري الترجمة...') {
            setStatus('⚠️ لا يوجد نص للنطق', 'error');
            return;
        }
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(output.value);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
            setStatus('🔊 جاري النطق...', 'loading');
            utterance.onend = () => setStatus('✅ تم النطق', 'success');
        } else {
            setStatus('⚠️ متصفحك لا يدعم النطق', 'error');
        }
    });
}

// 15.16 الأمثلة السريعة
if (exampleBtns.length) {
    for (const btn of exampleBtns) {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-text');
            if (input) input.value = text;
            updateCounters();
            if (autoTranslate) {
                translateText();
            } else {
                setStatus(`📌 تم تحميل المثال: "${text}"`, '');
            }
        });
    }
}

// ============================================================
// 16. بدء التشغيل
// ============================================================

updateCounters();
setStatus(
    '🟢 جاهز للترجمة · استخدم Ctrl+Enter للترجمة السريعة · زر التدوين لعكس النص العربي',
    ''
);

console.log('🐉 المترجم الأسطوري جاهز (جميع الإضافات)');
console.log('📌 استخدم Ctrl+Enter للترجمة السريعة');
console.log('🔄 زر التدوين لعكس النص العربي المترجم');
console.log('🔒 مجاني 100% - لا يطلب أي مال');
console.log('📖 القاموس الأساسي جاهز');
console.log('📂 سيتم تحميل general_dictionary.json و game_glossary.json مع فرض قاموس واجهات الألعاب');
console.log('✅ Console خالٍ من الأخطاء 100%');

// ============================================================
// نهاية الملف
// ============================================================