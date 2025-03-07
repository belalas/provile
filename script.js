/*===== MENU SHOW =====*/ 
// وظيفة لإظهار وإخفاء قائمة التنقل عند النقر على زر القائمة
const showMenu = (toggleId, navId) => {
    // الحصول على عناصر القائمة بناءً على معرفها
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    // التحقق مما إذا كانت العناصر موجودة في الصفحة
    if(toggle && nav){
        // عند النقر على زر القائمة، يتم إضافة/إزالة الفئة 'show' لقائمة التنقل
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

// استدعاء الدالة مع تمرير معرف زر القائمة ومعرف القائمة
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// تحديد جميع الروابط داخل قائمة التنقل
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // عند النقر على أي رابط، يتم إخفاء القائمة
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

// إضافة مستمع حدث لكل رابط بحيث يتم تنفيذ `linkAction` عند النقر عليه
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// تحديد جميع الأقسام التي تحتوي على معرف ID
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    // تحديد موضع التمرير العمودي في الصفحة
    const scrollY = window.pageYOffset

    // التكرار عبر جميع الأقسام المتاحة
    sections.forEach(current => {
        // حساب ارتفاع القسم
        const sectionHeight = current.offsetHeight
        // تحديد موضع القسم من أعلى الصفحة مع تعويض بسيط
        const sectionTop = current.offsetTop - 50;
        // الحصول على معرف القسم
        const sectionId = current.getAttribute('id')

        // التحقق مما إذا كان المستخدم داخل نطاق القسم الحالي
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // إضافة الفئة 'active' للرابط الخاص بهذا القسم
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            // إزالة الفئة 'active' إذا لم يكن المستخدم في هذا القسم
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// تنفيذ الدالة `scrollActive` عند تمرير الصفحة
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// تهيئة مكتبة ScrollReveal لإضافة تأثيرات الظهور عند التمرير
const sr = ScrollReveal({
    origin: 'top', // يبدأ الظهور من الأعلى
    distance: '60px', // المسافة التي يتحركها العنصر عند الظهور
    duration: 2000, // مدة التأثير بالمللي ثانية
    delay: 200, // التأخير قبل بدء التأثير
//     reset: true  // إذا كان مفعلاً، ستتم إعادة تشغيل التأثير عند التمرير مرة أخرى
});

// تطبيق تأثير التمرير على عناصر محددة
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 

// تأخير إضافي لبعض العناصر لتحسين المظهر
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 

// إضافة تأثير التمرير لعناصر وسائل التواصل الاجتماعي بفاصل زمني معين
sr.reveal('.home__social-icon', { interval: 200 }); 

// إضافة تأثير الظهور لعناصر المهارات، الأعمال، ونموذج التواصل بفاصل زمني معين
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });  
