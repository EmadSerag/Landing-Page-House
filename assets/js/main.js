const scrollBtn =document.querySelector('.scroll-top')
const iconNav =document.querySelector('.icon-nav')
const marginNav =document.querySelector('.navbar-nav')


// create button scrollTop 
window.onscroll= ()=>{
	this.scrollY >= 700 ?scrollBtn.classList.add('show') :scrollBtn.classList.remove('show')
}
scrollBtn.addEventListener('click', ()=>{
	scrollTo({
		top:0,
		behavior:"smooth"
	})
})
// change Navbar icon 
addEventListener('click', ()=>{
iconNav.classList.toggle('fa-times')
})


const languageSelector =document.querySelector('.form-select')
const translations ={
	en:{
		home :"Home",
		aboutUs:"About us",
		contact:"Contact us",
		service:"Services",
		projects:'Projects',
		reviews :'Reviews',
		selectLang: "En",
		english:"En",
		arabic:"ع",

		//content 

		//landing Page
			landingH4:'United General Contracting Company',
			landingP : "One of the leading companies in the field of general contracting, home and building maintenance services, and insulation works. It has a great deal of success and a great variety of services. We provide integrated services to customers at the lowest prices and with high quality. We provide integrated services for buildings such as insulation, inspections, maintenance of leaks, and contracting services", 
		// aboutUs 
			aboutusH2 : "Who is the United Company?",
			aboutusP :"We are the United Company for Home and Building Maintenance Services and General Contracting, registered with the Ministry of Commerce and Industry. We work in more than one sector of services, such as detecting water leaks with the latest equipment, roof insulation services, all kinds of tank services, general cleaning services activities for buildings, building maintenance services activities, and general cleaning of buildings. We also provide Services for tanks with annual or semi-annual contracts according to the need or without long-term contracts. We also work in the activities of controlling household insects, kitchen insects and public gardens through annual and semi-annual contracts. ",
			//services
			services1H5:"Water leak detection",
			service1P:"The best water leak detection service with the latest devices to detect existing leaks with high quality. We solve all the problems of high water bills for you.",
			services2H5:"Roof insulation",
			service2P:"Surface insulation service, water and thermal insulation, with the best insulators for buildings and homes, of the highest quality, by a group of specialized technicians trained in hard work.",
			services3H5:"Building restoration and maintenance",
			service3P:"Our company carries out high-quality restoration and maintenance operations. It also carries out emergency maintenance operations in homes and service buildings. It provides the best suitable designs and has a full fleet of contractors.",
			services4H5:"Solve the problem of high water bills",
			service4P:"Our customers always suffer from high water bills constantly, and they are always unaware of the reason, so the company works to provide a solution service to the problem of high water bills.",
			services5H5:"Wiring and suction sewage",
			service5P:"We have the best tools for wiring and suction sewage and manholes in homes, streets and service buildings. We are ready for emergencies and arrive at full speed. We provide a special section for emergency maintenance operations 24 hours a day.",
			services6H5:"Pest control and pesticide spraying",
			service6P:"We provide pesticide spraying and insect control services with the best available methods and programs to control insects in complete safety for your health and at the lowest prices. We provide all types of pesticides (biological and chemical).",
			// projects
			projects1H5: "Modern house design",
			projectsP1:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			projects2H5:"Latest equipment.",
			projectsP2:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			projects3H5: "Administrative buildings with an attractive facade.",
			projectsP3:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			projects4H5: "New residential building",
			projectsP4:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			projects5H5: "Huge shopping mall",
			projectsP5:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			projects6H5: "Inside the workshops",
			projectsP6:"The new design is the permanent editing and modification of the design. Always be open to making dynamic modifications that achieve the goals of your original vision and constantly renew the splendor of your home. A good design must keep pace with the maturity of its residents and keep pace with the changing conditions, goals and desires.",
			userName1: 'mr / sara Ahmed',
			message1:'It is one of the best companies in home design, as it designs, builds and finishes at the highest level of creativity.',
			userName2: 'mr / Youssif Ibrahim',
			message2:'It is one of the best companies in home design, as it designs, builds and finishes at the highest level of creativity.',
			userName3: 'mr / Abdallah Mohamed',
			message3:'It is one of the best companies in home design, as it designs, builds and finishes at the highest level of creativity.',
			//send 
			email: " Enter your email address",
		subject :"subject",
		write_message: " write your message",
		send : "send ",


		//footer
			quick_links:"Quick links",
			followUs: "Follow us on"
			,
		facebook:"Facebook ",
		insta:"instagram  ",
		linkedin:"Linkedin ",

		//copy right
		copyright:"All rights reserved © 2023 United Company",
		design:"design by"

	},
	ar:{
		// navbar
		home :"الصفحة الرسمية",
		aboutUs:"من نحن ",
		contact:" تواصل معانا",
		service:"الخدمات ",
		projects:'بعض المشاريع',
		reviews: 'اراء العملاء ',
		selectLang: "تحديد اللغة ",
		english:"الانجليزية ",
		arabic:"العربية",

		// content
		// landing Page
		landingH4:'الشركة المتحدة للمقولات العامة ',
		landingP : "من الشركات الرائدة فى مجال المقاولات العامة وخدمات صيانة المنازل والمبانى وأعمال العزل لها باع كبير من النجاحات و تنوعات كبرى فى الخدمات حيث نقدم خدمات متكاملة للزبائن بأقل الأسعار وبجودة عالية نوفر خدمات المتكاملة للمباني من العوازل والكشوفات وصيانة التسربات وخدمات المقاولات..",

		//aboutus
		aboutusH2 : "من تكون الشركة المتحدة ",
		aboutusP :"نحن الشركة المتحدة لخدمات صيانة المنازل والمبانى  والمقاولات العامة مسجلة بوزارة التجارة والصناعة  ونعمل في اكثر من قطاع من الخدمات مثل الكشف عن تسربات المياه بأحدث الاجهزة وخدمات عزل الاسطح وخدمات الخزانات بانواعها وأنشطة خدمات التنظيف العام للمباني و أنشطة خدمات صيانة المباني و التنظيف العام للمباني وكذلك ايضاً نوفر خدمات للخزانات بعقود سنوية او نصف سنوة حسب الحاجه او بدون عقود طويلة الاجل كذلك نعمل في انشطة مكافحة الحشرات المنزلية وحشرات المطبخ والحدائق العامة من خلال التعاقد السنوي والنصف سنوي  ",
        
		//services

		services1H5:"الكشف عن تسريب المياه ",
		service1P:"أفضل خدمة للكشف عن تسربات المياه بأحدث الأجهزة للكشف عن تسرب الموجود بجودة عالية نحل لك كافة مشاكل الارتفاع في فواتير المياه .",
		services2H5:"عزل الاسطح",
		service2P:" خدمة عزل الأسطح عزل مائي وحراري بأفضل العوازل للمباني والمنازل بأعلى جودة علي يد نخبه من فنيين متخصصين مدربيين على الأعمال الشاقه.",
		services3H5:"ترميم وصيانة المباني ",
		service3P:" تقوم شركتنا بعمليات الترميم وصيانة بجودة عالية وتقوم ايضاً بعمليات الصيانة الطارئة بالمنازل والمبانى الخدمية وتوفر افضل التصاميم المناسبة ولديها اسطول كامل من المقاوليين.",
		services4H5:"حل مشكلة ارتفاع فواتير المياه",
		service4P:"يعانى عملائنا دائما من ارتفاع فى فواتير المياه بأستمرار ،ودائماً ما يجهل السبب ،لذلك تعمل الشركة علي توفير خدمة حل لمشكلة ارتفاع فواتير المياه.",
		services5H5:"تسليك وشفط المجارى",
		service5P:"لدينا افضل ادوات تسليك وشفط المجارى والبيارات بالمنازل والشوارع والمباني الخدمية ،مستعدون للحالات الطارئة ونصل فى سرعة تامة نوفر قسم خاص لعمليات الصيانة الطارئة على مدار ال 24ساعة",
		services6H5:"مكافحة الحشرات ورش المبيدات",
		service6P:"نوفر خدمة رش المبيدات ومكافحة الحشرات بأفضل الطرق والبرامج المتاحة للقيام بمكافحة الحشرات بأمان تام على الصحتكم وبأقل الاسعار نوفر كافة انواع المبيدات الحشرية(البيولوجية والكيميائية).",
// projects

		projects1H5: "تصميم بيت عصري",
		projectsP1:"التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",
		projects2H5: " احدث المعدات",
		projectsP2:" التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",
		projects3H5: " مباني ادارية ذو واجهة جذابة ",
		projectsP3:" التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",
		projects4H5: " مبني سكاني جديد  ",
		projectsP4:" التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",
		projects5H5: "مول تجاري ضخم ",
		projectsP5:" التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",
		projects6H5: " من داخل ورش العمل ",
		projectsP6:" التصميم الجديد هو التحرير والتعديل الدائم للتصميم، كن منفتحا دائما لإجراء تعديلات ديناميكية تُحقِّق غايات رؤيتك الأصلية وتُجدِّد رونق منزلك على الدوام، فعلى التصميم الجيد أن يواكب نضج قاطنيه ويجاري تبدّل أحوالهم وغاياتهم ورغباتهم.",

// reviews
		userName1:'ا/ سارة احمد',
		message1: 'انها من افضل الشركات في تصميم البيوت حيث تقوم بـ التصميم والانشاء والتشطيب علي اعلي مستوي من الابداع .',
		userName2:'ا/ يوسف ابراهيم  ',
		message2: 'انها من افضل الشركات في تصميم البيوت حيث تقوم بـ التصميم والانشاء والتشطيب علي اعلي مستوي من الابداع .',
		userName3:'ا/ عبدالله محمد ',
		message3: 'انها من افضل الشركات في تصميم البيوت حيث تقوم بـ التصميم والانشاء والتشطيب علي اعلي مستوي من الابداع .',


		// contact us 
		email: "البريد الالكتروني ",
		subject :"عنوان الرسالة ",
		write_message: "اكتب رسالتك ",
		send : "ارسال ",

		// footer 

		quick_links:"روابط سريعة ",
		followUs: "تابعونا علي  ",

		// social Madia 

		facebook:"فيسبوك ",
		insta:"انستجرام  ",
		linkedin:"لينكدان ",
		copyright:"جميع حقوق محفوظة© 2023 الشركة المتحدة ",
		design: "تصميم"



	}
}
//هيجيب القيمة اللي في العنضر دا 
languageSelector.addEventListener("change", (e)=>{
	setLanguage(e.target.value);
	localStorage.setItem("language", e.target.value);
})


document.addEventListener('DOMContentLoaded', ()=>{
	setLanguage(localStorage.getItem('language'));
})
const setLanguage=(language)=>{
	const elements = document.querySelectorAll("[data-i18n]");
	elements.forEach((element)=>{
		const translationKey =element.getAttribute("data-i18n");
	
		element.textContent=translations[language][translationKey];
	})
	document.dir =language==="ar" ?"rtl":"ltr";
	language==="ar" ?document.title=translations.ar.landingH4:document.title=translations.en.landingH4;

}