
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          home: 'Home',
          category: 'Category',
          contact: 'Contact',
          join: 'Join the community',
          viewIntro: 'View Intro',
          exploreNow: 'Explore Now',
          bannerTitle: 'One More Friend',
          bannerSubtitle: 'Thousands More Fun!',
          bannerDescription: 'Having a pet means you have more joy...',
        },
      },
      geo: {
        translation: {
          home: 'მთავარი',
          category: 'კატეგორია',
          contact: 'კონტაქტი',
          join: 'სისტემაში შესვლა',
          viewIntro: 'შესავლის ნახვა',
          exploreNow: 'აღმოაჩინე ახლავე',
          bannerTitle: 'კიდევ ერთი მეგობარი',
          bannerSubtitle: 'ათასობით მეტი მხიარულება!',
          bannerDescription: 'შენ გექნება მეტი სიხარული, თუ გყავს შინაური...',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
