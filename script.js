const shlokas = [
  {
    "sanskrit": "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः ।",
    "translit": "Shraddhavan labhate jnanam tatparah samyatendriyah",
    "meaning": "One who has faith, devotion, and supreme control over the senses attains true spiritual knowledge.",
    "tags": ["focus", "devotion", "wisdom"]
  },
  {
    "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    "translit": "Karmanyevadhikaraste ma phaleshu kadachana, ma karmaphalaheturbhurma te sango'stvakarmanI",
    "meaning": "You have a right to perform your duties, but never to the fruits thereof. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
    "tags": ["action", "Bhagavad Gita", "detachment", "duty"]
  },
  {
    "sanskrit": "योगः कर्मसु कौशलम् ।",
    "translit": "Yogah karmasu kaushalam",
    "meaning": "Yoga is excellence in action — performing every work with skill and mindfulness.",
    "tags": ["excellence", "Bhagavad Gita", "action", "yoga"]
  },
  {
    "sanskrit": "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
    "translit": "Sarve bhavantu sukhinah sarve santu niramayah, sarve bhadrani pashyantu ma kashchiddukhabhagbhavet",
    "meaning": "May all beings be happy, may all beings be free from disease, may all beings behold auspiciousness, may none suffer.",
    "tags": ["universal well-being", "prayer", "compassion", "peace"]
  },
  {
    "sanskrit": "अहिंसा परमो धर्मः ।",
    "translit": "Ahimsa paramo dharmah",
    "meaning": "Non-violence is the highest virtue and the supreme duty.",
    "tags": ["non-violence", "virtue", "dharma", "ahimsa"]
  },
  {
    "sanskrit": "सत्यमेव जयते नानृतम् ।",
    "translit": "Satyameva jayate nanritam",
    "meaning": "Truth alone triumphs, not falsehood.",
    "tags": ["Mundaka Upanishad", "victory", "righteousness", "truth"]
  },
  {
    "sanskrit": "विद्या ददाति विनयं विनयाद्याति पात्रताम् । पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥",
    "translit": "Vidya dadati vinayam vinayadyati patratam, patratvaddhanamapnoti dhanaddharnam tatah sukham",
    "meaning": "Education gives humility, from humility comes worthiness, from worthiness one gains wealth, from wealth comes righteousness, and from righteousness comes happiness.",
    "tags": ["character", "wisdom", "humility", "education"]
  },
  {
    "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् । आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
    "translit": "Uddhareda tmanatmanam natmanam avasadayet, atmaiva hyatmano bandhuratmaiva ripuratmanah",
    "meaning": "One must elevate oneself by one's own mind, not degrade oneself. The mind alone is the friend of the self and the mind alone is the enemy of the self.",
    "tags": ["self-improvement", "Bhagavad Gita", "mind", "self-discipline"]
  },
  {
    "sanskrit": "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।",
    "translit": "Na hi jnanena sadrisham pavitram iha vidyate",
    "meaning": "There is nothing as pure as knowledge in this world.",
    "tags": ["Bhagavad Gita", "wisdom", "purity", "knowledge"]
  },
  {
    "sanskrit": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः । स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥",
    "translit": "Yadyadacharati shreshthastatadevetaro janah, sa yatpramanam kurute lokastadanuvartate",
    "meaning": "Whatever a great person does, others follow. Whatever standard they set, the world follows.",
    "tags": ["Bhagavad Gita", "influence", "example", "leadership"]
  },
  {
    "sanskrit": "परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः । परोपकाराय दुहन्ति गावः परोपकारार्थमिदं शरीरम् ॥",
    "translit": "Paropakārāya phalanti vrikshāh paropakārāya vahanti nadyah, paropakārāya duhanti gāvah paropakārārthamidam shariram",
    "meaning": "Trees bear fruit for the benefit of others; rivers flow for others; cows give milk for others — this body too is meant for serving others.",
    "tags": ["dharma", "nature", "altruism", "selfless service"]
  },
  {
    "sanskrit": "अयं निजः परो वेति गणना लघुचेतसाम् । उदारचरितानां तु वसुधैव कुटुम्बकम् ॥",
    "translit": "Ayam nijah paro veti ganana laghuchetasam, udaracharitanam tu vasudhaiva kutumbakam",
    "meaning": "The distinction of 'mine' and 'another's' is for the narrow-minded; for the magnanimous, the entire world is one family.",
    "tags": ["magnanimity", "compassion", "universalism", "unity"]
  },
  {
    "sanskrit": "आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपुः ।",
    "translit": "Alasyam hi manushyanam shareerastho mahan ripuh",
    "meaning": "Laziness is the greatest enemy dwelling within the human body.",
    "tags": ["self-improvement", "effort", "laziness", "discipline"]
  },
  {
    "sanskrit": "क्षणशः कणशश्चैव विद्यामर्थं च साधयेत् । क्षणत्यागे कुतो विद्या कणत्यागे कुतो धनम् ॥",
    "translit": "Kshanashaha kanashashchaiva vidyamartham cha sadhayet, kshantyage kuto vidya kanattyage kuto dhanam",
    "meaning": "Acquire knowledge moment by moment and wealth grain by grain; wasting moments means no knowledge, wasting grains means no wealth.",
    "tags": ["wealth", "education", "diligence", "time"]
  },
  {
    "sanskrit": "काकः कृष्णः पिकः कृष्णः को भेदः पिककाकयोः । वसन्तकाले सम्प्राप्ते काकः काकः पिकः पिकः ॥",
    "translit": "Kakah krishnah pikah krishnah ko bhedah pikakakayoh, vasantakale samprapte kakah kakah pikah pikah",
    "meaning": "Both the crow and the cuckoo are black — what is the difference? When spring arrives, the crow remains a crow and the cuckoo sings beautifully, revealing true character.",
    "tags": ["subhashita", "wisdom", "talent", "character"]
  },
  {
    "sanskrit": "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।",
    "translit": "Uttishthata jagrata prapya varanniboodhata",
    "meaning": "Arise! Awake! And stop not until the goal is reached.",
    "tags": ["Katha Upanishad", "determination", "perseverance", "motivation"]
  },
  {
    "sanskrit": "तमसो मा ज्योतिर्गमय । असतो मा सद्गमय । मृत्योर्माऽमृतं गमय ॥",
    "translit": "Tamaso ma jyotirgamaya, asato ma sadgamaya, mrityorma amritam gamaya",
    "meaning": "Lead me from darkness to light, from untruth to truth, from death to immortality.",
    "tags": ["Brihadaranyaka Upanishad", "spirituality", "enlightenment", "prayer"]
  },
  {
    "sanskrit": "अहं ब्रह्मास्मि ।",
    "translit": "Aham brahmasmi",
    "meaning": "I am Brahman — the recognition that the individual self and the universal consciousness are one.",
    "tags": ["non-duality", "Upanishad", "self-realization", "Advaita"]
  },
  {
    "sanskrit": "तत्त्वमसि ।",
    "translit": "Tattvamasi",
    "meaning": "That thou art — the identity of the individual soul with the universal consciousness.",
    "tags": ["self-knowledge", "Chandogya Upanishad", "non-duality", "Advaita"]
  },
  {
    "sanskrit": "एकं सद्विप्रा बहुधा वदन्ति ।",
    "translit": "Ekam sad vipra bahudha vadanti",
    "meaning": "Truth is one; the wise call it by many names.",
    "tags": ["philosophy", "Rig Veda", "universalism", "truth"]
  },
  {
    "sanskrit": "सहनाववतु सहनौ भुनक्तु सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥",
    "translit": "Sahanavavatu saha nau bhunaktu saha veeryam karavavahai, tejasvinavadhi tamastu ma vidvishavahai",
    "meaning": "May we be protected together, may we be nourished together, may we work together with great energy, may our study be illuminating, may there be no hatred between us.",
    "tags": ["peace", "learning", "unity", "prayer"]
  },
  {
    "sanskrit": "चरैवेति चरैवेति ।",
    "translit": "Charaiveti charaiveti",
    "meaning": "Keep moving, keep moving — a call to ceaseless effort and onward progress.",
    "tags": ["Aitareya Brahmana", "motivation", "effort", "perseverance"]
  },
  {
    "sanskrit": "मातृदेवो भव पितृदेवो भव आचार्यदेवो भव अतिथिदेवो भव ।",
    "translit": "Matridevo bhava pitridevo bhava acharyadevaobhava atithidevo bhava",
    "meaning": "Let your mother be your god; let your father be your god; let your teacher be your god; let your guest be your god.",
    "tags": ["hospitality", "teacher", "family", "respect"]
  },
  {
    "sanskrit": "न चोरहार्यं न च राजहार्यं न भ्रातृभाज्यं न च भारकारि । व्यये कृते वर्धत एव नित्यं विद्याधनं सर्वधनप्रधानम् ॥",
    "translit": "Na choraharyam na cha rajaharyam na bhratirbhajyam na cha bharakari, vyaye krite vardhata eva nityam vidyadhanam sarvadhanapraddhanam",
    "meaning": "Knowledge cannot be stolen by thieves, seized by kings, divided among brothers, nor is it heavy to carry. It grows when shared — knowledge is the greatest of all wealth.",
    "tags": ["wisdom", "wealth", "knowledge", "education"]
  },
  {
    "sanskrit": "दूरस्थोऽपि न दूरस्थः यो यस्य मनसि स्थितः ।",
    "translit": "Durastho'pi na durasthah yo yasya manasi sthitah",
    "meaning": "One who lives in the heart is never truly far away, even if physically distant.",
    "tags": ["relationships", "heart", "connection", "love"]
  },
  {
    "sanskrit": "आत्मनः प्रतिकूलानि परेषां न समाचरेत् ।",
    "translit": "Atmanah pratikoolani paresham na samacharet",
    "meaning": "Do not do unto others what is disagreeable to yourself — the golden rule of conduct.",
    "tags": ["virtue", "conduct", "empathy", "ethics"]
  },
  {
    "sanskrit": "सुखस्य मूलं धर्मः धर्मस्य मूलमर्थः ।",
    "translit": "Sukhasya mulam dharmah dharmasya mulamarthah",
    "meaning": "The root of happiness is righteousness; the root of righteousness is prosperity rightly gained.",
    "tags": ["Chanakya", "prosperity", "happiness", "dharma"]
  },
  {
    "sanskrit": "प्रियवाक्यप्रदानेन सर्वे तुष्यन्ति जन्तवः । तस्मात्तदेव वक्तव्यं वचने का दरिद्रता ॥",
    "translit": "Priyavakyapradanena sarve tushyanti jantavah, tasmattadeva vaktavyam vachane ka daridrata",
    "meaning": "All creatures are pleased by kind words — so speak kindly always. What poverty is there in being pleasant in speech?",
    "tags": ["virtue", "communication", "kindness", "speech"]
  },
  {
    "sanskrit": "शनैः पन्थाः शनैः कन्था शनैः पर्वतलङ्घनम् । शनैर्विद्या शनैर्वित्तं पञ्चैतानि शनैः शनैः ॥",
    "translit": "Shanai panthah shanai kantha shanai parvatalanghahnam, shanairvidya shanairvittam panchaitan shanai shanai",
    "meaning": "Step by step a long journey is covered, thread by thread a cloth is woven, mountain by mountain the range is crossed — slowly and steadily is how roads, clothes, mountains, learning, and wealth are gained.",
    "tags": ["wisdom", "progress", "perseverance", "patience"]
  },
  {
    "sanskrit": "वज्राद् अपि कठोराणि मृदूनि कुसुमादपि । लोकोत्तराणां चेतांसि को हि विज्ञातुमर्हति ॥",
    "translit": "Vajrad api kathorani mriduni kusumadapi, lokottaranam chetamsi ko hi vijnatum arhati",
    "meaning": "The hearts of the noble are harder than diamond and softer than a flower — who can truly fathom them?",
    "tags": ["strength", "compassion", "character", "nobility"]
  },
  {
    "sanskrit": "त्यजेदेकं कुलस्यार्थे ग्रामस्यार्थे कुलं त्यजेत् । ग्रामं जनपदस्यार्थे आत्मार्थे पृथिवीं त्यजेत् ॥",
    "translit": "Tyajedam kulasyarthe gramastyarthe kulam tyajet, gramam janapadastyarthe atmarthe prithivim tyajet",
    "meaning": "Sacrifice an individual for the good of the family; sacrifice the family for the village; sacrifice the village for the kingdom; but sacrifice the world for the sake of the eternal self.",
    "tags": ["self-realization", "duty", "ethics", "sacrifice"]
  },
  {
    "sanskrit": "पुस्तकस्था तु या विद्या परहस्तगतं च धनम् । कार्यकाले समुत्पन्ने न सा विद्या न तद्धनम् ॥",
    "translit": "Pustakastha tu ya vidya parahastagataham cha dhanam, karyakale samutpanne na sa vidya na taddhanam",
    "meaning": "Knowledge confined only to books and money in another's hands — neither is truly yours when the time of need arrives.",
    "tags": ["preparedness", "wisdom", "application", "knowledge"]
  },
  {
    "sanskrit": "माता शत्रुः पिता वैरी येन बालो न पाठितः । न शोभते सभामध्ये हंसमध्ये बको यथा ॥",
    "translit": "Mata shatruh pita vairi yena balo na pathitah, na shobhate sabhamadhye hamsamadhye bako yatha",
    "meaning": "A mother is an enemy and a father a foe who does not educate their child — for such a child shines not in an assembly of the learned, like a heron among swans.",
    "tags": ["Chanakya", "children", "parenting", "education"]
  },
  {
    "sanskrit": "यथा हि एकेन चक्रेण न रथस्य गतिर्भवेत् । एवं पुरुषकारेण विना दैवं न सिध्यति ॥",
    "translit": "Yatha hi ekena chakrena na rathasya gatirbhavet, evam purushakaren vina daivam na sidhyati",
    "meaning": "Just as a chariot cannot move on one wheel alone, so too destiny cannot succeed without human effort.",
    "tags": ["self-reliance", "action", "destiny", "effort"]
  },
  {
    "sanskrit": "अभिवादनशीलस्य नित्यं वृद्धोपसेविनः । चत्वารि तस्य वर्धन्ते आयुर्विद्या यशो बलम् ॥",
    "translit": "Abhivadanashilasya nityam vriddhopakarinah, chatvary tasya vardhante ayurvidya yasho balam",
    "meaning": "For one who habitually bows in reverence and serves elders, four things grow — life span, knowledge, fame, and strength.",
    "tags": ["Manu Smriti", "virtue", "elders", "respect"]
  },
  {
    "sanskrit": "संतोषः परमो लाभः सत्सङ्गः परमा गतिः ।",
    "translit": "Santoshaha paramo labha satsangah parama gatih",
    "meaning": "Contentment is the highest gain; good company is the highest path.",
    "tags": ["happiness", "wisdom", "association", "contentment"]
  },
  {
    "sanskrit": "न सेवेत गुरुद्रोहं न द्रोहं जीवतां तथा ।",
    "translit": "Na seveta gurudroham na droham jivatam tatha",
    "meaning": "Do not betray your teacher; do not betray the living — these are foundational duties.",
    "tags": ["loyalty", "duty", "teacher", "ethics"]
  },
  {
    "sanskrit": "भस्मीभूतस्य देहस्य पुनरागमनं कुतः ।",
    "translit": "Bhasmibhutasya dehasya punaraagamanam kutah",
    "meaning": "Once the body is reduced to ash, where is the question of return? — a statement on the finality of death.",
    "tags": ["death", "body", "impermanence", "Charvaka philosophy"]
  },
  {
    "sanskrit": "ॐ तत् सत् ।",
    "translit": "Om tat sat",
    "meaning": "Om — That — Reality: the three-word declaration of the supreme truth.",
    "tags": ["Om", "Brahman", "mantra", "truth"]
  },
  {
    "sanskrit": "गुणेषु क्रियतां यत्नः किमाटोपैः प्रयोजनम् ।",
    "translit": "Guneshu kriyatam yatnah kimatopaiah prayojanam",
    "meaning": "Strive to cultivate virtues — what is the use of mere display and pretension?",
    "tags": ["virtue", "character", "effort", "subhashita"]
  },
  {
    "sanskrit": "सौम्यं कुर्यात् तु वाङ्मनः ।",
    "translit": "Saumyam kuryat tu vangmanah",
    "meaning": "Cultivate gentleness in speech and mind.",
    "tags": ["speech", "mind", "gentleness", "conduct"]
  },
  {
    "sanskrit": "स्वभावो दुरतिक्रमः ।",
    "translit": "Svabhavah shastraad baliyan",
    "meaning": "One its inherent nature is stronger than scripture's prescription.",
    "tags": ["nature", "habit", "scripture", "wisdom"]
  },
  {
    "sanskrit": "अन्तरिक्ष एव विचरन्ति ।",
    "translit": "Anirveda shryo mulam",
    "meaning": "Not giving up is the root of all prosperity and success.",
    "tags": ["perseverance", "success", "determination", "wisdom"]
  },
  {
    "sanskrit": "परिक्षय्य बलं शत्रोः सामर्षेण च संधयेत् ।",
    "translit": "Parikshayya balam shatroah samarshen cha samadhayet",
    "meaning": "After assessing the strength of the enemy, make peace with firm resolve.",
    "tags": ["strategy", "wisdom", "peace", "statecraft"]
  },
  {
    "sanskrit": "मित्रं प्राप्नोति बाह्वान् ।",
    "translit": "Mitram prapnoti bahvan",
    "meaning": "One who reaches out with both arms finds many friends.",
    "tags": ["friendship", "generosity", "outreach", "wisdom"]
  },
  {
    "sanskrit": "शरीरमाद्यं खलु धर्मसाधनम् ।",
    "translit": "Shariramadyam khalu dharmasadhanam",
    "meaning": "The body is indeed the primary instrument for fulfilling one's dharma.",
    "tags": ["body", "health", "dharma", "Kalidasa"]
  },
  {
    "sanskrit": "नाद्रियन्ते यत्र विद्वांसः तत्र लक्ष्मीर्न तिष्ठति ।",
    "translit": "Nadriyante yatra vidvamsah tatra lakshmirna tishthati",
    "meaning": "Where the learned are not respected, Lakshmi does not abide.",
    "tags": ["respect", "knowledge", "prosperity", "wisdom"]
  },
  {
    "sanskrit": "धर्मे च अर्थे च कामे च मोक्षे च भरतर्षभ ।",
    "translit": "Dharme cha arthe cha kame cha mokshe cha bharatarshabha",
    "meaning": "In dharma, wealth, love, and liberation — O best of the Bharatas — here is all that the soul seeks.",
    "tags": ["purusharthas", "dharma", "moksha", "life goals"]
  },
  {
    "sanskrit": "अस्माकं तु विशेषोऽयं यद्वयं नोपजीविनः ।",
    "translit": "Asmaakam tu vishesha'yam yadvayam nopajiivinah",
    "meaning": "Our distinction is this: we live not on others' support — the pride of self-sufficiency.",
    "tags": ["self-reliance", "independence", "pride", "virtue"]
  },
  {
    "sanskrit": "योऽन्यं द्वेष्टि स पापात्मा यश्चाभ्यसूयति ।",
    "translit": "Yo'nyam dveshti sa papatma yashchabhyasuyati",
    "meaning": "One who hates another and is envious is sinful of soul.",
    "tags": ["hatred", "envy", "sin", "ethics"]
  },
  {
    "sanskrit": "नमस्कार इव अर्जुनं ।",
    "translit": "Namaskara iva arjunam",
    "meaning": "Like a salutation to Arjuna — a tribute to peerless heroism.",
    "tags": ["heroism", "Arjuna", "respect", "Mahabharata"]
  },
  {
    "sanskrit": "क्रिया सिद्धिः सत्त्वेभवति महतां नोपकरणे ।",
    "translit": "Kriya siddhih sattve bhavati mahatam nopakarne",
    "meaning": "The success of great men's endeavours rests in their inner strength and character, not in external resources.",
    "tags": ["inner strength", "character", "success", "greatness"]
  },
  {
    "sanskrit": "तुलसी सलिलं पीत्वा पवित्रः सर्वदा नरः ।",
    "translit": "Tulasi salam pitva pavitrah sarvada narah",
    "meaning": "One who drinks water offered through tulasi leaves is ever purified.",
    "tags": ["tulasi", "purity", "devotion", "sacred plants"]
  },
  {
    "sanskrit": "यः स्वस्थमानसः नित्यं संतोषी स सुखी नरः ।",
    "translit": "Yah svastha manasah nityam santoshi sa sukhi narah",
    "meaning": "The person of ever-sound mind and contentment is truly happy.",
    "tags": ["contentment", "happiness", "mental health", "wisdom"]
  },
  {
    "sanskrit": "अहो रूपमहो ध्वनिः ।",
    "translit": "Aho rupam aho dhvaih",
    "meaning": "What a form! What a voice! — an expression of profound awe and admiration.",
    "tags": ["beauty", "admiration", "wonder", "expression"]
  },
  {
    "sanskrit": "शब्दब्रह्मणि निष्णातः परं ब्रह्माधिगच्छति ।",
    "translit": "Shabdabrahmani nishnatah param brahmadhigachchhati",
    "meaning": "One who is well-versed in the Vedic sound (Shabda Brahman) eventually attains the supreme Brahman.",
    "tags": ["Veda", "sound", "Brahman", "knowledge"]
  },
  {
    "sanskrit": "देहो देवालयः प्रोक्तः जीवः प्रोक्तः सदाशिवः ।",
    "translit": "Deho devalayah proktah jivah proktah Sadashivah",
    "meaning": "The body is called the temple; the living soul within is called Sadashiva — worship the divine within.",
    "tags": ["body", "temple", "soul", "divinity"]
  },
  {
    "sanskrit": "यस्तु सञ्चरते देशान् यस्तु सेवेत पण्डितान् । तस्य विस्तारिता बुद्धिस्तैलबिन्दुरिवाम्भसि ॥",
    "translit": "Yastu sancharate deshan yastu seveta panditaan, tasya vistaarita buddhistailabindurambhasi",
    "meaning": "One who travels widely and serves the learned — their intellect expands like a drop of oil spreading upon water.",
    "tags": ["travel", "learning", "wisdom", "growth"]
  },
  {
    "sanskrit": "वाणी रसवती यस्य यस्य श्रमवती क्रिया । लक्ष्मीर्दाने च यस्यास्ति तत्र दुर्लभमद्भुतम् ॥",
    "translit": "Vani rasavati yasya EM  yasya shramavati kriya, lakshmirdane cha yasyasti tatra durlabhamad bhutam",
    "meaning": "Rare and wonderful is the one whose speech is eloquent, whose work is earnest, and whose wealth is used in charity.",
    "tags": ["speech", "action", "generosity", "excellence"]
  },
  {
    "sanskrit": "अनागतविधाता चप्रत्युत्पन्नमतिस्तथा । द्वावेतौ सुखमेधेते यद्भविष्यो विनश्यति ॥",
    "translit": "Anagatavidhata cha pratyutpanna matistattha, dvavettau sukhamedhete yad bhavishyo vinashyati",
    "meaning": "One who plans for the future and one who acts swiftly in the present both prosper; the one who leaves everything to fate perishes.",
    "tags": ["planning", "action", "foresight", "wisdom"]
  },
  {
    "sanskrit": "शतेषु जायते शूरः सहस्रेषु च पण्डितः ।",
    "translit": "Shateshhu jayate shuurah sahasreshu cha panditah",
    "meaning": "Among hundreds, one warrior is born; among thousands, one truly wise person.",
    "tags": ["wisdom", "rarity", "heroism", "subhashita"]
  },
  {
    "sanskrit": "न कुर्यात् कर्हिचित्सख्यं सञ्चिते भ्रमरी यथा ।",
    "translit": "Na kuryat karhichitsakkhyam sanchite bhramari yatha",
    "meaning": "Do not make friendship with the deceitful, as the bee makes honey only for herself in the end.",
    "tags": ["friendship", "caution", "deception", "wisdom"]
  },
  {
    "sanskrit": "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् । यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥",
    "translit": "Yatkaroshi yadashnanasi yajjuhoshi dadasi yat, yattapasyasi kaunteya tatkurusva madarpanam",
    "meaning": "Whatever you do, eat, offer, give, or practice as austerity — offer it all to Me, O Arjuna.",
    "tags": ["devotion", "surrender", "Bhagavad Gita", "offering"]
  },
  {
    "sanskrit": "शुचिः प्रपश्यति सर्वत्र ।",
    "translit": "Shuchih prapashyati sarvatra",
    "meaning": "The pure of heart sees auspiciousness everywhere.",
    "tags": ["purity", "perception", "heart", "wisdom"]
  },
  {
    "sanskrit": "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।",
    "translit": "Tadviddhi pranipattena pariprashnena sevaya",
    "meaning": "Know the Truth by humble prostration, sincere inquiry, and service to the teacher.",
    "tags": ["learning", "humility", "service", "Bhagavad Gita"]
  },
  {
    "sanskrit": "ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ।",
    "translit": "Jnanagnih sarvakarmani bhasmasatkurute tatha",
    "meaning": "As a fire reduces all wood to ashes, the fire of knowledge reduces all karma to ashes.",
    "tags": ["knowledge", "karma", "liberation", "Bhagavad Gita"]
  },
  {
    "sanskrit": "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् ।",
    "translit": "Tesham satatayuktanam bhajatam pritipurvakam",
    "meaning": "For those who are always devoted and worship with love, I carry what they lack and preserve what they have.",
    "tags": ["devotion", "God's grace", "Bhagavad Gita", "love"]
  },
  {
    "sanskrit": "मनः षष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ।",
    "translit": "Manah shashthanindriyani prakritistthani karshati",
    "meaning": "The individual soul struggles with the six senses, including the mind, which are rooted in nature.",
    "tags": ["mind", "senses", "nature", "Bhagavad Gita"]
  },
  {
    "sanskrit": "अन्यथा शरणं नास्ति त्वमेव शरणं मम ।",
    "translit": "Anyatha sharanam nasti tvameva sharanam mama",
    "meaning": "There is no other refuge; You alone are my refuge.",
    "tags": ["surrender", "refuge", "devotion", "prayer"]
  },
  {
    "sanskrit": "साहसे श्री प्रतिवसति ।",
    "translit": "Sahase shri prativasati",
    "meaning": "Prosperity dwells in boldness.",
    "tags": ["courage", "boldness", "success", "wisdom"]
  },
  {
    "sanskrit": "प्रज्ञा शरणमुत्तमम् ।",
    "translit": "Praajna sharanam uttamam",
    "meaning": "Wisdom is the highest refuge.",
    "tags": ["wisdom", "refuge", "safety", "Buddhism"]
  },
  {
    "sanskrit": "असतो मा सद्गमय ।",
    "translit": "Asato ma sadgamaya",
    "meaning": "Lead me from untruth to truth.",
    "tags": ["truth", "prayer", "spiritual path", "Upanishad"]
  },
  {
    "sanskrit": "गच्छन् पिपीलिको याति योजनानां शतान्यपि ।",
    "translit": "Gachchhan pipilikoyati yojananam shatanyapi",
    "meaning": "An ant, though tiny, travels hundreds of miles by constant movement.",
    "tags": ["perseverance", "effort", "constancy", "wisdom"]
  },
  {
    "sanskrit": "स्वभावः शास्त्राद् बलीयान् ।",
    "translit": "Svabhavah shastraad baliyan",
    "meaning": "One its inherent nature is stronger than scripture's prescription.",
    "tags": ["nature", "habit", "scripture", "wisdom"]
  },
  {
    "sanskrit": "लोकाः समस्ताः सुखिनो भवन्तु ।",
    "translit": "Lokah samastah sukhino bhavantu",
    "meaning": "May all the worlds and all beings be happy.",
    "tags": ["peace", "prayer", "compassion", "universalism"]
  },
  {
    "sanskrit": "सहसा विदधीत न क्रियाम् ।",
    "translit": "Sahasa vidadhita na kriyam",
    "meaning": "Do not act rashly in haste — consider before you act.",
    "tags": ["caution", "wisdom", "action", "deliberation"]
  },
  {
    "sanskrit": "समचित्तत्वे सुख-दुःखयोर् यतः ।",
    "translit": "Samachittattve sukha-duhkhayoryatah",
    "meaning": "The equanimity of mind in pleasure and in pain — that is where true peace resides.",
    "tags": ["equanimity", "peace", "mind", "Stoicism"]
  },
  {
    "sanskrit": "न विना पार्थिवं लक्ष्मीः न विना चापि मेदिनीम् ।",
    "translit": "Na vina parthivam lakshmih na vina chapi medinim",
    "meaning": "Prosperity does not exist without a worthy king, nor does the earth flourish without good governance.",
    "tags": ["governance", "prosperity", "leadership", "wisdom"]
  },
  {
    "sanskrit": "परं जयन्ति राजानो ये धर्मेण प्रशासति ।",
    "translit": "Param jayanti rajano ye dharmena prashashathi",
    "meaning": "Those kings who rule with righteousness are ultimately victorious.",
    "tags": ["governance", "righteousness", "leadership", "Dharma"]
  },
  {
    "sanskrit": "यथा राजा तथा प्रजा ।",
    "translit": "Yatha raja tatha praja",
    "meaning": "As is the ruler, so are the people — leadership shapes the character of a nation.",
    "tags": ["leadership", "governance", "influence", "proverb"]
  },
  {
    "sanskrit": "आरोग्यं परमं भाग्यम् ।",
    "translit": "Arognyam paramam bhagyam",
    "meaning": "Good health is the greatest blessing.",
    "tags": ["health", "blessing", "wealth", "wisdom"]
  },
  {
    "sanskrit": "पुत्रस्नेहात् भयं राज्ञः कुले जातस्य देहिनः ।",
    "translit": "Putrasneehat bhayam rajnah kule jatasya dehinah",
    "meaning": "A king born of noble lineage fears the attachment of parental love — showing that duty must rise above personal bonds.",
    "tags": ["duty", "leadership", "detachment", "governance"]
  },
  {
    "sanskrit": "अनर्थम् अर्थम् मन्यते ।",
    "translit": "Anartham artham manyate",
    "meaning": "The deluded mistake harm for benefit — a warning against ignorance.",
    "tags": ["delusion", "ignorance", "wisdom", "discernment"]
  },
  {
    "sanskrit": "यो वै भूमा तत् सुखम् ।",
    "translit": "Yo vai bhuma tat sukham",
    "meaning": "That which is infinite — that is happiness; there is no happiness in the finite.",
    "tags": ["happiness", "infinity", "Brahman", "Chandogya Upanishad"]
  },
  {
    "sanskrit": "प्रत्यक्षं किमपि प्रमाणम् ।",
    "translit": "Pratyaksham kimapi pramanam",
    "meaning": "Direct perception is indeed a valid means of knowledge.",
    "tags": ["epistemology", "perception", "knowledge", "philosophy"]
  },
  {
    "sanskrit": "दानेन तुल्यो मित्रं नास्ति ।",
    "translit": "Danena tulyo mitram nasti",
    "meaning": "There is no friend equal to generosity.",
    "tags": ["generosity", "friendship", "charity", "wisdom"]
  },
  {
    "sanskrit": "एकता बलम् ।",
    "translit": "Ekata balam",
    "meaning": "Unity is strength.",
    "tags": ["unity", "strength", "community", "cooperation"]
  },
  {
    "sanskrit": "धर्मो नित्यः सुखदुःखे त्वनित्ये ।",
    "translit": "Dharmo nityah sukhaduhkhe tvanityye",
    "meaning": "Righteousness is eternal; pleasure and pain are transient.",
    "tags": ["dharma", "impermanence", "truth", "Mahabharata"]
  },
  {
    "sanskrit": "नास्ति काम-समो रोगः ।",
    "translit": "Nasti kaama-samo rogah",
    "meaning": "There is no disease equal to desire — longing is the root of all suffering.",
    "tags": ["desire", "suffering", "wisdom", "Buddhism"]
  },
  {
    "sanskrit": "वाक्पटुत्वं सर्वत्र शोभते ।",
    "translit": "Vakpatutvam sarvatra shobhate",
    "meaning": "Eloquence in speech enhances one's glory everywhere.",
    "tags": ["speech", "eloquence", "communication", "excellence"]
  },
  {
    "sanskrit": "योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ।",
    "translit": "Yogayukto munirbrahma nachirenaddhigachchhati",
    "meaning": "A sage united in yoga swiftly attains Brahman.",
    "tags": ["yoga", "Brahman", "liberation", "Bhagavad Gita"]
  },
  {
    "sanskrit": "तपः स्वाध्यायेश्वरप्रणिधानानि क्रियायोगः ।",
    "translit": "Tapah svadhyayeshvara pranidhanani kriyayogah",
    "meaning": "Austerity, self-study, and surrender to God — these three constitute the yoga of action.",
    "tags": ["yoga", "austerity", "devotion", "Patanjali"]
  },
  {
    "sanskrit": "अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते ।",
    "translit": "Avyakta hi gatirduhkham dehavadbhiravapyate",
    "meaning": "The path of the unmanifest is very difficult for embodied beings to attain.",
    "tags": ["spiritual path", "embodiment", "difficulty", "Bhagavad Gita"]
  },
  {
    "sanskrit": "ज्योतिषां रविरंशुमान् ।",
    "translit": "Jyotisham ravir ansuman",
    "meaning": "Among luminaries I am the radiant sun — the Lord's declaration of His supreme glory.",
    "tags": ["sun", "God", "glory", "Bhagavad Gita"]
  },
  {
    "sanskrit": "दैवायत्तं कुले जन्म मदायत्तं तु पौरुषम् ।",
    "translit": "Daivayattam kule janma madayattam tu paurusham",
    "meaning": "Birth in a noble family depends on destiny; but heroic effort depends on me alone.",
    "tags": ["effort", "destiny", "birth", "self-reliance"]
  },
  {
    "sanskrit": "बलवान् इन्द्रियग्रामो विद्वांसमपि कर्षति ।",
    "translit": "Balaavaan indriyagramo vidvamsaapikershati",
    "meaning": "The senses are so powerful they drag away even a learned person.",
    "tags": ["senses", "temptation", "self-control", "Bhagavad Gita"]
  },
  {
    "sanskrit": "मनसः इन्द्रियाणि जित्वा ।",
    "translit": "Manasah indriyani jitva",
    "meaning": "Having conquered the senses with the mind — the foundation of all spiritual practice.",
    "tags": ["mind", "senses", "self-control", "yoga"]
  },
  {
    "sanskrit": "अनाहतस्य शब्दस्य ध्वनिं मुनिरुपाश्रयेत् ।",
    "translit": "Anahatasyasya shabdasyatsa dhvanim munirupa shrayate",
    "meaning": "The sage takes refuge in the unstruck inner sound — the Anahata nada of deep meditation.",
    "tags": ["meditation", "sound", "yoga", "mysticism"]
  },
  {
    "sanskrit": "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत ।",
    "translit": "Avyaktadini bhutani vyaktamadhyani bharata",
    "meaning": "All beings are unmanifest before birth and unmanifest after death — only in between do they appear manifest.",
    "tags": ["existence", "life", "death", "Bhagavad Gita"]
  },
  {
    "sanskrit": "शोकहर्षौ न विद्यते ज्ञानिनो ब्रह्मवेदिनः ।",
    "translit": "Shokaharshau na vidyate jnanino brahmavedhinah",
    "meaning": "The knower of Brahman, steeped in wisdom, has neither grief nor joy.",
    "tags": ["equanimity", "wisdom", "Brahman", "self-realization"]
  },
  {
    "sanskrit": "प्रियं तत्र चरेद् विद्वान् यत्र प्रीतिर्जनस्य ।",
    "translit": "Priyam tatra chared vidvan yatra pritirjanasya",
    "meaning": "The wise person moves where there is affection among the people.",
    "tags": ["wisdom", "love", "community", "conduct"]
  },
  {
    "sanskrit": "सर्वान् काशिपतिर्जेतुं न शक्नोति धनुष्मताम् ।",
    "translit": "Sarvan kashipatiirjettum na shaknoti dhanushmatam",
    "meaning": "Even the king of Kashi cannot defeat all warriors — no one is invincible against all.",
    "tags": ["humility", "strategy", "warfare", "wisdom"]
  },
  {
    "sanskrit": "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता ।",
    "translit": "Yatha dipo nivatastho nengate sopama smrita",
    "meaning": "Like a lamp in a windless place that does not flicker — that is said to be the image of the yogi's steadied mind.",
    "tags": ["mind", "yoga", "steadiness", "Bhagavad Gita"]
  },
  {
    "sanskrit": "ध्यानं निर्विषयं मनः ।",
    "translit": "Dhyanam nirvisayam manah",
    "meaning": "Meditation is the mind freed from all sense-objects.",
    "tags": ["meditation", "mind", "yoga", "liberation"]
  },
  {
    "sanskrit": "मघाशा मोघकर्माणो मोघज्ञाना विचेतसः ।",
    "translit": "Moghasha moghakarmano moghajnana vichetasah",
    "meaning": "Vain are the hopes, vain the actions, and vain the knowledge of those who are foolish.",
    "tags": ["folly", "vain effort", "wisdom", "Bhagavad Gita"]
  },
  {
    "sanskrit": "ओजस्विनौ निर्णीतौ स्म शस्त्रयोगयोः ।",
    "translit": "Ojasvinau nirnito sma shastrayogayoh",
    "meaning": "Both were renowned for their vigour in the use of weapons and the practice of yoga.",
    "tags": ["heroism", "vigour", "yoga", "warfare"]
  },
  {
    "sanskrit": "मित्राण्यपि विपद्यन्ते भोगोऽयं क्षणभङ्गुरः ।",
    "translit": "Mitrani api vipadyante bhogo'yam kshanbhangura",
    "meaning": "Even friends perish; this enjoyment is as fleeting as a moment.",
    "tags": ["impermanence", "friendship", "enjoyment", "wisdom"]
  },
  {
    "sanskrit": "संशयात्मा विनश्यति ।",
    "translit": "Samshayatma vinashyati",
    "meaning": "The doubting soul perishes — decisive faith is essential for progress.",
    "tags": ["doubt", "faith", "determination", "Bhagavad Gita"]
  },
  {
    "sanskrit": "तमेव शरणं गच्छ सर्वभावेन भारत ।",
    "translit": "Tameva sharanam gachchha sarvabhavena bharata",
    "meaning": "Seek refuge in Him alone with your whole being, O Arjuna.",
    "tags": ["surrender", "devotion", "Bhagavad Gita", "God"]
  },
  {
    "sanskrit": "अनाश्रितः कर्मफलं कार्यं कर्म करोति यः ।",
    "translit": "Anaashritah karmaphalam karyam karma karoti yah",
    "meaning": "One who acts without relying on the fruits of action is a true renunciant and yogi.",
    "tags": ["detachment", "action", "renunciation", "Bhagavad Gita"]
  },
  {
    "sanskrit": "यद्वगच्छसि तदाप्नोषि यदिच्छसि तदर्चसि ।",
    "translit": "Yadgachchhasi tadapnoshi yadichhhasi tadarachasi",
    "meaning": "What you strive toward, you attain; what you desire, you pursue.",
    "tags": ["effort", "desire", "aspiration", "wisdom"]
  },
  {
    "sanskrit": "उत्तमं सर्वसत्त्वानां क्षमाशीलं हि जीवनम् ।",
    "translit": "Uttamam sarvasattvanam kshamashilam hi jivanam",
    "meaning": "The life of the patient and forgiving is the highest among all living beings.",
    "tags": ["forgiveness", "patience", "virtue", "life"]
  },
  {
    "sanskrit": "सत्यमुक्तं हि यद्भद्रं तत्र कापुरुषा न हि ।",
    "translit": "Satyamuktam hi yadbhadram tatra kapurusha na hi",
    "meaning": "Where truth is spoken and goodness prevails, cowards find no place.",
    "tags": ["truth", "courage", "goodness", "virtue"]
  },
  {
    "sanskrit": "व्यायामः कुरुते दोषान् नाशयत्यपि च क्षणात् ।",
    "translit": "Vyayamah kurute doshan nashayatyapi chi kshanat",
    "meaning": "Physical exercise destroys bodily ailments in a moment — a Vedic endorsement of fitness.",
    "tags": ["exercise", "health", "body", "wellness"]
  },
  {
    "sanskrit": "न स्त्री स्वातन्त्र्यमर्हति ।",
    "translit": "Na stri swatantryamarhati",
    "meaning": "This verse from Manu, which restricts women's independence, represents an ancient view; modern interpretations strongly reject it in favour of full equality.",
    "tags": ["historical", "gender", "social commentary", "Manu Smriti"]
  },
  {
    "sanskrit": "बलाद्धि सुभगः सर्वो दुर्बलः सर्वतोऽपि च ।",
    "translit": "Baladhi subhagah sarvo durbalah sarvato'pi cha",
    "meaning": "The strong are fortunate in all ways; the weak are unfortunate in all.",
    "tags": ["strength", "fortune", "weakness", "worldly wisdom"]
  },
  {
    "sanskrit": "पन्थानं तु गुरु प्राप्य यथावत् संप्रतिष्ठते ।",
    "translit": "Panthanam tu guru prapya yathavat sampratishthate",
    "meaning": "Having found a true Guru, one becomes properly established on the path.",
    "tags": ["guru", "path", "guidance", "spiritual journey"]
  },
  {
    "sanskrit": "अकुर्वन्नपि पापानि न लिप्यते नरोऽशुभैः ।",
    "translit": "Akurvannapi papani na lipyate naro'shubhaih",
    "meaning": "One who refrains from evil deeds is not tainted by inauspiciousness.",
    "tags": ["purity", "ethics", "virtue", "non-action from sin"]
  },
  {
    "sanskrit": "सखे भव सर्वभूतेषु ।",
    "translit": "Sakhe bhava sarvbhuateshu",
    "meaning": "Be a friend to all beings.",
    "tags": ["compassion", "friendship", "universalism", "ethics"]
  },
  {
    "sanskrit": "सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात्सत्यमप्रियम् । प्रियं च नानृतं ब्रूयादेष धर्मः सनातनः ॥",
    "translit": "Satyam bruyat priyam bruyat na bruyatsatyamapriyam, priyam cha nanritam bruyadesha dharma sanatanah",
    "meaning": "Speak the truth; speak what is pleasant; do not speak unpleasant truth; do not speak pleasant untruth — this is the eternal law.",
    "tags": ["truth", "speech", "ethics", "dharma"]
  }
]
let currentShloka = null;
let currentMatches = []; 
let favorites = JSON.parse(localStorage.getItem('vaani_favorites')) || [];

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('vaani_theme') || 'manuscript';
  document.body.className = savedTheme;
  
  document.querySelectorAll('.theme-icon').forEach(b => b.classList.remove('active'));
  const themeMap = { temple: 0, manuscript: 1, modern: 2, darkmode: 3 };
  if (document.querySelectorAll('.theme-icon')[themeMap[savedTheme]]) {
    document.querySelectorAll('.theme-icon')[themeMap[savedTheme]].classList.add('active');
  }

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.style.display = 'none';

  const searchTrigger = document.getElementById('search-trigger');
  if (searchTrigger) {
    searchTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      const panel = document.getElementById('search-panel');
      if (panel) {
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
          document.getElementById('shloka-search').focus();
        }
      }
    });
  }

  const searchInput = document.getElementById('shloka-search');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (currentMatches && currentMatches.length > 0) {
          renderMultipleShlokas(currentMatches, `Search Results for "${searchInput.value}"`);
          document.getElementById('search-results').style.display = 'none';
        }
      }
    });
  }

  document.querySelectorAll('nav a[href^="#"], .main-footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId === "#" || targetId === "#top") return;
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  loadDailyShloka();
});

function loadDailyShloka() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const dailyIdx = dayOfYear % shlokas.length;

  renderShloka(shlokas[dailyIdx]);
}

function renderShloka(targetShloka) {
  if (!targetShloka) return;
  currentShloka = targetShloka;

  document.getElementById('card').style.display = 'block';
  document.getElementById('shlokas-grid').style.display = 'none';
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.style.display = 'none';

  const card = document.getElementById('card');
  card.style.opacity = 0;

  setTimeout(() => {
    document.getElementById('sanskrit').textContent = currentShloka.sanskrit;
    document.getElementById('translit').textContent = currentShloka.translit;
    document.getElementById('meaning').textContent = currentShloka.meaning;

    const tagsHtml = currentShloka.tags.map(t => `<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('');
    document.getElementById('tags').innerHTML = tagsHtml;

    updateFavButton();
    card.style.opacity = 1;
  }, 200);
}

function renderMultipleShlokas(shlokaList, titleHeading) {
  document.getElementById('display-title').textContent = titleHeading;
  document.getElementById('card').style.display = 'none';
  const gridContainer = document.getElementById('shlokas-grid');
  gridContainer.style.display = 'grid';

  gridContainer.innerHTML = shlokaList.map(s => {
    const totalTags = s.tags.map(t => `<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('');
    return `
      <div class="grid-shloka-card">
        <div class="sanskrit-text" style="font-size: 24px;">${s.sanskrit}</div>
        <div class="transliteration" style="font-size: 14px;">${s.translit}</div>
        <div class="meaning" style="font-size: 14px; margin-bottom: 10px;">${s.meaning}</div>
        <div class="tags">${totalTags}</div>
      </div>
    `;
  }).join('');
}

function triggerViewAll(e) {
  if(e) e.preventDefault();
  document.getElementById('view-all-section').style.display = 'none';
  renderMultipleShlokas(shlokas, "All Collections Library");
}

function resetToDailyView(e) {
  if(e) e.preventDefault();
  document.getElementById('display-title').textContent = "Shloka of the Day";
  document.getElementById('view-all-section').style.display = 'block';
  loadDailyShloka();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSearch() {
  const query = document.getElementById('shloka-search').value.toLowerCase().trim();
  const dropdown = document.getElementById('search-results');
  
  if (query === "") {
    currentMatches = [];
    dropdown.style.display = 'none';
    return;
  }

  currentMatches = shlokas.filter(s => 
    s.sanskrit.toLowerCase().includes(query) || 
    s.translit.toLowerCase().includes(query) || 
    s.meaning.toLowerCase().includes(query) ||
    s.tags.some(t => t.toLowerCase().includes(query))
  );

  let discoveredTags = new Set();
  shlokas.forEach(s => {
    s.tags.forEach(t => {
      if (t.toLowerCase().includes(query)) discoveredTags.add(t);
    });
  });

  if (currentMatches.length === 0 && discoveredTags.size === 0) {
    dropdown.innerHTML = `<div class="search-item-empty">No matching wisdom found.</div>`;
    dropdown.style.display = 'block';
    return;
  }

  let dropdownHtml = "";

  if (discoveredTags.size > 0) {
    dropdownHtml += `<div class="search-dropdown-header">🏷️ Filter by Tag Category:</div>`;
    dropdownHtml += `<div class="search-dropdown-tags-wrapper">`;
    discoveredTags.forEach(tag => {
      dropdownHtml += `<span class="suggested-search-tag" onclick="filterByTag('${tag}')">${tag}</span>`;
    });
    dropdownHtml += `</div>`;
  }

  if (currentMatches.length > 0) {
    dropdownHtml += `<div class="search-dropdown-header">📜 Matching Shlokas (${currentMatches.length}):</div>`;
    dropdownHtml += currentMatches.slice(0, 5).map(s => {
      const searchTagsHtml = s.tags.map(t => `<span class="search-tag-badge">${t}</span>`).join('');
      return `
        <div class="search-result-item" onclick="selectSearchItem(${shlokas.indexOf(s)})">
          <strong>${s.translit}</strong>
          <p>${s.meaning.substring(0, 70)}...</p>
          <div class="search-item-tags">${searchTagsHtml}</div>
        </div>
      `;
    }).join('');
    
    if (currentMatches.length > 5) {
      dropdownHtml += `<div class="search-dropdown-footer">Press Enter to list all ${currentMatches.length} matching shlokas grid view.</div>`;
    }
  }

  dropdown.innerHTML = dropdownHtml;
  dropdown.style.display = 'block';
}

function selectSearchItem(globalIndex) {
  document.getElementById('display-title').textContent = "Discovered Wisdom Match";
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.style.display = 'inline-block';

  renderShloka(shlokas[globalIndex]);
  document.getElementById('shloka-search').value = "";
  document.getElementById('search-results').style.display = 'none';
}

function filterByTag(tagName) {
  const panel = document.getElementById('search-panel');
  if (panel) panel.style.display = 'block';
  
  document.getElementById('shloka-search').value = tagName;
  handleSearch();

  setTimeout(() => {
    if (currentMatches.length > 0) {
      renderMultipleShlokas(currentMatches, `Shlokas Tagged with "${tagName}"`);
      document.getElementById('search-results').style.display = 'none';
    }
  }, 50);
}

function showRandom() {
  let randIdx = Math.floor(Math.random() * shlokas.length);
  document.getElementById('display-title').textContent = "Explored Wisdom";
  renderShloka(shlokas[randIdx]);
}

function toggleFavorite() {
  if (!currentShloka) return;
  const exists = favorites.find(f => f.sanskrit === currentShloka.sanskrit);
  if (exists) {
    favorites = favorites.filter(f => f.sanskrit !== currentShloka.sanskrit);
  } else {
    favorites.push(currentShloka);
  }
  localStorage.setItem('vaani_favorites', JSON.stringify(favorites));
  updateFavButton();
}

function updateFavButton() {
  if (!currentShloka) return;
  const isFav = favorites.find(f => f.sanskrit === currentShloka.sanskrit);
  document.querySelector('.fav-btn').textContent = isFav ? '♥' : '♡';
}

function setTheme(theme, btn) {
  document.body.className = theme;
  document.querySelectorAll('.theme-icon').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  localStorage.setItem('vaani_theme', theme);
}